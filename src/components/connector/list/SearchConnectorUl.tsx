import { FC } from 'react';
import { ConnectorResponse } from '../../../models/connectorResponse';
import ConnectorLi from './ConnectorLi';
import { SearchConnectorsResponse } from '../../../models/searchConnectorResponse';
import { StyledLi, StyledUl } from './ulStyle';

type Props = {
  connector: SearchConnectorsResponse;
};

const SearchConnectorUl: FC<Props> = (props) => {
  return (
    <StyledUl>
      {props.connector.search_connectors.map((connector: ConnectorResponse, index: number) => (
        <StyledLi key={index}>
          <ConnectorLi connector={connector} />
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default SearchConnectorUl;
