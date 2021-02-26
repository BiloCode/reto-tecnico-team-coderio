import { FC, memo, useState } from "react";
import "./styles.scss";

type TProps = {
  defaultText : string;
  onEditFinish(text : string);
}

const EditableText : FC<TProps> = ({ defaultText , onEditFinish }) => {
  const [ disabled , setDisabled ] = useState<boolean>(true);
  const [ text , setText ] = useState<string>(defaultText || "Sin descripcion disponible");

  const editFinish = () => {
    onEditFinish(text);
    setDisabled(() => true);
  }

  const editEnabled = () => setDisabled(() => false);
  const onBlur = () => editFinish();
  const onChange = (ev) => setText(ev.target.value);
  const onSubmit = (ev) => {
    ev.preventDefault();
    editFinish();
  }

  return (
    <form onSubmit={onSubmit} className="editable-text" >
      {
        disabled ? 
          <p className="editable-text__text" onClick={editEnabled}>{text}</p> :
          <input
            type="text"
            onBlur={onBlur}
            onChange={onChange}
            value={text}
            autoFocus
            className="editable-text__text--input" 
          />
      }
    </form>
  )
};

export default memo(EditableText);