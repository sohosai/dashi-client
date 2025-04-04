import { FC } from 'react';
import { Loading, Title } from '../../components';
import { Pending } from '../../model/pending';
import { ErrorResponse } from '../../model/errorResponse';
import { useFetchAllRentalItems } from '../../hooks/useFetchAllRentalItems';
import { AllRentalItemsResponse } from '../../model/allRentalItemsResponse';
import AllRentalItemsResult from '../../components/all_rental_items/AllRentalItems';

const AllRentalItems: FC = () => {
  // get trash item result
  const result: AllRentalItemsResponse | ErrorResponse | Pending = useFetchAllRentalItems();
  return (
    <>
      <Title title="貸し出し中物品管理" />
      {result === 'pending' ? (
        // 処理中
        <Loading />
      ) : (
        // fetch結果
        <AllRentalItemsResult result={result} />
      )}
    </>
  );
};

export default AllRentalItems;
