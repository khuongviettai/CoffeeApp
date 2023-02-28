import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = state.find(product => product.id === action.payload.id);

      if (product) {
        product.qty++;
      } else {
        state.push({...action.payload, qty: 1});
      }
    },
    removeItem: (state, action) => {
      const product = state.find(product => product.id === action.payload.id);

      if (product) {
        product.qty--;
        if (product.qty === 0) {
          state.filter(product => product.id !== action.payload.id);
        }
      }
    },
  },
});

export const {addItem, removeItem} = cartSlice.actions;

export default cartSlice.reducer;
