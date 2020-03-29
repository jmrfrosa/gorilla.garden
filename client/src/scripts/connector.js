import axios from 'axios';

const connector = {
  getGorillas: () => {
    return axios({
      method: 'GET',
      url: '/gorillas'
    });
  },
  addGorilla: (gorilla) => {
    return axios({
      method: 'POST',
      url: '/gorillas/create',
      data: gorilla
    });
  },
  handleError: (error) => (console.log(error))
}

export default connector;