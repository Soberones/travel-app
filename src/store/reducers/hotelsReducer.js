import { GET_HOTELS, HOTELS_ERROR } from "../types";

const initialState = {
  hotels: [],
  loading: true,
};

export default function Hotels(state = initialState, action) {
  switch (action.type) {
    case GET_HOTELS:
      return {
        ...state,
        hotels: action.payload,
        loading: false,
      };
    case HOTELS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
