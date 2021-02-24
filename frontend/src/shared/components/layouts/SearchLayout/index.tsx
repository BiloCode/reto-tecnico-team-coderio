import classnames from 'classnames';
import "./styles.scss";

import InputSearch from "shared/components/common/InputSearch";
import Spinner from "shared/components/common/Spinner";
import SearchResults from "../SearchResults";

import useSearchLayout from "shared/hooks/useSearchLayout";
import TimezoneResultType from 'types/TimezoneResultType';

const list : TimezoneResultType[] = [
  {
    id : "asdasd",
    title : "Singapur"
  },
  {
    id : "asda123sd",
    title : "Europa"
  },
  {
    id : "a2564sdasd",
    title : "Lima Peru"
  },
  {
    id : "asdas1d",
    title : "EEUU"
  }
];

const SearchLayout = () => {
  const {
    inputRef,
    buttonIconClick,
    setFocusInput,
    isFocusedInput,
    searchResultItemClick } = useSearchLayout();  

  const search_results_class = classnames(
    "search-layout__results",
    { hide : !isFocusedInput , empty : list.length === 0 }
  );

  const dark_screen_class = classnames(
    "search-layout__dark-screen", 
    { hide : !isFocusedInput }
  );

  return <div className="search-layout">
    <InputSearch
      ref={inputRef}
      isFocusedInput={isFocusedInput}
      onClickIcon={buttonIconClick}
      onFocus={setFocusInput} />
    <div className={search_results_class}>
      {
        list.length === 0 ?
          <Spinner /> :
          <SearchResults
            resultList={list} 
            resultOnClick={searchResultItemClick} />
      }
    </div>
    <div className={dark_screen_class}></div>
  </div>
};

export default SearchLayout;