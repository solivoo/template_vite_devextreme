# template-vite-devxtreme

Plantilla **React + TypeScript + Vite** con **DevExtreme 24** para prácticas y prototipos. Incluye registro de licencia, **tema Fluent Blue** (claro/oscuro) con `themes.current`, y una demo pequeña: **Switch**, **ProgressBar** y **DataGrid**.

## Requisitos

Node.js (LTS) y `npm`, `pnpm` o `yarn`.

## Poner en marcha

```bash
npm install
npm run dev
```

Abre la URL que indique la terminal (suele ser `http://localhost:5173`).

**Otros comandos:** `npm run build` (TypeScript + producción), `npm run preview` (probar `dist/`), `npm run lint`.

## Clave de producto DevExtreme

Desde la v23.2 hace falta una **license key** válida. Flujo habitual:

1. Obtener la clave en el [Download Manager](https://www.devexpress.com/ClientCenter/DownloadManager/) (cuenta DevExpress).
2. Crear `devextreme-license.ts` en la raíz con `export const licenseKey = '…'` (como indica la [documentación de licencias](https://js.devexpress.com/React/Documentation/Guide/Common/Licensing/)).
3. La plantilla ya llama a `config({ licenseKey })` en `src/main.tsx`.

**Repositorios públicos:** no incluyas tu clave real. Usa `devextreme-license.example.ts` como plantilla y añade `devextreme-license.ts` al `.gitignore` en tu copia local.

## Tema claro / oscuro (Fluent)

- En **`index.html`** hay dos `<link rel="dx-theme">` (`fluent.blue.light` y `fluent.blue.dark`); los CSS están en **`public/devextreme/`** (copias de `node_modules/devextreme/dist/css/`).
- **`DevExtremeThemeProvider`** aplica el tema con `themes.current(...)` y guarda la preferencia en `localStorage`; el hook **`useDevExtremeTheme()`** expone `mode` y `setMode`.
- Si actualizas el paquete `devextreme`, conviene **volver a copiar** esos CSS a `public/devextreme/` o automatizarlo.

Más detalle en la doc: [temas predefinidos](https://js.devexpress.com/React/Documentation/Guide/Themes_and_Styles/Predefined_Themes/).

## Qué trae el código ahora

Barra con interruptor de tema, **ProgressBar** y **DataGrid** con datos en memoria. En `package.json` también figuran **Redux Toolkit**, **React Router** y **Axios**, pero **no están conectados** en `src` todavía; sirven para cuando quieras ampliar la plantilla.

## Librerías del proyecto (guía rápida para juniors)

Aquí va **para qué sirve** cada cosa importante. No hace falta memorizarlo: úsalo como referencia cuando leas `package.json`.

### Dependencias de la aplicación (`dependencies`)

| Librería | Para qué sirve, en pocas palabras |
|----------|-----------------------------------|
| **react** y **react-dom** | **React** es la librería con la que escribes la interfaz por **componentes** y `react-dom` es la pieza que conecta React con el **navegador** (pinta en la página). Sin esto no hay SPA con React. |
| **devextreme** | Paquete **base** de DevExtreme: lógica, estilos y temas de los controles (grid, fechas, formularios, etc.). Suele usarse junto con su envoltorio para React. |
| **devextreme-react** | **Componentes React** ya preparados (`DataGrid`, `Button`, etc.) que por dentro usan `devextreme`. Tú importas desde `devextreme-react/...`. |
| **@reduxjs/toolkit** (RTK) | Herramientas modernas para **Redux**: definir el “almacén” global de la app (`store`), **slices** de estado y acciones con menos código repetido. Aquí está instalado para cuando quieras estado global; **aún no hay store en el código de ejemplo**. |
| **react-redux** | Une **Redux** con **React**: componentes pueden **leer** el store y **despachar** acciones con hooks como `useSelector` y `useDispatch`. |
| **redux-persist** | Opcional: **guardar parte del Redux** en `localStorage` (o similar) para que al recargar la página no se pierda todo. Útil para preferencias que quieras persistir; hay que **configurarlo** cuando montes el store. |
| **react-router-dom** | **Rutas** en el cliente: distintas URLs muestran distintas “páginas” (`/`, `/settings`, …) sin recargar el HTML desde el servidor. Aquí instalado para cuando añadas navegación; **no está en uso** en la demo actual. |
| **axios** | Cliente **HTTP** para llamar **APIs** (`GET`, `POST`, …) con promesas. Alternativa a `fetch`; muchos equipos lo usan por interceptores y manejo de errores. **No** se usa aún en el ejemplo de `App.tsx`. |
| **lognerd** | **Logging** con colores (y opción de escribir a archivo en entornos Node). En el navegador suele usarse la parte “consola”. **La demo actual no lo importa**; queda disponible si quieres practicar trazas. |

### Herramientas de desarrollo (`devDependencies`)

Son lo que usas en tu máquina al programar; **no van al bundle** de la app de la misma forma que React (son para compilar, tipar y revisar código).

| Librería | Para qué sirve, en pocas palabras |
|----------|-----------------------------------|
| **vite** | **Empaqueta** el proyecto y te da el servidor de desarrollo muy rápido (HMR). `npm run dev` y `npm run build` pasan por aquí. |
| **typescript** | Añade **tipos** al JavaScript para detectar errores antes de ejecutar y mejor autocompletado en el editor. |
| **eslint** (+ plugins de React y hooks) | **Analiza** el código en busca de patrones incorrectos o peligrosos. `npm run lint`. |
| **@vitejs/plugin-react** | Conecta **React** con **Vite** (Fast Refresh, JSX, etc.). |
| **@types/react** y **@types/react-dom** | Tipos de TypeScript para las APIs de React (el código en `.tsx` entiende `props`, eventos, etc.). |

Si tras leer esto quieres profundizar: empieza por la doc de [React](https://react.dev/learn) y luego la de [DevExtreme React](https://js.devexpress.com/React/Documentation/).

## Carpetas útiles

```
public/devextreme/     → CSS Fluent servidos por Vite
src/theme/             → Provider, contexto y tipos del tema
src/main.tsx           → Licencia + provider
src/App.tsx            → Demo
```

## Build

```bash
npm run build
npm run preview
```

## Enlaces

- [DevExtreme React](https://js.devexpress.com/React/Documentation/)
- [Vite](https://vite.dev/) · [React](https://react.dev/)

## Creado por

**Sergio Olivo**

- [Sitio web](https://www.sergiolivo.com)

---

**Sobre licencias:** el código que tú añadas al repo puede ir bajo la licencia que elijas (por ejemplo MIT). Los **componentes DevExtreme** siguen la [EULA comercial](https://js.devexpress.com/Licensing/) de DevExpress.
