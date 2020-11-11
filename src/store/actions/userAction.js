import { GET_CITIES, CITIES_ERROR } from "../types";
import axios from "axios";

export const getCities = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3000/popular`);
    dispatch({
      type: GET_CITIES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CITIES_ERROR,
      payload: error,
    });
  }
};
