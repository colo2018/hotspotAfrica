import {
  ModulePlaceholder,
  moduleMetadata,
} from "../components/module-placeholder";

export const metadata = moduleMetadata("Paiements");

export default function PaiementsPage() {
  return (
    <ModulePlaceholder
      title="Paiements"
      summary="Cette rubrique accueillera plus tard Orange Money et les autres canaux. Aucun paiement réel n'est intégré."
    />
  );
}
