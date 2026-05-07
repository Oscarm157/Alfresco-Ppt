import { SlideContainer } from "@/components/shared/slide-container";
import { Reveal } from "@/components/ui/motion-primitives";

interface Props { index: number; total: number; }

export function Slide14Closing({ index, total }: Props) {
  return (
    <SlideContainer
      id={`slide-${String(index).padStart(2, "0")}`}
      index={index}
      total={total}
      eyebrow="Cierre · Alfresco ATISA"
      background="cream"
      centered
    >
      <Reveal className="max-w-4xl">
        <div className="label-mono text-rust mb-8">Punto de inflexión</div>
        <h2 className="text-[clamp(40px,6vw,84px)] text-ink leading-[1.05] tracking-[-0.01em]">
          El proyecto está en un <em>punto</em> de inflexión.
          Con dedicación exclusiva y procesos formales, Alfresco ATISA pasa de
          mantenimiento <em>reactivo</em> a operación <em>predecible</em>.
        </h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl border-t border-line pt-8">
          <Contact name="Karla Lisset" role="Project Manager · Alfresco ATISA" email="karla.lisset@atisa.com" />
          <Contact name="Oscar Arredondo" role="TI · Plataforma" email="oscar.arredondo@atisa.com" />
        </div>
      </Reveal>
    </SlideContainer>
  );
}

function Contact({ name, role, email }: { name: string; role: string; email: string }) {
  return (
    <div>
      <div className="label-mono text-muted mb-1.5">{role}</div>
      <div className="text-lg text-ink font-medium leading-snug">{name}</div>
      <div className="font-mono text-xs text-rust mt-1">{email}</div>
    </div>
  );
}
