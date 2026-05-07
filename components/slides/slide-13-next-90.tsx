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
        <header className="mb-10 max-w-3xl">
          <h2 className="text-[clamp(36px,4.5vw,56px)] text-ink leading-[1.05]">
            Próximos <em>90 días</em>
          </h2>
          <p className="mt-3 text-base text-ink-soft leading-relaxed">
            Acciones concretas con owner. Lo que se hace en los primeros 30,
            lo que aterriza al 60, y lo que cierra el 90.
          </p>
        </header>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
    <div className="bg-paper border border-line rounded-sm p-6 flex flex-col">
      <div
        className="label-mono mb-5 pb-3 border-b border-line-soft"
        style={{ color }}
      >
        {label}
      </div>
      <ul className="flex flex-col gap-4 flex-1">
        {actions.map((a, i) => (
          <li key={i} className="flex flex-col gap-1.5">
            <div className="text-[15px] text-ink leading-snug">{a.task}</div>
            <div
              className="font-mono text-[10px] tracking-[0.15em] uppercase"
              style={{ color: "var(--muted)" }}
            >
              <span style={{ color }}>Owner</span>
              <span className="mx-1.5">·</span>
              <span className="text-ink-soft">{a.owner}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
