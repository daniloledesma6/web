document.addEventListener('DOMContentLoaded', function() {
    const publicidadForm = document.getElementById('publicidadForm');

    publicidadForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const precioMes = document.getElementById('precioMes').value;
        const fechaVencimiento = document.getElementById('fechaVencimiento').value;
        const descripcion = document.getElementById('descripcion').value; 
        const direccion = document.getElementById('direccion').value;
        const cuit = document.getElementById('cuit').value;
        const iva = document.getElementById('iva').value;
        

        const publicidad = { nombre, precioMes, fechaVencimiento, descripcion, direccion, cuit, iva};

        guardarPublicidad(publicidad);
        alert('Publicidad guardada exitosamente.');
        publicidadForm.reset();
    });
});

function guardarPublicidad(publicidad) {
    let publicidades = JSON.parse(localStorage.getItem('publicidades')) || [];
    publicidades.push(publicidad);
    localStorage.setItem('publicidades', JSON.stringify(publicidades));
}

