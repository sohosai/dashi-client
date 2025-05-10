import { FC, useState } from 'react';
import { Pending } from '../../models/pending';
import { ErrorResponse } from '../../models/errorResponse';
import { OkResponse } from '../../models/okResponse';
import { Loading } from '..';
import ReactModal from 'react-modal';
import DeleteItemButton from './DeleteItemButton';
import DeleteItemResult from './DeleteItemResult';
import styled from 'styled-components';
import { TfiClose } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

type Props = {
  id: string;
  isHidden: boolean;
};

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

const DeleteItem: FC<Props> = (props) => {
  // set modal state
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  // set delete result
  const [result, setResult] = useState<OkResponse | ErrorResponse | Pending | null>(null);
  return (
    <>
      <DeleteItemButton id={props.id} isHidden={props.isHidden} setIsOpen={setIsOpen} setResult={setResult} />
      <ReactModal
        isOpen={modalIsOpen}
        contentLabel="DeleteItemModal"
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
            <StyledCloseButtonWrapper>
              <Link to={'/'}>
                <StyledCloseButton>
                  <TfiClose style={{ width: '30px', height: '30px' }} />
                </StyledCloseButton>
              </Link>
            </StyledCloseButtonWrapper>
            <DeleteItemResult result={result} />
          </>
        )}
      </ReactModal>
    </>
  );
};

export default DeleteItem;
