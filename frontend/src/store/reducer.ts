import { produce } from 'immer';
import { ACTIONS } from "store/actions";
import { ReduxStoreType } from "types/ReduxStoreType";

import initialState from './initialState';

const reducer = (state = initialState, action) : ReduxStoreType => produce(state, self => {
  switch(action.type){
    case ACTIONS.SET_SEARCH_RESULTS:
      self.searchResults.list = action.payload;
      break;

    case ACTIONS.SET_SEARCH_STATE:
      self.searchResults.state = action.payload;
      break;

    case ACTIONS.SET_TIMEZONE_RESULTS_STATE:
      self.timezonesSaved.state = action.payload;
      break;

    case ACTIONS.SET_TIMEZONE_RESULTS_SAVED:
      self.timezonesSaved.list = action.payload;
      break;

    case ACTIONS.SET_NEW_TIMEZONE:
      let timezoneSaved = [...self.timezonesSaved.list, action.payload];
      self.timezonesSaved.list = timezoneSaved;
      break;

    case ACTIONS.REMOVE_TIMEZONE:
      let filterTimezone = [...self.timezonesSaved.list].filter(v => v._id !== action.payload);
      self.timezonesSaved.list = filterTimezone;
      break;
  }
});

export default reducer;