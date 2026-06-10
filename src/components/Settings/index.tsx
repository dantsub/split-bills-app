import PeopleTip from "./PeopleTip";
import SplitMode from "./SplitMode";
import Dishes from "./Dishes";

export default function Settings() {
  return (
    <div className="md:col-span-2 space-y-3 md:space-y-4">
      {/*<!-- People & Tip -->*/}
      <PeopleTip />

      {/*<!-- Dish adder -->*/}
      <Dishes />

      {/*<!-- Split mode -->*/}
      <SplitMode />

      {/*<!-- Config footer -->*/}
      <div
        className="text-center text-xs py-2 slide-right"
        style={{ color: "var(--text-muted)" }}
      >
        Los valores se actualizan al instante
      </div>
    </div>
  );
}
