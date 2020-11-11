import { GET_SIGHTS, SIGHTS_ERROR } from "../types";

const initialState = {
  sights: [],
  loading: true,
};

export default function Sights(state = initialState, action) {
  switch (action.type) {
    case GET_SIGHTS:
      return {
        ...state,
        sights: action.payload,
        loading: false,
      };
    case SIGHTS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
