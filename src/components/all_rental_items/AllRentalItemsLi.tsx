import { FC } from 'react';
import { RentalItemResponse } from '../../models/allRentalItemsResponse';
import { ReplaceRental, UpdateRental } from '..';
import styled from 'styled-components';
import { timestampConverter } from '../../utils/timestamp';
import { scheduledReplaceAtConverter } from '../../utils/scheduled_replace_at';

type Props = {
  item: RentalItemResponse;
};

const StyledBox = styled.div`
  margin: 30px auto;
  padding: 15px;
  width: 90%;
  max-width: 800px;
  background-color: #f6f6f6;
  border: #b3b3b3 1px solid;
`;

const StyledName = styled.h2`
  font-size: 2.8rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

const StyledButtonWapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  padding: 15px 0 0 0;
`;

const StyledTable = styled.table`
  font-size: 1.6rem;
  margin: 0;
  padding: 15px 15px 0 0;
`;

const StyledTdLabel = styled.td`
  padding: 0 15px 0 0;
`;

const StyledTdBody = styled.td`
  padding: 0 0 0 0;
`;

const AllRentalItemsLi: FC<Props> = (props) => {
  return (
    <StyledBox>
      <StyledName>{props.item.name}</StyledName>
      <StyledTable>
        <tbody>
          <tr>
            <StyledTdLabel>ラベル ID</StyledTdLabel>
            <td>{props.item.visible_id}</td>
          </tr>
          <tr>
            <StyledTdLabel>借用者</StyledTdLabel>
            <StyledTdBody>{props.item.recipient}</StyledTdBody>
          </tr>
          <tr>
            <StyledTdLabel>貸し出しに関する備考</StyledTdLabel>
            <StyledTdBody>{props.item.rental_description}</StyledTdBody>
          </tr>
          <tr>
            <StyledTdLabel>最終貸し出し日時 (JST)</StyledTdLabel>
            <StyledTdBody>{timestampConverter(props.item.latest_rent_at)}</StyledTdBody>
          </tr>
          <tr>
            <StyledTdLabel>返却予定日 (JST)</StyledTdLabel>
            <StyledTdBody>{scheduledReplaceAtConverter(props.item.scheduled_replace_at)}</StyledTdBody>
          </tr>
        </tbody>
      </StyledTable>
      <StyledButtonWapper>
        <UpdateRental
          id={props.item.id.toString()}
          isHidden={props.item.id === 1 || !props.item.is_rent ? true : false}
          rentalPageFlag={'allRentalItems'}
        />
        <ReplaceRental
          id={props.item.id.toString()}
          isHidden={props.item.id === 1 || !props.item.is_rent ? true : false}
          rentalPageFlag={'allRentalItems'}
        />
      </StyledButtonWapper>
    </StyledBox>
  );
};

export default AllRentalItemsLi;
