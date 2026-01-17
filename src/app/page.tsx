// src/app/page.tsx
"use client";
import TicketForm from "../components/TicketForm";
import TicketFilters from "../components/TicketFilters";
import TicketList from "../components/TicketList";
import { useTickets } from "../hooks/useTickets";

export default function HomePage() {
  const { createTicket, updateTicket, deleteTicket, tickets, filters, setFilter, editing, setEditing } =
    useTickets();

  return (
    <div className="grid">
      <section className="panel">
        <TicketForm
          key={editing?.id || "create"}
          initial={editing || undefined}
          onSubmit={(data) => {
            if (editing) {
              updateTicket(editing.id, data);
              setEditing(null);
            } else {
              createTicket(data);
            }
          }}
          onCancel={() => setEditing(null)}
        />
      </section>

      <section className="panel">
        <TicketFilters
          filters={filters}
          onChange={setFilter}
        />
        <TicketList
          tickets={tickets}
          onEdit={setEditing}
          onDelete={deleteTicket}
          onStatusChange={(id, status) => updateTicket(id, { status })}
        />
      </section>
    </div>
  );
}
