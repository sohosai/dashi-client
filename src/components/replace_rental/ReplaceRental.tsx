import { FC, useState } from 'react';
import { Pending } from '../../model/pending';
import { ErrorResponse } from '../../model/errorResponse';
import { OkResponse } from '../../model/okResponse';
import { Loading } from '..';
import ReactModal from 'react-modal';
import ReplaceRentalButton from './ReplaceRentalButton';
import ReplaceRentalResult from './ReplaceRentalResult';

type Props = {
  id: string;
};

ReactModal.setAppElement('#root');

const ReplaceRental: FC<Props> = (props) => {
  // set modal state
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  // set replace result
  const [result, setResult] = useState<OkResponse | ErrorResponse | Pending | null>(null);
  const handleRedirect = (): void => {
    setIsOpen(false);
    setResult(null);
    window.location.reload();
  };
  return (
    <>
      <ReplaceRentalButton id={props.id} setIsOpen={setIsOpen} setResult={setResult} />
      <ReactModal
        isOpen={modalIsOpen}
        contentLabel="ReplaceRentalModal"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            minWidth: '320px',
            maxWidth: '900px',
          },
        }}
      >
        {result === null ? (
          // 初期表示
          <></>
        ) : result === 'pending' ? (
          // 処理中
          <Loading />
        ) : (
          // fetch結果
          <>
            <button onClick={handleRedirect}>Close</button>
            <ReplaceRentalResult result={result} />
          </>
        )}
      </ReactModal>
    </>
  );
};

export default ReplaceRental;
