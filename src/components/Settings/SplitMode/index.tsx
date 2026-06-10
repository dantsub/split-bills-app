import { useSettings } from "@/context/SettingsContext";
import { useState } from "react";

type Mode = "individual" | "percent";

export default function SplitMode() {
  const { peopleNo } = useSettings();
  const [mode, setMode] = useState<Mode>("individual");

  return (
    <div className="glass-strong rounded-2xl p-4 md:p-5 slide-right">
      <div className="section-title">📊 Modo de división</div>
      <div className="flex gap-2 mb-3">
        <button
          id="modeEqual"
          className={`btn-ghost ${mode === "individual" && "active"} flex-1 px-3 py-2.5 rounded-xl text-sm font-medium`}
          onClick={() => setMode("individual")}
        >
          Todos por igual
        </button>
        <button
          id="modePercent"
          className={`btn-ghost ${mode === "percent" && "active"} flex-1 px-3 py-2.5 rounded-xl text-sm font-medium`}
          onClick={() => setMode("percent")}
        >
          % Individual
        </button>
      </div>
      <div id="perPersonSection" data-od-id="path-2-1-1-1-2-2">
        <p className="text-xs mb-2" style={{ color: "var(--text-muted)" }}>
          Asigna % que cada persona paga. Debe sumar 100%.
        </p>
        <ul>
          {mode === "percent" &&
            Array.from({ length: peopleNo }).map((_, idx) => (
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className="text-xs w-5 shrink-0"
                  style={{ color: "var(--text-muted)" }}
                >
                  #{idx + 1}
                </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  data-idx="0"
                  className="person-pct flex-1"
                  style={{ height: "4px" }}
                />
                <input
                  type="number"
                  min="0"
                  max="100"
                  defaultValue="0"
                  data-idx="0"
                  className="person-pct-num w-14 rounded-lg text-sm tabular-nums text-right"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--glass-border)",
                    color: "var(--text-primary)",
                    padding: "4px 8px",
                    outline: "none",
                  }}
                />
                <span
                  className="text-xs w-4"
                  style={{ color: "var(--text-muted)" }}
                >
                  %
                </span>
              </div>
            ))}
        </ul>
        <div
          id="pctTotal"
          className="mt-2 text-xs font-mono tabular-nums text-right"
          style={{ color: "rgb(239, 68, 68)" }}
        >
          Suma: 0%
        </div>
      </div>
    </div>
  );
}
