export interface SlaRow {
  metric: string;
  agreed: string | null;
  actual: string | null;
  delta: string | null;
}

export const slas: SlaRow[] = [
  { metric: "Triage de ticket", agreed: null, actual: null, delta: null },
  { metric: "Resolución de bug", agreed: null, actual: null, delta: null },
  { metric: "Entrega de feature", agreed: null, actual: null, delta: null },
  { metric: "Respuesta a duda técnica", agreed: null, actual: null, delta: null },
];
