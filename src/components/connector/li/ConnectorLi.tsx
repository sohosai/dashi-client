import { FC } from 'react';
import { ConnectorResponse } from '../../../models/connectorResponse';
import StatusConnector from '../status/StatusConnector';
import styled from 'styled-components';

type Props = {
  connector: ConnectorResponse;
};

const StyledBox = styled.div`
  margin: 30px auto;
  padding: 15px;
  width: 90%;
  max-width: 600px;
  border: #b3b3b3 1px solid;
`;

const StyledLabel = styled.div`
  display: flex;
  width: calc(100% - 15px);
  margin: 0;
  padding: 0;
`;

const StyledName = styled.h2`
  font-size: 2.8rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

const StyledPrefix = styled.p`
  font-size: 1.6rem;
  margin: 0;
  padding: 13px 5px 0 0;
  height: 23.5px;
`;

const StyledStatus = styled.p`
  font-size: 1.6rem;
  margin: 0 0 4px 0;
  text-align: center;
`;

const StyledStatusWrapper = styled.div`
  width: 112px;
  margin: 0 0 0 auto;
`;

const ConnectorLi: FC<Props> = (props) => {
  return (
    <StyledBox
      style={
        props.connector.status === 'Active'
          ? { backgroundColor: '#f6f6f6' }
          : { backgroundColor: 'rgba(246, 246, 246, 0.3)' }
      }
    >
      <StyledLabel>
        <StyledPrefix
          style={props.connector.status === 'Active' ? { color: 'rgba(0, 0, 0, 1)' } : { color: 'rgba(0, 0, 0, 0.3)' }}
        >
          端子名:
        </StyledPrefix>
        <StyledName
          style={
            props.connector.status === 'Active'
              ? { color: 'rgba(0, 0, 0, 1)' }
              : { color: 'rgba(0, 0, 0, 0.3)', textDecoration: 'line-through' }
          }
        >
          {props.connector.name}
        </StyledName>
      </StyledLabel>
      <StyledStatusWrapper>
        <StyledStatus>{props.connector.status === 'Active' ? '利用可能' : '利用不可'}</StyledStatus>
        <StatusConnector id={props.connector.id} status={props.connector.status} />
      </StyledStatusWrapper>
    </StyledBox>
  );
};

export default ConnectorLi;
