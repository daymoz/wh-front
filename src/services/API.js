import axios from 'axios';

// const url = 'http://dev.waven-hub.fr:1337';

export function getArticles(limit) {
  return axios.get('http://dev.waven-hub.fr:1337/articles?_limit='+limit);
}

export function getGuides(limit) {
  return axios.get('http://dev.waven-hub.fr:1337/guides?_limit='+limit);
}

export function getMaj(limit) {
  return axios.get('http://dev.waven-hub.fr:1337/majs?_limit='+limit);
}

export function getNews(limit) {
  return axios.get('http://dev.waven-hub.fr:1337/actualites?_limit='+limit);
}