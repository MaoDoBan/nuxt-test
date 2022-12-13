export default defineEventHandler(async (event) => {

  //handle query params
  const {nome} = getQuery(event);

  //handle post data
  const {tempo} = await readBody(event);

  return {
    message: `Vou banir ${nome} por ${tempo} dias`
  };
});