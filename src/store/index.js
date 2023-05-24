import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movies'
import usersReducer from './users'

// keyword is movies from list data
export const store = configureStore({
    reducer:{
        movies: moviesReducer,
        users: usersReducer
    }
})