<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aperiam harum expedita! Voluptatum voluptate quidem ratione facilis quis? Reiciendis, facere.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aperiam harum expedita! Voluptatum voluptate quidem ratione facilis quis? Reiciendis, facere.</p>
    <div>Api: {{data}}</div>
  </div>
</template>

<script setup>
  const {data} = await useFetch("/api/ban");
  console.log(data);
</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
</style>