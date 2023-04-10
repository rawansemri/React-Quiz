import * as COMPUTER_CONSTANTS from "./constants";

export function FetchComputer() {
  return async (dispatch) => {
    dispatch({
      type: COMPUTER_CONSTANTS.COMPUTER_LOADING,
    });
    try {
      const res = await fetch(
        `http://localhost:9000/Questions`
      );
      const Questions = await res.json();
      dispatch({
        type: COMPUTER_CONSTANTS.FETCH_COMPUTER_SUCCESS,
        payload: Questions,
      });
    } catch (error) {
      dispatch({ type: COMPUTER_CONSTANTS.COMPUTER_ERROR, payload: error });
    }
  };
}