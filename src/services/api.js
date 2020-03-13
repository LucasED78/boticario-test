import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: 'https://boticario-api.herokuapp.com'
  })
}