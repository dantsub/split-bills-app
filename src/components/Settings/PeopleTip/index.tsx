import { useSettings } from "@/context/SettingsContext";
import { decimalToPercentage } from "@/utils";

export default function PeopleTip() {
  const { peopleNo, tip, setTip, setPeopleNo } = useSettings();

  const handlePeopleQuantity = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPeopleNo(parseInt(e.target.value));

  const handleTip = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTip(parseInt(e.target.value));

  return (
    <div className="glass-strong rounded-2xl p-4 md:p-5 slide-right">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="people">Personas</label>
          <input
            id="people"
            type="number"
            min="1"
            max="50"
            onChange={handlePeopleQuantity}
            value={peopleNo}
          />
        </div>
        <div>
          <label>
            Propina{" "}
            <span id="tipLabel" style={{ color: "var(--neon-cyan)" }}>
              {decimalToPercentage(tip)}%
            </span>
          </label>
          <input
            id="tip"
            type="range"
            min="0"
            max="30"
            onChange={handleTip}
            value={decimalToPercentage(tip)}
          />
          <div
            className="flex justify-between text-xs mt-1"
            style={{ color: "var(--text-muted)" }}
          >
            <span>0%</span>
            <span
              id="tipVal"
              style={{ color: "var(--neon-cyan)", fontWeight: 600 }}
            >
              10%
            </span>
            <span>30%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
