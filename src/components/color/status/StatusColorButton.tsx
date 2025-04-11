import { Dispatch, FC } from 'react';
import { Status } from '../../../models/status';
import { ErrorResponse } from '../../../models/errorResponse';
import { OkResponse } from '../../../models/okResponse';
import { Pending } from '../../../models/pending';
import { useFetchUpdateColor } from '../../../hooks/useFetchUpdateColor';
import styled from 'styled-components';

type Props = {
  id: number;
  hex_color_code: string;
  status: Status;
  setResult: Dispatch<React.SetStateAction<ErrorResponse | OkResponse | Pending | null>>;
};

const StyledButton = styled.button`
  width: 120px;
  padding: 5px 20px;
  background-color: #caad63;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
`;

const StatusColorButton: FC<Props> = (props) => {
  const handleClick = async (): Promise<void> => {
    props.setResult('pending');
    const result: OkResponse | ErrorResponse = await useFetchUpdateColor(
      props.id,
      props.hex_color_code,
      props.status,
      'status'
    );
    props.setResult(result);
  };

  return <StyledButton onClick={handleClick}>変更する</StyledButton>;
};

export default StatusColorButton;
