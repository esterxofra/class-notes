<!-- Iteration 4 | Display a list of elements that are stored inside a component
Remember how hard for loops seemed with vanilla JavaScript? Vue does a lot of the heavy lifting when we're using them, and can allow us to display a list of elements on the screen in a much easier way.

In this exercise, you're going to practice how to use the v-for directive. The challenge has the following components:

You need to create a list of posts as a ref() inside one of your Vue components. These posts need to include the following data: title, description, and content; and you need at least three of them.
Then, you have to make the posts "show up" on your template using the v-for directive.
Again, if you're stuck here, you can always refer to the official documentation. -->

<!-- HTML HERE -->
<template>
      <ul>
        <h2>My Favorite Movies</h2>
        <li v-for="(moviesArray, indice) in myListMovies" :key="indice">
          <div>
            <p v-text="moviesArray.title"></p>
            <p v-text="moviesArray.author"></p>
            <!-- Line n. 17 is the same than line n.19: -->
            <!-- <p>{{ moviesArray.author }}</p> -->
            <p v-text="moviesArray.rate"></p>
          </div>
        </li>
      </ul>
</template>

<!-- JS HERE -->
<script setup>
    import { ref, reactive } from "vue";

    const myListMovies = reactive([
      { title: "1984", author: "George Orwell", rate: "5/5" },
      { title: "Drácula", author: "Bram Stoker", rate: "5/5" },
      { title: "El código Da Vinci", author: "Dan Brown", rate: "15/5" }
    ]);

</script>


<!-- CSS HERE -->
<style scoped></style>