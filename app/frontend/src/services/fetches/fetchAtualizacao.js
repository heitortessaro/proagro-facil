import baseURL from '../baseURL';

const fetchAtualizacao = async (id, data) => {
  const sucess = 200;
  const notFound = 404;
  const invalidData = 400;
  const url = `${baseURL}/register/${id}`;
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  console.log(response.status);
  switch (response.status) {
  case sucess:
    return { sucess: true, message: 'Registro atualizado com sucesso.' };
  case notFound:
    return { sucess: false, message: `Registo com id ${id} não encontrado.` };
  case invalidData:
    return {
      sucess: false,
      message: 'Não foram encaminhados os dados suficientes do evento.' };
  default:
    return { sucess: false, message: 'Erro com o servidor.' };
  }
};

export default fetchAtualizacao;
