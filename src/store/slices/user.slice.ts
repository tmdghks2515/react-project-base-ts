import { createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  value?: Dto.User;
};

const initialState: InitialStateType = {
  value: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = undefined;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const { reducer } = userSlice;
