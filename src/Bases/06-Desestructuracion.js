// Desestructuracion

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan',
};

//const { nombre, edad, clave } = persona;

//console.log(nombre);
// console.log(edad);
// console.log(clave);

// const retornaPersona = (usuario) => {
//     const { nombre, edad, clave } = usuario;
//     console.log(nombre);
//     console.log(edad);
//     console.log(clave);
// }

const retornaPersona2 = ({nombre,edad,clave, rango = 'capitan'}) => {
    console.log(nombre);
    console.log(edad);
    console.log(clave);
    console.log(rango);
}

retornaPersona2(persona);