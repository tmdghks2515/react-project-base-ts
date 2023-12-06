import { combineReducers } from '@reduxjs/toolkit';
import { reducer as userReducer } from './slices/user.slice';

const rootReducer = combineReducers({
  user: userReducer,
});

export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
