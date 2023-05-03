import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Key } from "react";

export type foodType = {
  number: number;
  title: string;
  price: number;
  img: string;
  count: number;
};

const initialState: foodType[] = [
  {
    number: 1,
    title: "کباب کوبیده",
    price: 170000,
    img: "/kabab.png",
    count: 2,
  },
  {
    number: 2,
    title: "کباب گوساله",
    price: 170000,
    img: "/kabab1.png",
    count: 1,
  },
  {
    number: 3,
    title: "کباب مرغ",
    price: 170000,
    img: "/kabab2.png",
    count: 6,
  },
  {
    number: 4,
    title: "کباب سلطانی",
    price: 170000,
    img: "/kabab3.png",
    count: 6,
  },
  {
    number: 5,
    title: "کباب جوجه",
    price: 170000,
    img: "/kabab4.png",
    count: 3,
  },
  {
    number: 6,
    title: "پیتزا پپرونی",
    price: 170000,
    img: "/pizza1.png",
    count: 2,
  },
  {
    number: 7,
    title: "پیتزا خانواده",
    price: 170000,
    img: "/pizza2.png",
    count: 2,
  },
  {
    number: 8,
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
      { ...action.payload, number: state.length + 1 },
    ],
    removeOrder(state, action) {
      return state.filter((element) => element.number !== action.payload);
    },
  },
});

export default orderSlice.reducer;
export const { addorder, removeOrder } = orderSlice.actions;
