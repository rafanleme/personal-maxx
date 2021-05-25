import styled from "styled-components";

export const Container = styled.div`
  @media print {
    display: none;
  }

  width: 100vw;
  height: 100vh;

  background-color: var(--bgContainer);

  display: grid;
  grid-template-columns: 20% 80%;

  > img {
    position: absolute;
    right: 10px;
    bottom: 10px;
    z-index: 100;

    filter: drop-shadow(0px 0px 5px #000);
  }
`;

export const ResumoPedido = styled.section`
  min-width: 300px;

  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 9;

  position: relative;
  overflow-y: auto;

  > h1 {
    text-align: center;
    text-shadow: 2px 2px black;
  }

  article {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    padding: 15px;

    background-color: var(--overlay);
    box-shadow: 0px 0px 10px var(--bgContainer);
    border-radius: 10px;

    > h1 {
      font-size: 18px;
      transition: 0.2s;
      cursor: pointer;

      :hover {
        color: var(--primary);
      }
    }

    > h3 {
      color: var(--primary);
      text-align: right;
    }

    div {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    label {
      font-size: 14px;
    }

    select {
      margin-top: 4px;
      flex: 1;
    }
  }

  > footer {
    width: 100%;
    color: var(--bgContainer);
    padding: 20px;
    background-color: var(--primary);
    background-image: linear-gradient(
      to bottom right,
      var(--primary),
      var(--secondary)
    );

    border-radius: 8px;
    box-shadow: 0px 0px 6px var(--bgContainer);

    > p {
      margin-bottom: 5px;
    }

    > button {
      margin-top: 15px;
      width: 100%;
    }
  }
`;

export const Comodo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  height: 100vh;

  > img {
    @media print {
      display: none;
    }

    position: absolute;
    z-index: 0;
    width: 101%;
    height: 101%;
    left: 0;

    margin: -2px;

    background-size: 100% 100%;
    background-repeat: no-repeat;

    transition: 0.5s;
    transition-delay: 0.2s;
  }
`;

export const Forro = styled.div`
  position: absolute;
  right: calc(165px + (1093 / 1000 * 200px));
  top: 50px;
  background-color: red;
  padding: 100px;
`;

export const Relatorio = styled.div`
  @media print {
    display: block;
    @page {
      margin: 0;
      size: A4;
      margin-top: 10mm;
    }

    margin: 1cm;
    /* margin-top: 2cm;
    padding-top: 15mm; */
  }

  page-break-inside: avoid;

  display: none;
  /* border: 1px solid black; */

  color: #111;

  font-size: 8px;
  text-align: center;

  > h1 {
    text-align: center;
    margin-bottom: 15px;
  }

  > h2 {
    text-align: right;

    > em {
      font-size: 20px;
      font-style: normal;
    }
  }

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: right;
    align-items: flex-end;
    text-align: right;
    > p {
      width: fit-content;

      font-size: 10px;
      border-top: 1px solid black;
      margin-top: 90px;
      padding: 0px 80px;
    }
  }

  > table {
    box-sizing: border-box;
    width: calc(100%);
    border-collapse: collapse;

    page-break-inside: always;

    margin-bottom: 3px;

    > * {
      text-align: left;
    }

    th,
    td {
      padding: 2px;
      border: 1px solid #999;
    }
  }
`;

export const PageBreak = styled.div`
  page-break-before: auto;
`;
