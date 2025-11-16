# Copilot Instructions: Quarto Blog Calculator

## Project Overview

A multi-platform physics formula calculator with **Quarto static website** + **React + Vite applications** + **Vanilla JavaScript** demos. The project deploys automatically to Netlify when code is pushed to GitHub.

**Key distinction**: This is NOT a traditional single-app repo—it's a Quarto website that *embeds* multiple React apps as pre-built artifacts (via `dist/` folders).

## Architecture & Key Components

### Project Structure
```
├── physics-pipeline-react/          # Full formula suite (React + Vite)
├── physics-pipeline-react-1formula/ # Demo with 1 formula (React)
├── physics-pipeline-react-2formulas/ # Demo with 2 formulas (React)
├── optics-berkeley-react/           # Optics calculator (React)
├── donkey-react/                    # Python runner (React)
├── dsp-rz-react/                    # DSP analysis (React)
├── physics-pipeline/                # Vanilla JS production version
├── _quarto.yml                      # Quarto config—navigation, resources
├── netlify.toml                     # Netlify build config
└── build-react-projects.js          # Node.js orchestrator for Netlify
```

### Data Flow: Build → Deploy

1. **Local Development**: Edit React source in `src/` folders
2. **Build Step**: Run `npm run build` → generates `dist/index.html + assets/`
3. **Quarto Integration**: `_quarto.yml` lists `dist/**` as resources to include
4. **Netlify**: On `git push`, runs `netlify.toml` build command:
   - Executes `./build-all-react.sh` (or `build-react-projects.js`)
   - Installs npm dependencies for each React project
   - Builds all React projects → outputs to `dist/`
   - Runs `quarto render` → generates `_site/` (final website)
   - Deploys `_site/` to the web

**Important**: The `dist/` folders must exist before `quarto render` runs, or links will break.

### Formula Data Structure

Formulas are centralized in `physics-pipeline-react/src/data/formulas.js`:

```javascript
export const FORMULA_CATEGORIES = [
  {
    name: '运动学 Kinematics',
    formulas: [
      {
        id: 'x_xt_v0_a_t',
        name: '匀加速直线运动位移',
        formulaText: 'x = x0 + v0·t + 1/2·a·t²',
        inputs: ['x0', 'v0', 'a', 't'],      // Input field names
        output: 'x',                          // Output variable name
        compute: ({ x0, v0, a, t }) => x0 + v0 * t + 0.5 * a * t * t
      },
      // ... more formulas
    ]
  }
];
```

**Key pattern**: Each formula has a `compute()` function that takes named inputs and returns a result. The calculator engine references formulas by `id` and uses the `output` name for inter-block references.

### React Component Architecture

**Layout** (in `App.jsx`):
- `<Sidebar>` — Formula selector (checklist of categories)
- `<TopBar>` — "Run Pipeline" and "Clear All" buttons
- `<Block>` — Individual formula input/output card
- `<Results>` — Log output panel

**State Management** (local `useState` in `App.jsx`):
- `selectedFormulas` — checked formula IDs
- `blocks` — array of formula instances with their inputs/outputs
- `results` — calculation log text
- `showResults` — visibility toggle for Results panel

**Block Reference Syntax**:
Users can reference previous block outputs using:
- `#1(v)` — Reference Block 1's output variable `v`
- `block1(x)` — Alternate syntax
- `calculator.js` → `parseInput()` handles parsing and validation

## Critical Developer Workflows

### 1. Local React Development
```bash
cd physics-pipeline-react
npm install
npm run dev         # Starts Vite dev server at http://localhost:5173
```
For changes to CSS/JS in `src/`, Vite auto-refreshes the browser.

### 2. Building All React Projects (Local)
```bash
# Windows
build-all-react.bat

# macOS/Linux/Git Bash
./build-all-react.sh

# Or run directly
npm run build       # From project root
```
This calls `build-react-projects.js`, which loops through all 3+ React projects, installing dependencies and running `npm run build` for each.

### 3. Local Quarto Preview
```bash
quarto preview
```
Opens a preview server showing the Quarto site with embedded React apps (uses pre-built `dist/` folders).

### 4. Full Deployment (Manual)
```bash
# 1. Build all React projects
npm run build

# 2. Render Quarto (creates _site/)
quarto render

# 3. Push to GitHub (Netlify auto-triggers)
git push
```

