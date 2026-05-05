import { createContext, useContext } from 'react';
import type { DevExtremeThemeMode } from './types';

export const DevExtremeThemeContext = createContext<{
  mode: DevExtremeThemeMode;
  setMode: (mode: DevExtremeThemeMode) => void;
  toggleMode: () => void;
} | null>(null);

export function useDevExtremeTheme() {
  const ctx = useContext(DevExtremeThemeContext);
  if (!ctx) {
    throw new Error('useDevExtremeTheme debe usarse dentro de DevExtremeThemeProvider');
  }
  return ctx;
}
