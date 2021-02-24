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
  }
});

export default reducer;