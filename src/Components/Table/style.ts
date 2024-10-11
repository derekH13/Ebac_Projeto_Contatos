import styled from 'styled-components'

export const TableEstilo = styled.table`
  border-radius: 20px;
  overflow: hidden;
  border-radius: 20px;
  background: #e0e0e0;
  box-shadow: 2px 2px 30px #14344d, -2px -2px 30px #14344d;

  @media (max-width: 697px) {
    th,
    td {
      max-width: 50px;
      overflow: hidden;
    }
  }
`
