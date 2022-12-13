export default defineEventHandler((event) => {

  //handle query params
  const {nome} = getQuery(event);

  return {
    message: `Vou banir: ${nome}`
  };
});