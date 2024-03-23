const { connection } = require('../database/connection')
const respuesta = require('../util/respuestas')

//acciones de prueba 


const list = (req, res) => {
    //  connection.query(query, [params.nombre], (error, results) => {
    const id = req.params.id;
    const query = 'SELECT * FROM roles WHERE id = ?';
    const sentencia = 'SELECT * FROM roles';
    if (id) {
        connection.query(query, [id], (error, results) => {
            try {
                if (error || results.length <= 0) {
                    respuesta.error(req, res, 'No existe el rol buscado', 500)
                    //console.log(error)
                } else {
                    respuesta.success(req, res, results, 200)
                }
            } catch (error) {
                respuesta.error(req, res, 'ocurrio un error en la busqueda', 500)
            }


        });

    } else {
        connection.query(sentencia, (error, results) => {

            try {
                if (error) {
                    respuesta.error(req, res, 'No se estan listando los roles', 500)
                    //  console.log(error)
                } else {
                    respuesta.success(req, res, results, 200)
                }

            } catch (error) {
                respuesta.error(req, res, 'ocurrio un error en la busqueda', 500)
            }

        });

    }


}
const save = (req, res) => {
    const params = req.body;
    if (!params || !params.nombre) {
        respuesta.error(req, res, 'No se están ingresando los parámetros requeridos', 500);
    } else {
        try {
            // Consulta para verificar si ya existe un rol con el mismo nombre
            const query = 'SELECT * FROM roles WHERE name = ?';
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
                            const insertQuery = 'INSERT INTO roles (name) VALUES (?)';
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
const update = (req, res) => {
    const id = req.params.id;
    const params = req.body;
    const query = 'UPDATE roles SET name = ? WHERE id = ?';
    const values = [params.nombre, id];


    if (id) {
        if (!params || !params.nombre) {
            respuesta.error(req, res, 'No se están ingresando los parámetros requeridos', 500);
        } else {
            try {
                connection.query(query, values, (error, results) => {
                    if (error) {
                        respuesta.error(req, res, 'No se pudo realizar la actualizacion', 500)
                    } else {

                        const datos_actualizados = {
                            id: id,
                            nombre: params.nombre,
                            mensaje: 'Datos acualizados correctamente',
                            affectedRows: results.affectedRows

                        };
                        respuesta.success(req, res, datos_actualizados, 200)

                    }

                });
            } catch (error) {
                respuesta.error(req, res, 'ocurrio un error', 500)
            }

        }
    } else {
        respuesta.error(req, res, 'No existe el id buscado', 500)

    }
}
const deleted = (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM roles WHERE id = ?`;
    const values = [id];

    if (id) {

        try {
            connection.query(query, values, (error, results) => {
                if (error) {
                    respuesta.error(req, res, 'No se pudo pudo realizar la eliminacion', 500)
                } else {

                    const dato_eliminado = {
                        id: id,
                        mensaje: 'Dato eliminado correctamente',
                        affectedRows: results.affectedRows

                    };
                    respuesta.success(req, res, dato_eliminado, 200)
                }

            })
        } catch (error) {
            respuesta.error(req, res, 'No existe el id ingresado', 500)
        }






    } else {
        respuesta.error(req, res, 'No se ingreso el id', 500)
    }
}


module.exports = {
    list,
    save,
    update,
    deleted

}
 