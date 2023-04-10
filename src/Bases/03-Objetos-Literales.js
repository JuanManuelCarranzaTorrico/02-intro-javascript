const persona={
    nombre: 'nacho',
    apellido: 'Paz',
    edad: 45,
    direccion:{
        ciudad: 'La Paz',
        zip: 4565465
    },
};

//console.table( {persona});
console.log ({persona});

const persona2 = {...persona};
persona2.nombre='tefi';

console.log ({persona2});