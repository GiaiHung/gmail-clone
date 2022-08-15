import { configureStore } from '@reduxjs/toolkit'
import mailSlice from '../features/mailSlice'
import userSlice from '../features/userSlice'

const store = configureStore({
  reducer: {
    mail: mailSlice.reducer,
    user: userSlice.reducer
  },
})

export default store
