import { GET_CITY, CITY_ERROR } from "../types";

const initialState = {
  city: [],
  loading: true,
};

export default function City(state = initialState, action) {
  switch (action.type) {
    case GET_CITY:
      return {
        ...state,
        city: action.payload,
        loading: false,
      };
    case CITY_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
