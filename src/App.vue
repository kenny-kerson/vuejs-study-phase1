<template>
  <div class="container">
    <nav>
        <p></p>
        <Navigation></Navigation>
    </nav>
    <section>
<!--      <TestExecution v-if="currentComponent == 'TestExecution'"></TestExecution>-->
<!--      <TestHistory v-if="currentComponent == 'TestHistory'"></TestHistory>-->
        <p></p>
        <component :is="this.$store.state.currentComponent"></component>
    </section>
    <footer>
        <div class="container">copyright 2019 @kenny</div>
    </footer>
  </div>
</template>

<script>
  // import eventBus from './EventBus'

  import TestExecution from './components/TestExecution'
  import TestHistory from './components/TestHistory'
  import Navigation from './components/Navigation'

  export default {
    name: "App",
    components: {
        TestExecution,
        TestHistory,
        Navigation
    },
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style>
</style>
