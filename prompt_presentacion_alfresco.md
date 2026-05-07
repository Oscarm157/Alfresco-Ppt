# Prompt para Claude Code · Presentación Alfresco ATISA

> Pega esto completo en Claude Code dentro de una carpeta vacía. Antes de ejecutar, llena las secciones marcadas con `[OSCAR LLENAR]` con los datos reales que tengas (números de tickets, horas, etc.). Si los dejas vacíos, Claude Code generará placeholders editables.

---

## 1. Contexto del proyecto

Necesito construir una presentación web (scroll-based, full-screen sections, navegable con flechas y scroll-snap) que documente el estado actual del proyecto **Alfresco ATISA** y proponga un plan de continuidad y mejora.

**Qué es Alfresco ATISA:** una plataforma de gestión documental para subcontratistas de ATISA Group. La plataforma valida y almacena documentación obligatoria (CFDI, ICSOE, SISUB, SIPARE, contratos, etc.) por cada subcontratista que trabaja con la organización. Se usa internamente por el equipo de Auditoría Interna, el área de proveedores, y los subcontratistas externos suben su documentación a través del portal.

**Quién la desarrolla:** la plataforma la desarrolla **Appropia**, un proveedor externo. ATISA tiene un equipo de TI compuesto por Leobardo (desarrollador) y Oscar (gestión de plataforma y desarrollo de producto), quienes funcionan como puente entre Auditoría/Operación interna y Appropia. La meta de mediano plazo es que TI gane progresivamente independencia conforme se transfiera el know-how.

**Cómo está hoy:** el proyecto creció rápido. Hoy entran tickets de varias áreas, hay sprints de nuevas funcionalidades en paralelo, y hay un volumen relevante de bugs derivados de despliegues. La gestión actual presenta cuellos de botella, principalmente porque la persona que coordina (Oscar) tiene varios proyectos simultáneos y el día a día del proyecto Alfresco demanda dedicación completa.

**Por qué existe esta presentación:** el CTO (Luis Arias) solicitó:
1. Categorizar los tickets que se han atendido (técnicos vs. de proceso, bugs vs. nuevas funcionalidades).
2. Categorizar las horas consumidas por Appropia.
3. Evaluar a Appropia como proveedor con base en esa data.
4. Proponer mitigaciones a los principales ofensores que están retrasando el proyecto.

En paralelo, **Karla Lisset** se integra al equipo de TI como **Project Manager dedicada de Alfresco ATISA**. Esta presentación también funciona como onboarding ejecutivo para ella y como entrega formal del estado del proyecto.

**Tono importante para esta presentación:** el mensaje sobre la incorporación de Karla Lisset NO debe presentarse como "Oscar deja el proyecto". Debe enmarcarse como **"el proyecto creció a un punto donde requiere una PM dedicada de tiempo completo"** y Karla Lisset asume esa responsabilidad. Oscar continúa apoyando desde TI en temas estratégicos y de plataforma. Es una evolución del equipo, no una salida.

---

## 2. Audiencia y narrativa

**Audiencia primaria:** Luis Arias (CTO) y stakeholders ejecutivos.
**Audiencia secundaria:** Karla Lisset (nueva PM, primera vez viendo el proyecto a este nivel de detalle), Auditoría Interna (Kimberly, Marisol, Griselda), y eventualmente el equipo de Appropia (Ana María como PM, Jerrinson como dev).

**Narrativa en 3 actos:**

- **Acto 1 — Dónde estamos:** qué es el proyecto, quién participa, cómo opera el flujo de tickets hoy.
- **Acto 2 — Qué nos está costando:** análisis de tickets, evaluación de Appropia, ofensores identificados (con datos).
- **Acto 3 — Cómo lo arreglamos:** mitigaciones concretas, peticiones a Appropia, plan de continuidad con Karla Lisset.

**Tono:** honesto pero constructivo. No es un reporte de problemas, es una propuesta de mejora con diagnóstico riguroso. Profesional, claro, sin adornos innecesarios. Mexicano formal de negocio, no acartonado.

---

## 3. Personas y roles

Hay dos "Karlas" en este proyecto. Es crítico no confundirlas.

