import { FC, useState } from 'react';
import { Loading } from '../..';
import ReactModal from 'react-modal';
import { OkResponse } from '../../../model/okResponse';
import { ErrorResponse } from '../../../model/errorResponse';
import { Pending } from '../../../model/pending';
import { Status } from '../../../model/status';
import HexColorModalButton from './HexColorModalButton';
import HexColorResult from './HexColorResult';
import HexColorForm from './HexColorForm';

ReactModal.setAppElement('#root');

type Props = {
  id: number;
  hex_color_code: string;
  status: Status;
};

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
      <HexColorModalButton setIsOpen={handleOpen} />
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
            overflowY: 'scroll',
          },
        }}
      >
        {registerResult === null ? (
          // 初期表示
          <>
            <button onClick={handleClose}>Close</button>

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
