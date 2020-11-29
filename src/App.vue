<template>
    <v-app>
      <navbar></navbar>
      <router-view></router-view>
      <my-footer></my-footer>
    </v-app>
</template>

<script>
  import navbar from './components/navbar/navbar';
  import myFooter from './components/footer/footer';

  export default {
  name: 'App',
  components: {
    navbar,
    myFooter
  }
}
</script>

<style src="./main.scss" lang="scss"></style>
