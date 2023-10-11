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
        "Programacion Basica",
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
    ]
});
const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        "Programacion Basica",
        "Curso Data Business",
        "Curso Dataviz",
    ]
});
const escuelaVgs = new LearningPath({
    name: "Escuela de Videojuegos",
    courses: [
        "Programacion Basica",
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