import {
  ModulePlaceholder,
  moduleMetadata,
} from "../components/module-placeholder";

export const metadata = moduleMetadata("Forfaits");

export default function ForfaitsPage() {
  return (
    <ModulePlaceholder
      title="Forfaits"
      summary="Cette rubrique accueillera les offres vendues aux clients : durée, prix en FCFA et règles d'accès. Aucun catalogue n'est encore enregistré."
    />
  );
}
