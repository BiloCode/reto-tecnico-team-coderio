import { FC, memo } from "react";
import "./styles.scss";

import SearchResultItem from "@shared/components/common/SearchResultItem";
import CheckTimezoneSaved from "@utils/CheckTimezoneSaved";
import { useReducer } from "@store/reducer";

type TProps = {
  resultList: string[];
  resultOnClick(name: string);
};

const SearchResults: FC<TProps> = ({ resultList, resultOnClick }) => {
  const {
    timezonesSaved: { list },
  } = useReducer();

  return (
    <ul className="search-result-list">
      {resultList.map((v, i) => (
        <SearchResultItem
          key={i}
          locationTitle={v}
          isSaved={CheckTimezoneSaved(v, list)}
          onClick={resultOnClick(v)}
        />
      ))}
    </ul>
  );
};

export default memo(SearchResults);
