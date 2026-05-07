export interface Mitigation {
  n: number;
  title: string;
  body: string;
}

export const mitigations: Mitigation[] = [
  {
    n: 1,
    title: "PM dedicada",
    body: "Karla Lisset asume la coordinación end-to-end del proyecto. Oscar continúa como soporte estratégico desde TI.",
  },
  {
    n: 2,
    title: "Flujo formal vigente",
    body: "El flujo del slide 05 es ahora el proceso oficial. Se publica en el portal y se entrena al equipo de Auditoría y a Karla Ruiz.",
  },
  {
    n: 3,
    title: "Gate de QA antes de despliegue",
    body: "Se acuerda con Appropia un checklist de QA y un ambiente de pruebas validado por TI antes de pasar a productivo.",
  },
  {
    n: 4,
    title: "Auditoría y refresh del repositorio",
    body: "Petición formal a Appropia: actualización del repo y entrega de accesos versionados.",
  },
  {
    n: 5,
    title: "Manual obligatorio por funcionalidad",
    body: "Toda nueva funcionalidad se entrega con manual técnico (TI) y manual de usuario (operación).",
  },
  {
    n: 6,
    title: "Matriz de decisión de sprints",
    body: "Se documenta quién aprueba qué entra a sprint. Karla Lisset firma del lado ATISA, Ana María del lado Appropia.",
  },
  {
    n: 7,
    title: "Plantilla de petición",
    body: "Cada feature request entra con caso de uso, flujo del proceso y criterios de aceptación. Reduce los rounds de aclaración.",
  },
  {
    n: 8,
    title: "Onboarding para subcontratistas",
    body: "Video corto, guía visual y FAQ. Karla Ruiz lidera la difusión.",
  },
];
