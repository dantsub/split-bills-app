import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import useReceipt from "@/hooks/useReceipt";

describe("useReceipt", () => {
  beforeEach(() => {
    // Mock de fecha fija para que el test sea determinista
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2025-01-15T10:30:00Z"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("debe inicializar con isEmpty = true cuando subtotal es 0", () => {
    const { result } = renderHook(() => useReceipt({ subtotal: 0, tip: 0.1 }));
    expect(result.current.isEmpty).toBe(true);
    expect(result.current.total).toBe(0);
    expect(result.current.date).toBeTruthy();
  });

  it("debe actualizar isEmpty cuando subtotal cambia a > 0", () => {
    const { result, rerender } = renderHook(
      ({ subtotal, tip }) => useReceipt({ subtotal, tip }),
      { initialProps: { subtotal: 0, tip: 0.1 } },
    );

    expect(result.current.isEmpty).toBe(true);

    rerender({ subtotal: 100, tip: 0.1 });
    expect(result.current.isEmpty).toBe(false);
    expect(result.current.total).toBe(110); // 100 + 0.1*100 = 110
  });

  it("debe calcular el total correctamente según subtotal y tip", () => {
    const { result, rerender } = renderHook(
      ({ subtotal, tip }) => useReceipt({ subtotal, tip }),
      { initialProps: { subtotal: 100, tip: 0.15 } },
    );

    expect(result.current.total).toBe(115); // 100 + 15 = 115

    rerender({ subtotal: 200, tip: 0.1 });
    expect(result.current.total).toBe(220); // 200 + 20 = 220

    rerender({ subtotal: 50, tip: 0.2 });
    expect(result.current.total).toBe(60); // 50 + 10 = 60
  });

  it("debe actualizar la fecha cuando cambia subtotal", () => {
    // Fecha mockeada: 15/1/2025 10:30
    const expectedDate = new Date().toLocaleDateString("es-CO", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const { result, rerender } = renderHook(
      ({ subtotal }) => useReceipt({ subtotal, tip: 0.1 }),
      { initialProps: { subtotal: 100 } },
    );

    expect(result.current.date).toBe(expectedDate);

    // Avanzamos el tiempo simulado para que la fecha cambie
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    vi.setSystemTime(new Date("2025-01-15T11:45:00Z"));

    const newExpectedDate = new Date().toLocaleDateString("es-CO", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    rerender({ subtotal: 200 });
    expect(result.current.date).toBe(newExpectedDate);
  });

  it("debe mantener el total actualizado cuando solo cambia tip", () => {
    const { result, rerender } = renderHook(
      ({ subtotal, tip }) => useReceipt({ subtotal, tip }),
      { initialProps: { subtotal: 100, tip: 0.1 } },
    );

    expect(result.current.total).toBe(110);

    rerender({ subtotal: 100, tip: 0.2 });
    expect(result.current.total).toBe(120);
  });

  it("debe manejar subtotal negativo (aunque no debería pasar) manteniendo isEmpty false?", () => {
    const { result } = renderHook(
      ({ subtotal }) => useReceipt({ subtotal, tip: 0.1 }),
      { initialProps: { subtotal: -10 } },
    );

    // El efecto cambia isEmpty solo si subtotal > 0, entonces negativo = false? En realidad el hook lo pone true inicialmente y nunca cambia porque subtotal no es >0.
    // Esto depende de la lógica: si subtotal es negativo, sigue siendo "vacío"? lo dejamos como está.
    expect(result.current.isEmpty).toBe(true);
    expect(result.current.total).toBe(-10 + 0.1 * -10); // -11
  });
});
