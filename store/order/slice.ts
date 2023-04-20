import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { count } from "console";
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
    count: 2,
  },
  {
    id: 2,
    title: "کباب گوساله",
    price: 170000,
    img: "/kabab1.png",
    count: 1,
  },
  {
    id: 3,
    title: "کباب مرغ",
    price: 170000,
    img: "/kabab2.png",
    count: 6,
  },
  {
    id: 4,
    title: "کباب سلطانی",
    price: 170000,
    img: "/kabab3.png",
    count: 6,
  },
  {
    id: 5,
    title: "کباب جوجه",
    price: 170000,
    img: "/kabab4.png",
    count: 3,
  },
  {
    id: 6,
    title: "پیتزا پپرونی",
    price: 170000,
    img: "/pizza1.png",
    count: 2,
  },
  {
    id: 7,
    title: "پیتزا خانواده",
    price: 170000,
    img: "/pizza2.png",
    count: 2,
  },
  {
    id: 8,
    title: "پیتزا قارج و مرغ",
    price: 170000,
    img: "/pizza4.png",
    count: 2,
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
