import { FC, memo } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import "./styles.scss";

type TProps = {
  locationTitle : string;
  onClick?() : void;
}

const SearchResultItem : FC<TProps> = ({ onClick , locationTitle }) => (
  <li className="search-result-item" onClick={onClick}>
    <span className="search-result-item__icon">
      <FaMapMarkerAlt />
    </span>
    <span className="search-result-item__text">
      {locationTitle} 
    </span>
    <span className="search-result-item__text-indicator">
      Agregar
    </span>
  </li>
);

export default memo(SearchResultItem);