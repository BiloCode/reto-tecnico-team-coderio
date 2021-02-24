import { useRef, useState } from "react";

export default () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [ isFocusedInput , setIsFocusedInput ] = useState<boolean>(false);
  
  const setFocusInput = () => setIsFocusedInput(() => true);
  const buttonIconClick = () => setIsFocusedInput(() => false);
  const searchResultItemClick = () => {
    if(!inputRef.current)
      return;

    inputRef.current.value = "";
    setIsFocusedInput(() => false);
  }

  return {
    inputRef,
    isFocusedInput,
    setFocusInput,
    buttonIconClick,
    searchResultItemClick
  }
}