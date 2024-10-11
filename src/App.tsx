import React from 'react'
import GlobalStyle, { ListadeContatos, TitleBig } from './styles/style'
import TableContatos from './Container/TableContatos/TableContatos'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <ListadeContatos>
        <GlobalStyle />
        <TitleBig>Lista de Contatos</TitleBig>
        <TableContatos />
      </ListadeContatos>
    </Provider>
  )
}

export default App
