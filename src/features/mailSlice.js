import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedMail: null,
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
    selectMail: (state,action) => {
      state.selectedMail = action.payload
    }
  },
})

export const { openSendMessage, closeSendMessage, selectMail } = mailSlice.actions

export const setSendMailActive = (state) => state.mail.sendMessageActive
export const getMailSelected = (state) => state.mail.selectedMail

export default mailSlice
