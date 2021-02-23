import { memo } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import "./styles.scss";

const SearchResultItem = () => (
  <li className="search-result-item">
    <span className="search-result-item__icon">
      <FaMapMarkerAlt />
    </span>
    <span className="search-result-item__text">
      Peru / Lima
    </span>
  </li>
);

export default memo(SearchResultItem);