import { FormEvent, useRef } from 'react'
import { BotaoAdicionar, InputForm } from '../../styles/style'
import { useDispatch } from 'react-redux'
import { Contatos } from '../../Models/Contatos'
import { adicionar, editar, excluir } from '../../store/Reducers/Contatos'
import { Modal } from '../../store/Reducers/fecharForm'
import { TypeForm } from '../BtnGroup/BtnGroup'

import * as S from './styles'

type props = {
  buttonText: TypeForm
}

const FormCrud = ({ buttonText }: props) => {
  const dispatch = useDispatch()

  const nomeCampo = useRef('')
  const emailCampo = useRef('')
  const telefoneCampo = useRef(0)

  const mandarContato = (e: FormEvent) => {
    e.preventDefault()

    const objContato = new Contatos(
      nomeCampo.current,
      emailCampo.current,
      telefoneCampo.current
    )

    if (buttonText === 'Adicionar') dispatch(adicionar(objContato))
    if (buttonText === 'Editar') dispatch(editar(objContato))
    if (buttonText === 'Excluir') dispatch(excluir(objContato.nome))
  }

  console.log(buttonText !== 'Excluir')

  return (
    <S.window>
      <form onSubmit={(e) => mandarContato(e)} action="">
        <h1>{buttonText}</h1>

        <div className="fechar" onClick={() => dispatch(Modal())}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="red"
            className="bi bi-x-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708" />
          </svg>
        </div>

        <label htmlFor="Nome">Nome:</label>
        <InputForm
          id="Nome"
          onChange={(e) => (nomeCampo.current = e.target.value)}
        />
        {buttonText !== 'Excluir' && (
          <>
            <label htmlFor="Email">Email:</label>
            <InputForm
              id="Email"
              onChange={(e) => (emailCampo.current = e.target.value)}
            />
            <label htmlFor="Telefone">Telefone</label>
            <InputForm
              id="Telefone"
              onChange={(e) =>
                (telefoneCampo.current = parseInt(e.target.value))
              }
            />
          </>
        )}

        <div>
          <BotaoAdicionar type="submit">{buttonText}</BotaoAdicionar>
        </div>
      </form>
    </S.window>
  )
}

export default FormCrud
