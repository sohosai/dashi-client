import { FC } from 'react';
import { ErrorResponse } from '../../../models/errorResponse';
import { Pending } from '../../../models/pending';
import { Loading } from '../..';
import { AllColorsResponse } from '../../../models/allColorsResponse';
import AllColorsResult from './AllColorsResult';

type Props = {
  result: AllColorsResponse | ErrorResponse | Pending;
};

const AllColors: FC<Props> = (props) => {
  return props.result === 'pending' ? (
    // 初期状態
    <Loading />
  ) : (
    // fetch結果
    <AllColorsResult result={props.result} />
  );
};

export default AllColors;
