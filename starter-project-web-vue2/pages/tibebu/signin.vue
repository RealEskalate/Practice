<template>
  <v-container>
    <TibebuSignInForm />
  </v-container>
</template>

<script>
import TibebuSignInForm from '../../components/tibebu/TibebuSignInForm.vue'

export default {
  name: 'SignInForm',
  components: {
    TibebuSignInForm,
  },
}
</script>
