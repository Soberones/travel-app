import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import CityInfo from "../cityInfo";
import { useSelector, useDispatch } from "react-redux";
import { getCity } from "../../store/actions/cityAction";
import CitySights from "../citySights";
import Button from "../button";
import BackArrow from "../backArrow";

export default function City() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const cityListData = useSelector((state) => state.cityList);
  const { loading, error, city } = cityListData;

  useEffect(() => {
    dispatch(getCity(slug));
  }, [dispatch]);

  let history = useHistory();
  const handleClick = (slug) => {
    const url = `/hotels/${slug}`;
    history.push(url);
  };
  return (
    <div>
      <BackArrow />
      {loading
        ? "Loading..."
        : error
        ? error.message
        : city.map((targetCity) => (
            <CityInfo
              key={targetCity.id}
              image={targetCity.image}
              desc={targetCity.description}
              title={targetCity.label}
            />
          ))}
      <Button
        size={"large"}
        title={`Find hotels in ${slug}`}
        onClick={(e) => handleClick(slug)}
      />
      <CitySights />
    </div>
  );
}
