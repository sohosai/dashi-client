import styled from 'styled-components';
import MenuModal from './MenuModal';

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
    <div>
      <StyledTitle>だし</StyledTitle>
      <StyledDescription>jsysの物品管理システム。アルファベット表記は「dashi」。</StyledDescription>
      <MenuModal />
    </div>
  );
};

export default Menu;
