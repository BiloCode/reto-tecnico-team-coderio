import { FC } from "react";
import "./styles.scss";

type TProps = {
  icon : JSX.Element;
  text : string;
}

const TextIcon : FC<TProps> = ({ icon , text }) => (
  <span className="text-icon">
    <span className="text-icon__icon">
      {icon}
    </span>
    <span className="text-icon__text">{text}</span>
  </span>
);

export default TextIcon;