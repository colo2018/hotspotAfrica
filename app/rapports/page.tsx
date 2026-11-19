import {
  ModulePlaceholder,
  moduleMetadata,
} from "../components/module-placeholder";

export const metadata = moduleMetadata("Rapports");

export default function RapportsPage() {
  return (
    <ModulePlaceholder
      title="Rapports"
      summary="Cette rubrique accueillera les synthèses de ventes et de fréquentation. Les chiffres du tableau de bord restent des données de démonstration."
    />
  );
}
