import { FC, useState } from 'react';
import { useFetchDepreiationCsv } from '../../hooks/useFetchDepreiationCsv';
import { DepreiationCsvResponse } from '../../models/depreiationCsvResponse';
import { ErrorResponse } from '../../models/errorResponse';
import { useDownloadCsv } from '../../hooks/useDownloadCsv';
import { useDepreiationCsvConverter } from '../../hooks/useDepreiationCsvConverter';
import { DepreiationCsvList } from '../../models/depreiationCsv';
import { Pending } from '../../models/pending';
import { Loading } from '..';
import CsvResult from './CsvResult';
import ReactModal from 'react-modal';
import { SlCloudDownload } from 'react-icons/sl';
import styled from 'styled-components';
import { TfiClose } from 'react-icons/tfi';

const header = [
  { header: '物品名', key: 'name' },
  { header: '型番', key: 'product_number' },
  { header: '耐用年数', key: 'durability' },
  { header: '購入年度', key: 'purchase_year' },
  { header: '購入金額', key: 'purchase_price' },
];

const StyledButton = styled.button`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: #f6f6f6;
  border: #b3b3b3 1px solid;
  cursor: pointer;
`;

const StyledLabel = styled.p`
  font-size: 1.6rem;
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCloseButton = styled.button`
  height: 30px;
  width: 30px;
  padding: 0;
  margin: 0;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;
`;

const StyledCloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%
`;

const DepreiationCsvButton: FC = () => {
  // set result
  const [result, setResult] = useState<DepreiationCsvResponse | ErrorResponse | Pending | null>(null);
  // set modal state
  const [modalIsOpen, setIsOpen] = useState<boolean>(true);
  // handle modal close
  const handleClose = (): void => {
    setIsOpen(false);
  };
  // generate and donload csv
  const handlerClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsOpen(true);
    setResult('pending');
    const result: DepreiationCsvResponse | ErrorResponse = await useFetchDepreiationCsv();
    if ('code' in result && 'message' in result) {
      // Error
      setResult(result);
      return;
    } else {
      // Ok
      const body: DepreiationCsvList = useDepreiationCsvConverter(result);
      await useDownloadCsv('depreiation.csv', '減価償却', header, body);
      setResult(result);
      return;
    }
  };
  return (
    <>
      <StyledBox>
        <StyledButton onClick={(e) => handlerClick(e)}>
          <SlCloudDownload style={{ width: '35px', height: '35px', color: '#000000' }} />
        </StyledButton>
        <StyledLabel>減価償却のcsv</StyledLabel>
      </StyledBox>
      {result === null ? (
        //初期表示
        <></>
      ) : (
        <ReactModal
          isOpen={modalIsOpen}
          contentLabel="DepreiationCsvModal"
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            content: {
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              minWidth: '320px',
              maxWidth: '900px',
              overflowY: 'scroll',
            },
          }}
        >
          {result === 'pending' ? (
            // 処理中
            <Loading />
          ) : (
            // fetch結果
            <>
              <StyledCloseButtonWrapper>
                <StyledCloseButton onClick={handleClose}>
                  <TfiClose style={{ width: '30px', height: '30px' }} />
                </StyledCloseButton>
              </StyledCloseButtonWrapper>
              <CsvResult result={result} />
            </>
          )}
        </ReactModal>
      )}
    </>
  );
};

export default DepreiationCsvButton;
