import { FC, useState } from 'react';
import ReactModal from 'react-modal';
import MenuModalButton from './MenuModalButton';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TfiClose } from 'react-icons/tfi';
import { FaCashRegister } from 'react-icons/fa';
import { BsQrCode } from 'react-icons/bs';
import { BsTrash3Fill } from 'react-icons/bs';
import { VscDebugDisconnect } from 'react-icons/vsc';
import { IoMdColorPalette } from 'react-icons/io';
import { GrCycle } from 'react-icons/gr';
import { FaFileCsv } from 'react-icons/fa6';

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
  font-weight: 400;
  text-align: center;
`;

const StyledLinkButton = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: #f6f6f6;
  border: #b3b3b3 1px solid;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLinkButtonLabel = styled.p`
  font-size: 1.6rem;
  margin: 10px 0 0 0;
  padding: 0;
`;

const StyledLinkButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 144px;
`;

const StyledShelf = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledPartition = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 328px;
  height: 105.5px;
  gap: 40px;
  margin: 0 20px 40px 20px;
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

        {/***********************/}
        <StyledShelf>
          <StyledPartition>
            {/***********************/}
            <StyledLinkButtonBox>
              <StyledLinkButton>
                <Link to="/register">
                  <FaCashRegister style={{ width: '35px', height: '35px', color: '#000000' }} />
                </Link>
              </StyledLinkButton>
              <StyledLinkButtonLabel>物品情報の登録</StyledLinkButtonLabel>
            </StyledLinkButtonBox>
            {/***********************/}
            <StyledLinkButtonBox>
              <StyledLinkButton>
                <Link to="/generate">
                  <BsQrCode style={{ margin: '0 3px 0 0', width: '27px', height: '27px', color: '#000000' }} />
                  <FaFileCsv style={{ margin: '0 0 0 3px', width: '27px', height: '27px', color: '#000000' }} />
                </Link>
              </StyledLinkButton>
              <StyledLinkButtonLabel>ラベル / csv の生成</StyledLinkButtonLabel>
            </StyledLinkButtonBox>
            {/***********************/}
          </StyledPartition>
          <StyledPartition>
            {/***********************/}
            <StyledLinkButtonBox>
              <StyledLinkButton>
                <Link to="/connector">
                  <VscDebugDisconnect style={{ width: '35px', height: '35px', color: '#000000' }} />
                </Link>
              </StyledLinkButton>
              <StyledLinkButtonLabel>端子名管理</StyledLinkButtonLabel>
            </StyledLinkButtonBox>
            {/***********************/}
            <StyledLinkButtonBox>
              <StyledLinkButton>
                <Link to="/color">
                  <IoMdColorPalette style={{ width: '35px', height: '35px', color: '#000000' }} />
                </Link>
              </StyledLinkButton>
              <StyledLinkButtonLabel>ケーブル識別色管理</StyledLinkButtonLabel>
            </StyledLinkButtonBox>
            {/***********************/}
          </StyledPartition>
        </StyledShelf>
        {/***********************/}
        {/***********************/}
        <StyledShelf>
          <StyledPartition>
            {/***********************/}
            <StyledLinkButtonBox>
              <StyledLinkButton>
                <Link to="/rental/all">
                  <GrCycle style={{ width: '35px', height: '35px', color: '#000000' }} />
                </Link>
              </StyledLinkButton>
              <StyledLinkButtonLabel>貸し出し中物品管理</StyledLinkButtonLabel>
            </StyledLinkButtonBox>
            {/***********************/}
            <StyledLinkButtonBox>
              <StyledLinkButton>
                <Link to="/trash">
                  <BsTrash3Fill style={{ width: '35px', height: '35px', color: '#000000' }} />
                </Link>
              </StyledLinkButton>
              <StyledLinkButtonLabel>削除物品情報の履歴</StyledLinkButtonLabel>
            </StyledLinkButtonBox>
            {/***********************/}
          </StyledPartition>
        </StyledShelf>
      </ReactModal>
    </>
  );
};

export default MenuModal;
