<!-- Iteration 1 | Create a basic template structure inside a new project
For this lab, you'll have to create a new Vue project in a new folder. You can choose which options you want to include.

One of the main advantages of Vue (or any other frontend framework) is how easy it is to reuse components all over your application. This is exactly what we'll practice right now.

You have to create a navbar component and a footer component, that you'll include in all your app's inner pages. Hint: if you import them in your App.vue component, all your inner pages will display them too.

Right now, you don't need to worry about styling these components; just make sure they're working and you're free to advance to the next task. -->


<!-- HTML HERE -->
<template>

    <header>

      <nav>
        <!-- logo -->

        <!-- v-bind: Dynamically bind one or more attributes, or a component prop to an expression. -->

        <a href=""
          ><img :src="logoOfSite.imgRoute" :alt="logoOfSite.imgAltText"
        /></a>

        <!-- navigation -->

        <!-- v-text: Update the element's text content. Expects a string. -->
        
        <ul>
          <li><a href="" v-text="navigation[0].navText"></a></li>
          <li>
            <a
              :target="navigation[1].navLinkOpenNewTab"
              :href="navigation[1].navRoute"
              v-text="navigation[1].navText"
            ></a>
          </li>
        </ul>

        <!-- buton de login -->
        <button v-text="buttonText"></button>
      </nav>

    </header>

  </template>


  <!-- JS HERE -->
  <script setup>

  import { ref, reactive } from "vue";

  const logoOfSite = reactive({
    imgRoute:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    imgAltText: "A cool logo showcasing the Google Company",
  });

  const navigation = reactive([
    {
      navRoute: "/",
      navText: "Home",
    },
    {
      navRoute: "https://next.ironhack.com/fr/en/career",
      navText: "Contact",
      navLinkOpenNewTab: "_blank",
    },
  ]);
  const buttonText = ref("Click Me");
  </script>


  <!-- CSS HERE -->
  <style scoped>
  a,
  a img {
    width: 50%;
  }
  nav {
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(182, 182, 232);
  }
  nav ul {
    list-style-type: none;
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 0 5rem;
  }
  </style>