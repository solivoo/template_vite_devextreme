import { useCallback, useLayoutEffect, useMemo, useState, type ReactNode } from 'react';
import themes from 'devextreme/ui/themes';
import { DevExtremeThemeContext } from './devExtremeThemeContext';
import type { DevExtremeThemeMode } from './types';

const STORAGE_KEY = 'devextreme-theme-mode';

//Funcion para leer el modo almacenado en el localStorage
function readStoredMode(): DevExtremeThemeMode | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'light' || v === 'dark') return v;
  } catch {
    /* ignore */
  }
  return null;
}

//Funcion para obtener el modo inicial
function initialMode(): DevExtremeThemeMode {
  const stored = readStoredMode();
  if (stored) return stored;
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

//Interfaz para las props del componente
interface DevExtremeThemeProviderProps {
  children: ReactNode;
}

//Componente para proporcionar el contexto de DevExtremeTheme
export function DevExtremeThemeProvider({ children }: DevExtremeThemeProviderProps) {
  // Estado para el modo actual light o dark
  const [mode, setModeState] = useState<DevExtremeThemeMode>(initialMode);

  //Funcion para establecer el modo actual
  const setMode = useCallback((next: DevExtremeThemeMode) => {
    setModeState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  //Funcion para alternar el modo actual
  const toggleMode = useCallback(() => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  }, [mode, setMode]);

  //Efecto para aplicar el tema actual
  useLayoutEffect(() => {
    const themeName = mode === 'dark' ? 'material.blue.dark' : 'material.blue.light';
    themes.current(themeName);
    document.documentElement.classList.toggle('theme-dark', mode === 'dark');
  }, [mode]);

  //Valor para el contexto
  const value = useMemo(() => ({ mode, setMode, toggleMode }), [mode, setMode, toggleMode]);

  //Devolver el contexto
  return <DevExtremeThemeContext.Provider value={value}>{children}</DevExtremeThemeContext.Provider>;
}
