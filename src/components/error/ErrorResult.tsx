import { FC } from 'react';
import { ErrorResponse } from '../../models/errorResponse';
import { FiAlertOctagon } from 'react-icons/fi';
import styled from 'styled-components';
import { useState } from 'react';

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

const StyledErrorResultAccordionInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const StyledErrorResultAccordionInputButton = styled.button`
  margin: auto;
  padding: 0 5px;
  font-size: 1.6rem;
  text-align: center;
`;

const StyledErrorBox = styled.div<{ isChecked: boolean }>`
  width: fit-content;
  margin: 7px auto 0 auto;
  padding: 5px 15px;
  background-color: #f6f6f6;
  border: 1px solid #b3b3b3;
  display: ${({ isChecked }) => (isChecked ? 'block' : 'none')};
  transition: all 0.3 ease;
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
  const [isChecked, setIsChecked] = useState(false);
  return (
    <StyledBox>
      <StyledIconWrapper>
        <FiAlertOctagon size={90} color={'#d01c1c'} />
      </StyledIconWrapper>
      <StyledMessage>処理の実行に失敗しました。</StyledMessage>
      <StyledErrorResultAccordionInput checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
      <StyledErrorResultAccordionInputButton onClick={() => setIsChecked((prev) => !prev)}>
        {isChecked ? 'エラー内容を表示しない。' : 'エラー内容を表示する。'}
      </StyledErrorResultAccordionInputButton>
      <StyledErrorBox isChecked={isChecked}>
        <StyledLabel>エラーコード</StyledLabel>
        <StyledError>{props.result.code}</StyledError>
        <StyledLabel>エラーメッセージ</StyledLabel>
        <StyledError>{props.result.message}</StyledError>
      </StyledErrorBox>
    </StyledBox>
  );
};

export default ErrorResult;
