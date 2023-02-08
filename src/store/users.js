import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

/*createAsyncThunk is woking outside
users is the key name here. fechUsers is the name reducer
*/

export const fechUsers = createAsyncThunk(
 'users/fechUsers',
  async(thunkAPI)=>{
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response => response.data);

  return res

 }

	)





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
		},
	/*	use axios to database - take time to be resolved
      this code is syncro . with createAsyncThunk this code dosn't work
	*/
		/*getUsers:(state)=>{
			axios.get('https://jsonplaceholder.typicode.com/users')
			.then((response)=>{
                 console.log(response.data)
			})
			.catch((err)=>{
              console.log(err)
			})
		}*/
	},
	/*extraReducers is asynk thunk*/
	extraReducers:(builder)=>{
		builder.addCase(fechUsers.pending,(state)=>{
			console.log('pending')
		})
		/* fulfilled when everything is result + call back function
           you can code only fulfilled no need pending and rejected
		*/
		.addCase(fechUsers.fulfilled,(state,action)=>{
            console.log('fulfilled')
            /*console.log(action.payload)*/
            state.users = action.payload
		})
		.addCase(fechUsers.rejected,(state)=>{
			console.log('rejected')
		})
	}


})

export const {setType,/*getUsers*/} = userSlice.actions

export default userSlice.reducer