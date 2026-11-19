import {
  ModulePlaceholder,
  moduleMetadata,
} from "../components/module-placeholder";

export const metadata = moduleMetadata("Sites Wi-Fi");

export default function SitesPage() {
  return (
    <ModulePlaceholder
      title="Sites Wi-Fi"
      summary="Cette rubrique accueillera les lieux couverts par tes hotspots : marché, campus, gare, station. Pour l'instant, elle ne contient aucune fiche de site."
    />
  );
}
