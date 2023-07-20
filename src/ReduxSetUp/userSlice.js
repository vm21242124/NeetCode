import {createSlice} from '@reduxjs/toolkit'
const initialState={
    user:null
}
export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        adduser:(state,action)=>{
            state.user = action.payload;
        },
        removeUser :(state) => {
            state.user=null
        }
    }
})
export const {adduser,removeUser}=userSlice.actions
export default userSlice