import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 0;
  margin: 0;
  height: 64px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyleTitle = styled.h1`
  font-size: 2.8rem;
  padding: 0;
  margin: 0;
`;

const StyleLogo = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  margin: 0 30px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyleLogo>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <StyleTitle>だし</StyleTitle>
        </Link>
      </StyleLogo>
    </StyledHeader>
  );
};

export default Header;
