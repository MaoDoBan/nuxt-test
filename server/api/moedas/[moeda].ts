//veja:  https://youtu.be/Opa3hZaZhXo

export default defineEventHandler(async (event) => {

  const {moeda} = event.context.params;
  const {apiKey} = useRuntimeConfig();

  const uri = `https://api.currencyapi.com/v3/latest?currencies=${moeda}&apikey=${apiKey}`;
  
  const {data} = (await $fetch(uri)) as {data: any};

  return data;
});