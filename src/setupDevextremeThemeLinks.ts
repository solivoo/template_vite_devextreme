/**
 * DevExtreme — registro de temas para Vite (Material Blue)
 *
 * Documentación: "Import Stylesheets" en
 * https://js.devexpress.com/React/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/
 *
 * Indica importar en el punto de entrada, p. ej.:
 *   import 'devextreme/dist/css/dx.material.blue.light.css';
 *
 * Con Vite, eso hace que el bundler procese el CSS y resuelva las fuentes de iconos (`url(...)`).
 * Para conmutar claro/oscuro con `themes.current()` hace falta `<link rel="dx-theme">` en el
 * documento *antes* de cargar `devextreme/ui/themes`. Aquí se inyectan esos enlaces usando la
 * URL que Vite genera (`?url`), sin copiar archivos a `public/`.
 */

import materialBlueLight from 'devextreme/dist/css/dx.material.blue.light.css?url';
import materialBlueDark from 'devextreme/dist/css/dx.material.blue.dark.css?url';

const MARK = 'data-devextreme-vite-theme';

function injectDxThemeLinks(): void {
  if (document.querySelector(`link[${MARK}]`)) return;

  const head = document.head;

  const light = document.createElement('link');
  light.rel = 'dx-theme';
  light.setAttribute('data-theme', 'material.blue.light');
  light.href = materialBlueLight;
  light.setAttribute('data-active', 'true');
  light.setAttribute(MARK, '1');

  const dark = document.createElement('link');
  dark.rel = 'dx-theme';
  dark.setAttribute('data-theme', 'material.blue.dark');
  dark.href = materialBlueDark;
  dark.setAttribute('data-active', 'false');
  dark.setAttribute(MARK, '1');

  head.appendChild(light);
  head.appendChild(dark);
}

injectDxThemeLinks();
