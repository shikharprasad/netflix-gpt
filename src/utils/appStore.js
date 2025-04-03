import { configureStore } from "@reduxjs/toolkit";
import userRducer from "./userSlice"
import moviesReducer from "./moviesSlice"

const appStore = configureStore(
    {
        reducer:{
            user:userRducer,
            movies: moviesReducer,
        },
    }
);

export default appStore;