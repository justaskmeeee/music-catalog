export const getFilteredValues = (values) => {
  return Object.fromEntries(Object.entries(values).filter(key => key[0] !== 'genre' && key[0] !== 'id'));
}