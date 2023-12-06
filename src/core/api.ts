const baseURL = process.env.REACT_APP_API_BASE_URL;

const get = (endpoint: string) =>
  fetch(`${baseURL}${endpoint}`, {
    credentials: 'include',
  });

const post = (endpoint: string, params: object = {}) =>
  fetch(`${baseURL}${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  });

export default { get, post };
