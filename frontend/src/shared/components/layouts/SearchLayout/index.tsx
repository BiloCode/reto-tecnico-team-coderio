import classnames from 'classnames';
import "./styles.scss";

import useSearchLayout from "shared/hooks/useSearchLayout";

//Icons
import { GoLocation } from 'react-icons/go';
import { BiBookContent } from 'react-icons/bi';

//Components
import InputSearch from "shared/components/common/InputSearch";
import Spinner from "shared/components/common/Spinner";
import SearchResultList from "../SearchResultList";
import SearchResultLayout from '../SearchResultLayout';

//Redux
import { useCallback } from 'react';
import { useReducer } from 'store/reducer';

const SearchLayout = () => {
  const search = useSearchLayout();
  const { searchResults : { list, state } , timezonesSaved } = useReducer();

  const dark_screen_class = classnames("search-layout__dark-screen", 
    { hide : !search.isFocusedInput }
  );
  const search_results_class = classnames("search-layout__results",
    {
      hide : !search.isFocusedInput,
      center : state !== "complete" || list.length === 0
    }
  );

  const setSearchResult = useCallback(() => {
    if(state === "init"){
      return <SearchResultLayout
        icon={<GoLocation />}
        title="Busca una localizacion"
        subtitle="Comienza a buscar un area en especifica."
      />
    }

    if(state === "loading") return <Spinner />;
    if(state === "complete" && list.length){
      return <SearchResultList
        resultList={list} 
        resultOnClick={search.onClickResultItem}
      />
    }

    return (
      <SearchResultLayout
        icon={<BiBookContent />}
        title="Busqueda sin resultados"
        subtitle="No se encontro ninguna coincidencia"
      />
    );
  },[state, list]);

  return (
    <div className="search-layout">
      <InputSearch
        ref={search.inputRef}
        disabled={timezonesSaved.state === "loading"}
        placeholder="Busca aqui..."
        onChange={search.onTextChange}
        isFocusedInput={search.isFocusedInput}
        onClickIcon={search.onClickCloseButton}
        onFocus={search.onFocusInput}
      />
      <div className={search_results_class}>
        {setSearchResult()}
      </div>
      <div className={dark_screen_class}></div>
    </div>
  )
};

export default SearchLayout;