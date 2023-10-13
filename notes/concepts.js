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


// Prototipos (moldes): Sirven para crear varios objetos con propiedades y metodos iguales sin necesidad de crearlos manualmente uno por uno.

// Cuando se crea un objeto literal, se puede ver en consola sus atributos y uno de ellos es  __proto__: encontraremos los metodos que podremos aplicar en el objeto. (Pasa lo mismo cuando se crean los arrays, tienen su propio __proto__:)

// Clases: Es la manera de crear prototipos con una sintaxis especial, existe el metodo --constructor-- el cual define los parametros, la ventaja es que al crear la instancia del objeto, permite ingresar los argumentos que solo contenga el objeto y no es obligatorio ingresar todos los parametros ni tampoco el orden en el cual estan.

// 4 pilares de la POO

// 1. Abstraccion: La abstracción en JavaScript, al igual que en otros lenguajes de programación, se refiere a la capacidad de ocultar los detalles internos de un objeto o una función y exponer solo los aspectos relevantes y necesarios para interactuar con ese objeto o función. Esto ayuda a simplificar la complejidad y a mejorar la claridad del código. Ayuda tambien a reutilizar el codigo.

// 2. Encapsulamiento: El encapsulamiento en JavaScript se refiere a la práctica de ocultar detalles internos y la implementación de un objeto o una función, y solo exponer una interfaz pública que permita interactuar con dicho objeto o función. Esto se logra utilizando propiedades y métodos para controlar el acceso a los datos y las funcionalidades internas del objeto. El encapsulamiento es uno de los cuatro conceptos fundamentales de la programación orientada a objetos, junto con la abstracción, la herencia y el polimorfismo.

// 3. Herencia: La herencia en JavaScript se refiere a la capacidad de un objeto (llamado "objeto hijo" o "subclase") de heredar propiedades y métodos de otro objeto (llamado "objeto padre" o "superclase"). La herencia es un concepto fundamental en la programación orientada a objetos (POO) y es utilizado para crear relaciones jerárquicas entre objetos, lo que permite la reutilización de código y la organización de la lógica de programación de una manera más estructurada.

// 4. Polimorfismo: El polimorfismo en JavaScript, al igual que en otros lenguajes de programación orientada a objetos, se refiere a la capacidad de objetos de diferentes clases (o tipos) para responder a un mismo método o función de manera diferente. En otras palabras, el polimorfismo permite que objetos de distintas clases que heredan de una misma superclase (o interfaz) puedan implementar métodos con el mismo nombre pero comportamientos específicos para cada clase.