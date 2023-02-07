import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
	name:'users',
	initialState:{
		type:'Guest',
		user:['']
	},
	reducers:{
			/*reducer and action are in the same spot  setType is the on to export*/
		setType:(state,action)=>{
			state.type = action.payload || 'Guest'
		}
	}
})

export const {setType} = userSlice.actions

export default userSlice.reducer