import { createSlice } from "@reduxjs/toolkit";
import { Key } from "react";

export enum FoodEnum {
  kabab = "کباب",
  pizza = "پیتزا",
  juice = "نوشیدنی",
}

export type foodType = {
  id: Key;
  title: string;
  subtitle: string;
  price: number;
  img: string;
  foodEnum: FoodEnum;
  desc: string;
  rate: number;
  cal: number;
  time: number;
};

const initialState: foodType[] = [
  {
    id: 1,
    title: "کباب کوبیده",
    subtitle: "کباب 400 گرم",
    price: 170000,
    img: "/kabab.png",
    foodEnum: FoodEnum.kabab,
    desc: "این یک متن تست است",
    rate: 42,
    cal: 150,
    time: 60,
  },
  {
    id: 2,
    title: "کباب گوساله",
    subtitle: "کباب 400 گرم",
    price: 170000,
    img: "/kabab1.png",
    foodEnum: FoodEnum.kabab,
    desc: "این یک متن تست است",
    rate: 50,
    cal: 150,
    time: 60,
  },
  {
    id: 3,
    title: "کباب مرغ",
    subtitle: "کباب 400 گرم",
    price: 170000,
    img: "/kabab2.png",
    foodEnum: FoodEnum.kabab,
    desc: "این یک متن تست است",
    rate: 50,
    cal: 150,
    time: 60,
  },
  {
    id: 4,
    title: "کباب سلطانی",
    subtitle: "کباب 400 گرم",
    price: 170000,
    img: "/kabab3.png",
    foodEnum: FoodEnum.kabab,
    desc: "این یک متن تست است",
    rate: 50,
    cal: 150,
    time: 60,
  },
  {
    id: 5,
    title: "کباب جوجه",
    subtitle: "کباب 400 گرم",
    price: 170000,
    img: "/kabab4.png",
    foodEnum: FoodEnum.kabab,
    desc: "این یک متن تست است",
    rate: 50,
    cal: 150,
    time: 60,
  },
  {
    id: 6,
    title: "پیتزا پپرونی",
    subtitle: "کباب 400 گرم",
    price: 170000,
    img: "/pizza1.png",
    foodEnum: FoodEnum.pizza,
    desc: "این یک متن تست است",
    rate: 50,
    cal: 150,
    time: 60,
  },
  {
    id: 7,
    title: "پیتزا خانواده",
    subtitle: "کباب 400 گرم",
    price: 170000,
    img: "/pizza2.png",
    foodEnum: FoodEnum.pizza,
    desc: "این یک متن تست است",
    rate: 50,
    cal: 150,
    time: 60,
  },
  {
    id: 8,
    title: "پیتزا قارج و مرغ",
    subtitle: "کباب 400 گرم",
    price: 170000,
    img: "/pizza4.png",
    foodEnum: FoodEnum.pizza,
    desc: "این یک متن تست است",
    rate: 50,
    cal: 150,
    time: 60,
  },
  {
    id: 9,
    title: "پیتزا گوساله",
    subtitle: "کباب 400 گرم",
    price: 170000,
    img: "/pizza5.png",
    foodEnum: FoodEnum.pizza,
    desc: "این یک متن تست است",
    rate: 50,
    cal: 150,
    time: 60,
  },
  {
    id: 10,
    title: "پیتزا مخلوط",
    subtitle: "کباب 400 گرم",
    price: 170000,
    img: "/pizza6.png",
    foodEnum: FoodEnum.pizza,
    desc: "این یک متن تست است",
    rate: 50,
    cal: 150,
    time: 60,
  },
  {
    id: 11,
    title: "آب معدنی",
    subtitle: "اب معدنی واتا",
    price: 170000,
    img: "/vata.png",
    foodEnum: FoodEnum.juice,
    desc: "این یک متن تست است",
    rate: 50,
    cal: 150,
    time: 60,
  },
  {
    id: 12,
    title: "نوشابه پپسی",
    subtitle: "نوشابه کوچک پپسی",
    price: 170000,
    img: "/pepsi1.png",
    foodEnum: FoodEnum.juice,
    desc: "این یک متن تست است",
    rate: 50,
    cal: 150,
    time: 60,
  },
  {
    id: 13,
    title: "نوشابه فانتا",
    subtitle: "نوشابه فانتا کوچک",
    price: 170000,
    img: "/fanta.png",
    foodEnum: FoodEnum.juice,
    desc: "این یک متن تست است",
    rate: 50,
    cal: 150,
    time: 60,
  },
];

const foodSlice = createSlice({
  name: "foodSlice",
  initialState,
  reducers: {},
});

export default foodSlice.reducer;
