<template>
  <div>
    这是父组件{{value}}
    <son @watchchange="watchchange"></son>
  </div>
</template>
<script>
import son from "./son.vue";
export default {
  components: {
    son
  },
  data() {
    return {
      value: []
    };
  },
  methods: {
    watchchange(newVal) {
      this.value = newVal;
    }
  }
};
</script>

