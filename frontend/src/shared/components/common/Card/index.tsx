import { FC, memo } from 'react';
import "./styles.scss";

import useTimeout from 'shared/hooks/useTimeout';
import TextIcon from '../TextIcon';

import TimezoneResultType from 'types/TimezoneResultType';
import GetTime from 'utils/GetTime';
import GetDate from 'utils/GetDate';

import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';
import { BiCalendarAlt } from 'react-icons/bi';
import { IoMdTime } from 'react-icons/io';

type TProps = {
  cardData : TimezoneResultType;
  onClickIconDelete?(): void;
}

const Card : FC<TProps> = ({ cardData, onClickIconDelete }) => {
  const time = useTimeout(1000);

  return <article className="timezone-card">
    <div className="timezone-card__information">
      <span className="timezone-card__icon">
        <FaMapMarkerAlt />
      </span>
      <span className="timezone-card__title">{cardData.name}</span>
      <span onClick={onClickIconDelete} className="timezone-card__delete-icon">
        <BsTrash />
      </span>
    </div>
    <p className="timezone-card__description">
      {cardData.description || "Sin descripcion disponible."}
    </p>
    <div className="timezone-card__time-indicators">
      <TextIcon icon={<IoMdTime />} text={GetTime(cardData.date + time)} />
      <TextIcon icon={<BiCalendarAlt />} text={GetDate(cardData.date)} />
    </div>
  </article>
};

export default memo(Card);