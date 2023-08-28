import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    set(state, action) {
      return action.payload
    },
    clear(state, action) {
      return null
    }
  },
})

export const { set, clear } = notificationSlice.actions
export default notificationSlice.reducer