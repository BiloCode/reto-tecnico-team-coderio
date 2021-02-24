import { ReduxStoreType } from "types/ReduxStoreType";

const initialState : ReduxStoreType = {
  searchResults : {
    list : [],
    state : "init"
  },
  pageTimezones : []
}

export default initialState;