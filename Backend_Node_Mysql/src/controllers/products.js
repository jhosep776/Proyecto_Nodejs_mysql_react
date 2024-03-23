const { connection } = require('../database/connection')
const respuesta = require('../util/respuestas')


const save = (req, res) => {
    const params = req.body;
    if (!params || !params.nombre) {
        respuesta.error(req, res, 'No se están ingresando los parámetros requeridos', 500);
    } else {
        try {
            // Consulta para verificar si ya existe un rol con el mismo nombre
            const query = 'SELECT * FROM roles WHERE nombre = ?';
            connection.query(query, [params.nombre], (error, results) => {
                try {
                    if (error) {
                        respuesta.error(req, res, 'Ocurrió un error al verificar el rol existente', 500);
                    } else {
                        if (results.length > 0) {
                            // Ya existe un rol con el mismo nombre
                            respuesta.error(req, res, 'El rol a registrar ya existe', 500);
                        } else {
                            // No existe un rol con el mismo nombre, procede con la inserción
                            const insertQuery = 'INSERT INTO roles (nombre) VALUES (?)';
                            connection.query(insertQuery, [params.nombre], (insertError, insertResults) => {
                                try {
                                    if (!insertError) {
                                        const nombreInsertado = {
                                            id: insertResults.insertId,
                                            nombre: params.nombre,
                                            mensaje: 'Rol insertado exitosamente',
                                            affectedRows: insertResults.affectedRows

                                        };
                                        // Devolver el objeto como parte del cuerpo de la respuesta exitosa
                                        respuesta.success(req, res, nombreInsertado, 200);
                                    } else {
                                        respuesta.error(req, res, 'No se pudo insertar el rol', 500);
                                    }
                                } catch (error) {
                                    respuesta.error(req, res, 'Ocurrió un error en el registro', 500);
                                }
                            });
                        }
                    }
                } catch (error) {
                    respuesta.error(req, res, 'Ocurrió un error en la verificación del rol existente', 500);
                }
            });
        } catch (error) {
            console.log(error);
            respuesta.error(req, res, 'Ocurrió un error al ejecutar la consulta', 500);
        }
    }
};

module.exports = {
    
    save,
     

}
 