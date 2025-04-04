import styled from 'styled-components';
import MenuModal from './MenuModal';

const StyledMenuBox = styled.div``;

const StyledTitle = styled.h1`
  font-size: 4rem;
  text-align: center;
`;

const StyledDescription = styled.p`
  font-size: 1.6rem;
  text-align: center;
`;

const Menu = () => {
  return (
    <StyledMenuBox>
      <StyledTitle>だし</StyledTitle>
      <StyledDescription>jsysの物品管理システム。アルファベット表記は「dashi」。</StyledDescription>
      <MenuModal />
    </StyledMenuBox>
  );
};

export default Menu;
