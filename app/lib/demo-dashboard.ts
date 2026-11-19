export const demoDataLabel = "Données de démonstration";

export const demoDataNotice =
  "Ces chiffres sont fictifs. Ils servent uniquement à présenter le tableau de bord. Aucun routeur, aucun paiement et aucun compte réel ne sont reliés à cet écran.";

export const demoStats = [
  {
    label: "Sites Wi-Fi",
    value: "4",
    detail: "3 affichés en ligne",
  },
  {
    label: "Routeurs MikroTik",
    value: "6",
    detail: "5 joignables dans cet aperçu",
  },
  {
    label: "Ventes du jour",
    value: "48 500 FCFA",
    detail: "12 tickets dans cet aperçu",
  },
  {
    label: "Clients connectés",
    value: "37",
    detail: "sessions fictives",
  },
  {
    label: "Tickets actifs",
    value: "128",
    detail: "non expirés dans cet aperçu",
  },
] as const;

export const demoSites = [
  {
    name: "Marché de Cocody",
    city: "Abidjan",
    router: "RB4011-COCODY",
    clients: 14,
    status: "En ligne",
  },
  {
    name: "Gare routière",
    city: "Bouaké",
    router: "hAP-BOUAKE",
    clients: 9,
    status: "En ligne",
  },
  {
    name: "Campus UCAD",
    city: "Dakar",
    router: "CCR-UCAD",
    clients: 11,
    status: "En ligne",
  },
  {
    name: "Station Total",
    city: "Ouagadougou",
    router: "hAP-OUAGA",
    clients: 0,
    status: "Hors ligne",
  },
] as const;

export const demoSales = [
  {
    time: "10:42",
    site: "Marché de Cocody",
    plan: "Journalier",
    channel: "Ticket",
    amount: "500 FCFA",
  },
  {
    time: "10:18",
    site: "Campus UCAD",
    plan: "Hebdomadaire",
    channel: "Ticket",
    amount: "2 000 FCFA",
  },
  {
    time: "09:51",
    site: "Gare routière",
    plan: "2 heures",
    channel: "Ticket",
    amount: "200 FCFA",
  },
  {
    time: "09:07",
    site: "Marché de Cocody",
    plan: "Journalier",
    channel: "Ticket",
    amount: "500 FCFA",
  },
  {
    time: "08:33",
    site: "Campus UCAD",
    plan: "Mensuel",
    channel: "Ticket",
    amount: "8 000 FCFA",
  },
] as const;
