import { ChangeEvent, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import DebounceTime from "@utils/DebounceTime";
import getSearchResults from "@store/actions/getSearchResults";
import setSearchResults from "@store/actions/setSearchResults";
import setSearchState from "@store/actions/setSearchState";
import setNewTimezone from "@store/actions/setNewTimezone";

const useSearchLayout = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const [isFocusedInput, setIsFocusedInput] = useState<boolean>(false);

  const clearInput = () => {
    setIsFocusedInput(() => false);
    inputRef.current!.value = "";
  };

  // Events
  const onFocusInput = () => setIsFocusedInput(() => true);

  const onClickResultItem = (name: string) => () => {
    dispatch(setNewTimezone(name));
    dispatch(setSearchResults([]));
    dispatch(setSearchState("init"));
    clearInput();
  };

  const onClickCloseButton = () => {
    clearInput();
    dispatch(setSearchResults([]));
    dispatch(setSearchState("init"));
  };

  const onTextChange = DebounceTime(async (ev: ChangeEvent<HTMLInputElement>) => {
    const inputText = ev.target.value.trim();
    if (!inputText) {
      dispatch(setSearchResults([]));
      dispatch(setSearchState("init"));
      return;
    }

    dispatch(getSearchResults(inputText));
  }, 300);

  return {
    inputRef,
    isFocusedInput,
    onFocusInput,
    onClickCloseButton,
    onClickResultItem,
    onTextChange,
  };
};

export default useSearchLayout;
