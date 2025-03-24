import { FC, useState } from 'react';
import ReactModal from 'react-modal';
import { OkResponse } from '../../model/okResponse';
import { ErrorResponse } from '../../model/errorResponse';
import { Pending } from '../../model/pending';
import Loading from '../loading/Loading';
import RentRentalModalButton from './RentRentalModalButton';
import RentRentalResult from './RentRentalResult';
import RentRentalForm from './RentRentalForm';

type Props = {
  id: string;
  isHidden: boolean;
};

ReactModal.setAppElement('#root');

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
            <button onClick={handleClose}>Close</button>
            <RentRentalForm id={props.id} setResult={setResult} />
          </>
        ) : result === 'pending' ? (
          // 処理中
          <Loading />
        ) : (
          // fetch結果
          <>
            <button onClick={handleRedirect}>Close</button>
            <RentRentalResult result={result} />
          </>
        )}
      </ReactModal>
    </>
  );
};

export default RentRentalModal;
