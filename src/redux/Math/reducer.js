import * as CATEGORY_CONSTANTS from "./constants";

const initState = {
  Questions: [],
  loading: false,
  error: null,
};
function mathReducer(state = initState, action) {
  switch (action.type) {
    case CATEGORY_CONSTANTS.MATH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CATEGORY_CONSTANTS.MATH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CATEGORY_CONSTANTS.FETCH_MATH_SUCCESS:
      return {
        ...state,
        loading: false,
        Questions: action.payload,
      };
    default:
      return state;
  }
}


export default mathReducer;