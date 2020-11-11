import React, { useEffect } from "react";
import CityCard from "../cityCard";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCities } from "../../store/actions/userAction";
import "./style.css";

export default function Recommends() {
  const dispatch = useDispatch();
  const citiesListData = useSelector((state) => state.citiesList);
  const { loading, error, cities } = citiesListData;

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  let history = useHistory();
  const handleClick = (cities) => {
    const url = `city/${cities}`;
    history.push(url);
  };
  return (
    <>
      <p>Popolar cities:</p>
      <div className="wrapper">
        {loading
          ? "Loading..."
          : error
          ? error.message
          : cities.map((city) => (
              <CityCard
                key={city.id}
                title={city.label}
                image={city.image}
                onClick={(e) => handleClick(city.label)}
              />
            ))}
      </div>
    </>
  );
}
