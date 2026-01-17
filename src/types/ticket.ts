// src/types/ticket.ts
export type TicketStatus = "open" | "in_progress" | "resolved" | "closed";
export type TicketPriority = "low" | "medium" | "high" | "urgent";

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
  assignee?: string;
  createdAt: string; 
  updatedAt?: string;
}
