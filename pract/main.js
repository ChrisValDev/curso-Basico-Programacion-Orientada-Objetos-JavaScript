class Course {
    constructor({
        name, 
        classes = [],
    }) {
        this._name = name;
        this.classes = classes;
    }
    get name() {//obtiene el valor de una propiedad.
        return this._name;
    }
    set name(nuevoNombresito) {//establece el valor de una propiedad.
        if (nuevoNombresito === "Curso Malito de Programacion Basica") {
            console.error("Seas mamon");
        } else {
          this._name = nuevoNombresito;
        }
    }
}
const cursoProgBasica = new Course({
    name: "Curso Gratis de Programacion Basica",
});

const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
});

class LearningPath {
    constructor({
        name, 
        courses = [],
    }) {
        this.name = name;
        this.course = courses;
    }
}
const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ]
});
const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        "Curso Data Business",
        "Curso Dataviz",
    ]
});
const escuelaVgs = new LearningPath({
    name: "Escuela de Videojuegos",
    courses: [
        cursoProgBasica,
        "Curso de Intro a Unity",
        "Curso de Unreal",
    ]
});

class Student{
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMeddia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

class FreeStudent extends Student {// extends sirve para heredar todos los parametros, propiedades y metodos de la clase Student(prototipo).
    constructor(propiedades) {//Cuando un objeto genera instancia con la clase(prototipo) FreeStudent recibimos las propiedades y metodos del objeto.
        super(propiedades);// super sirve para enviar todas las propiedades del objeto(instancia) a nuestro Padre clase Student.
    }
}


class FreeStudent extends Student {

}


class FreeStudent extends Student {

}

const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
    ]
});
const miguelito2 = new Student({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ]
});