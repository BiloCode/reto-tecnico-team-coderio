import { FC, memo } from 'react';
import "./styles.scss";

import EditableText from '../EditableText';
import TextIcon from '../TextIcon';

import { FaMapMarkerAlt } from 'react-icons/fa';
import { BiCalendarAlt } from 'react-icons/bi';
import { IoMdTime } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';

import TimezoneResultType from 'types/TimezoneResultType';
import UpdateTimezoneDescription from 'utils/UpdateTimezoneDescription';
import useTimeout from 'shared/hooks/useTimeout';

type TProps = {
  cardData : TimezoneResultType;
  onClickIconDelete?(): void;
}

const Card : FC<TProps> = ({ cardData, onClickIconDelete }) => {
  const time = useTimeout(1000);
  const Intlconfig : any = { timeStyle: 'medium' , timeZone : cardData.name }
  const date = new Date(cardData.date);
  const unixDate = date.getTime() + (time * 1000);
  const current_date = Intl.DateTimeFormat("es-ES",{ timeZone : cardData.name }).format(unixDate);
  const current_time = Intl.DateTimeFormat("es-ES", Intlconfig).format(unixDate);

  const onEditText = (text : string) => {
    const updateDescription = new UpdateTimezoneDescription();
    const isUpdate = updateDescription.__invoke(cardData._id, text);
    if(!isUpdate){
      alert("Ocurrio un error al actualizar la descripción.");
    }
  }

  return <article className="timezone-card">
    <div className="timezone-card__information">
      <span className="timezone-card__icon">
        <FaMapMarkerAlt />
      </span>
      <p className="timezone-card__title">{cardData.name}</p>
    </div>
    <EditableText defaultText={cardData.description} onEditFinish={onEditText} />
    <div className="timezone-card__time-indicators">
      <TextIcon icon={<IoMdTime />} text={current_time} />
      <TextIcon icon={<BiCalendarAlt />} text={current_date} />
    </div>
    <div onClick={onClickIconDelete} className="timezone-card__delete-icon">
      <AiOutlineClose />
    </div>
  </article>
};

export default memo(Card);