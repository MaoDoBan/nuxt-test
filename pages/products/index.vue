<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p"/>
      </div>
    </div>
  </div>
</template>


<script setup>
  definePageMeta({
    layout: "products"
  });

  //fetch products - meio que ta renomeando data -> products
  const {data: products} = await useFetch("https://fakestoreapi.com/products");

  useHead({
    title: "Ban Shop | Produtos",
    meta: [
      {name: "description", content: "Nuxt 3 Products"}
    ]
  });
</script>