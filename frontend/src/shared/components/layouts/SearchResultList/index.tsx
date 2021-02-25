import { FC, memo } from "react";
import "./styles.scss";

import SearchResultItem from "shared/components/common/SearchResultItem";

type TProps = {
  resultList : string[];
  resultOnClick(name : string);
}

const SearchResults : FC<TProps> = ({ resultList , resultOnClick }) => (
  <ul className="search-result-list">
    {
      resultList.map((v, i) => (
        <SearchResultItem
          key={i}
          onClick={resultOnClick(v)}
          locationTitle={v}
        />
      ))
    }
  </ul>
);

export default memo(SearchResults);