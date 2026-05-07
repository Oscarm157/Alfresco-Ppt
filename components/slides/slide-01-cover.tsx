import { SlideContainer } from "@/components/shared/slide-container";
import { Reveal } from "@/components/ui/motion-primitives";

interface Props { index: number; total: number; }

export function Slide01Cover({ index, total }: Props) {
  return (
    <SlideContainer
      id={`slide-${String(index).padStart(2, "0")}`}
      index={index}
      total={total}
      eyebrow="Alfresco ATISA · Estado del proyecto"
      background="cream"
      centered
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <Reveal className="lg:col-span-8">
          <div className="label-mono text-rust mb-6">Mayo 2026 · Confidencial</div>
          <h1 className="text-[clamp(54px,8vw,108px)] text-ink leading-[0.98] tracking-[-0.015em]">
            Estado del proyecto<br />
            y plan de <em>continuidad</em>
          </h1>
          <p className="mt-8 text-lg text-ink-soft max-w-xl leading-relaxed">
            Diagnóstico, evaluación de proveedor y plan de acción.
          </p>
        </Reveal>
        <Reveal delay={0.25} className="lg:col-span-4 lg:border-l lg:border-line lg:pl-8">
          <div className="space-y-4 text-sm">
            <Row label="Para" value="Luis Arias · CTO" />
            <Row label="Por" value="TI · Oscar Arredondo" />
            <Row label="Contexto" value="Onboarding ejecutivo de Karla Lisset como PM dedicada" />
          </div>
          <div className="mt-10 pt-6 border-t border-line label-mono text-muted">
            ATISA Group · TI · Confidencial
          </div>
        </Reveal>
      </div>
    </SlideContainer>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="label-mono text-muted mb-1">{label}</div>
      <div className="text-ink font-medium leading-snug">{value}</div>
    </div>
  );
}
