<template>
  <div>
    <ProductDetails :product="product"/>
  </div>
</template>


<script setup>
  const {id} = useRoute().params; //pega um dos parâmetros de rota
  const uri = "https://fakestoreapi.com/products/" + id;

  //fetch the product
  const {data: product} = await useFetch(uri, {key: id});

  if(!product.value){
    throw createError({statusCode: 404, statusMessage: "Produto não encontrado!", fatal: true});
  }
  
  definePageMeta({
    layout: "products"
  });
</script>