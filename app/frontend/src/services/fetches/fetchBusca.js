const fetchBusca = async (id) => {
  const successfullyFetch = 200;
  const notFound = 404;
  const url = `http://0.0.0.0:8004/register/${id}`;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  if (response.status === successfullyFetch) {
    return data;
  } if (response.status === notFound) {
    return data.detail;
  }
  return false;
};

export default fetchBusca;
