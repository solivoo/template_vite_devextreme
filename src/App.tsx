import './App.css'
import Switch from 'devextreme-react/switch';
import { ReduxTextBoxPractice } from './practice/ReduxTextBoxPractice.tsx';
import { RerenderPractice } from './practice/RerenderPractice.tsx';
import { useDevExtremeTheme } from './theme/devExtremeThemeContext.ts';

function App() {
  const { mode, setMode } = useDevExtremeTheme();

  return (
    <>
      <header className="app-toolbar">
        <p>Template React + Vite + DevXtreme + Redux Toolkit</p>
        <label className="theme-toggle">
          <span>Tema oscuro</span>
          <Switch
            value={mode === 'dark'}
            onValueChanged={(e) => setMode(e.value ? 'dark' : 'light')}
          />
        </label>
      </header>
      <div id="dashboard">
        <ReduxTextBoxPractice />
        <RerenderPractice />        
      </div>
    </>
  )
}

export default App
