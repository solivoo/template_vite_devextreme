import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { DevExtremeThemeProvider } from './theme/DevExtremeThemeProvider.tsx'
import { licenseKey } from '../devextreme-license.ts';
import config from 'devextreme/core/config';

config({ licenseKey: licenseKey });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DevExtremeThemeProvider>
      <App />
    </DevExtremeThemeProvider>
  </StrictMode>,
)
