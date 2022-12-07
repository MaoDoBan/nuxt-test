<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dicta in optio similique cumque totam, exercitationem tempora illo quod vel?</p>
  </div>
</template>


<script setup>
  const {id} = useRoute().params; //pega um dos parâmetros de rota
  
  definePageMeta({
    layout: "products"
  });
</script>