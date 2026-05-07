"use client";

import { SlideContainer } from "@/components/shared/slide-container";
import { Reveal } from "@/components/ui/motion-primitives";

interface Props { index: number; total: number; }

const proveedores = {
  total: 79,
  alta: 59,
  altaPct: 74.7,
  morales: 54,
  moralesPct: 68.4,
  fisicas: 25,
  fisicasPct: 31.6,
};

const tickets = {
  total: 87,
  resueltos: 71,
  resueltosPct: 81.6,
  enCurso: 12,
  cancelados: 4,
  promedioH: 40.5,
  dentroTiempo: 11,
  dentroPct: 20,
  fueraTiempo: 44,
};

export function Slide02Executive({ index, total }: Props) {
  return (
    <SlideContainer
      id={`slide-${String(index).padStart(2, "0")}`}
      index={index}
      total={total}
      eyebrow="Resumen ejecutivo · Reporte de cumplimiento"
      background="cream"
    >
      <Reveal>
        <header className="mb-8 max-w-3xl">
          <h2 className="text-[clamp(36px,4.5vw,52px)] text-ink leading-[1.05]">
            Dónde estamos <em>hoy</em>
          </h2>
          <p className="mt-3 text-sm text-muted">
            Cierre de mayo 2026 · datos de la plataforma y de la mesa de ayuda
          </p>
        </header>
      </Reveal>

      {/* Dashboard: dos bloques grandes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Subcontratistas */}
        <Reveal>
          <Block accent="var(--terracotta)" label="Subcontratistas">
            <BigNumber color="var(--terracotta)">{proveedores.total}</BigNumber>
            <Caption>registrados en plataforma</Caption>
            <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-line-soft">
              <Mini
                value={proveedores.alta}
                pct={proveedores.altaPct}
                label="Dados de alta"
              />
              <Mini
                value={proveedores.morales}
                pct={proveedores.moralesPct}
                label="Personas morales"
              />
              <Mini
                value={proveedores.fisicas}
                pct={proveedores.fisicasPct}
                label="Personas físicas"
              />
            </div>
          </Block>
        </Reveal>

        {/* Tickets */}
        <Reveal delay={0.1}>
          <Block accent="var(--navy)" label="Tickets">
            <BigNumber color="var(--navy)">{tickets.total}</BigNumber>
            <Caption>atendidos en el período</Caption>
            <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-line-soft">
              <Mini
                value={tickets.resueltos}
                pct={tickets.resueltosPct}
                label="Resueltos"
                color="var(--state-finished)"
              />
              <Mini
                value={tickets.enCurso}
                label="En curso"
                color="var(--state-pending)"
                note="Trabajándose en sprint o en cola · Auditoría Interna y Especialista de Subcontratistas"
              />
              <Mini
                value={tickets.cancelados}
                label="Cancelados"
                color="var(--state-cancelled)"
              />
            </div>
            <div className="mt-4 flex items-baseline gap-3 text-xs text-muted">
              <span className="label-mono text-navy">Tiempo promedio</span>
              <span className="font-display italic text-2xl text-ink leading-none">
                {tickets.promedioH}
              </span>
              <span className="text-ink-soft">h</span>
              <span className="text-line">·</span>
              <span className="text-ink-soft">
                {tickets.dentroTiempo} dentro de SLA, {tickets.fueraTiempo} fuera
              </span>
            </div>
          </Block>
        </Reveal>
      </div>

      {/* Strip inferior: lo que cambia */}
      <div className="bg-cream-soft border border-line-soft rounded-sm p-5">
        <div className="label-mono text-gold mb-3">Lo que cambia</div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2 text-sm text-ink-soft leading-relaxed">
          <li>Karla Lisset se integra como PM dedicada de Alfresco.</li>
          <li>Flujo formal de tickets y evaluación recurrente del proveedor.</li>
          <li>Ofensores documentados, mitigaciones en marcha.</li>
        </ul>
      </div>
    </SlideContainer>
  );
}

function Block({
  label,
  accent,
  children,
}: {
  label: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-paper border border-line rounded-sm p-7 h-full">
      <div className="label-mono mb-5" style={{ color: accent }}>
        {label}
      </div>
      {children}
    </div>
  );
}

function BigNumber({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div
      className="font-display italic font-semibold text-[88px] leading-none tracking-[-0.01em] tabular-nums"
      style={{ color }}
    >
      {children}
    </div>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return <div className="mt-2 text-sm text-ink-soft">{children}</div>;
}

function Mini({
  value,
  pct,
  label,
  color,
  note,
}: {
  value: number;
  pct?: number;
  label: string;
  color?: string;
  note?: string;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-2">
        <span
          className="font-display italic font-semibold text-2xl tabular-nums leading-none"
          style={color ? { color } : undefined}
        >
          {value}
        </span>
        {pct !== undefined && (
          <span className="font-mono text-[11px] text-muted tabular-nums">
            {pct.toFixed(1)}%
          </span>
        )}
      </div>
      <div className="label-mono text-muted mt-1.5 leading-snug">{label}</div>
      {note && (
        <div className="text-[11px] text-ink-soft leading-snug mt-1.5 italic">
          {note}
        </div>
      )}
    </div>
  );
}

