import { useEffect } from 'react';

import getTimezoneSaved from 'store/actions/getTimezoneSaved';
import removeTimezone from 'store/actions/removeTimezone';

import useRemoveThis from './useRemoveThis';

//Redux
import { useDispatch } from 'react-redux';
import { useReducer } from 'store/reducer';

const useHome = () => {
  const dispatch = useDispatch();
  const modalConfirm = useRemoveThis();

  const { timezonesSaved : { list, state } } = useReducer();

  useEffect(() => {
    dispatch(getTimezoneSaved());
  },[]);

  const removeCard = (id : string) => async () => {
    const confirm = await modalConfirm();
    if(confirm){
      dispatch(removeTimezone(id));  
    }
  }

  return {
    list : [...list].reverse(),
    state,
    removeCard
  }
}

export default useHome;