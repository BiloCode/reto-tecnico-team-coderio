import { FC, memo } from "react";
import "./styles.scss";

type TProps = {
  icon : JSX.Element;
  title : string;
  subtitle : string;
}

const SearchResultLayout : FC<TProps> = ({ icon , title, subtitle }) => (
  <div className="search-result-init">
    <span className="search-result-init__icon">
      {icon}
    </span>
    <div className="search-result-init__text">
      <span className="search-result-init__title">{title}</span>
      <span className="search-result-init__subtitle">{subtitle}</span>
    </div>
  </div>
);

export default memo(SearchResultLayout);