<!-- Iteration 3 | Show an element only if a particular property is set to true
One of the main reasons we use something like Vue is so we can simplify common JavaScript operations. One of the main advantages of this framework is that it allows us to display elements conditionally in a very simple way.

Let's practice this! Your challenge here is to create a boolean variable inside a Vue component, and link it to an HTML element that will only show up in your template if the condition is set to true.

We've seen the v-if and v-show properties in class today; but if you're stuck, the official documentation can be very helpful here. Also, keep in mind that the boolean value has to be defined in your <script setup>. -->


<!-- HTML HERE -->
<template>
    <h1 :class=" boolean ? 'booleanOne' : 'booleanTwo' ">
    Hello, I'm here!</h1>

</template>

<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";
const boolean = ref(true);

</script>
<!-- CSS HERE -->
<style scoped>

.booleanOne{
 color: violet;
}

.booleanTwo{
    display: none;
}

</style>