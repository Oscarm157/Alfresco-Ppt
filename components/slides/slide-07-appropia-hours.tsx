"use client";

import { SlideContainer } from "@/components/shared/slide-container";
import { Placeholder } from "@/components/shared/placeholder";
import { hoursByMonth } from "@/data/appropia-hours";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend as RLegend,
  CartesianGrid,
} from "recharts";

interface Props { index: number; total: number; }

const SEGMENTS = [
  { key: "bugs", label: "Bugs / hot-fix", color: "var(--terracotta)" },
  { key: "features", label: "Nuevas funcionalidades", color: "var(--gold)" },
  { key: "soporte", label: "Soporte técnico", color: "var(--navy)" },
  { key: "reuniones", label: "Reuniones / planning", color: "var(--muted)" },
];

export function Slide07AppropiaHours({ index, total }: Props) {
  return (
    <SlideContainer
      id={`slide-${String(index).padStart(2, "0")}`}
      index={index}
      total={total}
      eyebrow="Appropia · Horas consumidas"
      background="cream"
    >
      <header className="mb-6 max-w-3xl">
        <h2 className="text-[clamp(36px,4.5vw,52px)] text-ink leading-[1.05]">
          En qué se va la <em>bolsa de horas</em>
        </h2>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
        <div className="bg-paper border border-line rounded-sm p-6">
          <ResponsiveContainer width="100%" height={340}>
            <BarChart data={hoursByMonth} margin={{ left: 0, right: 8, top: 16 }}>
              <CartesianGrid strokeDasharray="2 4" stroke="var(--line-soft)" vertical={false} />
              <XAxis
                dataKey="mes"
                tick={{ fontSize: 11, fill: "var(--ink-soft)" }}
                axisLine={{ stroke: "var(--line)" }}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "var(--muted)" }}
                axisLine={false}
                tickLine={false}
                width={40}
              />
              <Tooltip
                contentStyle={{
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  borderRadius: 4,
                  fontSize: 12,
                }}
                cursor={{ fill: "rgba(0,0,0,0.03)" }}
              />
              <RLegend
                wrapperStyle={{ fontSize: 11, paddingTop: 12 }}
                iconType="square"
                iconSize={10}
              />
              {SEGMENTS.map((s) => (
                <Bar
                  key={s.key}
                  dataKey={s.key}
                  stackId="a"
                  fill={s.color}
                  name={s.label}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>

        <aside className="flex flex-col gap-4">
          <KpiCard label="Total horas consumidas" />
          <KpiCard label="Bolsa restante" />
          <div
            className="rounded-sm p-5 border-l-[3px]"
            style={{ background: "var(--terracotta-tint)", borderLeftColor: "var(--terracotta)" }}
          >
            <div className="label-mono text-rust mb-2">Insight clave</div>
            <p className="text-[15px] text-ink leading-snug">
              <Placeholder size="sm" /> de las horas se ha invertido en bugs y hot-fixes.
              Casi <Placeholder size="sm" label="X DE 10" /> horas pagadas a Appropia se van a corregir
              cosas que ya se entregaron.
            </p>
          </div>
        </aside>
      </div>
    </SlideContainer>
  );
}

function KpiCard({ label }: { label: string }) {
  return (
    <div className="bg-paper border border-line rounded-sm p-5">
      <div className="label-mono text-muted mb-3">{label}</div>
      <div className="flex items-center gap-3">
        <Placeholder />
        <span className="font-display italic text-3xl text-ink leading-none">h</span>
      </div>
    </div>
  );
}
