import { SlideContainer } from "@/components/shared/slide-container";
import { team, groupLabel, groupColor, type TeamGroup } from "@/data/team";

interface Props { index: number; total: number; }

const groups: TeamGroup[] = ["ti", "operacion", "appropia"];

export function Slide03Team({ index, total }: Props) {
  return (
    <SlideContainer
      id={`slide-${String(index).padStart(2, "0")}`}
      index={index}
      total={total}
      eyebrow="El equipo"
      background="cream"
    >
      <header className="mb-8 max-w-3xl">
        <h2 className="text-[clamp(36px,4.5vw,56px)] text-ink leading-[1.05]">
          Quién <em>sostiene</em> el proyecto
        </h2>
        <p className="mt-3 text-base text-ink-soft leading-relaxed">
          Tres equipos en operación. La coordinación PM transita de Oscar a Karla Lisset.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {groups.map((g) => {
          const members = team.filter((p) => p.group === g);
          return (
            <div key={g} className="flex flex-col">
              <div
                className="label-mono mb-4 pb-2 border-b"
                style={{ color: groupColor[g], borderColor: "var(--line)" }}
              >
                {groupLabel[g]}
              </div>
              <ul className="flex flex-col gap-3">
                {members.map((p) => (
                  <li
                    key={p.name}
                    className="bg-paper border border-line rounded-sm p-4 relative"
                    style={
                      p.highlight === "new"
                        ? { borderColor: groupColor[g], borderWidth: "1.5px" }
                        : undefined
                    }
                  >
                    {p.highlight === "new" && (
                      <span
                        className="absolute -top-2 right-3 px-2 py-0.5 text-[9px] font-mono font-semibold tracking-[0.2em] uppercase rounded-sm"
                        style={{
                          background: groupColor[g],
                          color: "var(--paper)",
                        }}
                      >
                        Nueva PM
                      </span>
                    )}
                    {p.highlight === "transition" && (
                      <span
                        className="absolute -top-2 right-3 px-2 py-0.5 text-[9px] font-mono font-semibold tracking-[0.2em] uppercase rounded-sm border"
                        style={{
                          background: "var(--paper)",
                          color: groupColor[g],
                          borderColor: groupColor[g],
                        }}
                      >
                        Transición →
                      </span>
                    )}
                    <div className="font-display text-[20px] leading-tight font-semibold text-ink">
                      {p.name}
                    </div>
                    <div
                      className="font-mono text-[10px] tracking-[0.15em] uppercase mt-1 mb-2"
                      style={{ color: groupColor[g] }}
                    >
                      {p.role}
                    </div>
                    <p className="text-sm text-ink-soft leading-snug">
                      {p.responsibility}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-8 px-5 py-4 border border-line rounded-sm bg-cream-soft">
        <div className="text-sm text-ink-soft leading-relaxed">
          <span className="font-semibold text-ink">Coordinación PM →</span>{" "}
          Oscar acompaña la transición durante 6 semanas. A partir de la 7,
          Karla Lisset es el punto único de contacto con Appropia.
          Oscar continúa como soporte estratégico desde TI.
        </div>
      </div>
    </SlideContainer>
  );
}
