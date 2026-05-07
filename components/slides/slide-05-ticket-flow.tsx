import { SlideContainer } from "@/components/shared/slide-container";

interface Props { index: number; total: number; }

export function Slide05TicketFlow({ index, total }: Props) {
  return (
    <SlideContainer
      id={`slide-${String(index).padStart(2, "0")}`}
      index={index}
      total={total}
      eyebrow="Mesa de Ayuda · Alfresco · v1.1"
      background="cream"
    >
      <header className="mb-6">
        <h2 className="text-[clamp(36px,4.5vw,52px)] text-ink leading-[1.05]">
          Flujo de <em>levantamiento</em><br />y resolución de tickets
        </h2>
        <p className="mt-3 text-sm text-muted max-w-2xl leading-relaxed">
          Proceso end-to-end para tickets técnicos y de proceso de la plataforma de
          gestión documental de subcontratistas. Cuatro roles, cuatro estados, dos rutas
          de resolución.
        </p>
      </header>

      {/* Legend */}
      <div className="mb-5 flex flex-wrap gap-x-6 gap-y-2 px-4 py-3 border border-line-soft rounded-sm bg-cream-soft text-xs text-ink-soft">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="label-mono mr-1">Roles</span>
          <RoleChip color="var(--muted)">Solicitante</RoleChip>
          <RoleChip color="var(--terracotta)">TI · Oscar / Leobardo</RoleChip>
          <RoleChip color="var(--navy)">Auditoría · Kimberly / Marisol</RoleChip>
          <RoleChip color="var(--gold)">Karla Ruiz · Proveedores</RoleChip>
          <RoleChip color="var(--rust)">Appropia · Externo</RoleChip>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="label-mono mr-1">Estados</span>
          <StateChip bg="var(--state-pending-tint)" color="var(--state-pending)">Pendiente</StateChip>
          <StateChip bg="var(--state-escalated-tint)" color="var(--state-escalated)">Escalado</StateChip>
          <StateChip bg="var(--state-finished-tint)" color="var(--state-finished)">Finalizado</StateChip>
          <StateChip bg="var(--state-cancelled-tint)" color="var(--state-cancelled)">Cancelado</StateChip>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
        {/* Flowchart */}
        <div className="bg-paper border border-line rounded-md px-6 py-10 overflow-x-auto">
          <div className="max-w-[1000px] mx-auto flex flex-col items-center">
            <FNode className="fnode-start"><span className="fnode-title">Solicitante levanta ticket en Mesa de Ayuda</span></FNode>
            <Arrow />
            <FNode style={{ "--c": "var(--state-pending)", background: "var(--state-pending-tint)" } as React.CSSProperties}>
              <div className="fnode-title" style={{ color: "var(--state-pending)" }}>Estado · Pendiente</div>
              <div className="fnode-meta">Tipo + Prioridad + Adjuntos</div>
            </FNode>
            <Arrow />
            <FNode className="fnode-decision"><span className="fnode-title">¿Tipo de ticket?</span></FNode>

            <div className="fbranch-primary">
              {/* Técnico */}
              <div className="fbranch-primary-col">
                <span className="fbig-label" style={{ "--c": "var(--terracotta)" } as React.CSSProperties}>Técnico</span>
                <div className="fbranch-content">
                  <div className="farrow-down farrow-short" />
                  <FNode style={{ "--c": "var(--terracotta)" } as React.CSSProperties}>
                    <span className="fnode-role">TI</span>
                    <div className="fnode-title">Evalúa el ticket</div>
                    <div className="fnode-meta">↳ 1 día hábil</div>
                  </FNode>
                  <Arrow />
                  <FNode className="fnode-decision"><span className="fnode-title">¿Quién resuelve?</span></FNode>

                  <div className="fbranch">
                    <div className="fbranch-col">
                      <span className="fbranch-label" style={{ "--c": "var(--terracotta)" } as React.CSSProperties}>Ajuste por TI</span>
                    </div>
                    <div className="fbranch-col">
                      <span className="fbranch-label" style={{ "--c": "var(--rust)" } as React.CSSProperties}>Escalar a Appropia</span>
                    </div>

                    <div className="fbranch-col-content">
                      <FNode style={{ "--c": "var(--terracotta)" } as React.CSSProperties}>
                        <span className="fnode-role">TI</span>
                        <div className="fnode-title">Ajuste interno por TI</div>
                        <div className="fnode-meta">Permisos · config · queries</div>
                      </FNode>
                      <Arrow />
                      <StateEnd state="finished" label="Finalizado" />
                    </div>

                    <div className="fbranch-col-content">
                      <FNode style={{ "--c": "var(--terracotta)" } as React.CSSProperties}>
                        <span className="fnode-role">TI</span>
                        <div className="fnode-title">Escala a Appropia</div>
                        <div className="femail">soporte@appropia.com</div>
                      </FNode>
                      <Arrow />
                      <StateEnd state="escalated" label="Escalado" />
                      <Arrow />
                      <FNode style={{ "--c": "var(--rust)" } as React.CSSProperties}>
                        <span className="fnode-role">Appropia</span>
                        <div className="fnode-title">Resuelve · soporte o feature</div>
                        <div className="fnode-meta">↳ 2 días hábiles</div>
                      </FNode>
                      <Arrow />
                      <FNode style={{ "--c": "var(--terracotta)" } as React.CSSProperties}>
                        <span className="fnode-role">TI</span>
                        <div className="fnode-title">Valida solución</div>
                      </FNode>
                      <Arrow />
                      <StateEnd state="finished" label="Finalizado" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Proceso */}
              <div className="fbranch-primary-col">
                <span className="fbig-label" style={{ "--c": "var(--navy)" } as React.CSSProperties}>Proceso</span>
                <div className="fbranch-content">
                  <div className="farrow-down farrow-short" />
                  <FNode style={{ "--c": "var(--navy)" } as React.CSSProperties}>
                    <span className="fnode-role" style={{ "--c": "var(--navy)" } as React.CSSProperties}>Auditoría</span>
                    <div className="fnode-title">Evalúa el caso</div>
                    <div className="fnode-meta">↳ 1 día hábil</div>
                  </FNode>
                  <Arrow />
                  <FNode className="fnode-decision">
                    <span className="fnode-title">¿Requiere a Karla Ruiz · Proveedores?</span>
                  </FNode>

                  <div className="fbranch">
                    <div className="fbranch-col">
                      <span className="fbranch-label" style={{ "--c": "var(--navy)" } as React.CSSProperties}>No</span>
                    </div>
                    <div className="fbranch-col">
                      <span className="fbranch-label" style={{ "--c": "var(--gold)" } as React.CSSProperties}>Sí</span>
                    </div>

                    <div className="fbranch-col-content">
                      <FNode style={{ "--c": "var(--navy)" } as React.CSSProperties}>
                        <span className="fnode-role" style={{ "--c": "var(--navy)" } as React.CSSProperties}>Auditoría</span>
                        <div className="fnode-title">Resuelve directamente</div>
                      </FNode>
                      <Arrow />
                      <StateEnd state="finished" label="Finalizado" />
                    </div>

                    <div className="fbranch-col-content">
                      <FNode style={{ "--c": "var(--gold)" } as React.CSSProperties}>
                        <span className="fnode-role" style={{ "--c": "var(--gold)" } as React.CSSProperties}>Karla Ruiz</span>
                        <div className="fnode-title">Gestiona con subcontratista</div>
                        <div className="fnode-meta">Reupload · corrección</div>
                      </FNode>
                      <Arrow />
                      <FNode style={{ "--c": "var(--navy)" } as React.CSSProperties}>
                        <span className="fnode-role" style={{ "--c": "var(--navy)" } as React.CSSProperties}>Auditoría</span>
                        <div className="fnode-title">Confirma cumplimiento</div>
                      </FNode>
                      <Arrow />
                      <StateEnd state="finished" label="Finalizado" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-10" />
            <FNode className="fnode-end"><span className="fnode-title">Owner cierra · Solicitante recibe correo + evaluación</span></FNode>
          </div>
        </div>

        {/* Sidebar notes */}
        <aside className="flex flex-col gap-3">
          <Note color="var(--terracotta)" label="Decisión clave 1" title={<>Tipo · al <em>levantar</em></>}>
            El solicitante elige <strong>Técnico</strong> o <strong>Proceso</strong> al crear el ticket. Esto define el rol asignado automáticamente.
          </Note>
          <Note color="var(--gold)" label="Decisión clave 2" title={<>Quién <em>resuelve</em></>}>
            TI evalúa cada ticket técnico. Si el ajuste se puede hacer internamente (permisos, config, queries) lo resuelve. Si requiere desarrollo, escala a Appropia.
          </Note>
          <Note color="var(--sage)" label="Trasladables" title={<>Re-asignación <em>permitida</em></>}>
            Si la asignación inicial fue incorrecta (ticket técnico marcado como proceso o viceversa), el owner puede re-rutear sin re-abrir. La trazabilidad y los SLAs cuentan desde el re-rute.
          </Note>
          <Note color="var(--navy)" label="SLAs" title={<><em>1 + 2 + 1</em> días hábiles</>}>
            TI evalúa en 1 día, Appropia resuelve en 2, Auditoría cierra en 1. Hábiles. Por etapa, no acumulado.
          </Note>
          <Note color="var(--state-cancelled)" label="Cancelado" title={<>En <em>cualquier</em> punto</>}>
            Si el ticket no procede (duplicado, solicitud inválida), cualquier owner puede cancelarlo. No requiere pasar por Appropia ni cierre formal.
          </Note>
        </aside>
      </div>
    </SlideContainer>
  );
}

