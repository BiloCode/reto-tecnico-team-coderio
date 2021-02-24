import { FC, memo } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';
import { BiCalendarAlt } from 'react-icons/bi';
import { IoMdTime } from 'react-icons/io';

import TextIcon from '../TextIcon';
import "./styles.scss";

type TProps = {
  onClickIconDelete?(): void;
}

const Card : FC<TProps> = ({ onClickIconDelete }) => (
  <article className="timezone-card">
    <div className="timezone-card__information">
      <span className="timezone-card__icon">
        <FaMapMarkerAlt />
      </span>
      <span className="timezone-card__title">Europa / España</span>
      <span onClick={onClickIconDelete} className="timezone-card__delete-icon">
        <BsTrash />
      </span>
    </div>
    <p className="timezone-card__description">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    </p>
    <div className="timezone-card__time-indicators">
      <TextIcon icon={<IoMdTime />} text="22:00" />
      <TextIcon icon={<BiCalendarAlt />} text="16/10/2000" />
    </div>
  </article>
);

export default memo(Card);