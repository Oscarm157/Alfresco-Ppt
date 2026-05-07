export interface Action {
  task: string;
  owner: string;
}

export const days30: Action[] = [
  { task: "Inducción completa de Karla Lisset", owner: "Oscar" },
  { task: "Auditoría de tickets abiertos y priorización", owner: "Karla Lisset" },
  { task: "Petición formal a Appropia (slide 11)", owner: "Karla Lisset" },
  { task: "Implementación del flujo de tickets en el portal", owner: "Leobardo" },
];

export const days60: Action[] = [
  { task: "Primer reporte de gobernanza con Appropia", owner: "Karla Lisset" },
  { task: "Plantilla de feature request en uso", owner: "Karla Lisset" },
  { task: "Manual de funcionalidades vigentes entregado", owner: "Appropia" },
  { task: "Video onboarding para subcontratistas", owner: "Karla Ruiz" },
];

export const days90: Action[] = [
  { task: "Evaluación trimestral de Appropia con la nueva data", owner: "Karla Lisset + Oscar" },
  { task: "Roadmap de independencia técnica de TI", owner: "Leobardo" },
  { task: "Revisión del plan con CTO", owner: "Karla Lisset" },
];
