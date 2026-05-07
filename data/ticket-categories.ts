// Categorización aproximada de los 87 tickets del periodo (cierre mayo 2026)
// Bugs y correcciones se contabilizan juntos: ambos requieren intervención técnica
// sobre datos o lógica de la plataforma.
export const ticketsByType = [
  { name: "Bugs y correcciones", value: 27, pct: 31.0, color: "var(--terracotta)" },
  { name: "Asesoría y soporte", value: 22, pct: 25.3, color: "var(--gold)" },
  { name: "Alta y configuración", value: 22, pct: 25.3, color: "var(--rust)" },
  { name: "Reportes y extracción", value: 4, pct: 4.6, color: "var(--sage)" },
  { name: "Tickets de proceso", value: 12, pct: 13.8, color: "var(--navy)" },
];

// Por solicitante (top), del mismo export
export const ticketsByOrigin = [
  { name: "Marisol Martínez", value: 25, color: "var(--navy)" },
  { name: "Kimberly Peña", value: 22, color: "var(--navy)" },
  { name: "Denis Yaneth Méndez", value: 18, color: "var(--gold)" },
  { name: "Karla Ruiz", value: 14, color: "var(--terracotta)" },
  { name: "Otros", value: 8, color: "var(--muted)" },
];

export const kpis = {
  avgResolutionTI: null as number | null,
  avgResolutionAppropia: null as number | null,
  reopenedPct: null as number | null,
};
