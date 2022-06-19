const axios = require('axios');

async function testOne() {
    const response = await axios.get('http://127.0.0.1:3000/users/home');
    console.log(response);
}
  
testOne();