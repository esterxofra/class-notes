<!-- Iteration 2 | Display the result of a JavaScript operation in a component's HTML
You've already practiced showing a string inside a Vue component's template using mustache syntax ({{}}). You've also seen that strings are not the only things you can insert on your HTML using this technique.

This challenge has two parts:

First, you just need to insert a mathematical operation inside your HTML and see what happens. Something as simple as 2 + 2 is enough here.
Then, the real challenge begins: you have to "print" a string on your template, with a twist: this string has to be returned by a function and read the data stored in other reactive variables. Hint: this article can shed some light on how you can do this. -->

<!-- Objetos reactivos pueden ser ref & reactive. Los objetos reactivos en Vue.js son una característica central del framework que permite hacer que la aplicación reaccione a los cambios en los datos. En Vue.js, los objetos reactivos se crean utilizando la función Vue.observable() y se utilizan en conjunto con el sistema de directivas y componentes para construir aplicaciones dinámicas que actualizan en tiempo real. Una vez que se han definido los objetos reactivos, cualquier cambio realizado en ellos automáticamente se refleja en la interfaz de usuario. -->

<!-- HTML HERE -->
<template>
    <!-- ex02 - part 001 -->
    <div>
      <p>La iteracion 001 tiene resutlado de {{ 2 + 2 }}</p>
      <p>{{ 2 + 2 }}</p>
    </div>
    <hr />

    <!-- ex02 - part 002 -->
    <div>
      <!-- funcion con keyword return + {} -->
      <h1>{{ stringChainOne() }}</h1>

      <!-- funcion sin keyword return + {} -->
      <h1>{{ stringChainTwo() }}</h1>

      <!-- funcion que contiene una variable reactive con el metodo ref() dentro del script que define un string que contiene un texto -->
      <h1>{{ stringChainThree() }}</h1>

    </div>
  </template>

  <!-- JS HERE -->
  <script setup>
  import { ref, reactive } from "vue";

  // ex02 - part 002

  // funcion con keyword return + {}
  const stringChainOne = () => {
    return "I like the red hot chilli peppers to go snowboarding!";
  };

  // funcion sin keyword return + {}
  const stringChainTwo = () => "I like the Gang Starr to go snowboarding!";

  const stringChainThree = () => {
    const myCoolString = ref("I like the arctic monkeys to go snowboarding!");
    return myCoolString.value;
    // Este .value elimina las "" del string
  };
  </script>

  <!-- CSS HERE -->
  <style scoped></style>