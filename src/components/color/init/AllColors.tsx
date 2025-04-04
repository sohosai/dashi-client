import { FC } from 'react';
import { ErrorResponse } from '../../../model/errorResponse';
import { Pending } from '../../../model/pending';
import { Loading } from '../..';
import { AllColorsResponse } from '../../../model/allColorsResponse';
import AllColorsResult from './AllColorsResult';

type Props = {
  result: AllColorsResponse | ErrorResponse | Pending;
};

const AllColors: FC<Props> = (props) => {
  return (
    <>
      {props.result === 'pending' ? (
        // 初期状態
        <Loading />
      ) : (
        <AllColorsResult result={props.result} />
      )}
    </>
  );
};

export default AllColors;
