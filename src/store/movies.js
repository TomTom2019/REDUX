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
     reducers:{

     }

})


export default moviesSlice.reducer