const fetchBusca = async () => {
  const url = '';
  const response = await fetch(url);
  const fetchOk = 200;
  if (response.status === fetchOk) {
    return { message: 'Registro apagado com sucesso.' };
  }
  return { message: 'falha na requisição' };
};

export default fetchBusca;
