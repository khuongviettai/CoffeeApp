import {configureStore} from '@reduxjs/toolkit';
import rootReducers from './reducers';

const store = configureStore({
  reducer: {
    root: rootReducers,
  },
});

export default store;
