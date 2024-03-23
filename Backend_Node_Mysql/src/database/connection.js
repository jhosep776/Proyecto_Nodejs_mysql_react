const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'backend_node_mysql'
});

// Conexión a la base de datos
try {
    connection.connect();
   // connection.end();
    console.log('Conexión a la base de datos MySQL establecida correctamente')

} catch (error) {
    console.error('Error al conectar a la base de datos:', error);
}
/*
// Cerrar la conexión a la base de datos

connection.end((error) => {
  if (error) {
    console.error('Error al cerrar la conexión:', error);
    return;
  }
  console.log('Conexión a la base de datos MySQL cerrada correctamente');
});
*/
module.exports = { connection };