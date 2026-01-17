// src/components/TicketForm.tsx
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Ticket, TicketPriority, TicketStatus } from "../types/ticket";

type FormValues = {
  title: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
  assignee?: string;
};

export default function TicketForm({
  initial,
  onSubmit,
  onCancel,
}: {
  initial?: Partial<Ticket>;
  onSubmit: (data: Omit<Ticket, "id" | "createdAt" | "updatedAt">) => void;
  onCancel: () => void;
}) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      title: initial?.title || "",
      description: initial?.description || "",
      status: (initial?.status as TicketStatus) || "open",
      priority: (initial?.priority as TicketPriority) || "medium",
      assignee: initial?.assignee || "",
    },
  });

  const submit = (values: FormValues) => {
    onSubmit(values);
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <h2>{initial ? "Edit Ticket" : "Create Ticket"}</h2>

      <label>
        <span>Title</span>
        <input {...register("title", { required: "Title is required", minLength: 3 })} />
        {errors.title && <small className="error">{errors.title.message}</small>}
      </label>

      <label>
        <span>Description</span>
        <textarea {...register("description", { required: "Description is required", minLength: 5 })} />
        {errors.description && <small className="error">{errors.description.message}</small>}
      </label>

      <div className="row">
        <label>
          <span>Status</span>
          <select {...register("status")}>
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="resolved">Resolved</option>
            <option value="closed">Closed</option>
          </select>
        </label>

        <label>
          <span>Priority</span>
          <select {...register("priority")}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </select>
        </label>

        <label>
          <span>Assignee</span>
          <input {...register("assignee")} placeholder="e.g., Priya" />
        </label>
      </div>

      <div className="actions">
        <button type="submit">{initial ? "Update" : "Create"}</button>
        {initial && (
          <button type="button" className="secondary" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
