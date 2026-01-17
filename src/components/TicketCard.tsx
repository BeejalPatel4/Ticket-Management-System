// src/components/TicketCard.tsx
import React from "react";
import { Ticket, TicketStatus } from "../types/ticket";
import { format } from "date-fns";

export default function TicketCard({
  ticket,
  onEdit,
  onDelete,
  onStatusChange,
}: {
  ticket: Ticket;
  onEdit: () => void;
  onDelete: () => void;
  onStatusChange: (status: TicketStatus) => void;
}) {
  const created = format(new Date(ticket.createdAt), "dd MMM yyyy, HH:mm");

  return (
    <article className="card">
      <header className="card-header">
        <h3>{ticket.title}</h3>
        <span className={`badge ${ticket.priority}`}>{ticket.priority}</span>
      </header>

      <p className="desc">{ticket.description}</p>

      <div className="meta">
        <span>Status: <strong>{ticket.status}</strong></span>
        <span>Assignee: <strong>{ticket.assignee || "Unassigned"}</strong></span>
        <span>Created: <strong>{created}</strong></span>
      </div>

      <div className="row">
        <select
          value={ticket.status}
          onChange={(e) => onStatusChange(e.target.value as TicketStatus)}
        >
          <option value="open">Open</option>
          <option value="in_progress">In Progress</option>
          <option value="resolved">Resolved</option>
          <option value="closed">Closed</option>
        </select>

        <div className="actions">
          <button onClick={onEdit}>Edit</button>
          <button className="danger" onClick={onDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}
