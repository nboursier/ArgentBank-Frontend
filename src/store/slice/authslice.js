import { createSlice } from "@reduxjs/toolkit";

const authslice = createSlice( {
 name:'auth',
 initialState:{token:null, firstname:null, lastname:null, username:null},
 reducers:{
    settoken: (state, action )=>{state.token = action.payload },
    setuser: (state, action )=>{state.firstname = action.payload.firstName
      state.lastname = action.payload.lastName
      state.username = action.payload.userName
    } ,
    setusername: (state, action )=>{
      state.username = action.payload
    } 
 }
    }

)
export const {settoken, setuser, setusername}=authslice.actions
export default authslice.reducer