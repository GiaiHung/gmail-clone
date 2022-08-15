import { configureStore } from '@reduxjs/toolkit'
import mailSlice from '../features/mailSlice'

const store = configureStore({
  reducer: {
    mail: mailSlice.reducer,
  },
})

export default store
