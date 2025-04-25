import { FC } from 'react';
import Nothing from './Nothing';

type Props = {
  visible_ids: string[];
};

const NothingList: FC<Props> = (props) => {
  return (
    <>
      {props.visible_ids.map((visible_id: string, index: number) => (
        <Nothing key={index} visible_id={visible_id} />
      ))}
    </>
  );
};

export default NothingList;
