import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  body {
    background-color: black;
  }
`

export const ListadeContatos = styled.section`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(to right, #243949 0%, #517fa4 100%);

  @media (max-width: 1024px) {
    padding: 10px;
  }
`

export const TitleBig = styled.h1`
  font-size: 44px;
  font-weight: bold;
  text-align: center;
  color: white;
  padding-top: 2rem;
`

export const InputForm = styled.input`
  width: 100%;
  height: 35px;
  color: white;
  border: none;
  border: solid 2px white;
  border-radius: 20px;
  padding-left: 1rem;
  background-color: transparent;
  margin-top: 24px;
  font-size: 20px;
`

export const BtnAdicionar = styled.button`
  background-color: #1fbd14;
  border: none;
  color: black;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  font-size: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 120px;
  right: 250px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(0.95);
  }
`

export const Botao = styled.button`
  width: 100%;
  height: 40px;
  font-size: 22px;
  color: black;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(0.95);
  }
`

export const BotaoAdicionar = styled(Botao)`
  background-color: green;
`

export const BotaoExcluir = styled(Botao)`
  background-color: red;
`

export const BotaoEditar = styled(Botao)`
  background-color: yellow;
`

export default GlobalStyle
