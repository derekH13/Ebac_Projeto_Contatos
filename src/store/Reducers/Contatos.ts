import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contatos } from '../../Models/Contatos'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: {
    itens: [
      new Contatos('derek', 'derek.hls@outlook.com', 11918267414),
      new Contatos('luciop', 'derek.hls@outlook.com', 11956477418),
      new Contatos('nami', 'derek.hls@outlook.com', 11978125634),
      new Contatos('derek', 'derek.hls@outlook.com', 11936479155),
      new Contatos('tadeu', 'derek.hls@outlook.com', 11956155220)
    ]
  },
  reducers: {
    adicionar: (state, action: PayloadAction<Contatos>) => {
      const novoContato = action.payload

      console.log(novoContato)

      const JaExiste = state.itens.findIndex((c) => c.nome === novoContato.nome)

      console.log(JaExiste)

      if (!(JaExiste >= 0)) {
        state.itens.push(novoContato)
      }
    },
    editar: (state, action: PayloadAction<Contatos>) => {
      const ContatoEditado = action.payload

      const eleExiste = state.itens.findIndex(
        (item) => item.nome === ContatoEditado.nome
      )

      if (eleExiste >= 0) {
        state.itens[eleExiste] = ContatoEditado
      }
    },
    excluir: (state, action: PayloadAction<string>) => {
      const nome = action.payload

      state.itens = state.itens.filter((item) => item.nome !== nome)
    }
  }
})

export const { adicionar, editar, excluir } = contatosSlice.actions

export default contatosSlice.reducer
