import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const sliceState = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    handleAuth: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setStatus: (state, action) => {
      state.dataStatus = action.payload;
    },
    handleUser: (state, action) => {
      state.Users = action.payload;
    },
  },
});

const reducer = {
  state: sliceState.reducer,
};

export const { handleAuth, setStatus, handleUser } = sliceState.actions;
export default reducer;
