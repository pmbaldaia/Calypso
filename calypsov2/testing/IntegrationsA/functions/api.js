const axios = require('axios');

// async function testOne() {
//     const response = await axios.get('http://127.0.0.1:3000/users/home');
//     console.log(response);
// }
  
// testOne();


exports.catMovies = async function() {

    try {
        const response = await axios.get('http://127.0.0.1:3000/movies?page=0');    
        return response.data
    } catch (error) {
        throw Error('error');
    }
}


exports.specificSerie = async function(serieTitle) {

    try {
        const response = await axios.get('http://127.0.0.1:3000/series/' + serieTitle);    
        return response.data
    } catch (error) {
        throw Error('error');
    }
}