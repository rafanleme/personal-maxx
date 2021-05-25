const pedido = {
  cozinha: [],
  sala: [],
  lavabo: [],
  suite: [],
  banheiro: [],
  lavanderia: [],
};

export const itens = {
  sala: [
    {
      forro: [
        {
          descricao: "Forro Acartonado Tabicado com pintura Branco Neve",
          valor: 2716.35,
        },
        {
          descricao: "Sem forro",
          valor: 0,
        },
      ],
    },
    {
      piso: [
        {
          descricao: "Adhara PO- 60x60cm",
          valor: 4351.85,
        },
        {
          descricao: "Munari Cimento59x59cm",
          valor: 3674.82,
        },
        {
          descricao: "Reserva Natural MA19x90,2cm",
          valor: 4022.59,
        },
        {
          descricao: "Bosco Camel MA19x90,2cm",
          valor: 3986.68,
        },
      ],
    },
    {
      rodape: [
        {
          descricao: "Adhara PO- 60x60cm (H=15cm)",
          valor: 611.0,
        },
        {
          descricao: "Munari Cimento- 59x59cm",
          valor: 550.92,
        },
        {
          descricao: "Reserva Natural MA19x90,2cm (H=15cm)",
          valor: 574.87,
        },
        {
          descricao: "Bosco Camel MA- 19x90,2cm (H=15cm)",
          valor: 571.82,
        },
        {
          descricao: "PVC Wood- Branco 15cm",
          valor: 772.13,
        },
      ],
    },
  ],
  cozinha: [
    {
      forro: [
        {
          descricao: "Forro Acartonado Tabicado com pintura Branco Neve",
          valor: 2445.14,
        },
        {
          descricao: "Sem forro",
          valor: 0,
        },
      ],
    },
    {
      revestimento: [
        {
          descricao: "Marmo Branco PO 120x120cm",
          valor: 1797.99,
        },
        {
          descricao: "Cubic White AC 45x90cm",
          valor: 1230.43,
        },
        {
          descricao: "Cubic Black AC 45x90cm",
          valor: 1354.33,
        },
        {
          descricao: "Metro White AC 10x20cm",
          valor: 1039.13,
        },
      ],
    },
    {
      ["bancada balcão"]: [
        {
          descricao: "Pedra (saia 6cm frontão 10cm)-Branco Paraná",
          valor: 10529.24,
        },
        {
          descricao: "Pedra (saia 6cm frontão 10cm)-Branco Siena",
          valor: 5417.42,
        },
        {
          descricao: "Pedra (saia 6cm frontão 10cm)-Preto São Gabriel",
          valor: 5189.36,
        },
        {
          descricao: "Pedra (saia 6cm frontão 10cm)-Verde Ubatuba",
          valor: 4740.8,
        },
      ],
    },
    {
      ["bancada ilha"]: [
        {
          descricao: "Pedra (sem saia frontão 10cm)-Branco Paraná",
          valor: 10837.6,
        },
        {
          descricao: "Pedra (sem saia frontão 10cm)-Branco Siena",
          valor: 5935.6,
        },
        {
          descricao: "Pedra (sem saia frontão 10cm)-Preto São Gabriel",
          valor: 5563.6,
        },
        {
          descricao: "Pedra (sem saia frontão 10cm)-Verde Ubatuba",
          valor: 5068.96,
        },
      ],
    },
    {
      piso: [
        {
          descricao: "Adhara PO- 60x60cm",
          valor: 3528.76,
        },
        {
          descricao: "Munari Cimento59x59cm",
          valor: 2979.78,
        },
        {
          descricao: "Reserva Natural MA19x90,2cm",
          valor: 3261.78,
        },
        {
          descricao: "Bosco Camel MA19x90,2cm",
          valor: 3232.66,
        },
      ],
    },
    {
      rodape: [
        {
          descricao: "Adhara PO- 60x60cm (H=15cm)",
          valor: 332.84,
        },
        {
          descricao: "Munari Cimento- 59x59cm(H=15cm)",
          valor: 301.89,
        },
        {
          descricao: "Reserva Natural MA- 19x90,2cm(H=15cm)",
          valor: 314.22,
        },
        {
          descricao: "Bosco Camel MA- 19x90,2cm(H=15cm)",
          valor: 312.66,
        },
        {
          descricao: "PVC Wood- Branco 15cm",
          valor: 397.68,
        },
      ],
    },
  ],
  lavanderia: [
    {
      forro: [
        {
          descricao: "Forro Acartonado Tabicado com pintura Branco Neve",
          valor: 568.24,
        },
        {
          descricao: "Sem forro",
          valor: 0,
        },
      ],
    },

    {
      revestimento: [
        {
          descricao: "Marmo Branco PO 120x120cm",
          valor: 1155.5,
        },
        {
          descricao: "Cubic White AC 45x90cm",
          valor: 790.75,
        },
        {
          descricao: "Cubic Black AC 45x90cm",
          valor: 870.37,
        },
        {
          descricao: "Metro White AC 10x20cm",
          valor: 667.81,
        },
      ],
    },
    {
      bancada: [
        {
          descricao: "Pedra (saia 6cm frontão 10cm)- Branco Paraná",
          valor: 3276,
        },
        {
          descricao: "Pedra (saia 6cm frontão 10cm)- Branco Siena",
          valor: 1684,
        },
        {
          descricao: "Pedra (saia 6cm frontão 10cm)- Preto São Gabriel",
          valor: 1759.2,
        },
        {
          descricao: "Pedra (saia 6cm frontão 10cm)- Verde Ubatuba",
          valor: 1544.4,
        },
      ],
    },
    {
      ["soleira"]: [
        {
          descricao: "Soleira em pedra- Branco Paraná",
          valor: 146.6,
        },
        {
          descricao: "Soleira em pedra- Branco Prime",
          valor: 92,
        },
        {
          descricao: "Soleira em pedra- Branco Siena",
          valor: 71,
        },
        {
          descricao: "Soleira em pedra- Preto São Gabriel",
          valor: 64.6,
        },
        {
          descricao: "Soleira em pedra- Verde Ubatuba",
          valor: 57.8,
        },
      ],
    },
    {
      piso: [
        {
          descricao: "Adhara PO- 60x60cm",
          valor: 667.41,
        },
        {
          descricao: "Munari Cimento59x59cm",
          valor: 563.58,
        },
        {
          descricao: "Reserva Natural MA19x90,2cm",
          valor: 616.92,
        },
        {
          descricao: "Bosco Camel MA19x90,2cm",
          valor: 611.41,
        },
      ],
    },
    {
      rodape: [
        {
          descricao: "Adhara PO- 60x60cm (H=15cm)",
          valor: 264.09,
        },
        {
          descricao: "Munari Cimento- 59x59cm(H=15cm)",
          valor: 238.12,
        },
        {
          descricao: "Reserva Natural MA- 19x90,2cm(H=15cm)",
          valor: 248.47,
        },
        {
          descricao: "Bosco Camel MA- 19x90,2cm(H=15cm)",
          valor: 247.15,
        },
      ],
    },
  ],
  lavabo: [
    {
      forro: [
        {
          descricao: "Forro Acartonado Tabicado com pintura Branco Neve",
          valor: 0,
        },
      ],
    },
    {
      revestimento: [
        {
          descricao: "Cubic White AC 45x90cm",
          valor: 281.97,
        },
        {
          descricao: "Cubic Black AC 45x90cm",
          valor: 310.37,
        },
        {
          descricao: "Metro White AC 10x20cm",
          valor: 238.13,
        },
      ],
    },
    {
      bancada: [
        {
          descricao:
            "Pedra pia esculpida (saia 20cm frontão 20cm)- Branco Paraná",
          valor: 3051.6,
        },
        {
          descricao:
            "Pedra pia esculpida (saia 20cm frontão 20cm)- Branco Prime",
          valor: 2484,
        },
        {
          descricao:
            "Pedra pia esculpida (saia 20cm frontão 20cm)- Branco Siena",
          valor: 2256,
        },
        {
          descricao:
            "Pedra pia esculpida (saia 20cm frontão20cm)- Preto São Gabriel",
          valor: 2096.4,
        },
        {
          descricao:
            "Pedra pia esculpida (saia 20cm frontão 20cm)- Verde Ubatuba",
          valor: 1797.6,
        },
      ],
    },
    {
      piso: [
        {
          descricao: "Adhara PO- 60x60cm",
          valor: 313.47,
        },
        {
          descricao: "Munari Cimento59x59cm",
          valor: 264.7,
        },
        {
          descricao: "Reserva Natural MA19x90,2cm",
          valor: 289.75,
        },
        {
          descricao: "Bosco Camel MA19x90,2cm",
          valor: 287.17,
        },
      ],
    },
    {
      rodape: [
        {
          descricao: "Adhara PO- 60x60cm (H=15cm)",
          valor: 202.62,
        },
        {
          descricao: "Munari Cimento- 59x59cm",
          valor: 182.69,
        },
        {
          descricao: "Reserva Natural MA19x90,2cm (H=15cm)",
          valor: 190.64,
        },
        {
          descricao: "Bosco Camel MA- 19x90,2cm (H=15cm)",
          valor: 189.63,
        },
        {
          descricao: "PVC Wood- Branco 15cm",
          valor: 256.05,
        },
      ],
    },
  ],
  banheiro: [
    {
      ["piso fora box"]: [
        {
          descricao: "Munari Cimento59x59cm",
          valor: 949.29,
        },
        {
          descricao: "Adhara PO- 60x60cm",
          valor: 1124.18,
        },
        {
          descricao: "Bosco Camel MA19x90,2cm",
          valor: 1029.13,
        },
        {
          descricao: "Reserva Natural MA19x90,2cm",
          valor: 1039.13,
        },
      ],
    },
    {
      ["piso box"]: [
        {
          descricao: "Munari Cimento59x59cm",
          valor: 605.64,
        },
        {
          descricao: "Bosco Camel MA19x90,2cm",
          valor: 657.03,
        },
        {
          descricao: "Reserva Natural MA19x90,2cm",
          valor: 662.95,
        },
      ],
    },
    {
      ["parede fora box"]: [
        {
          descricao: "Munari Cimento - 59x59cm",
          valor: 5709.48,
        },
        {
          descricao: "Adhara PO - 60x60cm",
          valor: 6761.36,
        },
        {
          descricao: "Bosco Camel MA - 19x90,2cm",
          valor: 6194.02,
        },
        {
          descricao: "Reserva Natural MA - 19x90,2cm",
          valor: 6249.8,
        },
        {
          descricao: "Diamante Branco AC - 30x90cm",
          valor: 5930.53,
        },
      ],
    },
    {
      ["parede box"]: [
        {
          descricao: "Munari Cimento - 59x59cm",
          valor: 2519.31,
        },
        {
          descricao: "Adhara PO - 60x60cm",
          valor: 2983.45,
        },
        {
          descricao: "Bosco Camel MA - 19x90,2cm",
          valor: 2733.11,
        },
        {
          descricao: "Reserva Natural MA - 19x90,2cm",
          valor: 2757.73,
        },
        {
          descricao: "Diamante Branco AC - 30x90cm",
          valor: 2616.85,
        },
      ],
    },
    {
      ["parede nicho"]: [
        {
          descricao: "Cubic Black AC 45x90cm",
          valor: 2352.3,
        },
        {
          descricao: "Cubic White AC 45x90cm",
          valor: 2137.11,
        },
        {
          descricao: "Bosco Camel MA - 19x90,2cm",
          valor: 1937.58,
        },
        {
          descricao: "Reserva Natural MA - 19x90,2cm",
          valor: 1955.03,
        },
      ],
    },
    {
      ["soleira"]: [
        {
          descricao: "Soleira em Pedra - Branco Paraná",
          valor: 439.8,
        },
        {
          descricao: "Soleira em Pedra - Branco Prime",
          valor: 276,
        },
        {
          descricao: "Soleira em Pedra - Branco Siena",
          valor: 213,
        },
        {
          descricao: "Soleira em Pedra - Preto São Gabriel",
          valor: 193.8,
        },
        {
          descricao: "Soleira em Pedra - Verde Ubatuba",
          valor: 173.4,
        },
      ],
    },
    {
      ["tento"]: [
        {
          descricao: "Tento em pedra- Branco Paraná",
          valor: 136.6,
        },
        {
          descricao: "Tento em pedra- Branco Prime",
          valor: 82,
        },
        {
          descricao: "Tento em pedra- Branco Siena",
          valor: 61,
        },
        {
          descricao: "Tento em pedra- Preto São Gabriel",
          valor: 54.6,
        },
        {
          descricao: "Tento em pedra- Verde Ubatuba",
          valor: 47.8,
        },
      ],
    },
    {
      ["nicho 88X48CM"]: [
        {
          descricao: "Nicho esculpido em pedra- Branco Paraná",
          valor: 1144.0,
        },
        {
          descricao: "Nicho esculpido em pedra- Branco Prime",
          valor: 898.0,
        },
        {
          descricao: "Nicho esculpido em pedra- Branco Siena",
          valor: 830.8,
        },
        {
          descricao: "Nicho esculpido em pedra- Preto São Gabriel",
          valor: 677.0,
        },
        {
          descricao: "Nicho esculpido em pedra- Verde Ubatuba",
          valor: 604.0,
        },
      ],
    },
    {
      bancada: [
        {
          descricao:
            "Pedra bancada p/ cuba semi/encaixe (saia 6cm frontão 10cm)- Branco Paraná",
          valor: 5209.36,
        },
        {
          descricao:
            "Pedra bancada p/ cuba semi/encaixe (saia 6cm frontão 10cm)- Branco Prime",
          valor: 4055.2,
        },
        {
          descricao:
            "Pedra bancada p/ cuba semi/encaixe (saia 6cm frontão 10cm)- Branco Siena",
          valor: 3682,
        },
        {
          descricao:
            "Pedra bancada p/ cuba semi/encaixe (saia 6cm frontão 10cm)- Preto São Gabriel",
          valor: 3035.2,
        },
        {
          descricao:
            "Pedra bancada p/ cuba semi/encaixe (saia 6cm frontão 10cm)- Verde Ubatuba",
          valor: 2720.8,
        },
      ],
    },
    {
      forro: [
        {
          descricao: "Forro Acartonado Tabicado com pintura Branco Neve",
          valor: 0,
        },
      ],
    },
  ],
  lazer: [
    {
      revestimento: [
        {
          descricao: "Acabamento em tijolo aparente",
          valor: 965.0,
        },
        {
          descricao: "Textura Padrão",
          valor: 0,
        },
      ],
    },
    {
      bancada: [
        {
          descricao: "Pedra (saia 6cm frontão 10cm) - Branco Paraná",
          valor: 3908.0,
        },
        {
          descricao: "Pedra (saia 6cm frontão 10cm) - Branco Siena",
          valor: 2318.0,
        },
        {
          descricao: "Pedra (saia 6cm frontão 10cm) - Preto São Gabriel",
          valor: 2115.2,
        },
        {
          descricao: "Pedra (saia 6cm frontão 10cm) - Verde Ubatuba",
          valor: 2015.6,
        },
      ],
    },
    {
      churrasqueira: [
        {
          descricao: "Sem Churrasqueira",
          valor: 0,
        },
        {
          descricao: "Com Churrasqueira",
          valor: 6125.0,
        },
      ],
    },
    {
      spa: [
        {
          descricao: "SPA - J180",
          valor: 17934.13,
        },
        {
          descricao: "SPA - J195L",
          valor: 30184.18,
        },
      ],
    },
    {
      ["acabamento spa"]: [
        {
          descricao: "Deck em madeira Cumaru",
          valor: 6250,
        },
        {
          descricao: "Deck em pedra branco Paraná",
          valor: 17076.8,
        },
        {
          descricao: "Deck em pedra branco Siena",
          valor: 10883.5,
        },
      ],
    },
  ],
  suite: [
    {
      forro: [
        {
          descricao: "Forro Acartonado Tabicado com pintura Branco Neve",
          valor: 3994.85,
        },
        {
          descricao: "Sem forro",
          valor: 0,
        },
      ],
    },
    {
      piso: [
        {
          descricao: "Munari Cimento59x59cm",
          valor: 5166.22,
        },
        {
          descricao: "Adhara PO- 60x60cm",
          valor: 6118.01,
        },
        {
          descricao: "Bosco Camel MA19x90,2cm",
          valor: 5604.65,
        },
        {
          descricao: "Reserva Natural MA19x90,2cm",
          valor: 5655.12,
        },
      ],
    },
    {
      rodape: [
        {
          descricao: "Munari Cimento- 59x59cm (H=15cm)",
          valor: 1531.76,
        },
        {
          descricao: "Adhara PO- 60x60cm (H=15cm)",
          valor: 1698.81,
        },
        {
          descricao: "Bosco Camel MA- 19x90,2cm (H=15cm)",
          valor: 1589.86,
        },
        {
          descricao: "Reserva Natural MA19x90,2cm (H=15cm)",
          valor: 1598.33,
        },
        {
          descricao: "PVC Wood- Branco 15cm",
          valor: 2146.81,
        },
      ],
    },
  ],
  escada: [
    {
      cascata: [
        {
          descricao: "Pedra borda- Branco Paraná",
          valor: 25274.8,
        },
        {
          descricao: "Pedra borda- Branco Paraná",
          valor: 21540.4,
        },
        {
          descricao: "Pedra borda- Branco Siena",
          valor: 13960,
        },
        {
          descricao: "Pedra borda- Preto São Gabriel",
          valor: 13481.2,
        },
        {
          descricao: "Pedra borda- Verde Ubatuba",
          valor: 11188,
        },
        {
          descricao: "Fab. Eliane- linha Adhara PO- 100x100cm",
          valor: 8879.38,
        },
      ],
    },
    {
      piso: [
        {
          descricao: "Munari Cimento59x59cm",
          valor: 763.72,
        },
        {
          descricao: "Adhara PO- 60x60cm",
          valor: 918.91,
        },
        {
          descricao: "Bosco Camel MA19x90,2cm",
          valor: 817.7,
        },
        {
          descricao: "Reserva Natural MA19x90,2cm",
          valor: 825.57,
        },
      ],
    },
    {
      ["borda acabamento"]: [
        {
          descricao: "Pedra borda - Branco Paraná",
          valor: 4374.0,
        },
        {
          descricao: "Pedra borda - Branco Prime",
          valor: 4195.2,
        },
        {
          descricao: "Pedra borda - Branco Siena",
          valor: 2798.4,
        },
        {
          descricao: "Pedra borda - Preto São Gabriel",
          valor: 2697.6,
        },
        {
          descricao: "Pedra borda - Verde Ubatuba",
          valor: 2332.8,
        },
      ],
    },
  ],
  ["cubas"]: [
    {
      ["kit cubas"]: [
        {
          descricao: "Sem kit",
          valor: 0,
        },
        {
          descricao: "Com kit",
          valor: 1082.63,
        },
      ],
    },
  ],
  metais: [
    {
      ["kit metais"]: [
        {
          descricao: "Sem kit",
          valor: 0,
        },
        {
          descricao: "Com kit",
          valor: 13345.36,
        },
      ],
    },
  ],
  ["ar condicionado"]: [
    {
      ["ar condicionado"]: [
        {
          descricao: "Sem ar",
          valor: 0,
        },
        {
          descricao: "Suíte MMaster",
          valor: 3450,
        },
        {
          descricao: "Light: Térreo + Suíte Master",
          valor: 7700,
        },
        {
          descricao: "Premium: Térreo + Suíte Master e 2 Dorms",
          valor: 9960,
        },
      ],
    },
  ],
  ["automação"]: [
    {
      ["kit automação"]: [
        {
          descricao: "Sem kit",
          valor: 0,
        },
        {
          descricao: "Kit Ligth",
          valor: 14900,
        },
        {
          descricao: "Kit Premium",
          valor: 19900,
        },
      ],
    },
  ],
};
