const escuela = {
    estudiantes: []
};

function agregarEstudiante(nombre, calificaciones) {
    const estudiante = {
        nombre: nombre,
        calificaciones: calificaciones
    };
    escuela.estudiantes.push(estudiante);
}

function listarEstudiantes() {
    alert("Lista de estudiantes:");
    escuela.estudiantes.forEach(estudiante => {
        alert(`Nombre: ${estudiante.nombre}, Calificaciones: ${estudiante.calificaciones.join(", ")}`);
    });
}

function promedioEstudiante(nombre) {
    const estudiante = escuela.estudiantes.find(estudiante => estudiante.nombre === nombre);
    if (!estudiante) {
        return "Estudiante no encontrado";
    }
    const sumatoria = estudiante.calificaciones.reduce((total, calificacion) => total + calificacion, 0);
    return sumatoria / estudiante.calificaciones.length;
}
agregarEstudiante("Juan", [85, 90, 95]);
agregarEstudiante("María", [75, 80, 85]);
agregarEstudiante("Carlos", [90, 95, 100]);

listarEstudiantes();

alert("Promedio de Juan:", promedioEstudiante("Juan"));

