import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100lvh;
`;

const StyledBox = styled.div``;

const StyledStatusCode = styled.div`
  font-size: 4rem;
  text-align: center;
`;

const StyledMessage = styled.h1`
  font-size: 2.6rem;
  text-align: center;
`;

const StyledBackLink = styled.div`
  width: fit-content;
  margin: 50px auto 0 auto;
  padding: 5px 20px;
  background-color: #caad63;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
`;

const PageNotFoundComponent: FC = () => {
  return (
    <StyledBody>
      <StyledBox>
        <StyledStatusCode>404</StyledStatusCode>
        <StyledMessage>Page Not Found</StyledMessage>
        <StyledBackLink>
          <Link to="/" style={{ color: 'inherit' }}>
            Homeに戻る
          </Link>
        </StyledBackLink>
      </StyledBox>
    </StyledBody>
  );
};

export default PageNotFoundComponent;
