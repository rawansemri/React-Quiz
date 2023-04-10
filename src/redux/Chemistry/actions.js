import * as CHEMISTRY_CONSTANTS from "./constants";

export function FetchChemistry() {
  return async (dispatch) => {
    dispatch({
      type: CHEMISTRY_CONSTANTS.CHEMISTRY_LOADING,
    });
    try {
      const res = await fetch(
        `http://localhost:5000/Questions`
      );
      const Questions = await res.json();
      dispatch({
        type: CHEMISTRY_CONSTANTS.FETCH_CHEMISTRY_SUCCESS,
        payload: Questions,
      });
    } catch (error) {
      dispatch({ type: CHEMISTRY_CONSTANTS.CHEMISTRY_ERROR, payload: error });
    }
  };
}