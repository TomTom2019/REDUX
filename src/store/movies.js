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
	reducers:{

	}
})



export default moviesSlice.reducer