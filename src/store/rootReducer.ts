import { combineReducers } from '@reduxjs/toolkit';
import { reducer as userReducer } from './slices/user.slice';
import { reducer as sideNavReducer } from './slices/sideNav.slice';

const rootReducer = combineReducers({
  user: userReducer,
  sideNav: sideNavReducer,
});

export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
