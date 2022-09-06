import { ICandidates } from "../types/interfaces";

const votingDate = {
  starteDate: "15/01/2022 08:00",
  endDate: "15/01/2022 18:00",
};

const candidates: ICandidates = {
  candidate1: {
    id: "1",
    name: "Pedro Savoy",
    description:
      "Partido Democrata.",
    image: "https://picsum.photos/200",
  },
  candidate2: {
    id: "2",
    name: "Juan Carlos Campaso",
    description:
      "Izquierda unida.",
    image: "https://picsum.photos/200",
  },
  candidate3: {
    id: "3",
    name: "Eugenio Alaniz ",
    description:
      "Union Liberal.",
    image: "https://picsum.photos/200",
  },
  candidate4: {
    id: "4",
    name: "Rocio Ahumada",
    description:
      "Lista Verde Nacional.",
    image: "https://picsum.photos/200",
  },
};

const tokens = {
  token1: "1",
  token2: "2",
};

const votingResults = {
  winnerId: "2",
  results: {
    candidate1: {
      id: "1",
      name: "Candidato 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec rhoncus leo. Vestibulum sed turpis fringilla, efficitur risus eu, pretium.",
      image: "https://picsum.photos/200",
      votes: 7,
    },
    candidate2: {
      id: "2",
      name: "Candidato 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec rhoncus leo. Vestibulum sed turpis fringilla, efficitur risus eu, pretium.",
      image: "https://picsum.photos/200",
      votes: 8,
    },
    candidate3: {
      id: "3",
      name: "Candidato 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec rhoncus leo. Vestibulum sed turpis fringilla, efficitur risus eu, pretium.",
      image: "https://picsum.photos/200",
      votes: 4,
    },
    candidate4: {
      id: "4",
      name: "Candidato 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec rhoncus leo. Vestibulum sed turpis fringilla, efficitur risus eu, pretium.",
      image: "https://picsum.photos/200",
      votes: 2,
    },
  },
};

export { tokens, candidates, votingDate, votingResults };
