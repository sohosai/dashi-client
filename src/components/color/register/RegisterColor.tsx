import { FC, useState } from 'react';
import { Loading } from '../..';
import ReactModal from 'react-modal';
import { OkResponse } from '../../../models/okResponse';
import { ErrorResponse } from '../../../models/errorResponse';
import { Pending } from '../../../models/pending';
import RegisterColorModalButton from './RegisterColorModalButton';
import RegisterColorForm from './RegisterColorForm';
import RegisterColorResult from './RegisterColorResult';
import styled from 'styled-components';
import { TfiClose } from 'react-icons/tfi';

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

const StyledLoadingWrapper = styled.div`
  margin-top: 100px;
`

const StyledRegisterColorResultWrapper = styled.div`
  margin-top: 100px;
`

const RegisterColor: FC = () => {
  // set modal state
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  // set register result
  const [registerResult, setRegisterResult] = useState<OkResponse | ErrorResponse | Pending | null>(null);
  // handle modal open/close
  const handleOpen = (): void => {
    setIsOpen(true);
  };
  const handleClose = (): void => {
    setIsOpen(false);
    setRegisterResult(null);
  };
  const handleRedirect = (): void => {
    setIsOpen(false);
    setRegisterResult(null);
    window.location.reload();
  };
  return (
    <>
      <RegisterColorModalButton setIsOpen={handleOpen} />
      <ReactModal
        isOpen={modalIsOpen}
        contentLabel="RegisterColorModal"
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
            height: '416.833px',
          },
        }}
      >
        {registerResult === null ? (
          // 初期表示
          <>
            <StyledCloseButtonWrapper>
              <StyledCloseButton onClick={handleClose}>
                <TfiClose style={{ width: '30px', height: '30px' }} />
              </StyledCloseButton>
            </StyledCloseButtonWrapper>
            <RegisterColorForm setResult={setRegisterResult} />
          </>
        ) : registerResult === 'pending' ? (
          // 処理中
          <StyledLoadingWrapper>
            <Loading />
          </StyledLoadingWrapper>
        ) : (
          // fetch結果
          <>
            <StyledCloseButtonWrapper>
              <StyledCloseButton onClick={handleRedirect}>
                <TfiClose style={{ width: '30px', height: '30px' }} />
              </StyledCloseButton>
            </StyledCloseButtonWrapper>
            <StyledRegisterColorResultWrapper>
              <RegisterColorResult result={registerResult} />
            </StyledRegisterColorResultWrapper>
          </>
        )}
      </ReactModal>
    </>
  );
};

export default RegisterColor;
