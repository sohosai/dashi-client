import { FC, useState } from 'react';
import { Loading } from '..';
import ReactModal from 'react-modal';
import { OkResponse } from '../../models/okResponse';
import { ErrorResponse } from '../../models/errorResponse';
import { Pending } from '../../models/pending';
import ImageItemForm from './ImageItemForm';
import ImageItemResult from './ImageItemResult';
import ImageItemModalButton from './ImageItemModalButton';
import styled from 'styled-components';
import { TfiClose } from 'react-icons/tfi';

type Props = {
  id: string;
  isHidden: boolean;
};

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


ReactModal.setAppElement('#root');

const ImageItemModal: FC<Props> = (props) => {
  // set modal state
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  // set tranfer result
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
      <ImageItemModalButton setIsOpen={handleOpen} isHidden={props.isHidden} />
      <ReactModal
        isOpen={modalIsOpen}
        contentLabel="ImageItemModal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: '70%',
            width: '90%',
            maxHeight: '400px',
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
            <ImageItemForm id={props.id} setResult={setResult} />
          </>
        ) : result === 'pending' ? (
          // 処理中
          <Loading />
        ) : (
          // fetch結果
          <>
            <button onClick={handleRedirect}>Close</button>
            <ImageItemResult result={result} />
          </>
        )}
      </ReactModal>
    </>
  );
};

export default ImageItemModal;
