import * as ENGLISH_CONSTANTS from "./constants";

const initState = {
  Questions: [],
  loading: false,
  error: null,
};
function englishReducer(state = initState, action) {
  switch (action.type) {
    case ENGLISH_CONSTANTS.ENGLISH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ENGLISH_CONSTANTS.ENGLISH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ENGLISH_CONSTANTS.FETCH_ENGLISH_SUCCESS:
      return {
        ...state,
        loading: false,
        Questions: action.payload,
      };
    default:
      return state;
  }
}


export default englishReducer;