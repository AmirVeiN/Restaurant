import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Key } from "react";
import { FoodEnum } from "../foods/slice";
import {MdFastfood} from "react-icons/md"

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
    sectionOnMain: [FoodEnum.kabab],
    category: {
        [CategoryEnum["سنتی"]]: {
            icon: "MdFastfood",
            subSection: [FoodEnum.kabab],
        },
        [CategoryEnum["کباب"]]: {
            subSection: [FoodEnum.kabab],
            icon: "MdFastfood" ,
        },
        [CategoryEnum["دسر"]]:{
            subSection:[FoodEnum.kabab],
            icon:"MdFastfood",
        },[CategoryEnum["ساندویچ"]]:{
            subSection:[FoodEnum.pizza],
            icon:"MdFastfood",
        },[CategoryEnum["پیتزا"]]:{
            subSection:[FoodEnum.pizza],
            icon:"MdFastfood",
        },[CategoryEnum["نوشیدنی"]]:{
            subSection:[FoodEnum.juice],
            icon:"MdFastfood",
        }
    },
};

const coreSlice = createSlice({
    name: "coreSlice",
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<FoodEnum[]>) => ({
            ...state,
            sectionOnMain:
                action.payload.length === 0 ? undefined : action.payload,
        }),
    },
});

export default coreSlice.reducer;
export const { setCategory } = coreSlice.actions;
