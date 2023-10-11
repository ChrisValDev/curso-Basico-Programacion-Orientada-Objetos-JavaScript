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

//Los prototipos funcionana para crear mas objetos con propiedades iguales o similares de manera ordenada y con menos codigo.
function Student(name, age, cursosAprobados) {//forma de crear un prototipo con la sintaxis function
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    this.aprobarCurso = function(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);//forma de crear metodo dentro de un prototipo
    }
}