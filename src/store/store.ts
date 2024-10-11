import { configureStore } from '@reduxjs/toolkit'
import contatoReducer from './Reducers/Contatos'
import fecharForm from './Reducers/fecharForm'
import { Modal } from './Reducers/fecharForm'

const store = configureStore({
  reducer: {
    Contatos: contatoReducer,
    Modal: fecharForm
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
