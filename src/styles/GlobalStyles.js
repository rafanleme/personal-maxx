import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --primary:  #D98427;
    --white: #CCC;
    --gray: #2C2C2B;
    --bgContent: #2C2C2B;
    --bgContainer: #242828;
    --overlay: #000000DD;
    --whiteTransparent: #FFFC;
    --black: #111;
    --alertErro: #AA0000EE;
    --alertSucesso: #00AA00DD;
    --gradientPrimary: #d8324a;
    --gradientSecondary: #811a29;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;

    box-sizing: border-box;

  }

  body {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

    overflow: hidden;

    color: var(--white);

    background-position: top;
    background-size: 600px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar {
    width: 4px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }

  input, select, textarea {
    
    color: var(--white);
    background-color: #0000;
    font-size: 16px;
    border: 0px;
    border-bottom: 1px solid var(--white);

    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    height: 30px;

    transition: 0.2s;

    resize: none;
  }

  ::placeholder{
    color: var(--white);
  }

  input {
    padding: 20px 10px;
    background-color:var(--overlay);
    border-radius: 8px;
    border: none;
  }

  option{
    background-color: var(--gray);
    color: var(--white);
  }

  textarea {
    height: 100px;
  }

  area:hover{
    border: 1px solid red;
  }

  select:valid{
    border-bottom: 1px solid var(--primary);
    color: var(--primary);
  }
  
  button {
    padding: 10px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 18px;

    border-radius: 10px;
    
    color: var(--bgContainer);
    background-color: var(--primary);
    border: 1px solid var(--bgContainer);

    transition: 0.2s;

    cursor: pointer;

    :active {
      transform: scale(0.9);
    }

    :hover {
      background-color: var(--bgContainer);
      color: var(--white);
    }

    :disabled{
      opacity: 0.4;
      cursor: not-allowed;
    }
  }
`;
