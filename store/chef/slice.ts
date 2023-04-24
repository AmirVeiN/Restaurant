import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { List } from "postcss/lib/list";
import { Key } from "react";
import { ListFormat } from "typescript";

export type foodType = {
  table: number;
  id: Key;
  finish: boolean;
  title: Array<string>;
  count: Array<number>;
};

const initialState = [
  {
    table: 1,
    id: 1,
    finish: true,
    title: ["کباب کوبیده", "کباب گوساله", "کباب مرغ"],
    count: [2, 3, 1],
  },
  {
    table: 2,
    id: 2,
    finish: false,
    title: ["کباب کوبیده", "کباب مرغ"],
    count: [2, 3],
  },
  {
    table: 3,
    id: 3,
    finish: false,
    title: [
      "کباب کوبیده با کره محلی اردبیل",
      "کباب مرغ",
      "دوغ مشهد",
      "نوشابه فانتا",
    ],
    count: [2, 3, 1, 1],
  },
  {
    table: 4,
    id: 4,
    finish: false,
    title: [
      "کباب کوبیده با کره محلی اردبیل",
      "کباب مرغ",
      "دوغ مشهد",
      "نوشابه فانتا",
    ],
    count: [2, 3, 1, 1],
  },
  {
    table: 5,
    id: 5,
    finish: false,
    title: [
      "کباب کوبیده با کره محلی اردبیل",
      "کباب مرغ",
      "دوغ مشهد",
      "نوشابه فانتا",
    ],
    count: [2, 3, 1, 1],
  },
  {
    table: 6,
    id: 6,
    finish: false,
    title: [
      "کباب کوبیده با کره محلی اردبیل",
      "کباب مرغ",
      "دوغ مشهد",
      "نوشابه فانتا",
    ],
    count: [2, 3, 1, 1],
  },
  {
    table: 7,
    id: 7,
    finish: false,
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
  reducers: {
    finishChanger: (state, actions) => [],
  },
});

export default chefSlice.reducer;
export const { finishChanger } = chefSlice.actions;
