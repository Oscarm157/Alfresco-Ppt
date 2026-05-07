export type TeamGroup = "ti" | "operacion" | "appropia";

export interface Person {
  name: string;
  role: string;
  group: TeamGroup;
  responsibility: string;
  highlight?: "new" | "transition";
}

export const team: Person[] = [
  {
    name: "Oscar Arredondo",
    role: "TI · Gestión de plataforma",
    group: "ti",
    responsibility: "Coordinación histórica del proyecto. Continúa apoyando desde TI en plataforma y estrategia.",
    highlight: "transition",
  },
  {
    name: "Leobardo",
    role: "TI · Desarrollador",
    group: "ti",
    responsibility: "Lado técnico: validación, integraciones, ajustes internos.",
  },
  {
    name: "Karla Lisset",
    role: "PM Dedicada · Alfresco",
    group: "ti",
    responsibility: "Asume coordinación end-to-end del proyecto.",
    highlight: "new",
  },
  {
    name: "Kimberly Peña Delgado",
    role: "Auditora Interna",
    group: "operacion",
    responsibility: "Levanta tickets de proceso, valida documentación.",
  },
  {
    name: "Marisol Martínez Torrez",
    role: "Auditora Interna",
    group: "operacion",
    responsibility: "Levanta tickets de proceso, valida documentación.",
  },
  {
    name: "Griselda",
    role: "Gerente de Nóminas",
    group: "operacion",
    responsibility: "Stakeholder funcional. Jefa directa de Kimberly y Marisol.",
  },
  {
    name: "Karla Ruiz",
    role: "Especialista · Proveedores y subcontratos",
    group: "operacion",
    responsibility: "Contacto directo con subcontratistas. Apoya a Auditoría.",
  },
  {
    name: "Ana María",
    role: "PM · Appropia",
    group: "appropia",
    responsibility: "Contraparte de gestión del lado del proveedor.",
  },
  {
    name: "Jerrinson",
    role: "Desarrollador · Appropia",
    group: "appropia",
    responsibility: "Contraparte técnica.",
  },
];

export const groupLabel: Record<TeamGroup, string> = {
  ti: "ATISA · TI",
  operacion: "ATISA · Operación",
  appropia: "Appropia · Externo",
};

export const groupColor: Record<TeamGroup, string> = {
  ti: "var(--terracotta)",
  operacion: "var(--navy)",
  appropia: "var(--rust)",
};
