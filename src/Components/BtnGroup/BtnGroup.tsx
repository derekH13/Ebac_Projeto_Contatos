import { useDispatch, useSelector } from 'react-redux'
import { BotaoAdicionar, BotaoEditar, BotaoExcluir } from '../../styles/style'
import FormCrud from '../FormCrud/FormCrud'
import { BtnGroupEstilo } from './styles'
import { RootReducer } from '../../store/store'
import { Modal } from '../../store/Reducers/fecharForm'
import { useRef, useState } from 'react'

export type TypeForm = 'Adicionar' | 'Editar' | 'Excluir'

const BtnGroup = () => {
  const isOpen = useSelector((state: RootReducer) => state.Modal.itens)
  const dispatch = useDispatch()

  const [TipoForm, setTipoForm] = useState<TypeForm>('Adicionar')

  function FormAdicionar() {
    setTipoForm('Adicionar')

    dispatch(Modal())
  }

  function FormEditar() {
    setTipoForm('Editar')

    dispatch(Modal())
  }

  function FormExcluir() {
    setTipoForm('Excluir')

    dispatch(Modal())
  }

  return (
    <>
      <BtnGroupEstilo>
        <BotaoAdicionar onClick={() => FormAdicionar()}>
          Adicionar
        </BotaoAdicionar>
        <BotaoEditar onClick={() => FormEditar()}>Editar</BotaoEditar>
        <BotaoExcluir onClick={() => FormExcluir()}>Excluir</BotaoExcluir>
      </BtnGroupEstilo>

      {isOpen ? <FormCrud buttonText={TipoForm} /> : ''}
    </>
  )
}

export default BtnGroup
