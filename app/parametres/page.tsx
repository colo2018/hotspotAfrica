import {
  ModulePlaceholder,
  moduleMetadata,
} from "../components/module-placeholder";

export const metadata = moduleMetadata("Paramètres");

export default function ParametresPage() {
  return (
    <ModulePlaceholder
      title="Paramètres"
      summary="Cette rubrique accueillera les réglages de l'exploitant. Aucun compte et aucun formulaire d'enregistrement ne sont proposés dans cette phase."
    />
  );
}
