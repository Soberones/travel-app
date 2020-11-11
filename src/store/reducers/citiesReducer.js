import { GET_CITIES, CITIES_ERROR } from "../types";

const initialState = {
  cities: [],
  loading: true,
};

export default function Cities(state = initialState, action) {
  switch (action.type) {
    case GET_CITIES:
      return {
        ...state,
        cities: action.payload,
        loading: false,
      };
    case CITIES_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
