const personajes =[ 'Goku', 'Vegeta', , 'trunks'];

console.log(personajes[1]);

const [ , ,p3 ]= personajes;

console.log(p3);


const retornoArreglo = () => {
    return ['ABC', 123];
}

const [ letras , numeros]= retornoArreglo();
console.log(letras, numeros);


//Tarea

const arr = useState('Goku ');

const useState = ( valor ) =>{
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}



console.log(arr);
const [ nombre, setNombre]=arr;

setNombre();