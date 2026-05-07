# Alfresco ATISA · Estado del Proyecto

Presentación web 14 slides scroll-snap. Reunión Luis Arias (CTO) · Mayo 2026.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 con tokens del flow original (terracota / crema / cream)
- Motion v12 para fade-up sutil al entrar al viewport
- Recharts para slides 06 y 07
- Cormorant Garamond (display) + Manrope (body) + JetBrains Mono (labels)

## Correr local

```bash
npm install
npm run dev
```

Abre `http://localhost:3200`.

## Navegación

- `↓` `→` `Espacio` `PageDown` — siguiente slide
- `↑` `←` `PageUp` — anterior
- `Home` / `End` — primero / último
- Side rail derecho — dots clicables
- Scroll vertical natural también funciona (snap-y mandatory)

## Slides

| # | Tema | Min |
|---|---|---|
| 01 | Cover | 0:30 |
| 02 | Resumen ejecutivo | 1:30 |
| 03 | Equipo | 1:30 |
| 04 | Qué es Alfresco | 1:00 |
| 05 | Flujo de tickets | 3:00 |
| 06 | Categorización tickets | 2:30 |
| 07 | Horas Appropia | 2:30 |
| 08 | SLAs Appropia | 1:30 |
| 09 | Ofensores 01-08 | 3:00 |
| 10 | Mitigaciones 01-08 | 3:00 |
| 11 | Peticiones a Appropia | 2:00 |
| 12 | Plan de transición | 1:30 |
| 13 | 30 / 60 / 90 | 2:00 |
| 14 | Cierre | 0:30 |

Total ~26 min. Margen ±2 para dejar 30+ min de discusión.

## Placeholders por llenar

Los chips dorados con borde dashed marcan datos pendientes:

- **Slide 02** · # subcontratistas, # tickets, # horas Appropia
- **Slide 04** · # subcontratistas, docs/mes, proyectos, validaciones cruzadas
- **Slide 06** · gráficas (mock razonable, reemplazar) + 3 KPIs
- **Slide 07** · total horas, bolsa restante, % bugs
- **Slide 08** · SLAs reales y deltas (4 filas)

Buscar `// REPLACE WITH REAL DATA` en `/data/*.ts` para los mocks de Recharts.

## Estructura

```
app/                  layout, globals (paleta + scroll-snap), page (deck)
components/
  shared/             slide-container, eyebrow, slide-number, progress-rail, keyboard-nav, placeholder
  slides/             slide-01..slide-14
  ui/                 motion-primitives (Reveal, RevealStack, RevealItem)
data/                 team, offenders, mitigations, ticket-categories, appropia-hours, sla-metrics, requests, next-90
flujo_tickets_alfresco.html   referencia visual original
prompt_presentacion_alfresco.md   brief original
```

## Despliegue

```bash
vercel deploy
```

Para producción: `vercel deploy --prod`.

## Reglas de tono

- Karla Lisset es PM dedicada nueva. Karla Ruiz es Especialista de Proveedores. No mezclar.
- El framing es "el proyecto creció a un punto donde requiere PM dedicada de tiempo completo". No es la salida de Oscar.
- Tono diagnóstico, no queja. La presentación tiene que poder leerse con Ana María (Appropia) en la sala.
