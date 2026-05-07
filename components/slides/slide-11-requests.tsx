import { SlideContainer } from "@/components/shared/slide-container";
import { devRequests, mgmtRequests } from "@/data/requests";

interface Props { index: number; total: number; }

export function Slide11Requests({ index, total }: Props) {
  return (
    <SlideContainer
      id={`slide-${String(index).padStart(2, "0")}`}
      index={index}
      total={total}
      eyebrow="Peticiones formales · Appropia"
      background="cream"
    >
      <header className="mb-8 max-w-3xl">
        <h2 className="text-[clamp(36px,4.5vw,56px)] text-ink leading-[1.05]">
          Lo que <em>pedimos</em> a Appropia
        </h2>
        <p className="mt-3 text-base text-ink-soft leading-relaxed">
          Dos frentes: desarrollo (Leobardo) y gestión (Oscar / Karla Lisset).
          Estas peticiones se formalizan en la primera reunión de gobernanza bajo el liderazgo de Karla Lisset.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Column tone="terracotta" who="Leobardo · Desarrollo" items={devRequests} />
        <Column tone="navy" who="Oscar / Karla Lisset · Gestión" items={mgmtRequests} />
      </div>
    </SlideContainer>
  );
}

function Column({
  tone,
  who,
  items,
}: {
  tone: "terracotta" | "navy";
  who: string;
  items: string[];
}) {
  const color = tone === "terracotta" ? "var(--terracotta)" : "var(--navy)";
  return (
    <div className="bg-paper border border-line rounded-sm p-7">
      <div
        className="label-mono mb-5 pb-3 border-b border-line-soft"
        style={{ color }}
      >
        {who}
      </div>
      <ul className="flex flex-col gap-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-4 text-[15px] text-ink-soft leading-relaxed">
            <span
              className="shrink-0 font-mono text-[11px] font-semibold pt-1 tabular-nums"
              style={{ color }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
