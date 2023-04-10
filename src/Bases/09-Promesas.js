import { getHeroeById } from "./Bases/08-imp-exp";

// const promesa = new Promise( (resolve, reject) =>{
//     setTimeout( () => {
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         reject('No se pudo encontrar al heroe');
//     }, 2000)
// } );


// promesa.then( (heroe)=>{console.log(heroe)})
// .catch(err => console.warm ( err ) );

const getHeroeByIdAsync = ( id ) =>{
    const promesa = new Promise( (resolve, reject) =>{
        setTimeout( () => {
            const heroe = getHeroeById(id);
            if (heroe){
            resolve(heroe);
            }else{
            reject('No se pudo encontrar al heroe');}
        }, 2000)
    } );
    
        return promesa;
}

getHeroeByIdAsync(1).then( heroe => console.log('Heroe', heroe))
.catch(err => console.warn (err));