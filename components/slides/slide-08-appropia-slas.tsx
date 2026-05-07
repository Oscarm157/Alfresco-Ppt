import { SlideContainer } from "@/components/shared/slide-container";
import { Placeholder } from "@/components/shared/placeholder";
import { slas } from "@/data/sla-metrics";

interface Props { index: number; total: number; }

export function Slide08AppropiaSlas({ index, total }: Props) {
  return (
    <SlideContainer
      id={`slide-${String(index).padStart(2, "0")}`}
      index={index}
      total={total}
      eyebrow="Appropia · Tiempos de respuesta"
      background="cream"
    >
      <header className="mb-8 max-w-3xl">
        <h2 className="text-[clamp(36px,4.5vw,52px)] text-ink leading-[1.05]">
          SLA acordado <em>vs.</em> real
        </h2>
        <p className="mt-3 text-base text-ink-soft leading-relaxed max-w-2xl">
          Baseline. A partir de la próxima reunión de gobernanza estos tiempos se miden
          mensualmente y se comparten con Appropia.
        </p>
      </header>

      <div className="bg-paper border border-line rounded-sm overflow-hidden">
        <div
          className="grid grid-cols-[1.6fr_1fr_1fr_0.8fr] label-mono text-muted px-6 py-3 border-b"
          style={{ borderColor: "var(--line)" }}
        >
          <span>Métrica</span>
          <span>SLA acordado</span>
          <span>Real promedio</span>
          <span>Δ</span>
        </div>
        {slas.map((row) => (
          <div
            key={row.metric}
            className="grid grid-cols-[1.6fr_1fr_1fr_0.8fr] items-center px-6 py-5 border-b last:border-b-0 text-[15px]"
            style={{ borderColor: "var(--line-soft)" }}
          >
            <span className="text-ink font-medium">{row.metric}</span>
            <span>{row.agreed ?? <Placeholder size="sm" />}</span>
            <span>{row.actual ?? <Placeholder size="sm" />}</span>
            <span className="font-mono">
              {row.delta ?? <Placeholder size="sm" label="Δ" />}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-start gap-3 text-sm text-ink-soft max-w-3xl">
        <span
          className="font-mono text-[10px] tracking-[0.18em] uppercase font-semibold mt-0.5"
          style={{ color: "var(--navy)" }}
        >
          Gobernanza
        </span>
        <p className="leading-relaxed">
          La medición pasa a ser parte del contrato de servicio. Karla Lisset reporta
          mensualmente al CTO con esta tabla actualizada.
        </p>
      </div>
    </SlideContainer>
  );
}
