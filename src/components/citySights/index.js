import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SightCard from "../sightCard";
import { useSelector, useDispatch } from "react-redux";
import { getSights } from "../../store/actions/sightsAction";

export default function CitySights() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const sightsListData = useSelector((state) => state.sightsList);
  const { loading, error, sights } = sightsListData;

  useEffect(() => {
    dispatch(getSights(slug));
  }, [dispatch]);

  return (
    <div>
      <h3 style={{ paddingLeft: 20 }}>Popular places:</h3>
      {loading
        ? "Loading..."
        : error
        ? error.message
        : sights.map((sights) => (
            <SightCard
              key={sights.id}
              title={sights.label}
              image={sights.image}
              desc={sights.description}
            />
          ))}
    </div>
  );
}
