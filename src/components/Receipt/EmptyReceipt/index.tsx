export default function Empty() {
  return (
    <div id="receiptEmpty" className="text-center py-12">
      <div className="text-3xl mb-4 opacity-30">🧾</div>
      <p className="text-sm" style={{ color: "var(--text-muted)" }}>
        Agrega platos y configura la división
      </p>
      <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
        los resultados aparecerán aquí
      </p>
    </div>
  );
}
