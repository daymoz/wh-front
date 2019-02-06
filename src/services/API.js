import axios from 'axios';

const url = 'http://dev.waven-hub.fr:1337';



export function getArticles() {
    axios
  .get(url+'/articles', {
  })
  .then(response => {
    // Handle success.
    console.log('Well done, here is the list of articles: ', response.data);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error);
  });
}