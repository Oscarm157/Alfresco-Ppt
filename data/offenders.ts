export interface Offender {
  n: number;
  title: string;
  body: string;
}

export const offenders: Offender[] = [
  {
    n: 1,
    title: "Cuello de botella en TI",
    body: "La gestión del proyecto recae en una sola persona (Oscar) que sostiene varios proyectos en paralelo. El ritmo se ve afectado.",
  },
  {
    n: 2,
    title: "Falta de un proceso documentado end-to-end",
    body: "Hasta ahora el flujo vivía en la cabeza del equipo. Mitigación parcial: ya existe el flujo formal de tickets (slide 05).",
  },
  {
    n: 3,
    title: "Alto volumen de bugs en despliegues nuevos",
    body: "Una proporción significativa de los tickets recientes son bugs introducidos por nuevas funcionalidades. Indicador de QA insuficiente del lado de Appropia.",
  },
  {
    n: 4,
    title: "Repositorio de código desactualizado",
    body: "El GitHub que Appropia comparte con TI no refleja la versión productiva. Bloquea la capacitación técnica de Leobardo.",
  },
  {
    n: 5,
    title: "Falta de manuales detallados",
    body: "Cada nueva funcionalidad llega sin documentación robusta. TI tiene que reverse-engineerearla.",
  },
  {
    n: 6,
    title: "Ambigüedad en aprobación de sprints",
    body: "No hay claridad sobre quién da la aprobación final de qué entra a un sprint y qué se posterga.",
  },
  {
    n: 7,
    title: "Sprints con back-and-forth excesivo",
    body: "Las peticiones de TI no siempre llegan con casos de uso claros, lo que multiplica los ciclos de aclaración con Appropia.",
  },
  {
    n: 8,
    title: "Subcontratistas con baja capacidad digital",
    body: "Muchos usuarios externos batallan con la plataforma. No hay onboarding ni video explicativo.",
  },
];
