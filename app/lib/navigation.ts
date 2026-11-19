export type NavItem = {
  href: string;
  label: string;
};

export const navigation: NavItem[] = [
  { href: "/", label: "Tableau de bord" },
  { href: "/sites", label: "Sites Wi-Fi" },
  { href: "/routeurs", label: "Routeurs MikroTik" },
  { href: "/forfaits", label: "Forfaits" },
  { href: "/tickets", label: "Tickets" },
  { href: "/clients", label: "Clients" },
  { href: "/paiements", label: "Paiements" },
  { href: "/rapports", label: "Rapports" },
  { href: "/parametres", label: "Paramètres" },
];

export function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
