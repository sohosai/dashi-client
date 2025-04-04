import { FC, useState } from 'react';
import ReactModal from 'react-modal';
import MenuModalButton from './MenuModalButton';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TfiClose } from 'react-icons/tfi';

ReactModal.setAppElement('#root');

const StyledLabel = styled.p`
  margin: 10px 0 0 0;
  font-size: 1.6rem;
`;

const StyledBox = styled.div`
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 100%;
`;

const StyledTitle = styled.h1`
  font-size: 3.2rem;
  text-align: center;
`;

const MenuModal: FC = () => {
  // set modal state
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const handleClose = (): void => {
    setIsOpen(false);
  };
  return (
    <>
      <StyledBox>
        <MenuModalButton setIsOpen={setIsOpen} />
        <StyledLabel>メニュー</StyledLabel>
      </StyledBox>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={handleClose}
        contentLabel="MenuModal"
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
        <StyledCloseButtonWrapper>
          <StyledCloseButton onClick={handleClose}>
            <TfiClose style={{ width: '30px', height: '30px' }} />
          </StyledCloseButton>
        </StyledCloseButtonWrapper>
        <StyledTitle>メニュー</StyledTitle>
        <Link to="/register">Register</Link>
        <br />
        <Link to="/generate">Generate</Link>
        <br />
        <Link to="/trash">Trash History</Link>
        <br />
        <Link to="/connector">Connector</Link>
        <br />
        <Link to="/color">Color</Link>
        <br />
        <Link to="/rental/all">Rental List</Link>
      </ReactModal>
    </>
  );
};

export default MenuModal;
