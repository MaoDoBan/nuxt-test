<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/">         Home     </NuxtLink></li>
          <li><NuxtLink to="/about">    About    </NuxtLink></li>
          <li><NuxtLink to="/products"> Products </NuxtLink></li>
        </ul>
        <a href="/about">normal link, fresh request -- about page</a>
      </nav>
    </header>

    <h2>Home</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aperiam harum expedita! Voluptatum voluptate quidem ratione facilis quis? Reiciendis, facere.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aperiam harum expedita! Voluptatum voluptate quidem ratione facilis quis? Reiciendis, facere.</p>
  </div>
</template>



<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
</style>