| Persona | Rol | Equipo | Responsabilidad |
|---|---|---|---|
| **Luis Arias** | CTO | ATISA · Dirección | Stakeholder ejecutivo. Solicitó esta evaluación. |
| **Oscar Arredondo** | TI · Gestión de plataforma | ATISA · TI | Hasta ahora coordinador del proyecto. Continúa apoyando desde TI. |
| **Leobardo** | TI · Desarrollador | ATISA · TI | Lado técnico, validación, integraciones. |
| **Karla Lisset** | **PM Dedicada de Alfresco** (nueva) | ATISA · TI | **Nueva PM del proyecto.** Asume coordinación end-to-end. |
| **Kimberly Peña Delgado** | Auditora Interna | ATISA · Auditoría | Levanta tickets de proceso, valida documentación. |
| **Marisol Martínez Torrez** | Auditora Interna | ATISA · Auditoría | Levanta tickets de proceso, valida documentación. |
| **Griselda** | Gerente de Nóminas | ATISA · Nóminas | Jefa de Kimberly y Marisol. Stakeholder funcional. |
| **Karla Ruiz** | Especialista en desarrollo de proveedores y subcontratos | ATISA · Proveedores | Contacto directo con subcontratistas. Apoya a Auditoría. |
| **Ana María** | PM de Appropia | Appropia (externo) | Contraparte de gestión del lado del proveedor. |
| **Jerrinson** | Desarrollador de Appropia | Appropia (externo) | Contraparte técnica. |

**Importante:** cuando la presentación mencione "Karla" sin apellido, debe quedar claro por contexto cuál de las dos. Mejor siempre usar nombre completo: "Karla Lisset" para la PM, "Karla Ruiz" para la especialista de proveedores.

---

## 4. Estructura de la presentación (slide por slide)

Son aproximadamente **14 secciones** (slides) full-screen con scroll-snap. Cada slide ocupa el viewport completo. Navegación con flechas del teclado, scroll, y un indicador de progreso lateral.

### Slide 01 · Cover

- Eyebrow: `ALFRESCO ATISA · ESTADO DEL PROYECTO`
- Título grande (Cormorant Garamond italic): **"Estado del Proyecto y Plan de Continuidad"**
- Subtítulo: "Diagnóstico, evaluación de proveedor y plan de acción"
- Fecha: Mayo 2026
- Footer: `ATISA Group · TI · Confidencial`

### Slide 02 · Resumen ejecutivo

Un solo slide denso pero limpio. Estructura en 3 columnas:

