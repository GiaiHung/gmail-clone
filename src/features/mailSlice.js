import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sendMessageActive: false,
}

const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageActive = true
    },
    closeSendMessage: (state) => {
      state.sendMessageActive = false
    },
  },
})

export const { openSendMessage, closeSendMessage } = mailSlice.actions

export const selectMail = (state) => state.mail.sendMessageActive

export default mailSlice
