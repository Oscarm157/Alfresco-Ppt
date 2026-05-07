import { SlideContainer } from "@/components/shared/slide-container";
import { Reveal } from "@/components/ui/motion-primitives";

interface Props { index: number; total: number; }

const phases = [
  {
    label: "Semanas 1–2",
    title: "Inducción",
    body: "Karla Lisset se familiariza con el flujo, los actores y los tickets activos. Oscar la acompaña en reuniones clave. Lectura del backlog completo.",
    color: "var(--gold)",
  },
  {
    label: "Semanas 3–6",
    title: "Transición operativa",
    body: "Karla Lisset toma la coordinación día a día. Oscar queda como escalación y soporte estratégico. Primera reunión formal con Appropia bajo su liderazgo.",
    color: "var(--terracotta)",
  },
  {
    label: "Semana 7 →",
    title: "Operación plena",
    body: "Karla Lisset es el punto único de contacto con Appropia para temas de proyecto. Reportes mensuales de gobernanza al CTO.",
    color: "var(--sage)",
  },
];

export function Slide12Transition({ index, total }: Props) {
  return (
    <SlideContainer
      id={`slide-${String(index).padStart(2, "0")}`}
      index={index}
      total={total}
      eyebrow="Plan de transición · Karla Lisset"
      background="cream"
    >
      <Reveal>
        <header className="mb-12 max-w-3xl">
          <h2 className="text-[clamp(36px,4.5vw,56px)] text-ink leading-[1.05]">
            Cómo se da la <em>transición</em>
          </h2>
          <p className="mt-3 text-base text-ink-soft leading-relaxed">
            Tres bloques. Oscar acompaña hasta que Karla Lisset lleva la coordinación con Appropia por sí sola.
          </p>
        </header>
      </Reveal>

      <div className="relative">
        <div
          className="absolute left-0 right-0 top-7 h-px"
          style={{ background: "var(--line)" }}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((p, i) => (
            <div key={p.label} className="relative pt-14">
              <div
                className="absolute left-0 top-5 w-3.5 h-3.5 rounded-full border-2"
                style={{ background: "var(--paper)", borderColor: p.color }}
              />
              <div
                className="label-mono mb-2"
                style={{ color: p.color }}
              >
                {String(i + 1).padStart(2, "0")} · {p.label}
              </div>
              <h3 className="font-display italic font-semibold text-[28px] text-ink leading-tight mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
}
