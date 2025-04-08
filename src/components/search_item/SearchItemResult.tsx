import { FC } from 'react';
import { SearchItemResponse } from '../../model/searchItemResponse';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  item: SearchItemResponse;
};

const StyledBox = styled.div`
  margin: 30px auto;
  padding: 0;
  width: 90%;
  max-width: 800px;
  background-color: #f6f6f6;
  border: #b3b3b3 1px solid;
`;

const StyledName = styled.h2`
  font-size: 2.8rem;
  font-weight: 400;
  margin: 0;
  padding: 0 0 0 15px;
`;

const StyledRent = styled.p`
  font-size: 1.6rem;
  background-color: #c7d01c;
  margin: 6px 15px 0 10px;
  padding: 1px 10px;
  width: 80px;
  height: 25.5px;
`;

const StyledLabel = styled.div`
  display: flex;
  width: 100%;
  margin: 15px 0 0 0;
  padding: 0;
`;

const StyledTable = styled.table`
  font-size: 1.6rem;
  margin: 0;
  padding: 15px 15px 0 15px;
`;

const StyledTdLabel = styled.td`
  padding: 0 15px 0 0;
`;

const StyledTdBody = styled.td`
  padding: 0 0 0 0;
`;

const StyledButton = styled.div`
  margin: 0;
  padding: 5px 20px;
  background-color: #caad63;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
  width: fit-content;
  color: #000000;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: calc(100% - 15px);
  margin: 0;
  padding: 15px 15px 15px 0;
`;

const SearchItemResult: FC<Props> = (props) => {
  return (
    <StyledBox>
      <StyledLabel>
        <StyledName>{props.item.name}</StyledName>
        {props.item.is_rent ? <StyledRent>貸し出し中</StyledRent> : <></>}
      </StyledLabel>
      <StyledTable>
        <tbody>
          <tr>
            <StyledTdLabel>ラベル ID</StyledTdLabel>
            <td>{props.item.visible_id}</td>
          </tr>
          <tr>
            <StyledTdLabel>端子名</StyledTdLabel>
            <StyledTdBody>{props.item.connector.join('、 ')}</StyledTdBody>
          </tr>
          <tr>
            <StyledTdLabel>ケーブル識別色パターン</StyledTdLabel>
            <StyledTdBody>{props.item.color}</StyledTdBody>
          </tr>
        </tbody>
      </StyledTable>
      <StyledButtonWrapper>
        <StyledButton>
          <Link to={`/item/${props.item.id}`} style={{ textDecoration: 'none' }}>
            詳細
          </Link>
        </StyledButton>
      </StyledButtonWrapper>
    </StyledBox>
  );
};

export default SearchItemResult;
