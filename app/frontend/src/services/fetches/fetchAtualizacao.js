const fetchAtualizacao = async (data) => {
  const url = '';
  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
  const updated = 200;
  return response.status === updated;
};

export default fetchAtualizacao;
