// import handleCart from './handleCart';
import cartSlice from '../Slide/cartSlice';
import {combineReducers} from 'redux';

const rootReducers = combineReducers({
  cartSlice,
});

export default rootReducers;
