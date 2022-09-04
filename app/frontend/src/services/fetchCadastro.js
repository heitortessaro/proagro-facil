const fetchCadastro = async (data) => {
  const url = '';
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  const created = 201;
  return response.status === created;
};

export default fetchCadastro;
