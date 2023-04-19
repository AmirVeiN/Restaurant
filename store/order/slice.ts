import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Key } from "react";

export type foodType = {
  id: Key;
  title: string;
  price: number;
  img: string;
  count: number;
};

const initialState: foodType[] = [
  {
    id: 1,
    title: "کباب کوبیده",
    price: 170000,
    img: "/kabab.png",
    count: 0,
  },
  {
    id: 2,
    title: "کباب گوساله",
    price: 170000,
    img: "/kabab1.png",
    count: 0,
  },
  {
    id: 3,
    title: "کباب مرغ",
    price: 170000,
    img: "/kabab2.png",
    count: 0,
  },
];

const orderSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {
    addorder: (state, action: PayloadAction<foodType>) => [
      ...state,
      { ...action.payload, id: state.length + 1 },
    ],
  },
});

export default orderSlice.reducer;
export const { addorder } = orderSlice.actions;
