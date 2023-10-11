const juan1 = {
    name: "JuanDc",
    username: "juandc",
    points: 100,
    socialMedia: {
       twitter: "fjuandc",
       instagram: "fjuandc",
       facebook: "undefined", 
    },

    approvedCourses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Practico de HTML y CSS",
                "Curso de Responsive Design",
            ],
        },
        {
            name: "Escuela de Videojuegos",
            courses: [
                "Curso Introduccion a la Produccion de Vgs",
                "Curso de Unreal Engine",
                "Curso de Unioty 3D",
            ],
        },
    ]
}

const miguelito1 = {
    name: "Miguelito",
    username: "miguelitofeliz",
    points: 1000,
    socialMedia: {
       twitter: "miguelitofeliz",
       instagram: "miguelito_feliz",
       facebook: "undefined", 
    },

    approvedCourses: [
        "Curso DataBusiness",
        "Curso DataViz",
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Practico de HTML y CSS",
                "Curso de Responsive Design",
            ],
        },
        {
            name: "Escuela de Data Science",
            courses: [
                "Curso DataBusiness",
                "Curso DataViz",
                "Curso de Tableu",
            ],
        },
    ]
}// Creacion de objetos literales, no es escalable para mantenimiento, cambios, etc. Consume demasiadas lineas de codigo cada uno.