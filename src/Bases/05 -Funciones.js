// Funciones
const saludar = function(nombre){
    return `Hola ${nombre}`;
}

const saludar2 = ( nombre ) =>{
    return `Hola ${nombre}`;
}

const saludar3 = ( nombre ) =>`Hola ${nombre}`;

const saludar4 = () =>`Hola Mundo`;


console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());


const getUser = () =>{ return { uid: 'ABC123', username: 'user1',}}
const uuu=getUser();
console.log(uuu);


const UsuarioActivo =  nombre =>{ return {uid: 'ABC123',username: nombre,}}

const Usuario1 = UsuarioActivo('Juan');
console.log(Usuario1);