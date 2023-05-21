import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movies'

// keyword is movies from list data
export const store = configureStore({
    reducer:{
        movies: moviesReducer,
        
    }
})