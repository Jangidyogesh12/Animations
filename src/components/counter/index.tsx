import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter);
  return <div>{count}</div>;
}
