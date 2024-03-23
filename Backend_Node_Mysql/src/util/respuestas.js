const success = (req, res, mensaje = '', status = 200) => {
    res.status(status).send({
        error: false,
        status: status,
        body: mensaje
    });
};

const error = (req, res, mensaje = 'Error Interno', status = 500) => {
    res.status(status).send({
        error: true,
        status: status,
        body: mensaje
    });
}

module.exports = {
    success,
    error
}