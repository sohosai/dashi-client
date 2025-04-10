import { FC } from 'react';
import { ErrorResponse } from '../../models/errorResponse';
import { FiAlertOctagon } from 'react-icons/fi';
import styled from 'styled-components';

type Props = {
  result: ErrorResponse;
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

const StyledErrorBox = styled.div`
  width: fit-content;
  margin: 30px auto 0 auto;
  padding: 5px 15px;
  background-color: #f6f6f6;
  border: 1px solid #b3b3b3;
`;

const StyledLabel = styled.p`
  font-size: 1.6rem;
  margin: 5px 0 0 0;
  padding: 0;
`;

const StyledError = styled.p`
  font-size: 1.6rem;
  margin: 0;
  padding: 0;
`;

const ErrorResult: FC<Props> = (props) => {
  return (
    <StyledBox>
      <StyledIconWrapper>
        <FiAlertOctagon size={90} color={'#d01c1c'} />
      </StyledIconWrapper>
      <StyledMessage>処理の実行に失敗しました。</StyledMessage>
      <StyledErrorBox>
        <StyledLabel>エラーコード</StyledLabel>
        <StyledError>{props.result.code}</StyledError>
        <StyledLabel>エラーメッセージ</StyledLabel>
        <StyledError>{props.result.message}</StyledError>
      </StyledErrorBox>
    </StyledBox>
  );
};

export default ErrorResult;
