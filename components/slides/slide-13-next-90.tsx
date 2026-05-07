import { SlideContainer } from "@/components/shared/slide-container";
import { Reveal } from "@/components/ui/motion-primitives";
import { days30, days60, days90, type Action } from "@/data/next-90";

interface Props { index: number; total: number; }

export function Slide13Next90({ index, total }: Props) {
  return (
    <SlideContainer
      id={`slide-${String(index).padStart(2, "0")}`}
      index={index}
      total={total}
      eyebrow="Próximos pasos · 30 / 60 / 90"
      background="cream"
    >
      <Reveal>
        <header className="mb-8 max-w-3xl">
          <h2 className="text-[clamp(36px,4vw,52px)] text-ink leading-[1.05] tracking-[-0.02em]">
            Próximos <em>90 días</em>
          </h2>
          <p className="mt-3 text-base text-ink-soft leading-relaxed">
            Acciones concretas con responsable. Lo que entra en los primeros 30 días,
            lo que aterriza al 60 y lo que cierra el 90.
          </p>
        </header>
      </Reveal>

      {/* Timeline horizontal sin box, mejor uso del ancho */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-8 relative">
        <div
          className="hidden lg:block absolute left-0 right-0 top-3 h-px"
          style={{ background: "var(--line)" }}
        />
        <Bucket label="Primeros 30 días" actions={days30} color="var(--terracotta)" />
        <Bucket label="Días 30–60" actions={days60} color="var(--gold)" />
        <Bucket label="Días 60–90" actions={days90} color="var(--sage)" />
      </div>
    </SlideContainer>
  );
}

function Bucket({
  label,
  actions,
  color,
}: {
  label: string;
  actions: Action[];
  color: string;
}) {
  return (
    <div className="relative pt-8 lg:pt-10">
      <div
        className="hidden lg:block absolute left-0 top-1.5 w-3 h-3 rounded-full border-2"
        style={{ background: "var(--cream)", borderColor: color }}
      />
      <div
        className="label-mono mb-4 text-[11px]"
        style={{ color }}
      >
        {label}
      </div>
      <ul className="flex flex-col gap-3">
        {actions.map((a, i) => (
          <li key={i} className="flex flex-col gap-1 pb-3 border-b border-line-soft last:border-b-0">
            <div className="text-[14px] text-ink leading-snug font-medium">
              {a.task}
            </div>
            <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted">
              <span style={{ color }}>Resp.</span>
              <span className="mx-1.5">·</span>
              <span className="text-ink-soft">{a.owner}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
