const app = require('./app');

const puerto = app.get('port');


app.listen(puerto, () => {
    console.log("Servidor escuchando puerto", app.get("port"));
});
