import { configureStore } from '@reduxjs/toolkit'
import photoReducer from './photoSlice'

export const store = configureStore({
  reducer: {
    photo: photoReducer
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch