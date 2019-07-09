<template>
  <div>
    <header>
      <h1>UAT Automation</h1>
    </header>
    <nav>
      <Navigation></Navigation>
    </nav>
    <section>
<!--      <TestExecution v-if="currentComponent == 'TestExecution'"></TestExecution>-->
<!--      <TestHistory v-if="currentComponent == 'TestHistory'"></TestHistory>-->
<!--      <component :is="this.$store.state.currentComponent"></component>-->
        <router-view></router-view>
    </section>
    <footer>
      copyright
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
