import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: number = 0;
type action_type = {
  type: string;
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    inc_dec: (state, action: PayloadAction<action_type>) => {
      switch (action.payload.type) {
        case "Increment":
          return state + 1;
        case "Decrement":
          return state - 1;
        default:
          return state;
      }
    },
  },
});

export const { inc_dec } = counterSlice.actions;
export default counterSlice.reducer;
