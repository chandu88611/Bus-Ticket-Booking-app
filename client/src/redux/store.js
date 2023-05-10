import { configureStore,combineReducers } from '@reduxjs/toolkit';
import AlertSlice from './AlertSlice';
import userSlice from './userSlice';
const rootReducer=combineReducers({
    alerts:AlertSlice,
    users:userSlice
})


const store = configureStore({
    reducer: rootReducer
  });

  export default store

