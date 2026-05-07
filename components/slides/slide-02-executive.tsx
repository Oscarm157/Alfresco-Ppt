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
  enCurso: 12,
  cancelados: 4,
  promedioH: 40.5,
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
        <header className="mb-10">
          <h2 className="text-[clamp(48px,5.5vw,76px)] text-ink leading-[1.02] tracking-[-0.02em]">
            Dónde estamos <em>hoy</em>
          </h2>
          <p className="mt-4 text-lg text-ink-soft leading-snug">
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
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-line-soft">
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
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-line-soft">
              <Mini
                value={tickets.resueltos}
                label="Resueltos"
                color="var(--state-finished)"
              />
              <Mini
                value={tickets.enCurso}
                label="En curso"
                color="var(--state-pending)"
                note="En sprint o en cola · Auditoría Interna y Especialista de Subcontratistas"
              />
              <Mini
                value={tickets.cancelados}
                label="Cancelados"
                color="var(--state-cancelled)"
              />
            </div>
            <div className="mt-5 flex items-baseline gap-3">
              <span className="label-mono text-navy text-[12px]">Tiempo promedio</span>
              <span className="font-sans font-bold text-3xl text-ink leading-none tabular-nums">
                {tickets.promedioH}
              </span>
              <span className="text-ink-soft text-base">horas</span>
            </div>
          </Block>
        </Reveal>
      </div>

      {/* Strip inferior: lo que cambia */}
      <div className="bg-cream-soft border border-line-soft rounded-sm p-6">
        <div className="label-mono text-gold mb-3 text-[12px]">Lo que cambia</div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-2 text-base text-ink-soft leading-relaxed">
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
      <div className="label-mono mb-5 text-[12px]" style={{ color: accent }}>
        {label}
      </div>
      {children}
    </div>
  );
}

function BigNumber({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div
      className="font-sans font-bold text-[120px] leading-none tracking-[-0.03em] tabular-nums"
      style={{ color }}
    >
      {children}
    </div>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return <div className="mt-3 text-base text-ink-soft">{children}</div>;
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
          className="font-sans font-bold text-4xl tabular-nums leading-none tracking-[-0.02em]"
          style={color ? { color } : undefined}
        >
          {value}
        </span>
        {pct !== undefined && (
          <span className="font-mono text-[12px] text-muted tabular-nums">
            {pct.toFixed(1)}%
          </span>
        )}
      </div>
      <div className="text-[13px] font-medium text-ink mt-2 leading-snug">{label}</div>
      {note && (
        <div className="text-[12px] text-ink-soft leading-snug mt-1.5">
          {note}
        </div>
      )}
    </div>
  );
}
