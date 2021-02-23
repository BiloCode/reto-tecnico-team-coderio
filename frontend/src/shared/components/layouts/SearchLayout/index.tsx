import { useState } from "react";
import classnames from 'classnames';
import "./styles.scss";

import InputSearch from "shared/components/common/InputSearch";
import Spinner from "shared/components/common/Spinner";
import SearchResultItem from "shared/components/common/SearchResultItem";

const list = [0];

const SearchLayout = () => {
  const [ isFocusedInput , setIsFocusedInput ] = useState<boolean>(false);
  
  const toggleFocusedInput = () => setIsFocusedInput(focus => !focus);

  const search_results_class = classnames(
    "search-layout__results",
    { hide : !isFocusedInput , empty : list.length === 0 }
  );

  const dark_screen_class = classnames(
    "search-layout__dark-screen", 
    { hide : !isFocusedInput }
  );

  return <div className="search-layout">
    <InputSearch onToggleFocus={toggleFocusedInput} />
    <div className={search_results_class}>
      {
        list.length === 0 ?
          <Spinner /> :
          <>
            <ul className="search-layout__result-list">
              <SearchResultItem />
              <SearchResultItem />
              <SearchResultItem />
              <SearchResultItem />
              <SearchResultItem />
              <SearchResultItem />
            </ul>
          </>
      }
    </div>
    <div className={dark_screen_class}></div>
  </div>
};

export default SearchLayout;