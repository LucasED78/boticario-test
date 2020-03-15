export default {
  save: async cart => {
    await localStorage.setItem('cartData', JSON.stringify(cart));
  },
  get: async () => {
    const data = await localStorage.getItem('cartData');

    return JSON.parse(data);
  }
}