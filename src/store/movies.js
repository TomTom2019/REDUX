
import { createSlice } from "@reduxjs/toolkit";

// initialState create list data
export const moviesSlice = createSlice({
	name:'movies',
	initialState:{
		list:[
         {id:1,title:'Rambo'},
         {id:2,title:'Superman'}
			]
	},

/*	This is reducer and action combien*/
/*	argument (action) work with payload*/
     reducers:{
       addMovie:(state,action)=>{
       	//const newMovie ={id:3,title:'batman'}
       	state.list = [...state.list,action.payload]
       }
     }

  })


export const {addMovie} = moviesSlice.actions
export default moviesSlice.reducer