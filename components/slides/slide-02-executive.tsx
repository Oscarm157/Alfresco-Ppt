import { SlideContainer } from "@/components/shared/slide-container";
import { Placeholder } from "@/components/shared/placeholder";
import { Reveal } from "@/components/ui/motion-primitives";

interface Props { index: number; total: number; }

export function Slide02Executive({ index, total }: Props) {
  return (
    <SlideContainer
      id={`slide-${String(index).padStart(2, "0")}`}
      index={index}
      total={total}
      eyebrow="Resumen ejecutivo"
      background="cream"
    >
      <Reveal>
        <header className="mb-10 max-w-3xl">
          <h2 className="text-[clamp(36px,4.5vw,56px)] text-ink leading-[1.05]">
            Tres lecturas <em>en un solo vistazo</em>
          </h2>
        </header>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Column label="01 · El proyecto hoy" tone="terracotta">
          <BulletItem>
            Plataforma operativa con <Placeholder size="sm" /> subcontratistas activos.
          </BulletItem>
          <BulletItem>
            <Placeholder size="sm" /> tickets atendidos en lo que va del año.
          </BulletItem>
          <BulletItem>
            <Placeholder size="sm" /> horas consumidas con Appropia este año.
          </BulletItem>
        </Column>

        <Column label="02 · Lo que cambia" tone="navy">
          <BulletItem>
            Karla Lisset se integra como PM dedicada de Alfresco.
          </BulletItem>
          <BulletItem>
            TI implementa flujo formal de tickets y evaluación recurrente de Appropia.
          </BulletItem>
          <BulletItem>
            Se documentan ofensores y se ejecutan mitigaciones.
          </BulletItem>
        </Column>

        <Column label="03 · Lo que pedimos" tone="gold">
          <BulletItem>
            Aprobación del plan de continuidad propuesto.
          </BulletItem>
          <BulletItem>
            Endoso de las peticiones formales a Appropia.
          </BulletItem>
          <BulletItem>
            Ratificación de Karla Lisset como punto único de coordinación.
          </BulletItem>
        </Column>
      </div>
    </SlideContainer>
  );
}

function Column({
  label,
  tone,
  children,
}: {
  label: string;
  tone: "terracotta" | "navy" | "gold";
  children: React.ReactNode;
}) {
  const colorMap = {
    terracotta: "var(--terracotta)",
    navy: "var(--navy)",
    gold: "var(--gold)",
  };
  return (
    <div className="bg-paper border border-line rounded-sm p-6 flex flex-col">
      <div
        className="label-mono mb-5 pb-3 border-b border-line-soft"
        style={{ color: colorMap[tone] }}
      >
        {label}
      </div>
      <ul className="flex flex-col gap-4">{children}</ul>
    </div>
  );
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-[15px] text-ink-soft leading-relaxed">
      <span
        className="shrink-0 w-1 mt-2 rounded-full"
        style={{ height: "1px", background: "var(--line)", marginTop: "12px", width: "10px" }}
      />
      <span>{children}</span>
    </li>
  );
}
