import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateSucess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserStart:(state)=>{
      state.loading=true;
      state.error=null;
    },
    deleteUserSuccess:(state)=>{
      state.currentUser=null;
      state.loading=false;
      state.error=null;
    },
    deleteUserError:(state,action)=>{
      state.error=action.payload;
      state.loading=false;
    },
    signoutSuccess:(state)=>{
      state.currentUser=null;
      state.loading=false;
      state.error=null;
    }
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateStart,
  updateSucess,
  updateFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserError,
  signoutSuccess,
} = userSlice.actions;

export default userSlice.reducer;
