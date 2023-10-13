// Programacion orientada a objetos (POO)

// Paradigmas (estructurado, orientado a objetos y funcional) dependiendo el caso de aplicacion uno es mejor que otro o incluso al mismo tiempo.

// Objetos: 

// En JavaScript, los objetos son una parte fundamental del lenguaje y se utilizan para representar y organizar datos de diversas formas. Un objeto es una estructura de datos que agrupa propiedades y métodos relacionados. Estas propiedades pueden ser valores (números, cadenas, booleanos, etc.) o incluso otras funciones, y los métodos son funciones que están asociadas al objeto.

// Los objetos en JavaScript se definen utilizando la notación literal de llaves ({}) o mediante la creación de una instancia de una clase o constructor (antes de la llegada de las clases de ES6). Aquí tienes ejemplos de ambas formas:

// Notación literal de llaves:

const persona = {
    nombre: "Juan",
    edad: 30,
    decirHola: function() {
        console.log("Hola, soy " + this.nombre);
    }
};

console.log(persona.nombre); // Accediendo a una propiedad
persona.decirHola(); // Llamando a un método

// Creación de objetos utilizando un constructor:

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.decirHola = function() {
        console.log("Hola, soy " + this.nombre);
    };
}

const persona = new Persona("Juan", 30);
console.log(persona.nombre);
persona.decirHola();

// Los objetos en JavaScript son muy versátiles y se utilizan para modelar datos y comportamientos en una amplia variedad de aplicaciones, desde manipulación del DOM en páginas web hasta la representación de datos en aplicaciones más complejas. Los objetos también pueden anidarse, lo que significa que puedes tener objetos dentro de objetos para crear estructuras de datos más complejas y jerárquicas.

// Además, JavaScript es un lenguaje de programación orientado a objetos, por lo que los objetos desempeñan un papel central en la programación JavaScript, y casi todo en JavaScript es un objeto o se puede considerar como un objeto.


// Prototipos (moldes): 

// Los prototipos en JavaScript son una característica fundamental del lenguaje que se utiliza para implementar la herencia y la reutilización de código. Entender los prototipos es esencial para comprender cómo funciona la herencia en JavaScript.

// En JavaScript, cada objeto tiene una propiedad interna llamada __proto__ que hace referencia a otro objeto, que es su prototipo. Cuando intentas acceder a una propiedad o método en un objeto, JavaScript primero busca en el objeto en sí y, si no lo encuentra, busca en su prototipo, y así sucesivamente hasta llegar al prototipo base (que es Object.prototype). Esto se conoce como "cadena de prototipos" o "prototype chain."

// Aquí hay un ejemplo sencillo para ilustrar cómo funcionan los prototipos en JavaScript:

// Definimos un constructor de objetos
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

// Agregamos un método al prototipo del constructor Persona
Persona.prototype.saludar = function() {
    console.log("Hola, soy " + this.nombre);
}

// Creamos una instancia de Persona
const persona = new Persona("Juan", 30);

// El objeto 'persona' hereda el método 'saludar' del prototipo
persona.saludar(); // Imprime "Hola, soy Juan"

// En este ejemplo, Persona.prototype es el prototipo de las instancias creadas con el constructor Persona. Cualquier instancia de Persona que crees tendrá acceso al método saludar a través de la cadena de prototipos.

// La ventaja de los prototipos en JavaScript es que permiten la reutilización de código y la implementación de herencia sin la necesidad de clases formales, como se encuentra en otros lenguajes de programación orientada a objetos. En lugar de utilizar clases, JavaScript utiliza funciones constructoras y prototipos para lograr la herencia.

// Es importante tener en cuenta que a partir de ECMAScript 6 (ES6), JavaScript introdujo las clases, que son una forma más declarativa y familiar de trabajar con la herencia. Sin embargo, en su núcleo, las clases de ES6 siguen utilizando prototipos por debajo.

// Clases:

// Las clases en JavaScript son una característica introducida en ECMAScript 6 (también conocido como ES6) que proporciona una forma más declarativa y estructurada de definir objetos y aplicar la herencia en JavaScript. A pesar de que las clases se introdujeron para hacer que la programación orientada a objetos sea más accesible y familiar para los programadores que están acostumbrados a lenguajes de programación con clases tradicionales, como Java o C++, en su núcleo, las clases de ES6 siguen utilizando el sistema de prototipos subyacente de JavaScript.

// Aquí tienes un ejemplo de cómo se define una clase en JavaScript:

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log("Hola, soy " + this.nombre);
    }
}

const persona = new Persona("Juan", 30);
persona.saludar(); // Imprime "Hola, soy Juan"

// En este ejemplo, class Persona define una clase llamada "Persona" con un constructor y un método "saludar". El constructor se ejecuta cuando se crea una instancia de la clase y se utiliza para inicializar propiedades. Los métodos se definen dentro de la clase y se pueden llamar en las instancias de la clase.


// 4 pilares de la POO

// Los cuatro pilares de la Programación Orientada a Objetos (POO) son:

// Encapsulación: La encapsulación se refiere a la capacidad de ocultar los detalles de implementación de un objeto y exponer solo una interfaz pública. En JavaScript, la encapsulación se logra mediante la creación de atributos y métodos privados y públicos en un objeto. Aquí tienes un ejemplo:

class Coche {
    constructor(marca, modelo) {
        this.marca = marca; // Atributo público
        this.modelo = modelo; // Atributo público
        let velocidad = 0; // Atributo privado

        this.acelerar = function() { // Método público
            velocidad += 10;
        };

        this.getVelocidad = function() { // Método público
            return velocidad;
        };
    }
}

const miCoche = new Coche("Toyota", "Camry");
miCoche.acelerar();
console.log(miCoche.getVelocidad()); // Solo se accede a la velocidad a través del método

// Abstracción: La abstracción implica simplificar objetos complejos dividiéndolos en partes más pequeñas y manejables. En JavaScript, puedes crear clases y objetos que representen conceptos abstractos. Por ejemplo:

class Forma {
    constructor(tipo) {
        this.tipo = tipo;
    }

    describir() {
        console.log(`Esta forma es de tipo ${this.tipo}`);
    }
}

const cuadrado = new Forma("cuadrado");
cuadrado.describir(); // Imprime "Esta forma es de tipo cuadrado"

// Herencia: La herencia permite que un objeto herede propiedades y métodos de otro objeto. En JavaScript, esto se logra utilizando la palabra clave extends. Por ejemplo:

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hablar() {
        console.log(`${this.nombre} emite un sonido.`);
    }
}

class Perro extends Animal {
    hablar() {
        console.log(`${this.nombre} ladra.`);
    }
}

const miPerro = new Perro("Fido");
miPerro.hablar(); // Imprime "Fido ladra."

// Polimorfismo: El polimorfismo permite que diferentes objetos respondan de manera diferente a la misma función o método. En JavaScript, esto se logra mediante la capacidad de un objeto de sobrescribir un método heredado de su clase base. Por ejemplo:

class Figura {
    area() {
        return 0;
    }
}

class Cuadrado extends Figura {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    area() {
        return this.lado * this.lado;
    }
}

class Circulo extends Figura {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    area() {
        return Math.PI * this.radio * this.radio;
    }
}

const cuadrado = new Cuadrado(4);
const circulo = new Circulo(3);

console.log(cuadrado.area()); // Imprime el área del cuadrado
console.log(circulo.area()); // Imprime el área del círculo

// Estos son los cuatro pilares de la POO en JavaScript, y cada uno de ellos se utiliza para modelar objetos y sus relaciones en programas orientados a objetos.