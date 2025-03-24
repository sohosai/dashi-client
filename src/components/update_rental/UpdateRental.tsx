import { FC, useState } from 'react';
import ReactModal from 'react-modal';
import { OkResponse } from '../../model/okResponse';
import { ErrorResponse } from '../../model/errorResponse';
import { Pending } from '../../model/pending';
import { ErrorResult, Loading } from '..';
import UpdateRentalResult from './UpdateRentalResult';
import UpdateRentalModalButton from './UpdateRentalModalButton';
import UpdateRentalForm from './UpdateRentalForm';
import { IndividualItemResponse } from '../../model/individualItemResponse';
import { useFetchIndividualItem } from '../../hooks/useFetchIndividualItem';

type Props = {
  id: string;
  isHidden: boolean;
};

ReactModal.setAppElement('#root');

const UpdateRentalModal: FC<Props> = (props) => {
  // set modal state
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  // set update rental result
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
  // fetch current item data
  const individualItem: IndividualItemResponse | ErrorResponse | Pending = useFetchIndividualItem(props.id);
  return (
    <>
      <UpdateRentalModalButton setIsOpen={handleOpen} isHidden={props.isHidden} />
      <ReactModal
        isOpen={modalIsOpen}
        contentLabel="UpdateRentalModal"
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
            {individualItem === 'pending' ? (
              // 処理中
              <Loading />
            ) : 'code' in individualItem && 'message' in individualItem ? (
              // fetchに失敗
              <ErrorResult result={individualItem} />
            ) : (
              // fetch成功 (formを表示)
              <UpdateRentalForm individualItem={individualItem} setResult={setResult} />
            )}
          </>
        ) : result === 'pending' ? (
          // 処理中
          <Loading />
        ) : (
          // fetch結果
          <>
            <button onClick={handleRedirect}>Close</button>
            <UpdateRentalResult result={result} />
          </>
        )}
      </ReactModal>
    </>
  );
};

export default UpdateRentalModal;
