import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

export default function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes from hooks - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy cakes</button>
    </div>
  );
}
