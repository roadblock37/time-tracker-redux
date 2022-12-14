import React from "react";
import { setTimeFrame } from "../features/hourSlice";
import { useDispatch, useSelector } from "react-redux";

const Button = ({ id, filter }) => {
  const dispatch = useDispatch();
  const { defaultTimeFrame } = useSelector((store) => store.hours);

  return (
    <div>
      <input
        key={id}
        name="filterGroup"
        id={id}
        value={filter}
        type="radio"
        // radio button will be check by default if the
        // defaultTimeFrame equals the filter name
        checked={defaultTimeFrame === filter}
        //   pass id into onClick to update timeframe state
        onChange={() => {
          dispatch(setTimeFrame(id));
        }}></input>
      <label for={filter}>{filter}</label>
    </div>
  );
};
export default Button;
