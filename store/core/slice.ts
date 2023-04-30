import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FoodEnum } from "../foods/slice";

export enum CategoryEnum {
  "کباب",
  "ساندویچ",
  "پیتزا",
  "نوشیدنی",
  "سنتی",
  "دسر",
}

type coreType = {
  sectionOnMain?: FoodEnum[];
  category: {
    [key in CategoryEnum]: {
      icon: string;
      subSection: FoodEnum[];
    };
  };
};

const initialState: coreType = {
  sectionOnMain: [FoodEnum.kabab, FoodEnum.pizza, FoodEnum.juice],
  category: {
    [CategoryEnum["سنتی"]]: {
      icon: "traditional",
      subSection: [FoodEnum.kabab],
    },
    [CategoryEnum["کباب"]]: {
      subSection: [FoodEnum.kabab],
      icon: "kabab",
    },
    [CategoryEnum["دسر"]]: {
      subSection: [FoodEnum.kabab],
      icon: "dessert",
    },
    [CategoryEnum["ساندویچ"]]: {
      subSection: [FoodEnum.pizza],
      icon: "sandwich",
    },
    [CategoryEnum["پیتزا"]]: {
      subSection: [FoodEnum.pizza],
      icon: "pizza",
    },
    [CategoryEnum["نوشیدنی"]]: {
      subSection: [FoodEnum.juice],
      icon: "drink",
    },
  },
};

const coreSlice = createSlice({
  name: "coreSlice",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<FoodEnum[]>) => ({
      ...state,
      sectionOnMain: action.payload.length === 0 ? undefined : action.payload,
    }),
  },
});

export default coreSlice.reducer;
export const { setCategory } = coreSlice.actions;
