import { FC } from 'react';
import { OkResponse } from '../../models/okResponse';
import { FiCheckCircle } from 'react-icons/fi';
import styled from 'styled-components';

type Props = {
  result: OkResponse;
};

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledIconWrapper = styled.div`
  margin: 0 auto;
`;

const StyledMessage = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  text-align: center;
`;

const OkResult: FC<Props> = (_props) => {
  return (
    <StyledBox>
      <StyledIconWrapper>
        <FiCheckCircle size={90} color={'#c7d01c'} />
      </StyledIconWrapper>
      <StyledMessage>正常に処理が実行されました。</StyledMessage>
    </StyledBox>
  );
};

export default OkResult;
