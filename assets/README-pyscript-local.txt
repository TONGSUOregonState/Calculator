Local PyScript setup (use when third-party CDNs are blocked by CSP)

Place the following files under the paths below relative to the site root:

assets/pyscript/pyscript.js
assets/pyscript/pyscript.css

assets/pyodide/pyodide.js
assets/pyodide/pyodide.wasm

Notes
- Use matching versions of PyScript and Pyodide. Download from their official releases.
- pyscript.html references these local files and sets <py-config type="json"> with:
    { "pyodideUrl": "assets/pyodide/", "packages": [] }
  so PyScript loads Pyodide from assets/pyodide/.
- If you add Python packages, ensure they are supported by Pyodide or ship wheels that Pyodide can install.

Verify
- Open pyscript.html in a browser with DevTools network tab. All scripts and WASM should load from /assets/… paths.

