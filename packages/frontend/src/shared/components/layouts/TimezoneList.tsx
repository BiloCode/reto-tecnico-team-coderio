import { FC, memo } from "react";
import TimezoneResultType from "@types/TimezoneResultType";

import Card from "../common/Card";

type TProps = {
  list: TimezoneResultType[];
  removeCard(id: string);
};

const TimezoneList: FC<TProps> = ({ list, removeCard }) => (
  <>
    {list.map((v) => (
      <Card key={v._id} cardData={v} onClickIconDelete={removeCard(v._id)} />
    ))}
  </>
);

export default memo(TimezoneList);
