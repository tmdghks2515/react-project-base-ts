import api from '../api';

export const authService = {
  login: () => {
    api.post('/login');
  },
};
