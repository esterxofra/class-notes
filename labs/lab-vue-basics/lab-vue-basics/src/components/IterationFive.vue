<!-- Iteration 5 | Bonus | Change the background color of an element when pressing a button
Up for a harder challenge? Vue allows us to do pretty "magical" things in a simplified way. In this case, you'll learn how to change a CSS property dynamically using data binding.

We haven't gone very deep into this topic; but here are some tips to point you in the right direction:

You'll need to create either a class or a CSS property and bind it to a condition.
You'll have to create a method that changes the class or the property and trigger it via a button click. This isn't something we've covered yet, but try using online resources to work out how to do it. Here are some links to help point you in the right direction:
Vue.js - Class and style binding
Stack Overflow -->


<!-- HTML HERE -->
<template>

<!-- The template defines a div element with the class "container". The class of the div is bound to a colorVariableBool using a ternary operator. If colorVariableBool is true, the class "color-red" is added to the div, otherwise the class "color-orange" is added. The template also contains a button element with an event handler "v-on:click" that triggers the changeColorOne function when clicked. -->

  <div
    class="container"
    :class="colorVariableBool ? 'color-red' : 'color-orange'">
    <p>Toggle el color del background de este elemento usando un ternario</p>
    <!-- <button v-on:click="changeColorOne">Click me - using a function</button> -->
    <button v-on:click="colorVariableBool = !colorVariableBool">
      Click me - inline
    </button> 
  </div>

</template>

<!-- JS HERE -->

<!-- The script section declares a "colorVariableBool" reference with an initial value of true. The changeColorOne function inverts the value of colorVariableBool and logs the new value to the console when it is called. -->

<script setup>
import { ref, reactive } from "vue";

const colorVariableBool = ref(true);

// funct que se encarge de cambiar el valor booleano de la variable coolorVariableBool
const changeColorOne = () => {
  // colorVariableBool
  //   console.log(colorVariableBool.value);
  //     console.log(myName.value);
  colorVariableBool.value = !colorVariableBool.value;
//   console.log("I have Been Clicked");
//   console.log(colorVariableBool.value);
};
</script>

<style scoped>
/* container general */
.container {
  min-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.color-red {
  background-color: red;
}
.color-orange {
  background-color: orange;
}
</style>




