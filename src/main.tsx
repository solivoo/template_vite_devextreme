import './setupDevextremeThemeLinks.ts'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import './index.css'
import { DevExtremeThemeProvider } from './theme/DevExtremeThemeProvider.tsx'
import { store } from './store/store.ts'
import { licenseKey } from '../devextreme-license.ts';
import config from 'devextreme/core/config';

config({ licenseKey: licenseKey });

createRoot(document.getElementById('root')!).render(
  <DevExtremeThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </DevExtremeThemeProvider>,
)
