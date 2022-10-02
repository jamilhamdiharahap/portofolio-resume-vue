<template>
  <div :class="`${theme ? 'dark' : 'ligth'} `">
    <Header :theme="theme" :change-theme="()=> this.theme = !this.theme" />
    <main>
      <router-view />
    </main>
    <Footer :theme="theme" />
  </div>
</template>


<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  components: {
    Header,
    Footer
  },

  data: () => {
    return {
      theme: true
    }
  },

  methods: {
    changeTheme() {
      this.theme = !this.theme
    }
  }
}
</script>
