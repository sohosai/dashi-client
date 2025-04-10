import { FC } from 'react';
import { AllConnectorsResponse } from '../../../models/allConnectorsResponse';
import { ErrorResponse } from '../../../models/errorResponse';
import { Pending } from '../../../models/pending';
import { Loading } from '../..';
import AllConnectorsResult from './AllConnectorsResult';

type Props = {
  result: AllConnectorsResponse | ErrorResponse | Pending;
};

const AllConnectors: FC<Props> = (props) => {
  return (
    <>
      {props.result === 'pending' ? (
        // 初期状態
        <Loading />
      ) : (
        <AllConnectorsResult result={props.result} />
      )}
    </>
  );
};

export default AllConnectors;
