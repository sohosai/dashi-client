import { FC, useState } from 'react';
import { Loading } from '../..';
import ReactModal from 'react-modal';
import { OkResponse } from '../../../models/okResponse';
import { ErrorResponse } from '../../../models/errorResponse';
import { Pending } from '../../../models/pending';
import { Status } from '../../../models/status';
import HexColorModalButton from './HexColorModalButton';
import HexColorResult from './HexColorResult';
import HexColorForm from './HexColorForm';
import styled from 'styled-components';
import { TfiClose } from 'react-icons/tfi';

ReactModal.setAppElement('#root');

type Props = {
  id: number;
  hex_color_code: string;
  status: Status;
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

const HexColor: FC<Props> = (props) => {
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
      <HexColorModalButton setIsOpen={handleOpen} status={props.status} />
      <ReactModal
        isOpen={modalIsOpen}
        contentLabel="HexColorModal"
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
            height: '307.833px',
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
            <HexColorForm
              id={props.id}
              hex_color_code={props.hex_color_code}
              status={props.status}
              setResult={setRegisterResult}
            />
          </>
        ) : registerResult === 'pending' ? (
          // 処理中
          <Loading />
        ) : (
          // fetch結果
          <>
            <button onClick={handleRedirect}>Close</button>
            <HexColorResult result={registerResult} />
          </>
        )}
      </ReactModal>
    </>
  );
};

export default HexColor;
