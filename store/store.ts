import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import foods from "./foods/slice";
import core from "./core/slice";
import order from "./order/slice";
import chef from "./chef/slice";

export const store = configureStore({
  reducer: {
    foods,
    core,
    order,
    chef,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
