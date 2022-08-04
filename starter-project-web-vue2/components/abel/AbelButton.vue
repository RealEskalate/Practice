<template>
  <button @click="$emit('toggle-task')">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String,
  },
}
</script>

<style scoped>
button {
  display: block;
  margin-left: 1rem;
  padding: 0.5rem;
  text-transform: uppercase;
  border: 0.5px solid gray;
  border-radius: 5px;
  transition: 0.3s ease;
  background-color: lightgrey;
  color: #2c3e50;
  font-weight: 900;
  cursor: pointer;
}

button:hover {
  border: 1px solid grey;
  background-color: #6a9c58;
  color: #2c3e50;
}
</style>
