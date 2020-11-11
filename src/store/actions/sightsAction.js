import { GET_SIGHTS, SIGHTS_ERROR } from "../types";
import axios from "axios";

export const getSights = (slug) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3000/Sight${slug}`);
    dispatch({
      type: GET_SIGHTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SIGHTS_ERROR,
      payload: error,
    });
  }
};
