# Redirección de odruu.github.io/Catruple

Estos archivos **no forman parte del sitio**. Sirven para que los enlaces viejos
(`https://odruu.github.io/Catruple/...`) lleven a `https://catruple.github.io/...`,
conservando la ruta, la búsqueda y el ancla (p. ej. `#tools`).

Solo lo puede hacer la cuenta **Odruu**:

1. Crear un repositorio público nuevo `Odruu/Catruple`.
2. Subir a su raíz `index.html` y `404.html` (son iguales).
3. Settings → Pages → Source = "Deploy from a branch", rama `main`, carpeta `/ (root)`.

Ojo: al crear `Odruu/Catruple`, GitHub deja de redirigir `github.com/Odruu/Catruple`
al repo de la organización. El sitio ya enlaza directamente a `github.com/Catruple/Catruple`,
así que no afecta a la página. Si alguien tiene clonado el repo con la URL vieja,
debe actualizarla con `git remote set-url origin https://github.com/Catruple/Catruple.github.io`.
