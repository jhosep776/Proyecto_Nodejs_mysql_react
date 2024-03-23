import React, { useState } from 'react';

export const Product = () => {

    const [firstRowData, setFirstRowData] = useState({
        nombre: '',
        email: ''
    });

    // Función para manejar cambios en la primera fila
    const handleFirstRowChange = (event) => {
        const { name, value } = event.target;
        setFirstRowData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Función para duplicar el valor del input de la columna "Nombre" a las columnas "Nombre" y "Email"
    const duplicateContentHorizontal = (event) => {
        const tr = event.target.closest('tr')
        const inputNombre = tr.querySelector('.form-control-nombre');
        const inputEmail = tr.querySelector('.form-control-email');

        if (inputNombre && inputEmail) {
            inputNombre.value = inputNombre.value; // Establecer el valor en el input de la columna "Nombre"
            if (!inputEmail.value) {
                inputEmail.value = inputNombre.value; // Establecer el valor en el input de la columna "Email"
            }
        }
    };

    // Función para duplicar el contenido de la primera fila a las demás filas debajo
    const duplicateContentVertical = (column) => {
        // Obtener el valor actual de la primera fila en la columna especificada
        const firstRowInput = document.querySelector(`.table tbody tr:first-child .form-control-${column}`);
        const firstRowValue = firstRowInput.value;

        // Duplicar contenido de la primera fila a todas las demás filas
        const tableRows = document.querySelectorAll('.table tbody tr');
        tableRows.forEach((row, index) => {
            if (index !== 0) { // Saltar la primera fila
                const inputElement = row.querySelector(`.form-control-${column}`);
                if (inputElement) {
                    inputElement.value = firstRowValue; // Establecer el mismo valor en la fila actual
                }
            }
        });
    };

    return (
        <div className="container">
            <h2>Listado de productos</h2>
            <div className="rounded p-3 m-3" style={{ border: '1px solid #ccc' }}>
                <div className="row pb-2 mx-4">
                    <div className="col text-center">
                        <div className="d-flex  me-1 justify-content-center align-items-center">
                            <input type="text" className="form-control me-5" name="filtroEmail" placeholder="Filtrar datos" />
                            <button className="btn btn-success mx-1">
                                <i class="bi bi-floppy"></i>
                            </button>
                            <button className="btn btn-primary mx-1">
                                <i class="bi bi-plus-circle"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <table className="table mx-1">
                    <thead>
                        <tr>
                            <th className="text-center">ID</th>
                            <th className="text-center">
                                Nombre
                                <button className="btn  py-0" onClick={() => duplicateContentVertical('nombre')}>
                                    <i class="bi bi-arrow-down-up"></i>
                                </button>
                            </th>
                            <th className="text-center">
                                Email
                                <button className="btn py-0" onClick={() => duplicateContentVertical('email')}>
                                    <i class="bi bi-arrow-down-up"></i>
                                </button>
                            </th>
                            <th className="text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">
                                <button className="btn py-0 " onClick={duplicateContentHorizontal}>
                                    <i class="bi bi-arrow-left-right"></i>
                                </button>
                                1
                            </td>
                            <td className="text-center">
                                <input
                                    type="text"
                                    className="form-control form-control-nombre text-center"
                                    placeholder="Ingrese nombre"
                                    value={firstRowData.nombre}
                                    onChange={handleFirstRowChange}
                                    name="nombre"
                                />
                            </td>
                            <td className="text-center">
                                <input
                                    type="text"
                                    className="form-control form-control-email text-center"
                                    placeholder="Ingrese email"
                                    value={firstRowData.email}
                                    onChange={handleFirstRowChange}
                                    name="email"
                                />
                            </td>
                            <td className="text-center">
                                <button className="btn btn-warning mx-1"><i class="bi bi-pencil"></i></button>
                                <button className="btn btn-danger mx-1"><i class="bi bi-trash"></i></button>
                            </td>
                        </tr>
                        <tr>

                            <td className="text-center">
                                <button className="btn py-0 " onClick={duplicateContentHorizontal}>
                                    <i class="bi bi-arrow-left-right"></i>
                                </button>
                                2
                            </td>

                            <td className="text-center">
                                <input type="text" className="form-control form-control-nombre text-center" placeholder="Ingrese nombre" />
                            </td>
                            <td className="text-center">
                                <input type="text" className="form-control form-control-email text-center" placeholder="Ingrese email" />
                            </td>
                            <td className="text-center">
                                <button className="btn btn-warning mx-1"><i class="bi bi-pencil"></i></button>
                                <button className="btn btn-danger mx-1"><i class="bi bi-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center ">
                                <button className="btn py-0 " onClick={duplicateContentHorizontal}>
                                    <i class="bi bi-arrow-left-right"></i>
                                </button>
                                3
                            </td>
                            <td className="text-center">
                                <input type="text" className="form-control form-control-nombre text-center" placeholder="Ingrese nombre" />
                            </td>
                            <td className="text-center">
                                <input type="text" className="form-control form-control-email text-center" placeholder="Ingrese email" />
                            </td>
                            <td className="text-center">
                                <button className="btn btn-warning mx-1"><i class="bi bi-pencil"></i></button>
                                <button className="btn btn-danger mx-1"><i class="bi bi-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
