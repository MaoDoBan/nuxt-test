<template>
  <div>
    <header>
      <nav>
        <h2><NuxtLink to="/"> Ban Shop </NuxtLink></h2>
        <ul>
          <li><NuxtLink to="/">         Home     </NuxtLink></li>
          <li><NuxtLink to="/about">    About    </NuxtLink></li>
          <li><NuxtLink to="/products"> Products </NuxtLink></li>
        </ul>
      </nav>
    </header>

    <!-- exibe o conteúdo da página -->
    <div>
      <slot/>
    </div>
  </div>
</template>


<style scoped>
  .router-link-exact-active {
    color: #12b488;
  }
</style>