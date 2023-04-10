import * as SCIENCE_CONSTANTS from "./constants";

export function FetchScience() {
  return async (dispatch) => {
    dispatch({
      type: SCIENCE_CONSTANTS.SCIENCE_LOADING,
    });
    try {
      const res = await fetch(
        `http://localhost:3000/Questions`
      );
      const Questions = await res.json();
      dispatch({
        type: SCIENCE_CONSTANTS.FETCH_SCIENCE_SUCCESS,
        payload: Questions,
      });
    } catch (error) {
      dispatch({ type: SCIENCE_CONSTANTS.SCIENCE_ERROR, payload: error });
    }
  };
}