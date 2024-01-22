import { createStore } from "redux";

const initialState = {
  phoneItemes: [],
};
function phoneReducer(state = initialState, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        phoneItemes: (state.phoneItemes = [action.payload]),
      };
    case "delete":
      return "";
    default:
      return state;
  }
}
let store = createStore(phoneReducer);

export default store;
