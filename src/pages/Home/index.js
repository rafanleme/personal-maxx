import React, { useEffect, useRef, useState } from "react";
import ImageMapper from "react-image-mapper";

import {
  Comodo,
  Container,
  Forro,
  PageBreak,
  Relatorio,
  ResumoPedido,
} from "./styles";
import imgSala from "../../assets/sala.jpg";
import imgCozinha from "../../assets/cozinha.jpg";
import imgLavanderia from "../../assets/lavanderia.jpg";
import imgLavabo from "../../assets/lavabo.jpg";
import imgBanheiro from "../../assets/banheiro.jpg";
import imgLazer from "../../assets/lazer.jpg";
import imgSuite from "../../assets/suite.jpg";
import imgEscada from "../../assets/escada.jpg";
import { itens } from "../../data/itens";

function Home() {
  const comodoRef = useRef();
  const refInputNome = useRef();

  const [imagem, setImagem] = useState(imgSala);

  const [selCozinha, setSelCozinha] = useState({
    forro: { valor: 0 },
    revestimento: { valor: 0 },
    bancada: { valor: 0 },
    piso: { valor: 0 },
    rodape: { valor: 0 },
  });

  const [nome, setNome] = useState("");

  const [selSala, setSelSala] = useState({
    forro: { valor: 0 },
    piso: { valor: 0 },
    rodape: { valor: 0 },
  });

  const [selLavanderia, setSelLavanderia] = useState({
    forro: { valor: 0 },
    bancada: { valor: 0 },
    soleira: { valor: 0 },
    revestimento: { valor: 0 },
    piso: { valor: 0 },
    rodape: { valor: 0 },
  });

  const [selLavabo, setSelLavabo] = useState({
    forro: { valor: 0 },
    bancada: { valor: 0 },
    revestimento: { valor: 0 },
    piso: { valor: 0 },
    rodape: { valor: 0 },
  });

  const [selBanheiro, setSelBanheiro] = useState({
    forro: { valor: 0 },
    bancada: { valor: 0 },
    nicho: { valor: 0 },
    ["parede nicho"]: { valor: 0 },
    ["parede box"]: { valor: 0 },
    ["parede fora box"]: { valor: 0 },
    ["soleira+tento"]: { valor: 0 },
    ["piso fora box"]: { valor: 0 },
    ["piso box"]: { valor: 0 },
  });

  const [selLazer, setSelLazer] = useState({
    bancada: { valor: 0 },
    revestimento: { valor: 0 },
  });

  const [selSuite, setSelSuite] = useState({
    forro: { valor: 0 },
    piso: { valor: 0 },
    rodape: { valor: 0 },
  });

  const [selEscada, setSelEscada] = useState({
    revestimento: { valor: 0 },
    piso: { valor: 0 },
    ["borda acabamento"]: { valor: 0 },
  });

  const [showMenus, setShowMenus] = useState({
    sala: true,
  });

  useEffect(() => {
    // console.log(comodoRef.current.scrollWidth);
    // console.log(imgRef.current.scrollWidth);
  }, []);

  const handleLimpar = () => {
    setSelCozinha({
      forro: { valor: 0 },
      revestimento: { valor: 0 },
      bancada: { valor: 0 },
      piso: { valor: 0 },
      rodape: { valor: 0 },
    });

    setNome("");

    setSelSala({
      forro: { valor: 0 },
      piso: { valor: 0 },
      rodape: { valor: 0 },
    });

    setSelLavanderia({
      forro: { valor: 0 },
      bancada: { valor: 0 },
      soleira: { valor: 0 },
      revestimento: { valor: 0 },
      piso: { valor: 0 },
      rodape: { valor: 0 },
    });

    setSelLavabo({
      forro: { valor: 0 },
      bancada: { valor: 0 },
      revestimento: { valor: 0 },
      piso: { valor: 0 },
      rodape: { valor: 0 },
    });

    setSelBanheiro({
      forro: { valor: 0 },
      bancada: { valor: 0 },
      nicho: { valor: 0 },
      ["parede nicho"]: { valor: 0 },
      ["parede box"]: { valor: 0 },
      ["parede fora box"]: { valor: 0 },
      ["soleira+tento"]: { valor: 0 },
      ["piso fora box"]: { valor: 0 },
      ["piso box"]: { valor: 0 },
    });

    setSelLazer({
      bancada: { valor: 0 },
      revestimento: { valor: 0 },
    });

    setSelSuite({
      forro: { valor: 0 },
      piso: { valor: 0 },
      rodape: { valor: 0 },
    });

    setSelEscada({
      revestimento: { valor: 0 },
      piso: { valor: 0 },
      ["borda acabamento"]: { valor: 0 },
    });

    setShowMenus({
      sala: true,
    });

    refInputNome.current.focus();
  };

  const MAP = {
    name: "my-map",
    areas: [
      {
        name: "1",
        shape: "circle",
        coords: [226, 176, 25, 25],
        preFillColor: "#FFF0",
        fillColor: "FFF2",
      },
      {
        name: "2",
        shape: "circle",
        coords: [300, 176, 25, 25],
        preFillColor: "#FFF0",
        fillColor: "FFF2",
      },
      {
        name: "3",
        shape: "circle",
        coords: [374, 176, 25, 25],
        preFillColor: "#FFF0",
        fillColor: "FFF2",
      },
    ],
  };

  const handleCozinha = (e) => {
    setSelCozinha({
      ...selCozinha,
      [e.target.id]: e.target.value ? JSON.parse(e.target.value) : { valor: 0 },
    });
  };

  const handleSala = (e) => {
    setSelSala({
      ...selSala,
      [e.target.id]: e.target.value ? JSON.parse(e.target.value) : { valor: 0 },
    });
  };

  const handleLavanderia = (e) => {
    setSelLavanderia({
      ...selLavanderia,
      [e.target.id]: e.target.value ? JSON.parse(e.target.value) : { valor: 0 },
    });
  };

  const handleLavabo = (e) => {
    setSelLavabo({
      ...selLavabo,
      [e.target.id]: e.target.value ? JSON.parse(e.target.value) : { valor: 0 },
    });
  };

  const handleBanheiro = (e) => {
    setSelBanheiro({
      ...selBanheiro,
      [e.target.id]: e.target.value ? JSON.parse(e.target.value) : { valor: 0 },
    });
  };

  const handleLazer = (e) => {
    setSelLazer({
      ...selLazer,
      [e.target.id]: e.target.value ? JSON.parse(e.target.value) : { valor: 0 },
    });
  };

  const handleSuite = (e) => {
    setSelSuite({
      ...selSuite,
      [e.target.id]: e.target.value ? JSON.parse(e.target.value) : { valor: 0 },
    });
  };

  const handleEscada = (e) => {
    setSelEscada({
      ...selEscada,
      [e.target.id]: e.target.value ? JSON.parse(e.target.value) : { valor: 0 },
    });
  };

  useEffect(() => {
    const imageList = [
      imgSala,
      imgCozinha,
      imgLavanderia,
      imgLavabo,
      imgBanheiro,
      imgLazer,
      imgSuite,
      imgEscada,
    ];
    imageList.forEach((image) => {
      new Image().src = image;
    });
  }, []);

  useEffect(() => {
    switch (Object.keys(showMenus)[0]) {
      case "sala":
        setImagem(imgSala);
        break;
      case "cozinha":
        setImagem(imgCozinha);
        break;
      case "lavanderia":
        setImagem(imgLavanderia);
        break;
      case "lavabo":
        setImagem(imgLavabo);
        break;
      case "banheiro":
        setImagem(imgBanheiro);
        break;
      case "lazer":
        setImagem(imgLazer);
        break;
      case "suite":
        setImagem(imgSuite);
        break;
      case "escada":
        setImagem(imgEscada);
        break;

      default:
        break;
    }
  }, [showMenus]);

  return (
    <>
      <Container>
        <ResumoPedido>
          <h1>Resumo do Pedido</h1>
          <input
            ref={refInputNome}
            placeholder="Nome do Cliente"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <article>
            <h1 onClick={() => setShowMenus({ sala: true })}>Sala</h1>
            {showMenus.sala &&
              itens.sala.map((i) => (
                <div>
                  <label style={{ textTransform: "capitalize" }}>
                    {Object.keys(i)}
                  </label>
                  <select
                    id={Object.keys(i)}
                    onChange={handleSala}
                    value={JSON.stringify(selSala[Object.keys(i)])}
                    required
                  >
                    <option value="">Selecione</option>
                    {i[Object.keys(i)[0]].map((i) => (
                      <option value={JSON.stringify(i)}>
                        {i.descricao} -{" "}
                        {Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(i.valor)}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            <h3>
              Total:{" "}
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(
                0 +
                  selSala.forro.valor +
                  selSala.piso.valor +
                  selSala.rodape.valor
              )}
            </h3>
          </article>
          <article>
            <h1 onClick={() => setShowMenus({ cozinha: true })}>Cozinha</h1>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: 5}}>
              <input type="radio" /> Sem ilha
              <input type="radio" /> Com ilha
            </div>
            {showMenus.cozinha &&
              itens.cozinha.map((i) => (
                <div>
                  <label style={{ textTransform: "capitalize" }}>
                    {Object.keys(i)}
                  </label>
                  <select
                    id={Object.keys(i)}
                    value={JSON.stringify(selCozinha[Object.keys(i)])}
                    onChange={handleCozinha}
                    required
                  >
                    <option value="">Selecione</option>
                    {i[Object.keys(i)[0]].map((i) => (
                      <option value={JSON.stringify(i)}>
                        {i.descricao} -{" "}
                        {Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(i.valor)}
                      </option>
                    ))}
                  </select>
                </div>
              ))}

            <h3>
              Total:{" "}
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(
                0 +
                  selCozinha.forro.valor +
                  selCozinha.bancada.valor +
                  selCozinha.piso.valor +
                  selCozinha.revestimento.valor +
                  selCozinha.rodape.valor
              )}
            </h3>
          </article>
          <article>
            <h1 onClick={() => setShowMenus({ lavanderia: true })}>
              Lavanderia
            </h1>
            {showMenus.lavanderia &&
              itens.lavanderia.map((i) => (
                <div>
                  <label style={{ textTransform: "capitalize" }}>
                    {Object.keys(i)}
                  </label>
                  <select
                    id={Object.keys(i)}
                    onChange={handleLavanderia}
                    value={JSON.stringify(selLavanderia[Object.keys(i)])}
                    required
                  >
                    <option value="">Selecione</option>
                    {i[Object.keys(i)[0]].map((i) => (
                      <option value={JSON.stringify(i)}>
                        {i.descricao} -{" "}
                        {Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(i.valor)}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            <h3>
              Total:{" "}
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(
                0 +
                  selLavanderia.forro.valor +
                  selLavanderia.bancada.valor +
                  selLavanderia.piso.valor +
                  selLavanderia.revestimento.valor +
                  selLavanderia.soleira.valor +
                  selLavanderia.rodape.valor
              )}
            </h3>
          </article>
          <article>
            <h1 onClick={() => setShowMenus({ lavabo: true })}>Lavabo</h1>
            {showMenus.lavabo &&
              itens.lavabo.map((i) => (
                <div>
                  <label style={{ textTransform: "capitalize" }}>
                    {Object.keys(i)}
                  </label>
                  <select
                    id={Object.keys(i)}
                    value={JSON.stringify(selLavabo[Object.keys(i)])}
                    onChange={handleLavabo}
                    required
                  >
                    <option value="">Selecione</option>
                    {i[Object.keys(i)[0]].map((i) => (
                      <option value={JSON.stringify(i)}>
                        {i.descricao} -{" "}
                        {Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(i.valor)}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            <h3>
              Total:{" "}
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(
                0 +
                  selLavabo.forro.valor +
                  selLavabo.bancada.valor +
                  selLavabo.piso.valor +
                  selLavabo.revestimento.valor +
                  selLavabo.rodape.valor
              )}
            </h3>
          </article>
          <article>
            <h1 onClick={() => setShowMenus({ banheiro: true })}>Banheiro</h1>
            {showMenus.banheiro &&
              itens.banheiro.map((i) => (
                <div>
                  <label style={{ textTransform: "capitalize" }}>
                    {Object.keys(i)}
                  </label>
                  <select
                    id={Object.keys(i)}
                    value={JSON.stringify(selBanheiro[Object.keys(i)])}
                    onChange={handleBanheiro}
                    required
                  >
                    <option value="">Selecione</option>
                    {i[Object.keys(i)[0]].map((i) => (
                      <option value={JSON.stringify(i)}>
                        {i.descricao} -{" "}
                        {Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(i.valor)}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            <h3>
              Total:{" "}
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(
                0 +
                  selBanheiro.forro.valor +
                  selBanheiro.bancada.valor +
                  selBanheiro.nicho.valor +
                  selBanheiro["parede nicho"].valor +
                  selBanheiro["parede box"].valor +
                  selBanheiro["parede fora box"].valor +
                  selBanheiro["soleira+tento"].valor +
                  selBanheiro["piso fora box"].valor +
                  selBanheiro["piso box"].valor
              )}
            </h3>
          </article>
          <article>
            <h1 onClick={() => setShowMenus({ lazer: true })}>Lazer</h1>
            {showMenus.lazer &&
              itens.lazer.map((i) => (
                <div>
                  <label style={{ textTransform: "capitalize" }}>
                    {Object.keys(i)}
                  </label>
                  <select
                    id={Object.keys(i)}
                    value={JSON.stringify(selLazer[Object.keys(i)])}
                    onChange={handleLazer}
                    required
                  >
                    <option value="">Selecione</option>
                    {i[Object.keys(i)[0]].map((i) => (
                      <option value={JSON.stringify(i)}>
                        {i.descricao} -{" "}
                        {Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(i.valor)}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            <h3>
              Total:{" "}
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(
                0 + selLazer.revestimento.valor + selLazer.bancada.valor
              )}
            </h3>
          </article>
          <article>
            <h1 onClick={() => setShowMenus({ suite: true })}>Suíte</h1>
            {showMenus.suite &&
              itens.suite.map((i) => (
                <div>
                  <label style={{ textTransform: "capitalize" }}>
                    {Object.keys(i)}
                  </label>
                  <select
                    id={Object.keys(i)}
                    value={JSON.stringify(selSuite[Object.keys(i)])}
                    onChange={handleSuite}
                    required
                  >
                    <option value="">Selecione</option>
                    {i[Object.keys(i)[0]].map((i) => (
                      <option value={JSON.stringify(i)}>
                        {i.descricao} -{" "}
                        {Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(i.valor)}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            <h3>
              Total:{" "}
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(
                0 +
                  selSuite.forro.valor +
                  selSuite.piso.valor +
                  selSuite.rodape.valor
              )}
            </h3>
          </article>
          <article>
            <h1 onClick={() => setShowMenus({ escada: true })}>Escada</h1>
            {showMenus.escada &&
              itens.escada.map((i) => (
                <div>
                  <label style={{ textTransform: "capitalize" }}>
                    {Object.keys(i)}
                  </label>
                  <select
                    id={Object.keys(i)}
                    value={JSON.stringify(selEscada[Object.keys(i)])}
                    onChange={handleEscada}
                    required
                  >
                    <option value="">Selecione</option>
                    {i[Object.keys(i)[0]].map((i) => (
                      <option value={JSON.stringify(i)}>
                        {i.descricao} -{" "}
                        {Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(i.valor)}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            <h3>
              Total:{" "}
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(
                0 +
                  selEscada.revestimento.valor +
                  selEscada.piso.valor +
                  selEscada["borda acabamento"].valor
              )}
            </h3>
          </article>
          <footer>
            <p>Total geral</p>{" "}
            <h1>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(
                0 +
                  selSala.forro.valor +
                  selSala.piso.valor +
                  selSala.rodape.valor +
                  selCozinha.forro.valor +
                  selCozinha.bancada.valor +
                  selCozinha.piso.valor +
                  selCozinha.revestimento.valor +
                  selCozinha.rodape.valor +
                  selLavanderia.forro.valor +
                  selLavanderia.bancada.valor +
                  selLavanderia.piso.valor +
                  selLavanderia.revestimento.valor +
                  selLavanderia.soleira.valor +
                  selLavanderia.rodape.valor +
                  selLavabo.forro.valor +
                  selLavabo.bancada.valor +
                  selLavabo.piso.valor +
                  selLavabo.revestimento.valor +
                  selLavabo.rodape.valor +
                  selBanheiro.forro.valor +
                  selBanheiro.bancada.valor +
                  selBanheiro.nicho.valor +
                  selBanheiro["parede nicho"].valor +
                  selBanheiro["parede box"].valor +
                  selBanheiro["parede fora box"].valor +
                  selBanheiro["soleira+tento"].valor +
                  selBanheiro["piso fora box"].valor +
                  selBanheiro["piso box"].valor +
                  selLazer.revestimento.valor +
                  selLazer.bancada.valor +
                  selSuite.forro.valor +
                  selSuite.piso.valor +
                  selSuite.rodape.valor +
                  selEscada.revestimento.valor +
                  selEscada.piso.valor +
                  selEscada["borda acabamento"].valor
              )}
            </h1>
            <button onClick={() => window.print()}>FECHAR PEDIDO</button>
            <button onClick={handleLimpar}>NOVO PEDIDO</button>
          </footer>
        </ResumoPedido>
        <Comodo ref={comodoRef}>
          {/* <img ref={imgRef} src={imgCozinha} usemap="#workmap" />
        <map name="workmap">
          <area
            shape="rect"
            coords="620,25,890,120"
            href="#"
            onClick={() => {
              console.log("clicou");
            }}
          />
        </map> */}
          {/* <ImageMapper
          src={imgSala}
          map={MAP}
          onClick={(area) => {
            alert(area.name);
          }}
          onMouseEnter={(area) => {}}
          onMouseLeave={(area) => {}}
          onMouseMove={(area, _, evt) => {}}
          onImageClick={(evt) => {}}
          onImageMouseMove={(evt) => {}}
        /> */}
          <img style={{ backgroundImage: "url(" + imagem + ")" }} />
        </Comodo>
      </Container>
      <Relatorio>
        <h1>Pedido de venda </h1>
        <table>
          <thead>
            <tr>
              <th style={{ fontSize: 10 }} colSpan="5">
                SALA
              </th>
            </tr>
            <tr>
              <th width="15%">Item</th>
              <th width="60%">Descrição</th>
              <th width="25%">Valor</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(selSala).map((item) => {
              if (selSala[item].descricao)
                return (
                  <tr>
                    <td>{item}</td>
                    <td>{selSala[item].descricao}</td>
                    <td>
                      {Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(selSala[item].valor)}
                    </td>
                  </tr>
                );
            })}
            <tr>
              <td style={{ border: "none" }}></td>
              <td style={{ border: "none", textAlign: "right" }}>Total</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(
                  0 +
                    selSala.forro.valor +
                    selSala.piso.valor +
                    selSala.rodape.valor
                )}
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th style={{ fontSize: 10 }} colSpan="5">
                COZINHA
              </th>
            </tr>
            <tr>
              <th width="15%">Item</th>
              <th width="60%">Descrição</th>
              <th width="25%">Valor</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(selCozinha).map((item) => {
              if (selCozinha[item].descricao)
                return (
                  <tr>
                    <td>{item}</td>
                    <td>{selCozinha[item].descricao}</td>
                    <td>
                      {Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(selCozinha[item].valor)}
                    </td>
                  </tr>
                );
            })}
            <tr>
              <td style={{ border: "none" }}></td>
              <td style={{ border: "none", textAlign: "right" }}>Total</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(
                  0 +
                    selCozinha.forro.valor +
                    selCozinha.bancada.valor +
                    selCozinha.piso.valor +
                    selCozinha.revestimento.valor +
                    selCozinha.rodape.valor
                )}
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th style={{ fontSize: 10 }} colSpan="5">
                LAVANDERIA
              </th>
            </tr>
            <tr>
              <th width="15%">Item</th>
              <th width="60%">Descrição</th>
              <th width="25%">Valor</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(selLavanderia).map((item) => {
              if (selLavanderia[item].descricao)
                return (
                  <tr>
                    <td>{item}</td>
                    <td>{selLavanderia[item].descricao}</td>
                    <td>
                      {Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(selLavanderia[item].valor)}
                    </td>
                  </tr>
                );
            })}
            <tr>
              <td style={{ border: "none" }}></td>
              <td style={{ border: "none", textAlign: "right" }}>Total</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(
                  0 +
                    selLavanderia.forro.valor +
                    selLavanderia.bancada.valor +
                    selLavanderia.piso.valor +
                    selLavanderia.revestimento.valor +
                    selLavanderia.soleira.valor +
                    selLavanderia.rodape.valor
                )}
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th style={{ fontSize: 10 }} colSpan="5">
                LAVABO
              </th>
            </tr>
            <tr>
              <th width="15%">Item</th>
              <th width="60%">Descrição</th>
              <th width="25%">Valor</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(selLavabo).map((item) => {
              if (selLavabo[item].descricao)
                return (
                  <tr>
                    <td>{item}</td>
                    <td>{selLavabo[item].descricao}</td>
                    <td>
                      {Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(selLavabo[item].valor)}
                    </td>
                  </tr>
                );
            })}
            <tr>
              <td style={{ border: "none" }}></td>
              <td style={{ border: "none", textAlign: "right" }}>Total</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(
                  0 +
                    selLavabo.forro.valor +
                    selLavabo.bancada.valor +
                    selLavabo.piso.valor +
                    selLavabo.revestimento.valor +
                    selLavabo.rodape.valor
                )}
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th style={{ fontSize: 10 }} colSpan="5">
                BANHEIRO
              </th>
            </tr>
            <tr>
              <th width="15%">Item</th>
              <th width="60%">Descrição</th>
              <th width="25%">Valor</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(selBanheiro).map((item) => {
              if (selBanheiro[item].descricao)
                return (
                  <tr>
                    <td>{item}</td>
                    <td>{selBanheiro[item].descricao}</td>
                    <td>
                      {Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(selBanheiro[item].valor)}
                    </td>
                  </tr>
                );
            })}
            <tr>
              <td style={{ border: "none" }}></td>
              <td style={{ border: "none", textAlign: "right" }}>Total</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(
                  0 +
                    selBanheiro.forro.valor +
                    selBanheiro.bancada.valor +
                    selBanheiro.nicho.valor +
                    selBanheiro["parede nicho"].valor +
                    selBanheiro["parede box"].valor +
                    selBanheiro["parede fora box"].valor +
                    selBanheiro["soleira+tento"].valor +
                    selBanheiro["piso fora box"].valor +
                    selBanheiro["piso box"].valor
                )}
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th style={{ fontSize: 10 }} colSpan="5">
                LAZER
              </th>
            </tr>
            <tr>
              <th width="15%">Item</th>
              <th width="60%">Descrição</th>
              <th width="25%">Valor</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(selLazer).map((item) => {
              if (selLazer[item].descricao)
                return (
                  <tr>
                    <td>{item}</td>
                    <td>{selLazer[item].descricao}</td>
                    <td>
                      {Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(selLazer[item].valor)}
                    </td>
                  </tr>
                );
            })}
            <tr>
              <td style={{ border: "none" }}></td>
              <td style={{ border: "none", textAlign: "right" }}>Total</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(
                  0 + selLazer.revestimento.valor + selLazer.bancada.valor
                )}
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th style={{ fontSize: 10 }} colSpan="5">
                SUITE
              </th>
            </tr>
            <tr>
              <th width="15%">Item</th>
              <th width="60%">Descrição</th>
              <th width="25%">Valor</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(selSuite).map((item) => {
              if (selSuite[item].descricao)
                return (
                  <tr>
                    <td>{item}</td>
                    <td>{selSuite[item].descricao}</td>
                    <td>
                      {Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(selSuite[item].valor)}
                    </td>
                  </tr>
                );
            })}
            <tr>
              <td style={{ border: "none" }}></td>
              <td style={{ border: "none", textAlign: "right" }}>Total</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(
                  0 +
                    selSuite.forro.valor +
                    selSuite.piso.valor +
                    selSuite.rodape.valor
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <PageBreak />
        <table>
          <thead>
            <tr>
              <th style={{ fontSize: 10 }} colSpan="5">
                ESCADA
              </th>
            </tr>
            <tr>
              <th width="15%">Item</th>
              <th width="60%">Descrição</th>
              <th width="25%">Valor</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(selEscada).map((item) => {
              if (selEscada[item].descricao)
                return (
                  <tr>
                    <td>{item}</td>
                    <td>{selEscada[item].descricao}</td>
                    <td>
                      {Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(selEscada[item].valor)}
                    </td>
                  </tr>
                );
            })}
            <tr>
              <td style={{ border: "none" }}></td>
              <td style={{ border: "none", textAlign: "right" }}>Total</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(
                  0 +
                    selEscada.revestimento.valor +
                    selEscada.piso.valor +
                    selEscada["borda acabamento"].valor
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <h2>
          Total Geral:{" "}
          <em>
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(
              0 +
                selSala.forro.valor +
                selSala.piso.valor +
                selSala.rodape.valor +
                selCozinha.forro.valor +
                selCozinha.bancada.valor +
                selCozinha.piso.valor +
                selCozinha.revestimento.valor +
                selCozinha.rodape.valor +
                selLavanderia.forro.valor +
                selLavanderia.bancada.valor +
                selLavanderia.piso.valor +
                selLavanderia.revestimento.valor +
                selLavanderia.soleira.valor +
                selLavanderia.rodape.valor +
                selLavabo.forro.valor +
                selLavabo.bancada.valor +
                selLavabo.piso.valor +
                selLavabo.revestimento.valor +
                selLavabo.rodape.valor +
                selBanheiro.forro.valor +
                selBanheiro.bancada.valor +
                selBanheiro.nicho.valor +
                selBanheiro["parede nicho"].valor +
                selBanheiro["parede box"].valor +
                selBanheiro["parede fora box"].valor +
                selBanheiro["soleira+tento"].valor +
                selBanheiro["piso fora box"].valor +
                selBanheiro["piso box"].valor +
                selLazer.revestimento.valor +
                selLazer.bancada.valor +
                selSuite.forro.valor +
                selSuite.piso.valor +
                selSuite.rodape.valor +
                selEscada.revestimento.valor +
                selEscada.piso.valor +
                selEscada["borda acabamento"].valor
            )}
          </em>
        </h2>
        <div>
          <p>{nome ? nome : "Assinatura do cliente"}</p>
        </div>
      </Relatorio>
    </>
  );
}

export default Home;
