import styled from 'styled-components'

export const window = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.49);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 350px;
    background: rgba(58, 56, 56, 0.25);
    box-shadow: 0 8px 32px 0 black;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    padding: 20px;
    position: relative;

    h1 {
      text-align: center;
      color: gray;
      margin-bottom: 28px;
    }

    label {
      color: white;
    }

    input {
      margin-top: 0px;
      margin-bottom: 12px;
    }

    div {
      margin-top: 30px;
    }

    .fechar {
      position: absolute;
      top: -15px;
      right: 15px;
    }
  }
`
