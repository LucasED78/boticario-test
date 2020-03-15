import api from './api';

export default {
  getAll: async () => {
    try {
      const response = await api().get('/product');

      return response.data;
    } catch(e){
      console.error(e);
    }
  },

  getById: async id => {
    try {
      const response = await api().get(`/product/${id}`);

      return response.data;
    } catch(e){
      console.error(e);
    }
  }
}