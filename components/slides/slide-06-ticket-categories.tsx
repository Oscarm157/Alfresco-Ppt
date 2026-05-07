"use client";

import { SlideContainer } from "@/components/shared/slide-container";
import { Placeholder } from "@/components/shared/placeholder";
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
      eyebrow="Categorización de tickets"
      background="cream"
    >
      <header className="mb-8 max-w-3xl">
        <h2 className="text-[clamp(36px,4.5vw,52px)] text-ink leading-[1.05]">
          Cómo se <em>distribuyen</em> los tickets
        </h2>
        <p className="mt-3 text-sm text-muted">
          Datos visualizados con valores razonables · reemplazar con data real antes de presentar.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <ChartCard label="Por tipo">
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={ticketsByType}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                stroke="var(--paper)"
                strokeWidth={2}
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
                  fontSize: 12,
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <Legend data={ticketsByType} />
        </ChartCard>

        <ChartCard label="Por origen">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={ticketsByOrigin} layout="vertical" margin={{ left: 40, right: 20 }}>
              <XAxis type="number" hide />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fontSize: 11, fill: "var(--ink-soft)" }}
                axisLine={{ stroke: "var(--line)" }}
                tickLine={false}
                width={150}
              />
              <Tooltip
                contentStyle={{
                  background: "var(--paper)",
                  border: "1px solid var(--line)",
                  borderRadius: 4,
                  fontSize: 12,
                }}
              />
              <Bar dataKey="value" radius={[0, 3, 3, 0]}>
                {ticketsByOrigin.map((d, i) => (
                  <BarCell key={i} fill={d.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <KpiBlock label="Resolución promedio · TI" />
        <KpiBlock label="Resolución promedio · Appropia" />
        <KpiBlock label="% tickets reabiertos" />
      </div>
    </SlideContainer>
  );
}

function ChartCard({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-paper border border-line rounded-sm p-5">
      <div className="label-mono text-rust mb-3">{label}</div>
      {children}
    </div>
  );
}

function Legend({ data }: { data: { name: string; color: string; value: number }[] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 mt-3 text-xs">
      {data.map((d) => (
        <li key={d.name} className="flex items-center gap-2 text-ink-soft">
          <span className="w-2.5 h-2.5 rounded-sm" style={{ background: d.color }} />
          <span className="truncate">{d.name}</span>
          <span className="ml-auto tabular-nums text-muted">{d.value}</span>
        </li>
      ))}
    </ul>
  );
}

function KpiBlock({ label }: { label: string }) {
  return (
    <div className="bg-paper border border-line rounded-sm p-5 flex items-center gap-4">
      <Placeholder size="sm" />
      <div className="label-mono text-muted leading-snug flex-1">{label}</div>
    </div>
  );
}
