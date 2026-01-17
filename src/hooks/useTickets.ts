// src/hooks/useTickets.ts
"use client";
import { useEffect, useMemo, useState } from "react";
import { Ticket, TicketPriority, TicketStatus } from "../types/ticket";
import { loadTickets, saveTickets } from "../Lib/localStorage";
import { formatISO } from "date-fns";

type Filters = {
  status?: TicketStatus | "all";
  priority?: TicketPriority | "all";
  query?: string;
};

export function useTickets() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [filters, setFilters] = useState<Filters>({ status: "all", priority: "all", query: "" });
  const [editing, setEditing] = useState<Ticket | null>(null);

  useEffect(() => {
    setTickets(loadTickets());
  }, []);

  useEffect(() => {
    saveTickets(tickets);
  }, [tickets]);

  const createTicket = (data: Omit<Ticket, "id" | "createdAt" | "updatedAt">) => {
    const now = formatISO(new Date());
    const newTicket: Ticket = { id: crypto.randomUUID(), createdAt: now, ...data };
    setTickets((prev) => [newTicket, ...prev]);
  };

  const updateTicket = (id: string, patch: Partial<Ticket>) => {
    const now = formatISO(new Date());
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...patch, updatedAt: now } : t))
    );
  };

  const deleteTicket = (id: string) => {
    setTickets((prev) => prev.filter((t) => t.id !== id));
  };

  const setFilter = (next: Partial<Filters>) => {
    setFilters((prev) => ({ ...prev, ...next }));
  };

  const filteredTickets = useMemo(() => {
    return tickets.filter((t) => {
      const statusOk = filters.status === "all" || t.status === filters.status;
      const priorityOk = filters.priority === "all" || t.priority === filters.priority;
      const queryOk =
        !filters.query ||
        t.title.toLowerCase().includes(filters.query.toLowerCase()) ||
        t.description.toLowerCase().includes(filters.query.toLowerCase());
      return statusOk && priorityOk && queryOk;
    });
  }, [tickets, filters]);

  return {
    tickets: filteredTickets,
    rawTickets: tickets,
    filters,
    setFilter,
    createTicket,
    updateTicket,
    deleteTicket,
    editing,
    setEditing,
  };
}
