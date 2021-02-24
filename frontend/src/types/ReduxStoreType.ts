import { RequestState } from "./RequestState";

export type ReduxStoreType = {
  searchResults : {
    list : string[],
    state : RequestState
  },
  pageTimezones : Object[];
}