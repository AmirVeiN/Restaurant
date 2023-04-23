import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { List } from "postcss/lib/list";
import { Key } from "react";
import { ListFormat } from "typescript";

export type foodType = {
  table: number;
  id: Key;
  title: Array<string>;
  count: Array<number>;
};

const initialState = [
  {
    table: 1,
    id: 1,
    title: ["کباب کوبیده", "کباب گوساله", "کباب مرغ"],
    count: [2, 3, 1],
  },
  {
    table: 2,
    id: 2,
    title: ["کباب کوبیده", "کباب مرغ"],
    count: [2, 3],
  },
  {
    table: 3,
    id: 3,
    title: ["کباب کوبیده با کره محلی اردبیل", "کباب مرغ", "دوغ مشهد", "نوشابه فانتا"],
    count: [2, 3, 1, 1],
  },
  {
    table: 4,
    id: 4,
    title: ["کباب کوبیده با کره محلی اردبیل", "کباب مرغ", "دوغ مشهد", "نوشابه فانتا"],
    count: [2, 3, 1, 1],
  },  {
    table: 5,
    id: 5,
    title: ["کباب کوبیده با کره محلی اردبیل", "کباب مرغ", "دوغ مشهد", "نوشابه فانتا"],
    count: [2, 3, 1, 1],
  },  {
    table: 6,
    id: 6,
    title: ["کباب کوبیده با کره محلی اردبیل", "کباب مرغ", "دوغ مشهد", "نوشابه فانتا"],
    count: [2, 3, 1, 1],
  },
  {
    table: 7,
    id: 7,
    title: [
      "پیتزا مخلوط",
      "کباب کوبیده",
      "کباب مرغ",
      "دوغ مشهد",
      "نوشابه فانتا",
    ],
    count: [2, 5, 3, 1, 1],
  },
];

const chefSlice = createSlice({
  name: "chefSlice",
  initialState,
  reducers: {},
});

export default chefSlice.reducer;
