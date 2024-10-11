import React, { useState } from 'react'
import { InputForm } from '../../styles/style'
import * as S from './styles'
import Table from '../../Components/Table/Table'
import BtnAdd from '../../Components/BtnAdd/BtnAdd'
import BtnGroup from '../../Components/BtnGroup/BtnGroup'

const TableContatos = () => {
  const [pesquisa, setPesquisa] = useState('')

  return (
    <S.tableContato>
      <InputForm
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        type="text"
        placeholder="procure pelo contato"
      />

      <BtnGroup />

      <Table />
    </S.tableContato>
  )
}

export default TableContatos
