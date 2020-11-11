import { GET_CITY, CITY_ERROR } from "../types";
import axios from "axios";

export const getCity = (slug) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3000/popular/?label=${slug}`);
    dispatch({
      type: GET_CITY,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CITY_ERROR,
      payload: error,
    });
  }
};
