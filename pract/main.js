const natalia = {
    name: "Natalia",
    edad: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    },
};
natalia.aprobarCurso("Curso Basico de JS");