"use client";

import Counter from "@/components/counter";
import { useDispatch } from "react-redux";
import { inc_dec } from "@/store/slices/counterSlice";

export default function Page() {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(inc_dec({ type: "Increment" }));
  };

  const decrement = () => {
    dispatch(inc_dec({ type: "Decrement" }));
  };
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <Counter />
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
