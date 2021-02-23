import { FC } from 'react';
import { BiSend } from 'react-icons/bi'
import "./styles.scss";

type TProps = {
  onToggleFocus?() : void;
}

const InputSearch : FC<TProps> = ({ onToggleFocus }) => (
  <form className="input-search">
    <input
      required
      type="text"
      onFocus={onToggleFocus}
      onBlur={onToggleFocus}
      autoCorrect="off"
      autoComplete="off"
      className="input-search__input"
    />
    <button className="input-search__button" type="submit">
      <BiSend />
    </button>
  </form>
);

export default InputSearch;