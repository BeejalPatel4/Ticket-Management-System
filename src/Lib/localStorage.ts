// src/lib/storage.ts
import { Ticket } from "../types/ticket";

const STORAGE_KEY = "tickets";

export function loadTickets(): Ticket[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveTickets(tickets: Ticket[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
}
