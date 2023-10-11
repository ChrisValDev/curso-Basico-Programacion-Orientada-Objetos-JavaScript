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
    constructor(name, age, cursosAprobados) {//constructor es un metodo de la clase
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
    aprobarCurso(nuevoCursito) {//segundo metodo de la clase
       this.cursosAprobados.push(nuevoCursito); 
    }
}

const miguelito = new Student2(
    "Miguel",
    28,
    [
        "Curso de Analisis de Negocios para Ciencia de Datos",
        "Curso de Principios de Visualizacion de Datos para BI",
    ],
);