import * as ENGLISH_CONSTANTS from "./constants";

export function FetchEnglish() {
  return async (dispatch) => {
    dispatch({
      type: ENGLISH_CONSTANTS.ENGLISH_LOADING,
    });
    try {
      const res = await fetch(
        `https://english.free.beeceptor.com/english`
      );
      const Questions = await res.json();
      dispatch({
        type: ENGLISH_CONSTANTS.FETCH_ENGLISH_SUCCESS,
        payload: Questions.Questions,
      });
    } catch (error) {
      dispatch({ type: ENGLISH_CONSTANTS.ENGLISH_LOADING, payload: error });
    }
  };
}