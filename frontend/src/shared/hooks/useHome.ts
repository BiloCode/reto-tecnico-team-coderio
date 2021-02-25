import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { ReduxReducerType } from 'types/ReduxReducerType';
import { ReduxStoreType } from 'types/ReduxStoreType';
import getTimezoneSaved from 'store/actions/getTimezoneSaved';
import removeTimezone from 'store/actions/removeTimezone';

const useHome = () => {
  const dispatch = useDispatch();
  const { 
    timezonesSaved : {
      list,
      state
    }
  } = useSelector<ReduxReducerType, ReduxStoreType>(state => state, shallowEqual);

  useEffect(() => {
    dispatch(getTimezoneSaved());
  },[]);

  const removeCard = (id : string) => () => {
    const confirm = window.confirm("¿Estas seguro de querer eliminar esta card?");
    if(confirm){
      dispatch(removeTimezone(id));  
    }
  }

  return {
    list,
    state,
    removeCard
  }
}

export default useHome;