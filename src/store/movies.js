/*createSlice do all the action and type that we did before*/
import {createSlice} from '@reduxjs/toolkit'

/*name must be reference here movies*/
export const moviesSlice = createSlice({
	name:'movies',
	initialState:{
		list:[
            {id:1,title:'Rambo'},
            {id:2,title:'karate kid'},

			]
	},
	/*reducer and action are in the same spot  addMovie is the on to export*/
	reducers:{
     addMovie:(state,action)=>{
       //const newMovie = {id:3,title:'Scarface'} method with paylod
       state.list = [...state.list,action.payload]
     }
	}
})


/* 1 the way to export action*/

export const {addMovie} = moviesSlice.actions
export default moviesSlice.reducer