### 5. Debugging Netlify Builds
- **Netlify Dashboard**: Check "Deploys" tab for build logs
- **Common issues**:
  - `quarto render` fails if `dist/` folders missing → React build must complete first
  - React projects not found in resources → verify paths in `_quarto.yml`
  - CSS/JS not minified → check `netlify.toml` build.processing settings

## Project-Specific Conventions

### 1. CSS Organization
- **One CSS file per component**: `Block.jsx` + `Block.css` (sibling files)
- **App-wide styles**: `App.css` and `index.css`
- **Naming**: BEM-like classes (e.g., `.block`, `.block-header`, `.block-content`)
- **Relative units**: Use `rem` and percentages for responsive design

### 2. Vite Configuration
All React projects use identical Vite config (`vite.config.js`):
```javascript
base: './',             // Relative paths for GitHub Pages / embedded contexts
build: { outDir: 'dist', emptyOutDir: true }
```
**Why**: React apps are embedded in Quarto pages, so absolute paths break. Relative base ensures assets load correctly.

### 3. Utilities Pattern
- `utils/calculator.js` — Input parsing, formula execution, pipeline orchestration
- `utils/formatter.js` — Number formatting for display (example: `fmt()` function)
- **No API calls**: All computation is client-side (formulas are pure functions)

### 4. Entry Point
All projects use `main.jsx` → imports `App.jsx`:
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### 5. Adding New Formulas
1. Edit `physics-pipeline-react/src/data/formulas.js`:
   - Add object to appropriate category's `formulas` array
   - Include: `id`, `name`, `formulaText`, `inputs`, `output`, `compute` function
2. Rebuild: `npm run build` (from physics-pipeline-react/)
3. The formula auto-appears in all derived demo projects (same source)

## Integration Points & External Dependencies

### Netlify Integration
- `netlify.toml` defines build command and environment (Node v20, Quarto v1.4.550)
- Plugin: `netlify-plugin-quarto` (auto-installs Quarto)
- Redirects for `/react-*` paths map to `dist/index.html` files

### Quarto Website Config (`_quarto.yml`)
```yaml
resources:
  - "physics-pipeline-react/dist/**"
  - "physics-pipeline-react-1formula/dist/**"
  - "physics-pipeline-react-2formulas/dist/**"
```
**Critical**: These paths must exist before `quarto render`. Order matters—React builds first in `netlify.toml`.

### GitHub & Deployment
- Primary branch: `main`
- Triggers: Any push to `main` → Netlify auto-builds
- Credentials: Netlify API key stored in GitHub Secrets (if needed for advanced CI/CD)

## Common Patterns & Anti-Patterns

### ✅ DO
- **Keep formula definitions in data/**: Centralized source of truth
- **Use relative imports**: `import { fmt } from '../utils/formatter'`
- **Build React before Quarto**: `netlify.toml` enforces this order
- **Test formula `compute()` functions**: Pure functions = easy to unit test
- **Use `base: './'` in vite.config.js**: Ensures portability

### ❌ DON'T
- **Hardcode paths as absolute**: React apps won't load when embedded
- **Import React components in formulas.js**: Data layer should be formula-agnostic
- **Modify netlify.toml build order**: React must build before Quarto
- **Use environment variables for formulas**: All computation should be client-side
- **Forget to rebuild React after formula changes**: Changes in `src/data/` require rebuild

## Essential Files Reference

| File | Purpose | When to Edit |
|------|---------|--------------|
| `_quarto.yml` | Website nav, resource paths, theme | Adding pages, updating React paths |
| `netlify.toml` | Build command, environment, redirects | Changing Node version, build steps |
| `physics-pipeline-react/src/data/formulas.js` | Physics formulas (centralized) | Adding/modifying formulas |
| `physics-pipeline-react/src/App.jsx` | Main app layout & state | UI structure, new features |
| `physics-pipeline-react/src/utils/calculator.js` | Input parsing, pipeline logic | Calculation engine changes |
| `physics-pipeline-react/package.json` | Dependencies | Adding React plugins, upgrading versions |
| `build-react-projects.js` | Multi-project build orchestrator | Changing build process for Netlify |

---

**For questions about physics formulas**: See `REACT_PROJECTS_GUIDE.md`
**For Netlify deployment troubleshooting**: See `NETLIFY_DEPLOYMENT_GUIDE.md`
**For local development setup**: See `BUILD_AND_DEPLOY.md`
