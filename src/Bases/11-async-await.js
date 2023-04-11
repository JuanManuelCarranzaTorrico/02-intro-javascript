// const apiKey = `kPNaQrXbqRJSLrIBnnsyzXlOnpnaWOed`;

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey}`);

// peticion
// .then ( resp => resp.json())
// .then( ({ data }) => {
// const { url } = data.images.original.url;

//     const img = document.createElement('img');
//     img.src=url;

//     document.body.append ( img );

// } )
// .catch( console.warn)

const getImagen = async() => {
    const apiKey = `kPNaQrXbqRJSLrIBnnsyzXlOnpnaWOed`;
    const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey}`);
    const { data }  = await peticion.json();
    const { url } = data.images.original;
    console.log(data);
    return url;
}

const url = getImagen();
const img = document.createElement('img');
    img.src=url;

    document.body.append ( img );