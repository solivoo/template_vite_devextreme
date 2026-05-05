import { configureStore } from '@reduxjs/toolkit';
import { practiceSlice } from './practiceSlice';

export const store = configureStore({
  reducer: {
    practice: practiceSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
