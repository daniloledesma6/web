function cargarPublicidades() {
    const publicidadesBody = document.getElementById('publicidadesBody');
    const publicidades = JSON.parse(localStorage.getItem('publicidades')) || [];

    if (publicidades.length === 0) {
        const mensajeNoPublicidades = document.createElement('p');
        mensajeNoPublicidades.textContent = 'No hay publicidades cargadas.';
        publicidadesBody.appendChild(mensajeNoPublicidades);
    } else {
        publicidades.forEach((publicidad, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${publicidad.nombre}</td>
                <td>${publicidad.precioMes}</td>
                <td>${publicidad.fechaVencimiento}</td>
                <td>${publicidad.descripcion}</td>
                <td>${publicidad.direccion}</td>
                <td>${publicidad.cuit}</td>
                <td>${publicidad.iva}</td>
                <td>
                    <button onclick="eliminarPublicidad(${index})">Eliminar</button>
                </td>
            `;
            publicidadesBody.appendChild(row);
        });
    }
}

function eliminarPublicidad(index) {
    if (confirm('¿Estás seguro de que deseas eliminar esta publicidad?')) {
        let publicidades = JSON.parse(localStorage.getItem('publicidades')) || [];
        publicidades.splice(index, 1);
        localStorage.setItem('publicidades', JSON.stringify(publicidades));
        location.reload();
    }
}

function calcularTotal() {
    const publicidades = JSON.parse(localStorage.getItem('publicidades')) || [];
    let total = 0;

    publicidades.forEach(publicidad => {
        total += parseFloat(publicidad.precioMes);
    });

    const totalContainer = document.getElementById('totalContainer');
    totalContainer.textContent = `Total calculado: $${total.toFixed(2)}`;
}

function ordenarPorFecha() {
    const publicidades = JSON.parse(localStorage.getItem('publicidades')) || [];

    publicidades.sort((a, b) => new Date(a.fechaVencimiento) - new Date(b.fechaVencimiento));

    const publicidadesBody = document.getElementById('publicidadesBody');
    publicidadesBody.innerHTML = '';

    publicidades.forEach((publicidad, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${publicidad.nombre}</td>
            <td>${publicidad.precioMes}</td>
            <td>${publicidad.fechaVencimiento}</td>
            <td>${publicidad.descripcion}</td>
            <td>${publicidad.direccion}</td>
            <td>${publicidad.cuit}</td>
            <td>${publicidad.iva}</td>
            <td>
                <button onclick="eliminarPublicidad(${index})">Eliminar</button>
            </td>
        `;
        publicidadesBody.appendChild(row);
    });
}

window.onload = function() {
    cargarPublicidades();
};



