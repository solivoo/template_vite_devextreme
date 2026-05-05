import './App.css'
import DataGrid, { Editing } from 'devextreme-react/data-grid';
import ProgressBar from 'devextreme-react/progress-bar';
import Switch from 'devextreme-react/switch';
import { useDevExtremeTheme } from './theme/devExtremeThemeContext.ts';

const tasks = [
  { id: 1, task: "Buy groceries", dueDate: new Date(), done: false },
  { id: 2, task: "Write a blog post", dueDate: new Date(), done: true }
];

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
        <ProgressBar id="progress" />
        <DataGrid
          id="task-grid"
          dataSource={tasks}
          keyExpr="id"
        >
          <Editing
            mode="row"
            allowUpdating={true}
            allowAdding={true}
            allowDeleting={true}
            newRowPosition="last"
          />
        </DataGrid>
      </div>
    </>
  )
}

export default App
