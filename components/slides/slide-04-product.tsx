import { SlideContainer } from "@/components/shared/slide-container";
import { Placeholder } from "@/components/shared/placeholder";

interface Props { index: number; total: number; }

const docs = ["CFDI", "ICSOE", "SISUB", "SIPARE", "Contratos", "Documentos generales"];

export function Slide04Product({ index, total }: Props) {
  return (
    <SlideContainer
      id={`slide-${String(index).padStart(2, "0")}`}
      index={index}
      total={total}
      eyebrow="Qué es Alfresco ATISA"
      background="cream"
    >
      <header className="mb-10 max-w-3xl">
        <h2 className="text-[clamp(36px,4.5vw,56px)] text-ink leading-[1.05]">
          Plataforma de <em>gestión documental</em><br />para subcontratistas
        </h2>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <p className="text-lg text-ink-soft leading-relaxed mb-6">
            Centraliza la validación de documentación obligatoria por cada subcontratista
            que trabaja con ATISA. Por proyecto, por periodo y por tipo de documento.
          </p>
          <p className="text-base text-ink-soft leading-relaxed mb-8">
            Operada por Auditoría Interna y por el área de proveedores. Los subcontratistas externos
            suben su documentación a través del portal.
          </p>
          <div>
            <div className="label-mono text-rust mb-3">Documentos validados</div>
            <div className="flex flex-wrap gap-2">
              {docs.map((d) => (
                <span
                  key={d}
                  className="font-mono text-xs tracking-wider uppercase px-3 py-1.5 border rounded-sm bg-paper"
                  style={{ borderColor: "var(--line)", color: "var(--ink-soft)" }}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <Kpi label="Subcontratistas activos" />
          <Kpi label="Documentos validados / mes" />
          <Kpi label="Proyectos activos" />
          <Kpi label="Validaciones cruzadas" />
        </div>
      </div>
    </SlideContainer>
  );
}

function Kpi({ label }: { label: string }) {
  return (
    <div className="bg-paper border border-line rounded-sm p-5 flex flex-col gap-3">
      <Placeholder size="sm" />
      <div className="font-display italic font-semibold text-[40px] leading-none text-ink">
        —
      </div>
      <div className="label-mono text-muted leading-snug">{label}</div>
    </div>
  );
}