**Columna 1 — El proyecto hoy**
- Plataforma operativa con [OSCAR LLENAR: # de subcontratistas activos] dados de alta.
- [OSCAR LLENAR: # de tickets totales atendidos]
- [OSCAR LLENAR: # de horas consumidas con Appropia este año]

**Columna 2 — Lo que cambia**
- Karla Lisset se integra como PM dedicada de Alfresco.
- TI implementa flujo formal de tickets + evaluación recurrente de Appropia.
- Se documentan ofensores y se ejecutan mitigaciones.

**Columna 3 — Lo que pedimos**
- Aprobación del plan de continuidad propuesto.
- Endoso de las peticiones formales a Appropia.
- Ratificación de Karla Lisset como punto único de coordinación.

### Slide 03 · El equipo

Visualización del organigrama del proyecto. Tres "columnas" o "grupos":

- **ATISA · TI** — Oscar, Leobardo, Karla Lisset (resaltada como nueva)
- **ATISA · Operación** — Kimberly, Marisol, Griselda, Karla Ruiz
- **Appropia** — Ana María, Jerrinson

Cada persona en una tarjeta con nombre, rol y una línea de responsabilidad. Karla Lisset y Oscar deben tener una indicación visual de "transición" — por ejemplo, una flecha sutil de Oscar a Karla Lisset con texto "Coordinación PM →".

### Slide 04 · Qué es Alfresco ATISA

Slide de contexto. Texto editorial con dos columnas:

- **Izquierda:** Definición del producto. "Plataforma de gestión documental para subcontratistas. Centraliza la validación de CFDI, ICSOE, SISUB, SIPARE, contratos y documentos generales por proyecto y por periodo."
- **Derecha:** Indicadores clave en formato grande:
  - [OSCAR LLENAR: # subcontratistas]
  - [OSCAR LLENAR: # documentos validados / mes]
  - [OSCAR LLENAR: # proyectos activos]
  - [OSCAR LLENAR: # validaciones cruzadas configuradas]

### Slide 05 · Cómo opera el flujo de tickets

**Este slide debe embeber el flujo de tickets que ya construí.** Tengo el archivo HTML `flujo_tickets_alfresco.html` (te lo paso aparte). El flujo muestra el proceso completo: levantamiento → triage → resolución → cierre, con dos rutas (técnico/proceso) y la decisión de "ajuste por TI" vs. "escalar a Appropia". Mantén la paleta terracota/crema y la tipografía Cormorant Garamond italic para los labels grandes "Técnico" y "Proceso".

Acompañar con un sidebar de notas resumidas:
- 4 roles, 4 estados, 2 rutas
- SLAs: TI 1d · Appropia 2d · Auditoría 1d (hábiles)
- Email de escalación: `soporte@appropia.com`

### Slide 06 · Categorización de tickets (a la fecha)

Visualización de datos. Usa Recharts. Dos gráficas lado a lado:

**Gráfica A — Distribución por tipo:**
- Bar chart o donut con: Bugs / Soporte técnico / Nuevas funcionalidades / Tickets de proceso / Cancelados
- Datos: [OSCAR LLENAR — yo te paso el desglose real]

**Gráfica B — Distribución por origen (área solicitante):**
- Auditoría / Karla Ruiz / Otros
- Datos: [OSCAR LLENAR]

Debajo de las gráficas, una franja con 3 KPIs grandes:
- Tiempo promedio de resolución (TI): [OSCAR LLENAR]
- Tiempo promedio de resolución (Appropia): [OSCAR LLENAR]
- % de tickets reabiertos: [OSCAR LLENAR]

### Slide 07 · Evaluación de Appropia · Horas consumidas

Visualización de las horas contratadas vs. consumidas con Appropia, segmentadas por tipo de actividad.

- Bar chart horizontal o stacked area: horas consumidas por mes, segmentado por:
  - Bugs / hot-fixes
  - Nuevas funcionalidades
  - Soporte técnico
  - Reuniones / planning
- Total de horas: [OSCAR LLENAR]
- Bolsa de horas restante: [OSCAR LLENAR]

**Insight clave (resaltado a un costado):** "El [XX]% de las horas se ha invertido en bugs y hot-fixes. Es decir, casi [X de cada 10] horas pagadas a Appropia se van a corregir cosas que ya se entregaron."

### Slide 08 · Evaluación de Appropia · Tiempos de respuesta

Tabla limpia con tipografía editorial:

| Métrica | SLA acordado | Real promedio | Δ |
|---|---|---|---|
| Triage de ticket | [llenar] | [llenar] | [llenar] |
| Resolución de bug | [llenar] | [llenar] | [llenar] |
| Entrega de feature | [llenar] | [llenar] | [llenar] |
| Respuesta a duda técnica | [llenar] | [llenar] | [llenar] |

Debajo, una nota: "Estos tiempos son un baseline. A partir de [fecha] se medirán mensualmente y se compartirán con Appropia como parte de la gobernanza del contrato."

### Slide 09 · Ofensores principales

Slide central. Lista numerada de 6-8 ofensores con descripción corta. Cada uno como una tarjeta numerada (01, 02, 03…) con paleta terracota:

1. **Cuello de botella en TI.** La gestión del proyecto recae en una sola persona (Oscar) que sostiene varios proyectos en paralelo. El ritmo se ve afectado.
2. **Falta de un proceso documentado end-to-end.** Hasta ahora, el flujo vivía en la cabeza del equipo. (Mitigación parcial: ya existe el flujo formal de tickets — slide 05.)
3. **Alto volumen de bugs en despliegues nuevos.** Una proporción significativa de los tickets recientes son bugs introducidos por nuevas funcionalidades. Indicador de QA insuficiente del lado de Appropia.
4. **Repositorio de código desactualizado.** El GitHub que Appropia comparte con TI no refleja la versión productiva. Bloquea capacitación técnica de Leobardo.
5. **Falta de manuales detallados.** Cada nueva funcionalidad llega sin documentación robusta. TI tiene que reverse-engineerearla.
6. **Ambigüedad en aprobación de sprints.** No hay claridad sobre quién da la aprobación final de qué entra a un sprint y qué se posterga.
7. **Sprints con back-and-forth excesivo.** Las peticiones de TI no siempre llegan con casos de uso claros, lo que multiplica los ciclos de aclaración con Appropia.
8. **Subcontratistas con baja capacidad digital.** Muchos usuarios externos batallan con la plataforma. No hay onboarding ni video explicativo.

### Slide 10 · Mitigaciones

Mismo contador 01–08, pareando cada ofensor con su mitigación. Paleta diferente (verde sage o gold) para diferenciar visualmente del slide anterior.

1. **PM dedicada.** Karla Lisset asume la coordinación end-to-end del proyecto. Oscar continúa como soporte estratégico desde TI.
2. **Flujo formal vigente.** El flujo del slide 05 es ahora el proceso oficial. Se publicará en el portal y se entrenará al equipo de Auditoría y a Karla Ruiz.
3. **Gate de QA antes de despliegue.** Se acuerda con Appropia un checklist de QA y un ambiente de pruebas validado por TI antes de productivo.
4. **Auditoría y refresh del repositorio.** Petición formal a Appropia de actualizar el repo y entregar accesos versionados.
5. **Manual obligatorio por funcionalidad.** Toda nueva funcionalidad se entrega con manual técnico (para TI) y manual de usuario (para operación).
6. **Matriz de decisión de sprints.** Se documenta quién aprueba qué entra a sprint. Karla Lisset firma del lado ATISA, Ana María del lado Appropia.
7. **Plantilla de petición.** Cada feature request entra con caso de uso, flujo del proceso y criterios de aceptación. Reduce los rounds de aclaración.
8. **Onboarding para subcontratistas.** Video corto + guía visual + FAQ. Karla Ruiz lidera la difusión.

### Slide 11 · Peticiones formales a Appropia

Dos columnas, una con peticiones desde el lado técnico (Leo) y otra desde el lado de gestión (Oscar / Karla Lisset). Estilo lista con bullets.

**Peticiones · Desarrollo (Leobardo)**
- Actualización del repositorio de proyectos en GitHub.
- Capacitación técnica sobre las últimas actualizaciones desplegadas.
- Manuales detallados por nueva funcionalidad o ajuste de sprint.
- 1 hora semanal con Jerrinson para transferencia de know-how (cargada a la bolsa de horas).
- Mayor disponibilidad del desarrollador asignado.

**Peticiones · Gestión (Oscar / Karla Lisset)**
- Definir matriz clara de aprobación de sprints. ¿Quién da la firma final?
- Reducir % de bugs en despliegues nuevos. Implementar gate de QA.
- Recibir todo feature request acompañado de caso de uso y flujo del proceso (ya se entregará así desde nuestro lado, pero se pide reciprocidad en cómo se documenta del lado de ellos).
- Manuales detallados sobre el funcionamiento de Alfresco ATISA.
- Confirmación de manuales de usuario. ¿Quedaron acordados? ¿Cuándo se entregan?
- Onboarding o video explicativo dirigido a subcontratistas.

### Slide 12 · Plan de transición · Karla Lisset

Timeline horizontal. Tres bloques:

- **Semanas 1–2 · Inducción.** Karla Lisset se familiariza con el flujo, los actores, los tickets activos. Oscar acompaña reuniones clave. Lectura del backlog completo.
- **Semanas 3–6 · Transición operativa.** Karla Lisset toma la coordinación día a día. Oscar queda como escalación y soporte estratégico. Primera reunión formal con Appropia bajo su liderazgo.
- **Semana 7 en adelante · Operación plena.** Karla Lisset es el punto único de contacto con Appropia para temas de proyecto. Reportes mensuales de gobernanza al CTO.

### Slide 13 · Próximos pasos · 30/60/90

Tres columnas. Cada una con 3-4 acciones concretas y owner.

**Primeros 30 días**
- Onboarding completo de Karla Lisset (Owner: Oscar)
- Auditoría de tickets abiertos y priorización (Owner: Karla Lisset)
- Petición formal a Appropia con las solicitudes del slide 11 (Owner: Karla Lisset)
- Implementación del flujo de tickets en el portal (Owner: Leobardo)

**Días 30–60**
- Primer reporte de gobernanza con Appropia (Owner: Karla Lisset)
- Plantilla de feature request en uso (Owner: Karla Lisset)
- Manual de funcionalidades vigentes entregado (Owner: Appropia)
- Video onboarding para subcontratistas (Owner: Karla Ruiz)

**Días 60–90**
- Evaluación trimestral de Appropia con la nueva data (Owner: Karla Lisset + Oscar)
- Roadmap de independencia técnica de TI (Owner: Leobardo)
- Revisión del plan con CTO (Owner: Karla Lisset)

### Slide 14 · Cierre

Slide tipográfico simple. Frase grande en Cormorant Garamond italic:

> *"El proyecto está en un punto de inflexión. Con dedicación dedicada y procesos formales, Alfresco ATISA puede pasar de mantenimiento reactivo a operación predecible."*

Footer con datos de contacto:
- Karla Lisset · [email] · PM Alfresco ATISA
- Oscar Arredondo · [email] · TI

---

## 5. Sistema de diseño

**Paleta (continuidad del flujo de tickets que ya entregué):**

```css
--cream: #F4EEE3;
--cream-soft: #FAF6EE;
--paper: #FFFDF8;
--ink: #1B2236;
--ink-soft: #3A4256;
--muted: #6B6F7B;
--terracotta: #C84B31;
--terracotta-tint: #F8DDD3;
--rust: #8B3A2F;
--sage: #6B8E6F;
--gold: #B8894A;
--gold-tint: #F0E2C8;
--navy: #2C3E5C;
--state-finished: #2D7A4A;
--state-pending: #C99500;
--state-escalated: #2563A8;
--line: #D9CFC0;
```

**Tipografía:**
- **Display:** `Cormorant Garamond` (italic 600 para acentos, regular para títulos grandes)
- **Body:** `Manrope` (300/400/500/600/700)
- **Mono / labels:** `JetBrains Mono`

Pares clave:
- Títulos slide → Cormorant Garamond 56-72px
- Énfasis editorial → Cormorant Garamond italic
- Body → Manrope 14-16px
- Eyebrows / metadata → JetBrains Mono 10-11px uppercase letter-spacing 0.15-0.2em

**Composición:**
- Generoso whitespace.
- Asimetría controlada — no centrar todo, aprovechar el ancho del viewport.
- Líneas finas (1.5px) en color `--line` para divisiones y marcos.
- Box-shadow muy sutil (0 2px 4px rgba(0,0,0,0.04)) en cards.
- Esquinas redondeadas mínimas (4-6px). Nada de pill-buttons grandes excepto en CTAs y nodos start/end.

**Detalles de marca/atmósfera:**
- Fondo del body con dos radiales muy sutiles (terracota arriba-izquierda, navy abajo-derecha) sobre el cream base.
- Un eyebrow tipo "MESA DE AYUDA · ALFRESCO · v1.X" presente en todos los slides en la esquina superior izquierda.
- Numeración de slide en la esquina inferior derecha estilo libro: `04 / 14`.

---

## 6. Stack técnico y arquitectura

**Stack:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS (con las CSS variables custom de la paleta)
- Recharts para visualizaciones
- Framer Motion para transiciones suaves entre slides (opcional pero recomendado)

**Estructura del proyecto:**

```
/app
  /page.tsx                  ← presentación principal
  /layout.tsx
  /globals.css               ← CSS variables + tailwind base
/components
  /slides
    Slide01Cover.tsx
    Slide02Executive.tsx
    Slide03Team.tsx
    Slide04Product.tsx
    Slide05TicketFlow.tsx    ← embebe el flowchart
    Slide06TicketCategories.tsx
    Slide07AppropiaHours.tsx
    Slide08AppropiaSLAs.tsx
    Slide09Offenders.tsx
    Slide10Mitigations.tsx
    Slide11Requests.tsx
    Slide12Transition.tsx
    Slide13Next90.tsx
    Slide14Closing.tsx
  /shared
    SlideContainer.tsx
    SlideNumber.tsx
    Eyebrow.tsx
    KeyboardNav.tsx
/data
  ticketCategories.ts        ← placeholder data
  appropiaHours.ts
  slaMetrics.ts
/public
  /flujo_tickets_alfresco.html  ← el flow original
```

**Comportamiento:**
- Scroll-snap-y sobre el contenedor principal.
- Cada slide es `min-h-screen w-full` con `scroll-snap-align: start`.
- Navegación con flechas ↑ ↓ (también ← → si es presentación).
- Indicador lateral derecho con puntos clicables por slide.
- En esquina inferior derecha, contador `04 / 14`.
- Build estático compatible con Vercel.

**Despliegue sugerido:** vercel deploy a un subdominio tipo `alfresco-estado.vercel.app`.

---

## 7. Integración del flujo de tickets existente

Tengo un archivo HTML autocontenido (`flujo_tickets_alfresco.html`) que muestra el flujo completo de tickets con los labels grandes "Técnico" / "Proceso", los decisores y todas las ramas.

**Dos opciones para el slide 05:**

**Opción A (recomendada):** convertir el HTML a un componente React reutilizable. Mantén exactamente la estructura visual y la paleta. Toma el contenido del archivo y refactorízalo en `Slide05TicketFlow.tsx`. Al hacerlo, conserva los labels en Cormorant Garamond italic 44px+ para "Técnico" y "Proceso".

**Opción B (más rápida):** embebe el HTML como `<iframe src="/flujo_tickets_alfresco.html">` con borde transparente. Funciona pero dificulta ajustes finos.

Si optas por A, asegúrate de que el slide herede el ancho completo del viewport y permita scroll vertical interno si el flujo no cabe en una pantalla.

---

## 8. Datos placeholder vs datos reales

Algunos campos los voy a llenar yo manualmente con números reales. **No inventes datos.** Donde no haya dato, usa el placeholder visible `[POR LLENAR]` con un estilo distintivo (por ejemplo, fondo `--gold-tint` y borde dashed) para que sea evidente que falta y yo pueda completarlo después fácilmente.

Los lugares donde necesito que dejes placeholders son:
- Cantidad de tickets totales atendidos
- Cantidad de subcontratistas activos
- Horas consumidas con Appropia (totales y por mes)
- Bolsa de horas restante
- % de bugs sobre el total de tickets
- Tiempos promedio de resolución (TI y Appropia)
- % de tickets reabiertos
- SLAs reales vs. acordados de Appropia

Para todas las gráficas de Recharts: usa `mockData` con valores de ejemplo razonables (no ceros) para que se vea cómo queda visualmente, pero deja un comentario `// REPLACE WITH REAL DATA` arriba del array.

---

## 9. Output esperado

Cuando termines, quiero:
1. El proyecto Next.js funcionando localmente con `npm run dev`.
2. Las 14 secciones implementadas.
3. El flujo de tickets correctamente integrado en el slide 05.
4. Tipografía y paleta consistentes con el flow original.
5. Un README en la raíz que explique:
   - Cómo correr el proyecto
   - Cómo navegar la presentación
   - Dónde están los placeholders de datos por llenar
   - Cómo desplegar a Vercel

No agregues funcionalidades fuera de scope (no necesito autenticación, ni base de datos, ni CMS). Es una presentación estática.

---

## 10. Notas finales y guardrails

- **No menciones que Oscar deja el proyecto.** El framing siempre es "el proyecto creció y requiere PM dedicada · Karla Lisset asume coordinación · Oscar continúa apoyando desde TI". Punto.
- **Distingue siempre entre Karla Lisset (PM) y Karla Ruiz (Especialista de proveedores).** Cuando solo aparezca una en un slide, usa nombre completo. Si aparecen las dos, refiérete con apellido.
- **El tono no es de queja, es de diagnóstico.** Los ofensores se nombran con neutralidad operativa, no con culpas. La presentación tiene que poder leerse cómodamente con Ana María de Appropia en la sala.
- **No exageres en motion ni efectos.** Esto es una presentación ejecutiva. Una transición suave entre slides es suficiente. No quiero parallax exagerado ni animaciones decorativas.
- **El cover y el cierre son los únicos slides puramente tipográficos.** El resto debe tener al menos un componente de información estructurada (tabla, gráfica, lista numerada, organigrama).
- **Si tienes duda sobre un dato, no lo inventes.** Pon `[POR LLENAR]`.
- **Mantén la presentación en español mexicano de negocios.** Profesional pero no acartonado.

---

## Resumen ultra-rápido (TL;DR)

Construye una presentación web Next.js + Tailwind + Recharts, scroll-snap, 14 slides, paleta terracota/crema/Cormorant, que:
1. Documente el estado actual de Alfresco ATISA.
2. Categorice tickets y horas de Appropia (con placeholders editables).
3. Liste 8 ofensores y 8 mitigaciones pareadas.
4. Formalice peticiones a Appropia desde lados técnico y de gestión.
5. Presente a Karla Lisset como nueva PM dedicada (sin decir que Oscar se va).
6. Cierre con plan 30/60/90.
7. Embeba el flujo de tickets que ya existe (`flujo_tickets_alfresco.html`).

Empieza por `Slide05TicketFlow` para validar que el sistema de diseño quedó alineado con el flow original. Después construye el resto en orden.
