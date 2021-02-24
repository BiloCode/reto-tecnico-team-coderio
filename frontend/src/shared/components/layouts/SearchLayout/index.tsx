import classnames from 'classnames';
import "./styles.scss";

import useSearchLayout from "shared/hooks/useSearchLayout";

import InputSearch from "shared/components/common/InputSearch";
import Spinner from "shared/components/common/Spinner";
import SearchResultList from "../SearchResultList";

//Redux
import { shallowEqual, useSelector } from 'react-redux';
import { ReduxReducerType } from 'types/ReduxReducerType';
import { ReduxStoreType } from 'types/ReduxStoreType';
import SearchResultEmpty from '../SearchResultEmpty';

const SearchLayout = () => {
  const search = useSearchLayout();
  const {
    searchResults : {
      list,
      state
    }
  } = useSelector<ReduxReducerType, ReduxStoreType>(state => state, shallowEqual);

  const search_results_class = classnames(
    "search-layout__results",
    {
      hide : !search.isFocusedInput,
      center : state !== "complete" || list.length === 0
    }
  );

  const dark_screen_class = classnames(
    "search-layout__dark-screen", 
    { hide : !search.isFocusedInput }
  );

  return (
    <div className="search-layout">
      <InputSearch
        ref={search.inputRef}
        onChange={search.onTextChange}
        isFocusedInput={search.isFocusedInput}
        onClickIcon={search.buttonIconClick}
        onFocus={search.setFocusInput}
      />
      <div className={search_results_class}>
        {
          state === "init" ?
            <div>Realiza tu busqueda</div> :
            state === "loading" ?
              <Spinner /> :
              state === "complete" && list.length ?
                <SearchResultList resultList={list} resultOnClick={search.searchResultItemClick} /> :
                <SearchResultEmpty />
        }
      </div>
      <div className={dark_screen_class}></div>
    </div>
  )
};

export default SearchLayout;