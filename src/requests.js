import axios from 'axios';

const url = 'http://localhost:5000';

axios.interceptors.request.use(
  config => {
    const token = getTokenFromCache();

    if (token) {
      config.headers['Authorization'] = 'JWT ' + token;
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

export function saveToken(token) {
  localStorage.setItem('token', token);
}

export function getTokenFromCache() {
  return localStorage.getItem('token');
}

export function getGlobalStatus() {
  return axios.get(`${url}/api/get_global_status`).then(({ data }) => data);
}

export function getUserHoldings() {
  return axios.get(`${url}/api/get_user_holdings`).then(({ data }) => data);
}

export function getToken() {
  return axios
    .post(`${url}/auth`, {
      username: 'kirill.podkov@audibene.de',
      password: '123'
    })
    .then(response => response.data.access_token);
}

export function addTicker(ticker) {
  return axios.post(`${url}/api/add_ticker`, {
    ticker
  });
}
