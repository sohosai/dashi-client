import { Dispatch, SetStateAction } from 'react';

type Props = {
  setIsRent: Dispatch<SetStateAction<boolean>>;
};

const SearchItemIsRentButton = (props: Props) => {
  return <button onClick={() => props.setIsRent((prev) => !prev)}>レンタル可能物品のみ表示 / フィルター解除</button>;
};
export default SearchItemIsRentButton;
