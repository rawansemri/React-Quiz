import * as COMPUTER_CONSTANTS from "./constants";

export function FetchComputer() {
  return async (dispatch) => {
    dispatch({
      type: COMPUTER_CONSTANTS.COMPUTER_LOADING,
    });
    try {
      const res = await fetch(
        `https://computer.free.beeceptor.com/my/api/path`
      );
      const Questions = await res.json();
      dispatch({
        type: COMPUTER_CONSTANTS.FETCH_COMPUTER_SUCCESS,
        payload: Questions.Questions,
      });
    } catch (error) {
      dispatch({ type: COMPUTER_CONSTANTS.COMPUTER_ERROR, payload: error });
    }
  };
}