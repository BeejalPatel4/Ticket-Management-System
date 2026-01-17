// src/components/TicketList.tsx
import React from "react";
import { Ticket, TicketStatus } from "../types/ticket";
import TicketCard from "./TicketCard";

export default function TicketList({
  tickets,
  onEdit,
  onDelete,
  onStatusChange,
}: {
  tickets: Ticket[];
  onEdit: (ticket: Ticket) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: TicketStatus) => void;
}) {
  if (!tickets.length) return <p className="muted">No tickets found.</p>;

  return (
    <div className="list">
      {tickets.map((t) => (
        <TicketCard
          key={t.id}
          ticket={t}
          onEdit={() => onEdit(t)}
          onDelete={() => onDelete(t.id)}
          onStatusChange={(status) => onStatusChange(t.id, status)}
        />
      ))}
    </div>
  );
}
