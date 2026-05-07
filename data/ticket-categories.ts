// Categorización aproximada de los 87 tickets del periodo (cierre mayo 2026)
// Basada en análisis del campo "Reporte" del export 2026-05-07
export const ticketsByType = [
  { name: "Tickets de proceso", value: 22, pct: 25.3, color: "var(--navy)" },
  { name: "Alta / configuración", value: 20, pct: 23.0, color: "var(--terracotta)" },
  { name: "Asesoría / soporte", value: 20, pct: 23.0, color: "var(--gold)" },
  { name: "Bugs / errores plataforma", value: 16, pct: 18.4, color: "var(--rust)" },
  { name: "Correcciones / ajustes", value: 6, pct: 6.9, color: "var(--sage)" },
  { name: "Reportes / extracción", value: 3, pct: 3.4, color: "var(--muted)" },
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
