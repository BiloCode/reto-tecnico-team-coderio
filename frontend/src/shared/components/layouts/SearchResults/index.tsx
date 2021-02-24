import { FC, memo } from "react";
import "./styles.scss";

import TimezoneResultType from "types/TimezoneResultType";
import SearchResultItem from "shared/components/common/SearchResultItem";

type TProps = {
  resultList : TimezoneResultType[];
  resultOnClick() : void;
}

const SearchResults : FC<TProps> = ({ resultList , resultOnClick }) => (
  <ul className="search-result-list">
    {
      resultList.map((v) => (
        <SearchResultItem
          key={v.id}
          onClick={resultOnClick}
          locationTitle={v.title}
        />
      ))
    }
  </ul>
);

export default memo(SearchResults);