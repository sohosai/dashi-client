import { FC, useState } from 'react';
import { Loading } from '..';
import ReactModal from 'react-modal';
import { OkResponse } from '../../models/okResponse';
import { ErrorResponse } from '../../models/errorResponse';
import { Pending } from '../../models/pending';
import TransferItemModalButton from './TransferItemModalButton';
import TransferSearchItemForm from './TransferSearchItemForm';
import TransferItemResult from './TransferItemResult';

type Props = {
  id: string;
  isHidden: boolean;
};

ReactModal.setAppElement('#root');

const TransferItemModal: FC<Props> = (props) => {
  // set modal state
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  // set tranfer result
  const [transferResult, setTransferResult] = useState<OkResponse | ErrorResponse | Pending | null>(null);
  // handle modal open/close
  const handleOpen = (): void => {
    setIsOpen(true);
  };
  const handleClose = (): void => {
    setIsOpen(false);
    setTransferResult(null);
  };
  const handleRedirect = (): void => {
    setIsOpen(false);
    setTransferResult(null);
    window.location.reload();
  };
  return (
    <>
      <TransferItemModalButton setIsOpen={handleOpen} isHidden={props.isHidden} />
      <ReactModal
        isOpen={modalIsOpen}
        contentLabel="TransferItemModal"
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
        {transferResult === null ? (
          // 初期表示
          <>
            <button onClick={handleClose}>Close</button>
            <TransferSearchItemForm id={props.id} setTransferResult={setTransferResult} />
          </>
        ) : transferResult === 'pending' ? (
          // 処理中
          <Loading />
        ) : (
          // fetch結果
          <>
            <button onClick={handleRedirect}>Close</button>
            <TransferItemResult result={transferResult} />
          </>
        )}
      </ReactModal>
    </>
  );
};

export default TransferItemModal;
