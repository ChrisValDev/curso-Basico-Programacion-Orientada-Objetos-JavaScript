class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;// Aqui un ejemplo de que aunque no recibamos parametros en el constructor, podemos agregar atributos a la clase(prototipo)
    }

    publicar(){
        console.log(this.studentName + "(" + this.studentRole + ")");
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}

class Course {
    constructor({
        name, 
        classes = [],
        isFree = false,
        lang = "spanish",
    }) {
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }
    get name() {//obtiene el valor de una propiedad.
        return this._name;
    }
    set name(nuevoNombresito) {//establece el valor de una propiedad.
        if (nuevoNombresito === "Curso Malito de Programacion Basica") {
            console.error("No puedes poner ese nombre al curso");
        } else {
          this._name = nuevoNombresito;
        }
    }
}
const cursoProgBasica = new Course({
    name: "Curso Gratis de Programacion Basica",
    isFree: true,
});

const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
    lang: "english",
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

    publicarComentario(commentContent) {
        const comment = new Comment ({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
}

//Aplicando herencia entre clases

class FreeStudent extends Student {
    constructor(propiedades) {
        super(propiedades);
    }

    approvedCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos " + this.name + ", solo puedes tomar cursos abiertos");
        }
    }
}


class BasicStudent extends Student {
    constructor(propiedades) {
        super(propiedades);
    }
    
    approvedCourse(newCourse) {
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos " + this.name + ", no puedes tomar cursos en ingles");
        }
    }
}


class ExpertStudent extends Student {
    constructor(propiedades) {
        super(propiedades);
    }

    approvedCourse(newCourse) {
            this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student {
    constructor(propiedades) {
        super(propiedades);
    }

    approvedCourse(newCourse) {
            this.approvedCourses.push(newCourse);
    }


    publicarComentario(commentContent) {// Con este metodo se aplica el poliformismo ya que se modifica el valor original de la clase Student(prototipo).
        const comment = new Comment ({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor",
        });
        comment.publicar();
    }
}
const juan = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
    ]
});
const miguelito = new BasicStudent({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ]
});
const freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "freddier",
    email: "f@gep.com",
    instagram: "freddiervega",
});