import {
  ModulePlaceholder,
  moduleMetadata,
} from "../components/module-placeholder";

export const metadata = moduleMetadata("Clients");

export default function ClientsPage() {
  return (
    <ModulePlaceholder
      title="Clients"
      summary="Cette rubrique accueillera les personnes connectées à tes hotspots. Aucune session réelle n'est collectée dans cette phase."
    />
  );
}
