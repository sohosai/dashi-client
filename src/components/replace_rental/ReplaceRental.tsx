import { FC, useState } from 'react';
import { Pending } from '../../models/pending';
import { ErrorResponse } from '../../models/errorResponse';
import { OkResponse } from '../../models/okResponse';
import { Loading } from '..';
import ReactModal from 'react-modal';
import ReplaceRentalButton from './ReplaceRentalButton';
import ReplaceRentalResult from './ReplaceRentalResult';
import { RentalPageFlag } from '../../utils/flag';
import styled from 'styled-components';
import { TfiClose } from 'react-icons/tfi';

type Props = {
  id: string;
  isHidden: boolean;
  rentalPageFlag: RentalPageFlag;
};

ReactModal.setAppElement('#root');

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
  width: 100%;
`;

const ReplaceRental: FC<Props> = (props) => {
  // set modal state
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  // set replace result
  const [result, setResult] = useState<OkResponse | ErrorResponse | Pending | null>(null);
  const handleRedirect = (): void => {
    setIsOpen(false);
    setResult(null);
    window.location.reload();
  };
  return (
    <>
      <ReplaceRentalButton
        id={props.id}
        setIsOpen={setIsOpen}
        setResult={setResult}
        isHidden={props.isHidden}
        rentalPageFlag={props.rentalPageFlag}
      />
      <ReactModal
        isOpen={modalIsOpen}
        contentLabel="ReplaceRentalModal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            minWidth: '320px',
            maxWidth: '900px',
          },
        }}
      >
        {result === null ? (
          // 初期表示
          <></>
        ) : result === 'pending' ? (
          // 処理中
          <Loading />
        ) : (
          // fetch結果
          <>
            <StyledCloseButtonWrapper>
              <StyledCloseButton onClick={handleRedirect}>
                <TfiClose style={{ width: '30px', height: '30px' }} />
              </StyledCloseButton>
            </StyledCloseButtonWrapper>
            <ReplaceRentalResult result={result} />
          </>
        )}
      </ReactModal>
    </>
  );
};

export default ReplaceRental;
