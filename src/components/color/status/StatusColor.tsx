import { FC, useState } from 'react';
import { Loading } from '../..';
import ReactModal from 'react-modal';
import { OkResponse } from '../../../models/okResponse';
import { ErrorResponse } from '../../../models/errorResponse';
import { Pending } from '../../../models/pending';
import { Status } from '../../../models/status';
import StatusColorButton from './StatusColorButton';
import StatusColorModalButton from './StatusColorModalButton';
import StatusColorResult from './StatusColorResult';
import styled from 'styled-components';
import { TfiClose } from 'react-icons/tfi';


ReactModal.setAppElement('#root');

type Props = {
  id: number;
  hex_color_code: string;
  status: Status;
};

const StyledLabel = styled.p`
  font-size: 2.6rem;
  margin: 0 0 60px 0;
  padding: 0;
  text-align: center;
`;

const StyledCancelButton = styled.button`
  width: 120px;
  padding: 5px 20px;
  background-color: #caad63;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
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

const StatusColor: FC<Props> = (props) => {
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
      <StatusColorModalButton setIsOpen={handleOpen} />
      <ReactModal
        isOpen={modalIsOpen}
        contentLabel="StatusColorModal"
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
            maxWidth: '500px',
            height: '160px',
          },
        }}
      >
        {registerResult === null ? (
          // 初期表示
          <>
            <StyledLabel>本当に変更しますか?</StyledLabel>
            <StyledButtonWrapper>
              <StyledCancelButton onClick={handleClose}>変更しない</StyledCancelButton>
              <StatusColorButton
                id={props.id}
                hex_color_code={props.hex_color_code}
                status={props.status}
                setResult={setRegisterResult}
              />
            </StyledButtonWrapper>
          </>
        ) : registerResult === 'pending' ? (
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
            <StatusColorResult result={registerResult} />
          </>
        )}
      </ReactModal>
    </>
  );
};

export default StatusColor;
