import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

/*createAsyncThunk is woking outside
users is the key name here. fechUsers is the name reducer
*/
//8
export const fechUsers = createAsyncThunk(
 'users/fechUsers',
     /* obj is first argument thunkAPI is second argument

     */
  async(obj,thunkAPI,)=>{
  /*	you get everything from index store*/
  /*	console.log(thunkAPI.getState())
  	thunkAPI.dispatch(testAsyncDispatch())*/
  	try{
  		  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/`)
       /*.then(response => response.data);*/

  return res.data
 }catch(err){
     return err
 }

	}

  	)

/*be careful with correct spelling here i wrote user instead of users*/
export const userSlice = createSlice({
	name:'users',
	initialState:{
		type:'Guest',
		users:[],
		loading:false
		/*test:false*/
	},
	reducers:{
			/*reducer and action are in the same spot  setType is the on to export*/
		setType:(state,action)=>{
			state.type = action.payload || 'Guest'
		},
		/*this one trigger line 8*/
		/*testAsyncDispatch:(state)=>{
          state.test = true
		}*/
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
			state.loading = true
		})
		/* fulfilled when everything is result + call back function
           you can code only fulfilled no need pending and rejected
		*/
		.addCase(fechUsers.fulfilled,(state,action)=>{
             state.loading = false
            /*console.log(action.payload)*/
            state.users = action.payload
		})
		.addCase(fechUsers.rejected,(state)=>{
			console.log('rejected')
		})
	}


})

export const {setType,testAsyncDispatch } = userSlice.actions

export default userSlice.reducer