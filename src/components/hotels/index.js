import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import BackArrow from "../backArrow";
import { getHotels } from "../../store/actions/hotelsAction";
import HotelCard from "../hotelCard";

export default function Hotels() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const hotelsListData = useSelector((state) => state.hotelsList);
  const { loading, error, hotels } = hotelsListData;

  useEffect(() => {
    dispatch(getHotels(slug));
  }, [dispatch]);

  return (
    <div>
      <BackArrow />
      {loading
        ? "Loading..."
        : error
        ? error.message
        : hotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              image={hotel.image}
              title={hotel.label}
              adress={hotel.adress}
              price={hotel.price}
            />
          ))}
    </div>
  );
}