/* ---------- helpers ---------- */

function RoleChip({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs">
      <span className="w-2.5 h-2.5 rounded-sm" style={{ background: color }} />
      <span>{children}</span>
    </span>
  );
}

function StateChip({ bg, color, children }: { bg: string; color: string; children: React.ReactNode }) {
  return (
    <span
      className="font-mono text-[10px] tracking-[0.08em] uppercase font-medium px-2 py-0.5 rounded-sm"
      style={{ background: bg, color }}
    >
      {children}
    </span>
  );
}

function FNode({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`fnode ${className}`} style={style}>
      {children}
    </div>
  );
}

function Arrow() {
  return <div className="farrow-down" />;
}

function StateEnd({ state, label }: { state: "finished" | "escalated"; label: string }) {
  const map = {
    finished: { bg: "var(--state-finished-tint)", color: "var(--state-finished)", border: "var(--state-finished)" },
    escalated: { bg: "var(--state-escalated-tint)", color: "var(--state-escalated)", border: "var(--state-escalated)" },
  };
  const s = map[state];
  return (
    <FNode style={{ borderColor: s.border, background: "var(--paper)" }}>
      <span className="fstate-pill" style={{ background: s.bg, color: s.color }}>
        {label}
      </span>
    </FNode>
  );
}

function Note({
  color,
  label,
  title,
  children,
}: {
  color: string;
  label: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      className="bg-paper border border-line rounded-r-sm px-4 py-3"
      style={{ borderLeft: `3px solid ${color}` }}
    >
      <div
        className="font-mono text-[10px] tracking-[0.2em] uppercase font-semibold mb-1.5"
        style={{ color }}
      >
        {label}
      </div>
      <div className="font-display text-[19px] leading-tight font-semibold text-ink mb-1">
        {title}
      </div>
      <p className="text-xs text-ink-soft leading-relaxed">{children}</p>
    </div>
  );
}
