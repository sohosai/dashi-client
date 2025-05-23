import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  //max-width: 369px;
  font-size: 1.6rem;
  height: 48px;
  margin: 0;
  padding: 0 14px;
  box-sizing: border-box;
  border: 1.5px solid #6f6f6f;
  border-radius: 0;
  &:focus {
    outline: 2.5px solid #c7d01c;
  }
`;

export const StyledForm = styled.form`
  max-width: 369px;
  margin: auto;
  //margin: 0 だと中央揃えにならなかったのでautoに変更しました。
  padding: 0;
  display: flex;
  flex-direction: column;
  //align-items: center;
  // GlobalのStyledFormはGenerateのみで使用中
`;

export const StyledResultInModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledErrorMessageWrapper = styled.div`
  height: 0px;
  font-size: 1.4rem;
  color: #d01c1c;
  font-weight: bold;
`;
