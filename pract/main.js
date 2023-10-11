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
}
Student.prototype.aprobarCurso = function(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);//forma de crear metodo por fuera del prototipo con --prototype--.
    }

const juanita = new Student(
    "Juanita Alejandra",
    15,
    ["Curso de Introduccion a la Produccion de Videojuegos",
    "Curso de Creacion de Personajes"],
    );

//Prototipos con la sintaxis clases

class Student2 {// Forma de crear una clase (prototipo)
    constructor(name, age, cursosAprobados) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.aprobarCurso = function(nuevoCursito) {
            this.cursosAprobados.push(nuevoCursito);//forma de crear metodo dentro de una clase.
            }
    }
}