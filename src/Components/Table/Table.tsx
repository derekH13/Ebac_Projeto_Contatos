import React from 'react'
import { TableEstilo } from './style'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'

const Table = () => {
  const infoContatos = useSelector((state: RootReducer) => state.Contatos)

  return (
    <TableEstilo className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">E-mail</th>
          <th scope="col">Telefone</th>
        </tr>
      </thead>
      <tbody>
        {infoContatos.itens.map((item, index) => (
          <tr key={item.nome}>
            <th scope="row">{index}</th>
            <td>{item.nome}</td>
            <td>{item.email}</td>
            <td>{item.telefone}</td>
          </tr>
        ))}
      </tbody>
    </TableEstilo>
  )
}

export default Table
