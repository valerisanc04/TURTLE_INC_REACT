# TURTLE_INC_REACT

## Arquitectura del proyecto

El proyecto está estructurado como una aplicación **React** que sigue una arquitectura basada en componentes y un estilo modular para los recursos estáticos.

### Principales directorios

- `src/pages/` – Contiene los componentes **React** que representan cada vista/página de la aplicación (p. ej., `Inicio.jsx`, `Perfil.jsx`, `CarritoTortugo.jsx`, etc.). Cada archivo está escrito en **JSX** y exporta un componente funcional.
- `html-referencias/`
  - `CSS/` – Hoja de estilos CSS que se importan en los componentes según sea necesario.
  - `HTML/` – Plantillas HTML estáticas que pueden ser usadas para pruebas o documentación.
  - `imagenes/` – Recursos de imágenes (logo, banners, iconos) referenciados desde los componentes.
- `package.json` – Define dependencias del proyecto (React, React‑DOM, etc.) y scripts de construcción.
- `README.md` – Documentación del proyecto (este archivo).

### Relación entre componentes y estilos

Los componentes en `src/pages/` importan los archivos CSS específicos que necesitan, por ejemplo:
```javascript
import "../html-referencias/CSS/inicio.css";
```
Esto permite que cada página tenga su propio conjunto de estilos sin colisiones globales.

### Diagrama de árbol de carpetas

```mermaid
flowchart TD
    root[/TURTLE_INC_REACT]
    subgraph src
        pages[pages/]
        pages --> BuzoHombre.jsx
        pages --> BuzoOscuroHombre.jsx
        pages --> BuzoOversizeMujer.jsx
        pages --> CamisaPrueba1.jsx
        pages --> CarritoTortugo.jsx
        pages --> Perfil.jsx
        pages --> Inicio.jsx
        % (list a few representative files)
    end
    subgraph html
        htmlRef[html-referencias/]
        css[CSS/]
        html[HTML/]
        img[imagenes/]
        htmlRef --> css
        htmlRef --> html
        htmlRef --> img
    end
    root --> src
    root --> htmlRef
    root --> package.json
    root --> README.md
```

### Flujo de ejecución típico
1. **Entrada del usuario** en la UI (p. ej., clic en "Agregar al carrito").
2. El **componente React** correspondiente actualiza su estado local o global (Redux/Context si se usa).
3. El componente vuelve a renderizarse, aplicando los estilos CSS importados.
4. Si es necesario, se realizan llamadas a APIs externas (no incluidas en esta estructura) mediante `fetch` o `axios`.

Esta arquitectura favorece la separación de responsabilidades, facilita el mantenimiento y permite escalar añadiendo nuevas páginas o módulos de estilo sin romper la estructura existente.
