import axios from 'axios';

// const url = 'http://dev.waven-hub.fr:1337';

export function getNews(limit) {
  return axios.get('http://dev.waven-hub.fr:1337/actualites?_limit='+limit);
}