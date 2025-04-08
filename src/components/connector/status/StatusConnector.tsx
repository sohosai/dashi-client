import { FC, useState } from 'react';
import { Loading } from '../..';
import ReactModal from 'react-modal';
import { OkResponse } from '../../../model/okResponse';
import { ErrorResponse } from '../../../model/errorResponse';
import { Pending } from '../../../model/pending';
import StatusConnectorModalButton from './StatusConnectorModalButton';
import { Status } from '../../../model/status';
import StatusConnectorResult from './StatusConnectorResult';
import StatusConnectorButton from './StatusConnectorButton';
import styled from 'styled-components';

ReactModal.setAppElement('#root');

type Props = {
  id: number;
  status: Status;
};

const StyledLabel = styled.p`
  font-size: 2.6rem;
  margin: 0 0 60px 0;
  padding: 0;
  text-align: center;
`;

const StyledCancelButton = styled.button`
  padding: 5px 20px;
  background-color: #caad63;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
`;

const StatusConnector: FC<Props> = (props) => {
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
      <StatusConnectorModalButton setIsOpen={handleOpen} />
      <ReactModal
        isOpen={modalIsOpen}
        contentLabel="StatusConnectorModal"
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
              <StatusConnectorButton id={props.id} status={props.status} setResult={setRegisterResult} />
            </StyledButtonWrapper>
          </>
        ) : registerResult === 'pending' ? (
          // 処理中
          <Loading />
        ) : (
          // fetch結果
          //   <StatusConnectorResult result={registerResult} />
          <>
            <button onClick={handleRedirect}>Close</button>
            <StatusConnectorResult result={registerResult} />
          </>
        )}
      </ReactModal>
    </>
  );
};

export default StatusConnector;
