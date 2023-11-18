import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    // Add other reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
