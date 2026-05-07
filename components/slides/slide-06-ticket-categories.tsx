"use client";

import { SlideContainer } from "@/components/shared/slide-container";
import { Reveal } from "@/components/ui/motion-primitives";
import { ticketsByType, ticketsByOrigin } from "@/data/ticket-categories";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell as BarCell,
} from "recharts";

interface Props { index: number; total: number; }

export function Slide06TicketCategories({ index, total }: Props) {
  return (
    <SlideContainer
      id={`slide-${String(index).padStart(2, "0")}`}
      index={index}
      total={total}
      eyebrow="Categorización de tickets · 87 totales"
      background="cream"
    >
      <Reveal>
        <header className="mb-8 max-w-3xl">
          <h2 className="text-[clamp(44px,5vw,64px)] text-ink leading-[1.02] tracking-[-0.02em]">
            En qué se va el <em>tiempo</em> de la mesa de ayuda
          </h2>
          <p className="mt-4 text-base text-ink-soft leading-relaxed">
            Categorización aproximada del periodo. El dato más relevante para evaluar al proveedor:
            el peso de bugs y errores de plataforma sobre el total.
          </p>
        </header>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8 mb-8">
        {/* Donut + total al centro */}
        <div className="bg-paper border border-line rounded-sm p-6 relative">
          <div className="label-mono text-rust mb-3 text-[12px]">Por tipo</div>
          <div className="relative">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={ticketsByType}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={120}
                  paddingAngle={2}
                  stroke="var(--paper)"
                  strokeWidth={3}
                >
                  {ticketsByType.map((d, i) => (
                    <Cell key={i} fill={d.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "var(--paper)",
                    border: "1px solid var(--line)",
                    borderRadius: 4,
                    fontSize: 13,
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div className="font-sans font-bold text-5xl text-ink leading-none tabular-nums">
                87
              </div>
              <div className="label-mono text-muted text-[11px] mt-2">Tickets</div>
            </div>
          </div>
        </div>

        {/* Lista categorías con barras */}
        <div className="bg-paper border border-line rounded-sm p-6">
          <div className="label-mono text-rust mb-5 text-[12px]">Desglose</div>
          <ul className="flex flex-col gap-3">
            {ticketsByType.map((d) => (
              <li key={d.name} className="flex items-center gap-4">
                <span
                  className="w-3 h-3 rounded-sm shrink-0"
                  style={{ background: d.color }}
                />
                <span className="text-base text-ink font-medium flex-1 leading-snug">
                  {d.name}
                </span>
                <span className="font-sans font-bold text-2xl tabular-nums leading-none w-12 text-right">
                  {d.value}
                </span>
                <span className="font-mono text-sm text-muted tabular-nums w-14 text-right">
                  {d.pct.toFixed(1)}%
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Insight clave + por solicitante */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">
        <div
          className="rounded-sm p-6 border-l-[3px]"
          style={{
            background: "var(--terracotta-tint)",
            borderLeftColor: "var(--terracotta)",
          }}
        >
          <div className="label-mono text-rust mb-3 text-[12px]">Lo importante</div>
          <p className="text-lg text-ink leading-snug">
            <strong className="font-bold">16 tickets (18.4%)</strong> son bugs o errores
            de la plataforma. Esto es lo que se escala a Appropia y lo que la evaluación
            del proveedor tiene que medir mes con mes.
          </p>
        </div>

        <div className="bg-paper border border-line rounded-sm p-6">
          <div className="label-mono text-rust mb-4 text-[12px]">Por solicitante (top)</div>
          <ResponsiveContainer width="100%" height={170}>
            <BarChart data={ticketsByOrigin} layout="vertical" margin={{ left: 0, right: 16 }}>
              <XAxis type="number" hide />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fontSize: 13, fill: "var(--ink)" }}
                axisLine={{ stroke: "var(--line)" }}
                tickLine={false}
                width={140}
              />
              <Tooltip
                contentStyle={{
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  borderRadius: 4,
                  fontSize: 13,
                }}
                cursor={{ fill: "rgba(0,0,0,0.03)" }}
              />
              <Bar dataKey="value" radius={[0, 3, 3, 0]}>
                {ticketsByOrigin.map((d, i) => (
                  <BarCell key={i} fill={d.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </SlideContainer>
  );
}
