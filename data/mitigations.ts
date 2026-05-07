export interface Mitigation {
  n: number;
  title: string;
  body: string;
}

export const mitigations: Mitigation[] = [
  {
    n: 1,
    title: "Project Manager dedicada",
    body: "Karla Lisset asume la coordinación punta a punta del proyecto. Oscar continúa apoyando desde TI en temas estratégicos y de plataforma.",
  },
  {
    n: 2,
    title: "Procesos documentados como oficiales",
    body: "Los flujos centrales del proyecto, comenzando por el de tickets, se publican como procesos formales y se entrenan con el equipo de Auditoría Interna y con la Especialista de Subcontratistas.",
  },
  {
    n: 3,
    title: "Protocolo de calidad previo al despliegue",
    body: "Se acuerda con Appropia un protocolo de pruebas y un ambiente de validación revisado por TI antes del paso a productivo de cualquier nueva entrega.",
  },
  {
    n: 4,
    title: "Actualización del repositorio del proveedor",
    body: "Petición formal a Appropia para alinear el repositorio con la versión productiva y entregar accesos versionados al equipo de TI.",
  },
  {
    n: 5,
    title: "Manual obligatorio por funcionalidad",
    body: "Toda nueva funcionalidad se entrega con manual técnico para TI y manual de usuario para la operación. La aceptación de la entrega queda condicionada a la documentación.",
  },
  {
    n: 6,
    title: "Matriz de aprobación de sprints",
    body: "Se documenta quién aprueba cada elemento que entra al sprint y quién valida la postergación. Karla Lisset firma del lado ATISA y Ana María del lado Appropia.",
  },
  {
    n: 7,
    title: "Plantilla de petición con caso de uso",
    body: "Cada solicitud al proveedor se acompaña de caso de uso, flujo del proceso y criterios de aceptación. Reduce los ciclos de aclaración en el inicio del desarrollo.",
  },
  {
    n: 8,
    title: "Inducción para subcontratistas",
    body: "Material breve de inducción, guía visual y preguntas frecuentes para reducir la fricción en el primer ingreso. Karla Ruiz lidera la difusión.",
  },
];
