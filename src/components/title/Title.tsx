import { FC } from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
};

const StyledTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 400;
  text-align: center;
`;

const Title: FC<Props> = (props) => {
  return <StyledTitle>{props.title}</StyledTitle>;
};

export default Title;
