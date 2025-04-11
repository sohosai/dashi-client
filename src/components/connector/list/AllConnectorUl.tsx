import { FC } from 'react';
import { ConnectorResponse } from '../../../models/connectorResponse';
import { AllConnectorsResponse } from '../../../models/allConnectorsResponse';
import ConnectorLi from './ConnectorLi';
import { StyledLi, StyledUl } from './ulStyle';

type Props = {
  connector: AllConnectorsResponse;
};

const AllConnectorUl: FC<Props> = (props) => {
  return (
    <StyledUl>
      {props.connector.all_connectors.map((connector: ConnectorResponse, index: number) => (
        <StyledLi key={index}>
          <ConnectorLi connector={connector} />
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default AllConnectorUl;
