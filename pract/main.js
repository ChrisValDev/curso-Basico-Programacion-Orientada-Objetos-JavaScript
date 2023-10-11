class Course {//Creacion de prototipo mediante clase
    constructor({
        name, 
        classes = [],
    }) {
        this.name = name;
        this.classes = classes;
    }
}

const cursoProgBasica = new Course({//Creacion de objeto mediante instancia
    name: "Curso Gratis de Programacion Basica",
});
const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
});

class LearningPath {//Creacion de prototipo mediante clase
    constructor({
        name, 
        courses = [],
    }) {
        this.name = name;
        this.course = courses;
    }
}

const escuelaWeb = new LearningPath({//Creacion de objeto mediante instancia
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,//A esto se le llama abstraccion, ayuda a simplificar la complejidad y a mejorar la claridad del código. Ayuda tambien a reutilizar el codigo.
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

class Student{//Creacion de prototipo mediante clase
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

const juan2 = new Student({//Creacion de objeto mediante instancia
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