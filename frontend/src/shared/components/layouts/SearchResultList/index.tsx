import { FC, memo } from "react";
import "./styles.scss";

import SearchResultItem from "shared/components/common/SearchResultItem";

type TProps = {
  resultList : string[];
  resultOnClick() : void;
}

const SearchResults : FC<TProps> = ({ resultList , resultOnClick }) => (
  <ul className="search-result-list">
    {
      resultList.map((v, i) => (
        <SearchResultItem
          key={i}
          onClick={resultOnClick}
          locationTitle={v}
        />
      ))
    }
  </ul>
);

export default memo(SearchResults);