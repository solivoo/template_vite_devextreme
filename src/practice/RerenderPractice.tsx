import { memo, useState } from 'react';
import { logger } from 'lognerd';

/**
 * Práctica: observa la pestaña Consola (mensajes con lognerd → logger.info).
 * `main.tsx` no usa StrictMode para que cada render coincida con un solo pase (mejor para practicar).
 */

export function RerenderPractice() {
  logger.info('RerenderPractice Padre');
  return (
    <section className="rerender-practice" aria-label="Práctica re-renders React">
      <h2>Práctica: re-renders (consola F12 · lognerd · logger.info)</h2>
      <p className="rerender-practice__hint">
        Cada bloque es independiente. Comprueba qué líneas aparecen al incrementar el contador.
      </p>

      <div className="rerender-practice__block">
        <h3>1 — Padre + dos hijos (sin memo)</h3>
        <p className="rerender-practice__expect">
          Esperado al pulsar: logs del <strong>Padre</strong>, <strong>Hijo A</strong> y <strong>Hijo B</strong>.
        </p>
        <ParentBasic />
      </div>

      <div className="rerender-practice__block">
        <h3>2 — Mismo patrón, Hijo B con React.memo</h3>
        <p className="rerender-practice__expect">
          Esperado al pulsar: solo <strong>Padre</strong> e <strong>Hijo A</strong> (Hijo B no recibe props nuevas, memo evita su render).
        </p>
        <ParentWithMemoChild />
      </div>
    </section>
  );
}

function ParentBasic() {
  const [count, setCount] = useState(0);
  logger.info('… [1] Padre (sin memo en hijos)');

  return (
    <div className="rerender-practice__panel">
      <p>Contador: {count}</p>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        +1 estado del padre
      </button>
      <ChildA count={count} label="A" />
      <ChildBPlain label="B" />
    </div>
  );
}

function ParentWithMemoChild() {
  const [count, setCount] = useState(0);
  logger.info('… [2] Padre (Hijo B memorizado)');

  return (
    <div className="rerender-practice__panel">
      <p>Contador: {count}</p>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        +1 estado del padre
      </button>
      <ChildA count={count} label="A" />
      <ChildBMemoized label="B" />
    </div>
  );
}

function ChildA({ count, label }: { count: number; label: string }) {
  logger.info(`… [${label}] Hijo A`);
  return <p>Hijo A — recibe el contador: {count}</p>;
}

function ChildBPlain({ label }: { label: string }) {
  logger.info(`… [${label}] Hijo B (sin memo)`);
  return <p>Hijo B — sin memo; no usa el contador.</p>;
}

const ChildBMemoized = memo(function ChildBMemoized({ label }: { label: string }) {
  logger.info(`… [${label}] Hijo B (memo)`);
  return <p>Hijo B — con React.memo; props estables si no cambias label {label}</p>;
});
