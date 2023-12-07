import { createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  value: {
    folded: boolean;
  };
};

const initialState: InitialStateType = {
  value: {
    folded: true,
  },
};

const sideNavSlice = createSlice({
  name: 'sideNav',
  initialState,
  reducers: {
    toggleSideNav: (state) => {
      state.value.folded = !state.value.folded;
    },
  },
});

export const { toggleSideNav } = sideNavSlice.actions;

export const { reducer } = sideNavSlice;
