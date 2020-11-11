import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import cityReducer from "./cityReducer";
import sightsReducer from "./sightsReduser";
import hotelsReducer from "./hotelsReducer";

export default combineReducers({
  citiesList: citiesReducer,
  cityList: cityReducer,
  sightsList: sightsReducer,
  hotelsList: hotelsReducer,
  state: (state = {}) => state,
});
