import { ChangeEvent, forwardRef } from 'react';
import classnames from 'classnames';
import "./styles.scss";

import { BiSearch } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';

type TProps = {
  placeholder? : string;
  isFocusedInput? : boolean;
  disabled?: boolean;
  onClickIcon?() : void;
  onChange?(ev : ChangeEvent<HTMLInputElement>) : void;
  onFocus?() : void;
}

const InputSearch = forwardRef<HTMLInputElement, TProps>(
  ({ onFocus , isFocusedInput, onClickIcon , onChange , placeholder , disabled }, ref) => {
    const input_search_button = classnames(
      "input-search__button",
      { active : isFocusedInput }
    );

    return <div className="input-search">
      <input
        required
        ref={ref}
        type="text"
        disabled={disabled}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        className="input-search__input"
      />
      <button onClick={onClickIcon} className={input_search_button}>
        { isFocusedInput ? <FaTimes /> : <BiSearch /> }
      </button>
    </div>
  }
);

InputSearch.defaultProps = {
  disabled : true
}

export default InputSearch;