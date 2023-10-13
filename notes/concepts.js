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

// 1. Abstraccion: La abstracción en JavaScript, al igual que en otros lenguajes de programación, se refiere a la capacidad de ocultar los detalles internos de un objeto o una función y exponer solo los aspectos relevantes y necesarios para interactuar con ese objeto o función. Esto ayuda a simplificar la complejidad y a mejorar la claridad del código. Ayuda tambien a reutilizar el codigo.

// 2. Encapsulamiento: El encapsulamiento en JavaScript se refiere a la práctica de ocultar detalles internos y la implementación de un objeto o una función, y solo exponer una interfaz pública que permita interactuar con dicho objeto o función. Esto se logra utilizando propiedades y métodos para controlar el acceso a los datos y las funcionalidades internas del objeto. El encapsulamiento es uno de los cuatro conceptos fundamentales de la programación orientada a objetos, junto con la abstracción, la herencia y el polimorfismo.

// 3. Herencia: La herencia en JavaScript se refiere a la capacidad de un objeto (llamado "objeto hijo" o "subclase") de heredar propiedades y métodos de otro objeto (llamado "objeto padre" o "superclase"). La herencia es un concepto fundamental en la programación orientada a objetos (POO) y es utilizado para crear relaciones jerárquicas entre objetos, lo que permite la reutilización de código y la organización de la lógica de programación de una manera más estructurada.

// 4. Polimorfismo: El polimorfismo en JavaScript, al igual que en otros lenguajes de programación orientada a objetos, se refiere a la capacidad de objetos de diferentes clases (o tipos) para responder a un mismo método o función de manera diferente. En otras palabras, el polimorfismo permite que objetos de distintas clases que heredan de una misma superclase (o interfaz) puedan implementar métodos con el mismo nombre pero comportamientos específicos para cada clase.