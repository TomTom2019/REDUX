
import {configureStore} from '@reduxjs/toolkit'
import moviesReducer from './movies'

/*reducer do the end logic
action fech information and go to reducer*/

export const store = configureStore({
    reducer:{
        movies:moviesReducer
    }
})