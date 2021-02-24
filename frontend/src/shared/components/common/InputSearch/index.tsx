import { forwardRef } from 'react';
import classnames from 'classnames';
import "./styles.scss";

import { BiSearch } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';

type TProps = {
  isFocusedInput? : boolean;
  onClickIcon?() : void;
  onChange?() : void;
  onFocus?() : void;
}

const InputSearch = forwardRef<HTMLInputElement, TProps>(
  ({ onFocus , isFocusedInput, onClickIcon , onChange }, ref) => {
    const input_search_button = classnames(
      "input-search__button",
      { active : isFocusedInput }
    );

    return <div className="input-search">
      <input
        required
        ref={ref}
        type="text"
        onChange={onChange}
        onFocus={onFocus}
        className="input-search__input"
      />
      <button onClick={onClickIcon} className={input_search_button}>
        { isFocusedInput ? <FaTimes /> : <BiSearch /> }
      </button>
    </div>
  }
);

export default InputSearch;