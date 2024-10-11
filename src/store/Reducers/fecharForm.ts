import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type windownAbrir = {
  itens: boolean
}

const initialState: windownAbrir = {
  itens: false
}

const fecharFormSlice = createSlice({
  name: 'fecharForm',
  initialState,
  reducers: {
    Modal: (state) => {
      state.itens = !state.itens
    }
  }
})

export const { Modal } = fecharFormSlice.actions

export default fecharFormSlice.reducer
