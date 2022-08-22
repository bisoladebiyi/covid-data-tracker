import { configureStore } from "@reduxjs/toolkit";
import covidDataSlice from "./features/covidDataSlice";

export const store = configureStore({
  reducer: {
    covidData: covidDataSlice
  },
});
