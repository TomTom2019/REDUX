import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

/* thunkAPI get state- everything on redux store  */
export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async (obj,thunkAPI) => {
 /*       console.log(thunkAPI.getState())
        thunkAPI.dispatch(testAsyncDispatch())*/
        try {
            const res = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );

            return res.data
        } catch (err) {
            return err;
        }
    }
);

export const userSlice = createSlice({
    name: "users",
    initialState: {
        type: "Guest",
        user: [],
        loading:false
      /*  test:false*/
    },
    reducers: {
        setType: (state, action) => {
            state.type = action.payload || "Guest";
        },
    /*    testAsyncDispatch:(state)=>{
         state.test = true
        }*/
    },

 /*   */
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUsers.pending,(state)=>{
            console.log('pending')
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            console.log('fulfilled')
            state.user = action.payload
        })
           .addCase(fetchUsers.rejected,(state)=>{
            console.log('rejected')
        })
    }
});

export const { setType,testAsyncDispatch } = userSlice.actions;
export default userSlice.reducer;