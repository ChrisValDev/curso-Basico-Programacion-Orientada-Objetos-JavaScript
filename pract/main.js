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

class Student2 {
    constructor({// Al colocar los parametros del contructor dentro de un objeto, el constructor no esta obligado a recibir los parametros en orden para poder contruir el nuevo objeto (instancia), se puede asignar valores por default a los parametros para convertirlos opcionales.
        name,
        cursosAprobados = [],// Al asignarle un valor al parametro, se vuelve opcional para las instancias (objetos).
        age,
        email,
    }) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
    aprobarCurso(nuevoCursito) {
       this.cursosAprobados.push(nuevoCursito); 
    }
}

const miguelito = new Student2({// Aqui al crear la instancia(objeto) miguelito, se crean los argumentos(propiedad: atributo) dentro de un objeto, no es necesario un orden especifico en este caso.
    name: "Miguel",
    age: 28,
    email: "miguelito@platzi.com",
});

//Esta opcion de guardar los parametros y argumentos dentro de un objeto funciona tambien en los prototipos de function, y en objetos literales.