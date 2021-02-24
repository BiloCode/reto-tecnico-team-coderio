import { ChangeEvent, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import DebounceTime from "utils/DebounceTime";
import getSearchResults from "store/actions/getSearchResults";
import setSearchResults from "store/actions/setSearchResults";
import setSearchState from "store/actions/setSearchState";

const useSearchLayout = () => {
  const [ isFocusedInput , setIsFocusedInput ] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  
  const clearInput = () => {
    setIsFocusedInput(() => false);
    inputRef.current!.value = "";
  }

  // Events
  const setFocusInput = () => setIsFocusedInput(() => true);
  const searchResultItemClick = () => { clearInput(); }
  const buttonIconClick = () => {
    clearInput();
    dispatch(setSearchResults([]));
    dispatch(setSearchState("init"));
  }

  const onTextChange = DebounceTime(async (ev : ChangeEvent<HTMLInputElement>) => {
    const inputText = ev.target.value;
    if(inputText){
      dispatch(getSearchResults(inputText));
    }
  }, 500);

  return {
    inputRef,
    isFocusedInput,
    setFocusInput,
    buttonIconClick,
    searchResultItemClick,
    onTextChange,
  }
}

export default useSearchLayout;