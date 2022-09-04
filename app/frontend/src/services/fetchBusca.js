const fetchBusca = async () => {
  const url = '';
  const response = await fetch(url);
  const fetchOk = 200;
  if (response.status === fetchOk) {
    const data = await resolve.json();
    return data;
  }
  return { message: 'falha na requisição' };
};

export default fetchBusca;
