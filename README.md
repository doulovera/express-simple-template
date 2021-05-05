# Modo de uso

```bash
$ git clone https://github.com/doulovera/express-simple-template.git
```

# Plantilla básica
```js
const express = require(express);
const app = express();
app.listen(process.env.PORT || 3000, () => {
	console.log("Servidor iniciado correctamente.");
});
```

Para más información entra a la [documentación](http://expressjs.com/)