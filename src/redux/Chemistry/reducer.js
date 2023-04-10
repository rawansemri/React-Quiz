import * as CHEMISTRY_CONSTANTS from "./constants";

const initState = {
  Questions: [],
  loading: false,
  error: null,
};
function chemistryReducer(state = initState, action) {
  switch (action.type) {
    case CHEMISTRY_CONSTANTS.CHEMISTRY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CHEMISTRY_CONSTANTS.CHEMISTRY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CHEMISTRY_CONSTANTS.FETCH_CHEMISTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        Questions: action.payload,
      };
    default:
      return state;
  }
}


export default chemistryReducer;