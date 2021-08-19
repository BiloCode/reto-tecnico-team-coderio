import { FC, memo } from 'react';
import classnames from 'classnames';
import "./styles.scss";

import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineCheck , AiOutlinePlus } from 'react-icons/ai';

type TProps = {
  locationTitle : string;
  isSaved? : boolean;
  onClick?() : void;
}

const SearchResultItem : FC<TProps> = ({ onClick , locationTitle , isSaved }) => (
  <li
    className={classnames("search-result-item", { saved : isSaved })} 
    onClick={!isSaved ? onClick : undefined}
  >
    <span className="search-result-item__icon">
      <FaMapMarkerAlt />
    </span>
    <span className="search-result-item__text">
      {locationTitle} 
    </span>
    <span className="search-result-item__text-indicator">
      { isSaved ? <AiOutlineCheck /> : <AiOutlinePlus /> }
    </span>
  </li>
);

export default memo(SearchResultItem);