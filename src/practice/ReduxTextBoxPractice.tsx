import Button from 'devextreme-react/button';
import TextBox from 'devextreme-react/text-box';
import { logger } from 'lognerd';
import { incrementReduxCount, setDraft } from '../store/practiceSlice.ts';
import { useAppDispatch, useAppSelector } from '../store/hooks.ts';

/**
 * Demuestra Redux + DevExtreme TextBox.
 * El padre no usa useSelector → no se re-renderiza solo por dispatch.
 * Cada bloque hijo solo suscribe una parte del estado → menos re-renders cruzados.
 */
export function ReduxTextBoxPractice() {
  logger.info('[ReduxTextBoxPractice] render del padre (sin selector Redux)');

  return (
    <section className="redux-practice" aria-label="Práctica Redux y TextBox">
      <h2>Redux: contador + TextBox</h2>
      <p className="redux-practice__hint">
        Mira la consola: al pulsar <strong>+1 Redux</strong> solo debería loguearse el bloque del contador; al
        escribir en el cuadro, solo el bloque del texto (cada uno lee solo su parte del store).
      </p>
      <ReduxCounterPanel />
      <DraftTextBoxPanel />
    </section>
  );
}

function ReduxCounterPanel() {
  const count = useAppSelector((s) => s.practice.reduxCount);
  const dispatch = useAppDispatch();
  logger.info('[ReduxCounterPanel] render — suscrito solo a reduxCount', { count });

  return (
    <div className="redux-practice__panel">
      <h3>Contador en el store</h3>
      <p>
        Valor: <strong>{count}</strong>
      </p>
      <Button
        text="+1 Redux (dispatch)"
        type="default"
        stylingMode="contained"
        onClick={() => dispatch(incrementReduxCount())}
      />
    </div>
  );
}

function DraftTextBoxPanel() {
  const draft = useAppSelector((s) => s.practice.draft);
  const dispatch = useAppDispatch();
  logger.info('[DraftTextBoxPanel] render — lee solo draft', { len: draft.length });

  return (
    <div className="redux-practice__panel">
      <h3>Texto en el store (TextBox controlado)</h3>
      <TextBox
        value={draft}
        placeholder="Escribe aquí…"
        showClearButton={true}
        onValueChanged={(e) => dispatch(setDraft(String(e.value ?? '')))}
      />
      <p className="redux-practice__echo">Contenido actual: «{draft || '(vacío)'}»</p>
    </div>
  );
}


