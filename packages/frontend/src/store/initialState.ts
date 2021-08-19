import { ReduxStoreType } from "@types/ReduxStoreType";

const initialState: ReduxStoreType = {
  searchResults: {
    list: [],
    state: "init",
  },
  timezonesSaved: {
    list: [],
    state: "loading",
  },
};

export default initialState;
