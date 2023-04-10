import * as MATH_CONSTANTS from "./constants";

export function FetchMath() {
  return async (dispatch) => {
    dispatch({
      type: MATH_CONSTANTS.MATH_LOADING,
    });
    try {
      const res = await fetch(
        `https://mathh.free.beeceptor.com/math`
      );
      const Questions = await res.json();
      dispatch({
        type: MATH_CONSTANTS.FETCH_MATH_SUCCESS,
        payload: Questions.Questions,
      });
    } catch (error) {
      dispatch({ type: MATH_CONSTANTS.MATH_ERROR, payload: error });
    }
  };
}