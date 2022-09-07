const fetchDelete = async (id) => {
  const url = `http://0.0.0.0:8004/register/${id}`;
  console.log(url);
  const response = await fetch(url, { method: 'DELETE' });
  console.log(response);
  const successfullyRemoved = 204;
  const notFound = 404;
  if (response.status === successfullyRemoved) {
    return 'Registro removido com sucesso';
  } if (response.status === notFound) {
    const data = await response.json();
    return data.detail;
  }
  return false;
};

export default fetchDelete;
