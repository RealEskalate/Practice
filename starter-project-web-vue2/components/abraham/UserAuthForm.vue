<template>
  <v-form v-model="valid" class="pa-5 py-0 mx-auto grey lighten-5 mb-6">
    <v-text-field
      v-if="hasNamee"
      v-model="userInfo.name"
      label="Name"
      :rules="[required('name')]"
    />

    <v-text-field
      v-model="userInfo.email"
      label="Email"
      :rules="[required('email'), emailFormat()]"
    />

    <v-text-field
      v-model="userInfo.password"
      label="Password"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      counter="true"
      :rules="[required('password'), minLength('password', 3)]"
      @click:append="showPassword = !showPassword"
    />

    <v-btn @click="submitForm(userInfo)">{{ buttonText }}</v-btn>
  </v-form>
</template>

<script>
import validations from '@/utils/validations'
export default {
  props: ['submitForm', 'buttonText', 'hasNamee'],
  data() {
    return {
      valid: false,
      showPassword: false,
      hasName: false,
      userInfo: {
        email: 'fakemail1781@gmail.com',
        password: 'QWER123qwer',
      },
      ...validations,
    }
  },
}
</script>

<style lang="scss" scoped></style>
