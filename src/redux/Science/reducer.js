import * as SCIENCE_CONSTANTS from "./constants";

const initState = {
  Questions: [],
  loading: false,
  error: null,
};
function scienceReducer(state = initState, action) {
  switch (action.type) {
    case SCIENCE_CONSTANTS.SCIENCE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SCIENCE_CONSTANTS.SCIENCE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SCIENCE_CONSTANTS.FETCH_SCIENCE_SUCCESS:
      return {
        ...state,
        loading: false,
        Questions: action.payload,
      };
    default:
      return state;
  }
}


export default scienceReducer;