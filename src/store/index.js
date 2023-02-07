
import {configureStore} from '@reduxjs/toolkit'
import moviesReducer from './movies'
import usersReducer from './users'

/*reducer do the end logic
action fech information and go to reducer*/

export const store = configureStore({
    reducer:{
        movies:moviesReducer,
        users: usersReducer
    }
})