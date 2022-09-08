import baseURL from '../baseURL';

const fetchCadastro = async (data) => {
  const url = `${baseURL}/register`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const info = await response.json();
  return info;
};

export default fetchCadastro;
