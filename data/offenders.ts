export interface Offender {
  n: number;
  title: string;
  body: string;
}

export const offenders: Offender[] = [
  {
    n: 1,
    title: "Capacidad de gestión limitada",
    body: "Oscar mantiene parte de las actividades del proyecto, pero su agenda está distribuida entre varios proyectos en paralelo. La operación requiere a una persona con dedicación de tiempo completo para sostener el ritmo de desarrollo y de gestión que el proyecto demanda.",
  },
  {
    n: 2,
    title: "Procesos operativos sin documentación formal",
    body: "Varios procesos del proyecto, entre ellos el flujo de tickets, alta de subcontratistas, validación documental y escalamiento al proveedor, se han venido apoyando en el conocimiento del equipo. La ausencia de documentación formal dificulta la incorporación de personal nuevo y la trazabilidad ante terceros.",
  },
  {
    n: 3,
    title: "Volumen elevado de incidencias post-despliegue",
    body: "Una porción significativa de los tickets recientes corresponde a incidencias introducidas por nuevas entregas. Existe oportunidad de mejora en los controles de calidad del proveedor previos al paso a productivo.",
  },
  {
    n: 4,
    title: "Repositorio de código desalineado con la versión productiva",
    body: "El repositorio que Appropia comparte con TI no refleja la versión que está en producción. Esta condición limita la capacitación técnica del equipo interno y el tiempo de respuesta ante incidencias.",
  },
  {
    n: 5,
    title: "Documentación técnica insuficiente por entrega",
    body: "Las nuevas funcionalidades suelen entregarse sin manual técnico ni manual de usuario, lo que obliga al equipo de TI a reconstruir el detalle de cada cambio.",
  },
  {
    n: 6,
    title: "Ambigüedad en la aprobación de sprints",
    body: "No existe una matriz formal que defina quién aprueba la entrada de cada elemento al sprint y quién aprueba su postergación. Esto diluye la rendición de cuentas y la priorización.",
  },
  {
    n: 7,
    title: "Peticiones al sprint con detalle insuficiente",
    body: "Las peticiones que ingresan al sprint del proveedor no siempre incluyen el caso de uso ni los criterios de aceptación. Un mayor detalle desde el origen reduce los ciclos de aclaración y, además, baja la incidencia de bugs por escenarios no contemplados al implementar.",
  },
  {
    n: 8,
    title: "Adopción limitada por parte de subcontratistas",
    body: "Una parte de los subcontratistas presenta dificultades para operar la plataforma. No existe material de inducción ni una guía visual que facilite su uso desde el primer ingreso.",
  },
];
