function validateCoordenate(coordenate) {
  return !!(coordenate.match(/^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}/));
}

export default validateCoordenate;
