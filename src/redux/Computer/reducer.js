import * as COMPUTER_CONSTANTS from "./constants";

const initState = {
  Questions: [],
  loading: false,
  error: null,
};
function computerReducer(state = initState, action) {
  switch (action.type) {
    case COMPUTER_CONSTANTS.COMPUTER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case COMPUTER_CONSTANTS.COMPUTER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case COMPUTER_CONSTANTS.FETCH_COMPUTER_SUCCESS:
      return {
        ...state,
        loading: false,
        Questions: action.payload,
      };
    default:
      return state;
  }
}


export default computerReducer;