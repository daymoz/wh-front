import axios from 'axios';

const url = 'http://dev.waven-hub.fr:1337';



export function getArticles() {
    axios.get('http://dev.waven-hub.fr:1337/articles', {
  })
  .then(response => {
    // Handle success.
    return response.data;
  })
  .catch(error => {
    // Handle error.
    return error;
  });
}