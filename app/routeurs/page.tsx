import {
  ModulePlaceholder,
  moduleMetadata,
} from "../components/module-placeholder";

export const metadata = moduleMetadata("Routeurs MikroTik");

export default function RouteursPage() {
  return (
    <ModulePlaceholder
      title="Routeurs MikroTik"
      summary="Cette rubrique accueillera l'inventaire des routeurs. Aucune communication avec un équipement MikroTik n'est mise en place dans cette phase."
    />
  );
}
