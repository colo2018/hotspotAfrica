import {
  ModulePlaceholder,
  moduleMetadata,
} from "../components/module-placeholder";

export const metadata = moduleMetadata("Tickets");

export default function TicketsPage() {
  return (
    <ModulePlaceholder
      title="Tickets"
      summary="Cette rubrique accueillera la création, l'impression et le suivi des tickets. Aucun ticket réel ne peut être généré pour le moment."
    />
  );
}
