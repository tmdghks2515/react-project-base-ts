import api from '../api';

const authService = {
  login: () => {
    api.post('/login');
  },
};

export default authService;
