// src/components/TicketFilters.tsx
"use client";
import React from "react";
import { TicketPriority, TicketStatus } from "../types/ticket";

type Filters = {
  status?: TicketStatus | "all";
  priority?: TicketPriority | "all";
  query?: string;
};

export default function TicketFilters({
  filters,
  onChange,
}: {
  filters: Filters;
  onChange: (next: Partial<Filters>) => void;
}) {
  return (
    <div className="filters">
      <input
        placeholder="Search by title or description"
        value={filters.query || ""}
        onChange={(e) => onChange({ query: e.target.value })}
      />

      <select
        value={filters.status || "all"}
        onChange={(e) => onChange({ status: e.target.value as TicketStatus | "all" })}
      >
        <option value="all">All Statuses</option>
        <option value="open">Open</option>
        <option value="in_progress">In Progress</option>
        <option value="resolved">Resolved</option>
        <option value="closed">Closed</option>
      </select>

      <select
        value={filters.priority || "all"}
        onChange={(e) => onChange({ priority: e.target.value as TicketPriority | "all" })}
      >
        <option value="all">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
        <option value="urgent">Urgent</option>
      </select>
    </div>
  );
}
