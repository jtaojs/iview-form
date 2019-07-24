<template>
  <div>
    这是子组件
    {{son}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      son: []
    };
  },
  mounted() {
    var i = 0;
    setInterval(() => {
      i++;
      this.son = [
        {
          a: 1 + i
        },
        {
          b: 2 + i
        },
        {
          c: 3 + i
        }
      ];
    }, 1000);
  },
  watch: {
    son(newVal, oldVal) {
      this.$emit("watchchange", newVal);
    }
  }
};
</script>

