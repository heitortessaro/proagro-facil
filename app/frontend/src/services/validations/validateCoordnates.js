function validateCoordenate(coordenate) {
  const matches = coordenate.match(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/g);
  return (matches !== null && matches.length > 0);
}

export default validateCoordenate;
