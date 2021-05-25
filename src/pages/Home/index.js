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
import imgSala2 from "../../assets/sala2.jpg";
import imgCozinha from "../../assets/cozinha.jpg";
import imgCozinha2 from "../../assets/cozinha2.jpg";
import imgLavanderia from "../../assets/lavanderia.jpg";
import imgLavabo from "../../assets/lavabo.jpg";
import imgBanheiro from "../../assets/banheiro.jpg";
import imgLazer from "../../assets/lazer.jpg";
import imgSuite from "../../assets/suite.jpg";
import imgEscada from "../../assets/escada.jpg";
import imgMetais from "../../assets/metais.jpg";
import imgCubas from "../../assets/cubas.jpg";
import imgAr from "../../assets/ar-condicionado.jpg";
import imgAutomacao from "../../assets/automacao-residencial.jpg";
import imgLogo from "../../assets/logo.png";
import { itens } from "../../data/itens";

function Home() {
  const comodoRef = useRef();
  const refInputNome = useRef();

  const salaRodapeRef = useRef();
  const cozinhaRodapeRef = useRef();
  const lavanderiaRodapeRef = useRef();
  const lavaboRodapeRef = useRef();
  const suiteRodapeRef = useRef();

  const banheiroTentoRef = useRef();
  const banheiroNichoRef = useRef();
  const banheiroBancadaRef = useRef();

  const [imagem, setImagem] = useState(imgSala2);
  const [isBalcaoSala, setIsBalcaoSala] = useState(false);

  const [selCozinha, setSelCozinha] = useState({
    tipoBancada: "bancada ilha",
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
    ["nicho 88X48CM"]: { valor: 0 },
    ["parede nicho"]: { valor: 0 },
    ["parede box"]: { valor: 0 },
    ["parede fora box"]: { valor: 0 },
    ["soleira"]: { valor: 0 },
    ["tento"]: { valor: 0 },
    ["piso fora box"]: { valor: 0 },
    ["piso box"]: { valor: 0 },
  });

  const [selLazer, setSelLazer] = useState({
    bancada: { valor: 0 },
    spa: { valor: 0 },
    churrasqueira: { valor: 0 },
    ["acabamento spa"]: { valor: 0 },
    revestimento: { valor: 0 },
  });

  const [selSuite, setSelSuite] = useState({
    forro: { valor: 0 },
    piso: { valor: 0 },
    rodape: { valor: 0 },
  });

  const [selEscada, setSelEscada] = useState({
    cascata: { valor: 0 },
    piso: { valor: 0 },
    ["borda acabamento"]: { valor: 0 },
  });

  const [selMetais, setSelMetais] = useState({
    ["kit metais"]: { valor: 0 },
  });

  const [selCubas, setSelCubas] = useState({
    ["kit cubas"]: { valor: 0 },
  });

  const [selArCondicionado, setSelArCondicionado] = useState({
    ["ar condicionado"]: { valor: 0 },
  });

  const [selAutomacao, setSelAutomacao] = useState({
    ["kit automação"]: { valor: 0 },
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
      tipoBancada: "bancada ilha",
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
      ["nicho 88X48CM"]: { valor: 0 },
      ["parede nicho"]: { valor: 0 },
      ["parede box"]: { valor: 0 },
      ["parede fora box"]: { valor: 0 },
      ["soleira"]: { valor: 0 },
      ["tento"]: { valor: 0 },
      ["piso fora box"]: { valor: 0 },
      ["piso box"]: { valor: 0 },
    });

    setSelLazer({
      bancada: { valor: 0 },
      spa: { valor: 0 },
      churrasqueira: { valor: 0 },
      ["acabamento spa"]: { valor: 0 },
      revestimento: { valor: 0 },
    });

    setSelSuite({
      forro: { valor: 0 },
      piso: { valor: 0 },
      rodape: { valor: 0 },
    });

    setSelEscada({
      cascata: { valor: 0 },
      piso: { valor: 0 },
      ["borda acabamento"]: { valor: 0 },
    });

    setSelMetais({
      ["kit metais"]: { valor: 0 },
    });

    setSelCubas({
      ["kit cubas"]: { valor: 0 },
    });

    setSelArCondicionado({
      ["ar condicionado"]: { valor: 0 },
    });

    setSelAutomacao({
      ["kit automação"]: { valor: 0 },
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
    if (e.target.id.includes("piso")) {
      const { options } = cozinhaRodapeRef.current;
      let option = undefined;
      if (e.target.value === "") {
        for (let i = 0; i < options.length; i++) {
          options[i].disabled = false;
        }
        setSelCozinha({
          ...selCozinha,
          rodape: { valor: 0 },
          [e.target.id]: { valor: 0 },
        });
        return;
      }
      for (let i = 0; i < options.length; i++) {
        options[i].disabled = false;
        if (
          !options[i].textContent.includes(
            JSON.parse(e.target.value).descricao.split(" ").shift()
          ) &&
          !options[i].textContent.includes("PVC")
        ) {
          options[i].disabled = true;
          // salaRodapeRef.current.remove(i);
        } else if (!option) option = options[i];
      }
      console.log(option);
      setSelCozinha({
        ...selCozinha,
        rodape: JSON.parse(option.value),
        [e.target.id]: e.target.value
          ? JSON.parse(e.target.value)
          : { valor: 0 },
      });
    } else {
      if (e.target.id.includes("bancada")) {
        setSelCozinha({
          ...selCozinha,
          bancada: e.target.value ? JSON.parse(e.target.value) : { valor: 0 },
        });
      } else {
        setSelCozinha({
          ...selCozinha,
          [e.target.id]: e.target.value
            ? JSON.parse(e.target.value)
            : { valor: 0 },
        });
      }
    }
  };

  const handleTipoBancada = (e) => {
    setSelCozinha({
      ...selCozinha,
      bancada: { valor: 0 },
      tipoBancada:
        selCozinha.tipoBancada === "bancada ilha"
          ? "bancada balcão"
          : "bancada ilha",
    });
    setShowMenus({ cozinha: true });
  };

  const handleTipoSala = (e) => {
    setIsBalcaoSala(!isBalcaoSala);
    setShowMenus({ sala: true });
  };

  const handleSala = (e) => {
    if (e.target.id.includes("piso")) {
      const { options } = salaRodapeRef.current;
      let option = undefined;
      if (e.target.value === "") {
        for (let i = 0; i < options.length; i++) {
          options[i].disabled = false;
        }
        setSelSala({
          ...selSala,
          rodape: { valor: 0 },
          [e.target.id]: { valor: 0 },
        });
        return;
      }
      for (let i = 0; i < options.length; i++) {
        options[i].disabled = false;
        if (
          !options[i].textContent.includes(
            JSON.parse(e.target.value).descricao.split(" ").shift()
          ) &&
          !options[i].textContent.includes("PVC")
        ) {
          options[i].disabled = true;
          // salaRodapeRef.current.remove(i);
        } else if (!option) option = options[i];
      }
      console.log(option);
      setSelSala({
        ...selSala,
        rodape: JSON.parse(option.value),
        [e.target.id]: e.target.value
          ? JSON.parse(e.target.value)
          : { valor: 0 },
      });
    } else {
      setSelSala({
        ...selSala,
        [e.target.id]: e.target.value
          ? JSON.parse(e.target.value)
          : { valor: 0 },
      });
    }
  };

  const handleLavanderia = (e) => {
    if (e.target.id.includes("piso")) {
      const { options } = lavanderiaRodapeRef.current;
      let option = undefined;
      if (e.target.value === "") {
        for (let i = 0; i < options.length; i++) {
          options[i].disabled = false;
        }
        setSelLavanderia({
          ...selLavanderia,
          rodape: { valor: 0 },
          [e.target.id]: { valor: 0 },
        });
        return;
      }
      for (let i = 0; i < options.length; i++) {
        options[i].disabled = false;
        if (
          !options[i].textContent.includes(
            JSON.parse(e.target.value).descricao.split(" ").shift()
          ) &&
          !options[i].textContent.includes("PVC")
        ) {
          options[i].disabled = true;
          // salaRodapeRef.current.remove(i);
        } else if (!option) option = options[i];
      }
      console.log(option);
      setSelLavanderia({
        ...selLavanderia,
        rodape: JSON.parse(option.value),
        [e.target.id]: e.target.value
          ? JSON.parse(e.target.value)
          : { valor: 0 },
      });
    } else {
      setSelLavanderia({
        ...selLavanderia,
        [e.target.id]: e.target.value
          ? JSON.parse(e.target.value)
          : { valor: 0 },
      });
    }
  };

  const handleLavabo = (e) => {
    if (e.target.id.includes("piso")) {
      const { options } = lavaboRodapeRef.current;
      let option = undefined;
      if (e.target.value === "") {
        for (let i = 0; i < options.length; i++) {
          options[i].disabled = false;
        }
        setSelLavabo({
          ...selLavabo,
          rodape: { valor: 0 },
          [e.target.id]: { valor: 0 },
        });
        return;
      }
      for (let i = 0; i < options.length; i++) {
        options[i].disabled = false;
        if (
          !options[i].textContent.includes(
            JSON.parse(e.target.value).descricao.split(" ").shift()
          ) &&
          !options[i].textContent.includes("PVC")
        ) {
          options[i].disabled = true;
          // salaRodapeRef.current.remove(i);
        } else if (!option) option = options[i];
      }
      console.log(option);
      setSelLavabo({
        ...selLavabo,
        rodape: JSON.parse(option.value),
        [e.target.id]: e.target.value
          ? JSON.parse(e.target.value)
          : { valor: 0 },
      });
    } else {
      setSelLavabo({
        ...selLavabo,
        [e.target.id]: e.target.value
          ? JSON.parse(e.target.value)
          : { valor: 0 },
      });
    }
  };

  const handleBanheiro = (e) => {
    if (e.target.id.includes("soleira")) {
      const { options } = banheiroTentoRef.current;
      const { options: options2 } = banheiroNichoRef.current;
      const { options: options3 } = banheiroBancadaRef.current;
      // const { options } = banheiroBancadaRef.current;
      let option = undefined;
      let option2 = undefined;
      let option3 = undefined;
      if (e.target.value === "") {
        for (let i = 0; i < options.length; i++) {
          options[i].disabled = false;
          options2[i].disabled = false;
          options3[i].disabled = false;
        }
        setSelBanheiro({
          ...selBanheiro,
          tento: { valor: 0 },
          ["nicho 88X48CM"]: { valor: 0 },
          bancada: { valor: 0 },
          [e.target.id]: { valor: 0 },
        });
        return;
      }
      for (let i = 0; i < options.length; i++) {
        options[i].disabled = false;
        options2[i].disabled = false;
        options3[i].disabled = false;
        if (i !== e.target.selectedIndex) {
          options[i].disabled = true;
          options2[i].disabled = true;
          options3[i].disabled = true;
        } else if (!option) {
          option = options[i];
          option2 = options2[i];
          option3 = options3[i];
        }
      }
      setSelBanheiro({
        ...selBanheiro,
        tento: JSON.parse(option?.value),
        ["nicho 88X48CM"]: JSON.parse(option2?.value),
        bancada: JSON.parse(option3?.value),
        [e.target.id]: e.target.value
          ? JSON.parse(e.target.value)
          : { valor: 0 },
      });
    } else {
      setSelBanheiro({
        ...selBanheiro,
        [e.target.id]: e.target.value
          ? JSON.parse(e.target.value)
          : { valor: 0 },
      });
    }
  };

  const handleLazer = (e) => {
    setSelLazer({
      ...selLazer,
      [e.target.id]: e.target.value ? JSON.parse(e.target.value) : { valor: 0 },
    });
  };

  const handleSuite = (e) => {
    if (e.target.id.includes("piso")) {
      const { options } = suiteRodapeRef.current;
      let option = undefined;
      if (e.target.value === "") {
        for (let i = 0; i < options.length; i++) {
          options[i].disabled = false;
        }
        setSelSuite({
          ...selSuite,
          rodape: { valor: 0 },
          [e.target.id]: { valor: 0 },
        });
        return;
      }
      for (let i = 0; i < options.length; i++) {
        options[i].disabled = false;
        if (
          !options[i].textContent.includes(
            JSON.parse(e.target.value).descricao.split(" ").shift()
          ) &&
          !options[i].textContent.includes("PVC")
        ) {
          options[i].disabled = true;
          // salaRodapeRef.current.remove(i);
        } else if (!option) option = options[i];
      }
      setSelSuite({
        ...selSuite,
        rodape: JSON.parse(option.value),
        [e.target.id]: e.target.value
          ? JSON.parse(e.target.value)
          : { valor: 0 },
      });
    } else {
      setSelSuite({
        ...selSuite,
        [e.target.id]: e.target.value
          ? JSON.parse(e.target.value)
          : { valor: 0 },
      });
    }
  };

  const handleEscada = (e) => {
    setSelEscada({
      ...selEscada,
      [e.target.id]: e.target.value ? JSON.parse(e.target.value) : { valor: 0 },
    });
  };

  const handleMetais = (e) => {
    setSelMetais({
      ...selMetais,
      [e.target.id]: e.target.value ? JSON.parse(e.target.value) : { valor: 0 },
    });
  };

  const handleArCondicionado = (e) => {
    setSelArCondicionado({
      ...selArCondicionado,
      [e.target.id]: e.target.value ? JSON.parse(e.target.value) : { valor: 0 },
    });
  };

  const handleAutomacao = (e) => {
    setSelAutomacao({
      ...selAutomacao,
      [e.target.id]: e.target.value ? JSON.parse(e.target.value) : { valor: 0 },
    });
  };

  const handleCubas = (e) => {
    setSelCubas({
      ...selCubas,
      [e.target.id]: e.target.value ? JSON.parse(e.target.value) : { valor: 0 },
    });
  };

  useEffect(() => {
    const imageList = [
      imgSala,
      imgSala2,
      imgCozinha,
      imgLavanderia,
      imgLavabo,
      imgBanheiro,
      imgLazer,
      imgSuite,
      imgEscada,
      imgMetais,
      imgCubas,
      imgAr,
      imgAutomacao,
    ];
    imageList.forEach((image) => {
      new Image().src = image;
    });
  }, []);

  useEffect(() => {
    switch (Object.keys(showMenus)[0]) {
      case "sala":
        setImagem(isBalcaoSala ? imgSala : imgSala2);
        break;
      case "cozinha":
        setImagem(
          selCozinha.tipoBancada === "bancada ilha" ? imgCozinha2 : imgCozinha
        );
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
      case "metais":
        setImagem(imgMetais);
        break;
      case "cubas":
        setImagem(imgCubas);
        break;
      case "ar":
        setImagem(imgAr);
        break;
      case "automacao":
        setImagem(imgAutomacao);
        break;

      default:
        break;
    }
  }, [showMenus]);

  const calcularTotal = () => {
    let soma = 0.0;
    Object.keys(selSala).forEach((key) => (soma += selSala[key].valor));
    Object.keys(selCozinha).forEach(
      (key) => (soma += selCozinha[key].valor ? selCozinha[key].valor : 0)
    );
    Object.keys(selLavanderia).forEach(
      (key) => (soma += selLavanderia[key].valor)
    );
    Object.keys(selLavabo).forEach((key) => (soma += selLavabo[key].valor));
    Object.keys(selBanheiro).forEach((key) => (soma += selBanheiro[key].valor));
    Object.keys(selLazer).forEach((key) => (soma += selLazer[key].valor));
    Object.keys(selSuite).forEach((key) => (soma += selSuite[key].valor));
    Object.keys(selEscada).forEach((key) => (soma += selEscada[key].valor));
    Object.keys(selMetais).forEach((key) => (soma += selMetais[key].valor));
    Object.keys(selCubas).forEach((key) => (soma += selCubas[key].valor));
    Object.keys(selArCondicionado).forEach(
      (key) => (soma += selArCondicionado[key].valor)
    );
    Object.keys(selAutomacao).forEach(
      (key) => (soma += selAutomacao[key].valor)
    );
    // Object.keys(selLavanderia).forEach((key) => (soma += selLavanderia[key].valor));
    // soma +=
    // selSala.forro.valor +
    // selSala.piso.valor +
    // selSala.rodape.valor +
    // selCozinha.forro.valor +
    // selCozinha.bancada.valor +
    // selCozinha.piso.valor +
    // selCozinha.revestimento.valor +
    // selCozinha.rodape.valor +
    // selLavanderia.forro.valor +
    // selLavanderia.bancada.valor +
    // selLavanderia.piso.valor +
    // selLavanderia.revestimento.valor +
    // selLavanderia.soleira.valor +
    // selLavanderia.rodape.valor +
    // selLavabo.forro.valor +
    // selLavabo.bancada.valor +
    // selLavabo.piso.valor +
    // selLavabo.revestimento.valor +
    // selLavabo.rodape.valor +
    // selBanheiro.forro.valor +
    // selBanheiro.bancada.valor +
    // selBanheiro.nicho.valor +
    // selBanheiro["parede nicho"].valor +
    // selBanheiro["parede box"].valor +
    // selBanheiro["parede fora box"].valor +
    // selBanheiro["soleira"].valor +
    // selBanheiro["piso fora box"].valor +
    // selBanheiro["piso box"].valor +
    // selLazer.revestimento.valor +
    // selLazer.bancada.valor +
    // selSuite.forro.valor +
    // selSuite.piso.valor +
    // selSuite.rodape.valor +
    // selEscada.revestimento.valor +
    // selEscada.piso.valor +
    // selEscada["borda acabamento"].valor +
    // selMetais["kit metais"].valor;

    return soma;
  };

  return (
    <>
      <Container>
        <img src={imgLogo} />
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
            {showMenus.sala && (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  onChange={handleTipoSala}
                >
                  <input
                    id="sala-ilha"
                    name="ilha-balcao-sala"
                    type="radio"
                    checked={!isBalcaoSala}
                    value="bancada ilha sala"
                  />
                  &nbsp;
                  <label for="sala-ilha">Com ilha</label>
                  &nbsp;&nbsp;&nbsp;
                  <input
                    id="sala-balcao"
                    name="ilha-balcao-sala"
                    type="radio"
                    value="bancada balcão sala"
                  />
                  &nbsp;
                  <label for="sala-balcao">Com balcão</label>
                </div>
                {itens.sala.map((i) => (
                  <div>
                    <label style={{ textTransform: "capitalize" }}>
                      {Object.keys(i)}
                    </label>
                    <select
                      ref={
                        Object.keys(i).includes("rodape") ? salaRodapeRef : null
                      }
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
              </>
            )}
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
            {showMenus.cozinha && (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    onChange={handleTipoBancada}
                  >
                    <input
                      id="bancada-ilha"
                      name="ilha-balcao-cozinha"
                      type="radio"
                      checked={
                        selCozinha.tipoBancada === "bancada ilha" ? true : false
                      }
                      value="bancada ilha"
                    />
                    &nbsp;
                    <label for="bancada-ilha">Com ilha</label>
                    &nbsp;&nbsp;&nbsp;
                    <input
                      id="bancada-balcao"
                      name="ilha-balcao-cozinha"
                      type="radio"
                      value="bancada balcão"
                    />
                    &nbsp;
                    <label for="bancada-balcao">Com balcão</label>
                  </div>
                </div>
                {itens.cozinha.map((i) => (
                  <>
                    {(Object.keys(i)[0].includes("bancada ilha") &&
                      selCozinha.tipoBancada !== "bancada ilha") ||
                    (Object.keys(i)[0].includes("bancada balcão") &&
                      selCozinha.tipoBancada !== "bancada balcão") ? null : (
                      <div>
                        <label style={{ textTransform: "capitalize" }}>
                          {Object.keys(i)}
                        </label>
                        <select
                          id={Object.keys(i)}
                          value={JSON.stringify(selCozinha[Object.keys(i)])}
                          onChange={handleCozinha}
                          ref={
                            Object.keys(i).includes("rodape")
                              ? cozinhaRodapeRef
                              : null
                          }
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
                    )}
                  </>
                ))}
              </>
            )}

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
                    ref={
                      Object.keys(i).includes("rodape")
                        ? lavanderiaRodapeRef
                        : null
                    }
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
                    ref={
                      Object.keys(i).includes("rodape") ? lavaboRodapeRef : null
                    }
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
                    ref={
                      Object.keys(i).includes("tento")
                        ? banheiroTentoRef
                        : Object.keys(i).includes("nicho 88X48CM")
                        ? banheiroNichoRef
                        : Object.keys(i).includes("bancada")
                        ? banheiroBancadaRef
                        : null
                    }
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
                  selBanheiro["nicho 88X48CM"].valor +
                  selBanheiro["parede nicho"].valor +
                  selBanheiro["parede box"].valor +
                  selBanheiro["parede fora box"].valor +
                  selBanheiro["soleira"].valor +
                  selBanheiro["tento"].valor +
                  selBanheiro["piso fora box"].valor +
                  selBanheiro["piso box"].valor
              )}
            </h3>
          </article>
          <article>
            <h1 onClick={() => setShowMenus({ lazer: true })}>Gourmet</h1>
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
                0 +
                  selLazer.revestimento.valor +
                  selLazer.spa.valor +
                  selLazer.bancada.valor +
                  selLazer["acabamento spa"].valor +
                  selLazer.churrasqueira.valor
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
                    ref={
                      Object.keys(i).includes("rodape") ? suiteRodapeRef : null
                    }
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
                  selEscada.cascata.valor +
                  selEscada.piso.valor +
                  selEscada["borda acabamento"].valor
              )}
            </h3>
          </article>
          <article>
            <h1 onClick={() => setShowMenus({ cubas: true })}>Cubas</h1>
            {showMenus.cubas &&
              itens.cubas.map((i) => (
                <div>
                  <label style={{ textTransform: "capitalize" }}>
                    {Object.keys(i)}
                  </label>
                  <select
                    id={Object.keys(i)}
                    value={JSON.stringify(selCubas[Object.keys(i)])}
                    onChange={handleCubas}
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
              }).format(0 + selCubas["kit cubas"].valor)}
            </h3>
          </article>
          <article>
            <h1 onClick={() => setShowMenus({ metais: true })}>
              Louças e Metais
            </h1>
            {showMenus.metais &&
              itens.metais.map((i) => (
                <div>
                  <label style={{ textTransform: "capitalize" }}>
                    {Object.keys(i)}
                  </label>
                  <select
                    id={Object.keys(i)}
                    value={JSON.stringify(selMetais[Object.keys(i)])}
                    onChange={handleMetais}
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
              }).format(0 + selMetais["kit metais"].valor)}
            </h3>
          </article>
          <article>
            <h1 onClick={() => setShowMenus({ ar: true })}>Ar Condicionado</h1>
            {showMenus.ar &&
              itens["ar condicionado"].map((i) => (
                <div>
                  <label style={{ textTransform: "capitalize" }}>
                    {Object.keys(i)}
                  </label>
                  <select
                    id={Object.keys(i)}
                    value={JSON.stringify(selArCondicionado[Object.keys(i)])}
                    onChange={handleArCondicionado}
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
              }).format(0 + selArCondicionado["ar condicionado"].valor)}
            </h3>
          </article>
          <article>
            <h1 onClick={() => setShowMenus({ automacao: true })}>Automação</h1>
            {showMenus.automacao &&
              itens["automação"].map((i) => (
                <div>
                  <label style={{ textTransform: "capitalize" }}>
                    {Object.keys(i)}
                  </label>
                  <select
                    id={Object.keys(i)}
                    value={JSON.stringify(selAutomacao[Object.keys(i)])}
                    onChange={handleAutomacao}
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
              }).format(0 + selAutomacao["kit automação"].valor)}
            </h3>
          </article>
          <footer>
            <p>Total geral</p>{" "}
            <h1>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(0 + calcularTotal())}
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
        <h1>ANEXO 1</h1>
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
                    selBanheiro["nicho 88X48CM"].valor +
                    selBanheiro["parede nicho"].valor +
                    selBanheiro["parede box"].valor +
                    selBanheiro["parede fora box"].valor +
                    selBanheiro["soleira"].valor +
                    selBanheiro["tento"].valor +
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
                GOURMET
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
                    <td>
                      {item === "churrasqueira" &&
                      !selLazer[item].descricao.includes(
                        "Sem Churrasqueira"
                      ) ? (
                        <>
                          <li>
                            {" "}
                            01 CAIXA DE QUEIMA TIPO COOK TOP EM CHASSIS DE INOX
                            COM REVESTIMENTO INTERNO COM LA CERÂMICA E PLAQUETAS
                            REFRATARIAS
                          </li>
                          <li>
                            {" "}
                            LÃ CERÂMICA PARA ISOLAMENTO TÉRMICO ENTRE A CAIXA DE
                            QUEIMA E O GRANITO.
                          </li>
                          <li>
                            {" "}
                            LÃ CERÂMICA PARA EVOLVER A CAIXA DE QUEIMA
                            EXTERNAMENTE PARA PROTEÇÃO DE ARMÁRIO EMBUTIDO (CASO
                            O CONSUMIDO VENHA A INSTALAR)
                          </li>
                          <li>
                            {" "}
                            01 JOGO DE MÃO FRANCESA COM PARAFUSOS COM BUCHAS
                            PARA APOIO DA MÃO FRANCESA (A DESCARGA DE PESO E
                            SOBRE A MÃO FRANCESA E NÃO SOBRE O GRANITO)
                          </li>
                          <li>
                            {" "}
                            01 SUPORTE DE GRELHA E ESPETOS EM INOX COM 03 NÍVEIS
                            DE ALTURA: CONTENDO: 05 ESPETOS MEIA GRELHA
                            ARGENTINA E MEIA GRELHA MOEDA.
                          </li>
                          <li>
                            {" "}
                            01 COIFA DE AÇO GALVANIZADO COM PINTURA
                            ELETROSTÁTICA PRETA
                          </li>
                          <li>
                            {" "}
                            01 KIT ILUMINAÇÃO COM CHICOTE E 02 LÂMPADA DE LED
                          </li>
                          <li>
                            {" "}
                            01 KIT CANALETA A SER INSTALADA NA COIFA E NO
                            GRANITO PARA INSTALAÇÃO DE VIDRO
                          </li>
                          <li> 01 VIDRO TEMPERADO DE 10MM INCOLOR</li>
                          <li>
                            {" "}
                            05 METROS LINEARES DE TUBO DE 10” GALVANIZADOS EM
                            PINTURA ELETROSTÁTICA PRETA
                          </li>
                          <li>
                            {" "}
                            02 CURVAS 45 GRAUS DE DE 10” GALVANIZADOS EM PINTURA
                            ELETROSTÁTICA PRETA
                          </li>
                          <li>
                            {" "}
                            02 ABRAÇADEIRAS EM PINTURA ELETROSTÁTICA PRETA
                          </li>
                          <li>
                            {" "}
                            04 PARAFUSOS E BUCHAS PARA FIXAÇÃO DAS ABRAÇADEIRAS
                          </li>
                          <li>
                            {" "}
                            01 CHAPÉU CHINÊS DE 10” GALVANIZADOS EM PINTURA
                            ELETROSTÁTICA PRETA
                          </li>
                          <li> FRETE DE ENTREGA</li>
                          <li> MÃO DE OBRA DE INSTALAÇÃO</li>
                          <li>
                            {" "}
                            EQUIPAMENTOS PARA INSTALAÇÃO, ESCADAS ANDAIMES.
                          </li>
                        </>
                      ) : (
                        selLazer[item].descricao
                      )}
                    </td>
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
                  0 +
                    selLazer.revestimento.valor +
                    selLazer.spa.valor +
                    selLazer.churrasqueira.valor +
                    selLazer.bancada.valor +
                    selLazer["acabamento spa"].valor
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
                    selEscada.cascata.valor +
                    selEscada.piso.valor +
                    selEscada["borda acabamento"].valor
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th style={{ fontSize: 10 }} colSpan="5">
                CUBAS
              </th>
            </tr>
            <tr>
              <th width="15%">Item</th>
              <th width="60%">Descrição</th>
              <th width="25%">Valor</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(selCubas).map((item) => {
              if (selCubas[item].descricao)
                return (
                  <tr>
                    <td>{item}</td>
                    <td>
                      {!selCubas[item].descricao.includes("Sem") ? (
                        <>
                          <li>
                            VALVULA AMERICANA 3 1/2 PINO PLASTICO INOX-PVC{" "}
                          </li>
                          <li>
                            N334F17 CUBA DUPLA RETANGULAR AÇO INOX LUXO AISI304
                            0,82x0,34x0,17CM ACAB. ALTO BRILHO, MANTA ANTI-RUIDO
                            E FURO DE 3 1/2
                          </li>
                          <li>
                            VALVULA AMERICANA 3 1/2 PINO PLASTICO INOX-PVC
                          </li>
                          <li>
                            TANQUE AÇO INOX LUXO AISI304 S-400 0,40X0,40X0,20CM
                            ACAB. ALTO BRILHO E FURO DE 1 1/4
                          </li>
                          <li>VALVULA TANQUE LATÃO CROMADO 1 1/4</li>
                        </>
                      ) : (
                        selCubas[item].descricao
                      )}
                    </td>
                    <td>
                      {Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(selCubas[item].valor)}
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
                }).format(0 + selCubas["kit cubas"].valor)}
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th style={{ fontSize: 10 }} colSpan="5">
                METAIS
              </th>
            </tr>
            <tr>
              <th width="15%">Item</th>
              <th width="60%">Descrição</th>
              <th width="25%">Valor</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(selMetais).map((item) => {
              if (selMetais[item].descricao)
                return (
                  <>
                    <tr>
                      <td>{item}</td>
                      <td>
                        {!selMetais[item].descricao.includes("Sem") ? (
                          <>
                            <li>
                              C378770001 - CJ BACIA COM CAIXA INSPIRA ROUND BR
                            </li>
                            <li>
                              1730250013300 - CUBA SEMIENC 410X410 C/MES BASIC
                              Q2 BR
                            </li>
                            <li>
                              B5000CVCR0 - MONOC COZ MESA BICA M. 2 F GOURMET CE
                              CR
                            </li>
                            <li>B5005C7CRB - TORN COZ PAREDE A.ART BASIC CR</li>
                            <li>
                              B5001CUCR0 - TORN LAV MESA B ALTA NORONHA CR
                            </li>
                            <li>B5000CUCR0 - TORN LAV MESA BB NORONHA CR</li>
                            <li>B5002CUCR0 - MONOC LAV MESA BB NORONHA CR</li>
                            <li>B5005CUCR0 - ACAB MONOC DUCHA NORONHA CR</li>
                            <li>B5007CUCR0 - BASE MONOC CHUVEIRO NOR/RIV CR</li>
                            <li>
                              B5007CYCRB - ACAB REG BASE REF 1/2, 3/4, 1 LIKE CR
                            </li>
                          </>
                        ) : (
                          selMetais[item].descricao
                        )}
                      </td>
                      <td>
                        {Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(selMetais[item].valor)}
                      </td>
                    </tr>
                  </>
                );
            })}
            <tr>
              <td style={{ border: "none" }}></td>
              <td style={{ border: "none", textAlign: "right" }}>Total</td>
              <td>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(0 + selMetais["kit metais"].valor)}
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th style={{ fontSize: 10 }} colSpan="5">
                AR CONDICIONADO
              </th>
            </tr>
            <tr>
              <th width="15%">Item</th>
              <th width="60%">Descrição</th>
              <th width="25%">Valor</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(selArCondicionado).map((item) => {
              if (selArCondicionado[item].descricao)
                return (
                  <tr>
                    <td>{item}</td>
                    <td>
                      {!selArCondicionado[item].descricao.includes("Sem") ? (
                        <>
                          <strong>
                            {selArCondicionado[item].descricao.toUpperCase()}
                          </strong>
                          <br />
                          SERVIÇO DE INSTALAÇÃO:
                          <br />
                          <li>
                            {" "}
                            FORNECIMENTO E INSTALAÇÃO DE LINHAS FRIGORÍGENAS
                            ISOLADAS, COM CABO PP;
                          </li>
                          <li>
                            {" "}
                            LIMPEZA, TESTE DE PRESSURIZAÇÃO E ESTANQUEIDADE DAS
                            LINHAS FRIGORÍGENAS;
                          </li>
                          <li>
                            {" "}
                            REALIZAR VÁCUO E CARGA DE GÁS NO SISTEMA (SE
                            NECESSÁRIO);
                          </li>
                          <li>
                            {" "}
                            INSTALAÇÃO DA CONDENSADORA COM SUPORTE REFORÇADO E
                            PINTADO COM TINTA EPÓXI-PÓ OU COXINS DE BORRACHAS
                            (FORNECIMENTO DE PONTO DE ENERGIA ELÉTRICA POR CONTA
                            DO CONTRATANTE);
                          </li>
                          <li> INSTALAÇÃO DAS EVAPORADORAS E ALINHAMENTO;</li>
                          <li>
                            {" "}
                            CONEXÃO DOS DRENOS AOS PONTOS DISPONÍVEIS, PRÓXIMOS
                            ÀS EVAPORADORAS (NÃO INCLUSO O FORNECIMENTO E
                            EXECUÇÃO DA REDE DE DRENO);
                          </li>
                          <li> START-UP DO(S) EQUIPAMENTO(S);</li>
                          <li> ANÁLISE DE RENDIMENTO.</li>
                          <li> INFORMAÇÕES BÁSICAS DE FUNCIONAMENTO.</li>
                          <li> INSTALAÇÃO DAS EVAPORADORAS E ALINHAMENTO;</li>
                          <li>
                            {" "}
                            CONDIÇÕES COMERCIAIS: IMPOSTOS E ENCARGOS
                            TRABALHISTAS INCLUSOS. TÉCNICOS CERTIFICADOS PELOS
                            PRINCIPAIS FABRICANTES E EM DIA COM AS NORMAS DE
                            SEGURANÇA VIGENTE. GARANTIA: 90 DIAS OU CONFORME A
                            DO FABRICANTE MEDIANTE A CONTRATO DE MANUTENÇÃO
                            PREVENTIVA.
                          </li>
                          <li>
                            Elétrica - MATERIAL E MÃO DE OBRA PARA ALIMENTAÇÃO
                            ELÉTRICA DA CONDENSADORA
                          </li>
                          <li>
                            Hidráulica - MATERIAL E MÃO DE OBRA PARA TUBOS DE
                            DRENAGEM DAS EVAPORADORAS{" "}
                          </li>
                        </>
                      ) : (
                        selArCondicionado[item].descricao
                      )}
                    </td>
                    <td>
                      {Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(selArCondicionado[item].valor)}
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
                }).format(0 + selArCondicionado["ar condicionado"].valor)}
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th style={{ fontSize: 10 }} colSpan="5">
                AUTOMAÇÃO
              </th>
            </tr>
            <tr>
              <th width="15%">Item</th>
              <th width="60%">Descrição</th>
              <th width="25%">Valor</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(selAutomacao).map((item) => {
              if (selAutomacao[item].descricao)
                return (
                  <tr>
                    <td>{item}</td>
                    <td>
                      {selAutomacao[item].descricao.includes("Ligth") ? (
                        <>
                          <li>ROTEADOR </li>
                          <li>ACCESS POINT</li>
                          <li>CABO DE INTERNET 30m</li>
                          <li>INTERRUPTOR 1 TECLA</li>
                          <li>INTERRUPTOR 2 TECLAS</li>
                          <li>INTERRUPTOR 3 TECLAS</li>
                          <li>FECHADURA YALE- YRD 256</li>
                        </>
                      ) : selAutomacao[item].descricao.includes("Premium") ? (
                        <>
                          <li>ROTEADOR </li>
                          <li>ACCESS POINT</li>
                          <li>CABO DE INTERNET 30m</li>
                          <li>INTERRUPTOR Wi-Fi 1 TECLA</li>
                          <li>INTERRUPTOR Wi-Fi 2 TECLAS</li>
                          <li>INTERRUPTOR Wi-Fi 3 TECLAS </li>
                          <li>FECHADURA YALE- YRD 256</li>
                          <li>PERSIANA 2,31 (L) X 2,65 (H)</li>
                          <li>PERSIANA 0,90 (L) X 2,65 (H):</li>
                          <li>MÓDULO YALE CONNECT HUB</li>
                          <li>ECHO DOT ALEXA</li>
                          <li>SMART CONTROLE UNIVERSAL</li>
                        </>
                      ) : (
                        selAutomacao[item].descricao
                      )}
                    </td>
                    <td>
                      {Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(selAutomacao[item].valor)}
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
                }).format(0 + selAutomacao["kit automação"].valor)}
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
            }).format(0 + calcularTotal())}
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
