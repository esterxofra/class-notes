<template>

  <header>
    <img class="logo" src="./images/Ironhack_logo.svg" alt="logo_ironhack">
    <img class="menu" src="./images/Burger_menu.svg" alt="burger_menu">
  </header>

  <main>
    <img src="./images/Vue_logo.svg" alt="logo_vue">
    <h1>Welcome to Vue.js</h1>
    <h3>Become a coding ninja with the fastest-growing JavaScript framework</h3>
    <button>Awsome!</button>
  </main>

  <section class="box-cards">

    <div class="card">
      <img src="./images/USP-1.svg" alt="icon1">
      <h2>Performant</h2>
      <p>Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.</p>
    </div>

    <div class="card">
      <img src="./images/USP-2.svg" alt="icon2">
      <h2>Approach</h2>
      <p>Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.</p>
    </div>

    <div class="card">
      <img src="./images/USP-3.svg" alt="icon3">
      <h2>Versatile</h2>
      <p>A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.</p>
    </div>

  </section>

</template>

<script setup></script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');

*{
  font-family: 'Inter', sans-serif;
  font-style: normal;
  /* border: red solid 1px; */
}

h1{
  font-weight: 800;
  font-size: 40px;
  line-height: 95px;
}

h2{
  font-weight: 700;
  font-size: 16px;
}

h3{
  font-weight: 800;
  font-size: 14px;
  line-height: 20px;
}

p{
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
}

header{
  display: flex;
  justify-content: space-between;
  margin: 4rem;
}

.logo{
  width: 35px;
  height: 38px;
}

.menu{
  width: 22px;
  height: 20px;
}


main{
  display: flex;
  flex-direction: column;
  align-items: center;
}

main img{
  width: 129px;
  height: 129px;
}

main h3{
  width: 40vw;
  margin-bottom: 5vh;
  text-align: center;
}

button{
  width: 121px;
  height: 31px;
  left: 239px;
  top: 354px;
  margin-bottom: 5vh;
  background: #34495E;
  color:white;
  border-radius: 13px;
}

.box-cards{
  background: #39B983;
  display: flex;
  padding: 4rem;
  height: 30vh;
}

.card{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 40vw;
}

.card p{
  width: 20vw;
}

.card img{
  width: 60px;
  height: 60px;
}


</style>
