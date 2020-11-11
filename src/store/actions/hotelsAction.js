import { GET_HOTELS, HOTELS_ERROR } from "../types";
import axios from "axios";

export const getHotels = (slug) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3000/Hotels${slug}`);
    dispatch({
      type: GET_HOTELS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: HOTELS_ERROR,
      payload: error,
    });
  }
};
