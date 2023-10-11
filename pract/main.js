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

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    this.aprobarCurso = function(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);//forma de crear metodo dentro de un prototipo.
    }
}