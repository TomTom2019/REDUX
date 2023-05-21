import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movies'

// keyword is movies
export const store = configureStore({
    reducer:{
        movies: moviesReducer,
        
    }
})