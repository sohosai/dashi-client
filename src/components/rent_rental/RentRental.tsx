import { FC, useState } from 'react';
import ReactModal from 'react-modal';
import { OkResponse } from '../../models/okResponse';
import { ErrorResponse } from '../../models/errorResponse';
import { Pending } from '../../models/pending';
import RentRentalModalButton from './RentRentalModalButton';
import RentRentalResult from './RentRentalResult';
import RentRentalForm from './RentRentalForm';
import { Loading } from '..';
import styled from 'styled-components';
import { TfiClose } from 'react-icons/tfi';

type Props = {
  id: string;
  isHidden: boolean;
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

const RentRentalModal: FC<Props> = (props) => {
  // set modal state
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  // set rent rental result
  const [result, setResult] = useState<OkResponse | ErrorResponse | Pending | null>(null);
  // handle modal open/close
  const handleOpen = (): void => {
    setIsOpen(true);
  };
  const handleClose = (): void => {
    setIsOpen(false);
    setResult(null);
  };
  const handleRedirect = (): void => {
    setIsOpen(false);
    setResult(null);
    window.location.reload();
  };
  return (
    <>
      <RentRentalModalButton setIsOpen={handleOpen} isHidden={props.isHidden} />
      <ReactModal
        isOpen={modalIsOpen}
        contentLabel="RentRentalModal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: '530.833px',
            width: '90%',
            minWidth: '320px',
            maxWidth: '900px',
            overflowY: 'scroll',
          },
        }}
      >
        {result === null ? (
          // 初期表示
          <>
            <StyledCloseButtonWrapper>
              <StyledCloseButton onClick={handleClose}>
                <TfiClose style={{ width: '30px', height: '30px' }} />
              </StyledCloseButton>
            </StyledCloseButtonWrapper>
            <RentRentalForm id={props.id} setResult={setResult} />
          </>
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
            <RentRentalResult result={result} />
          </>
        )}
      </ReactModal>
    </>
  );
};

export default RentRentalModal;
