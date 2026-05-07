import { ProgressRail } from "@/components/shared/progress-rail";
import { KeyboardNav } from "@/components/shared/keyboard-nav";
import { Slide01Cover } from "@/components/slides/slide-01-cover";
import { Slide02Executive } from "@/components/slides/slide-02-executive";
import { Slide03Team } from "@/components/slides/slide-03-team";
import { Slide04Product } from "@/components/slides/slide-04-product";
import { Slide05TicketFlow } from "@/components/slides/slide-05-ticket-flow";
import { Slide06TicketCategories } from "@/components/slides/slide-06-ticket-categories";
import { Slide09Offenders } from "@/components/slides/slide-09-offenders";
import { Slide10Mitigations } from "@/components/slides/slide-10-mitigations";
import { Slide11Requests } from "@/components/slides/slide-11-requests";
import { Slide12Transition } from "@/components/slides/slide-12-transition";
import { Slide13Next90 } from "@/components/slides/slide-13-next-90";
import { Slide14Closing } from "@/components/slides/slide-14-closing";

const TOTAL = 12;

export default function Home() {
  return (
    <>
      <main className="snap-deck">
        <Slide01Cover index={1} total={TOTAL} />
        <Slide04Product index={2} total={TOTAL} />
        <Slide03Team index={3} total={TOTAL} />
        <Slide02Executive index={4} total={TOTAL} />
        <Slide05TicketFlow index={5} total={TOTAL} />
        <Slide06TicketCategories index={6} total={TOTAL} />
        <Slide09Offenders index={7} total={TOTAL} />
        <Slide10Mitigations index={8} total={TOTAL} />
        <Slide11Requests index={9} total={TOTAL} />
        <Slide12Transition index={10} total={TOTAL} />
        <Slide13Next90 index={11} total={TOTAL} />
        <Slide14Closing index={12} total={TOTAL} />
      </main>
      <ProgressRail total={TOTAL} />
      <KeyboardNav total={TOTAL} />
    </>
  );
}
