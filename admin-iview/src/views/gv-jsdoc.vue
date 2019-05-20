<template>
  <div class="gv-jsdoc"></div>
</template>

<script>
/**
 * 组件简要描述
 */

// eslint-disable-next-line import/no-unresolved
import "xxxx";

export default {
  name: "gv-jsdoc",
  data() {
    return {
      /**
       * 参数含义的描述（前可加@description）
       * @private
       * （私有的）只能在当前组件的对象方法中才能直接访问
       */
      a: 1,
      /**
       * 参数含义的描述（前可加@description）
       * @protected
       * （受保护的）只能在当前组件和子组件的对象方法中访问
       */
      b: 2,
      /**
       * 参数含义的描述（前可加@description）
       * @public
       * （公开的）在有对象的前提下，任何地方都可以直接访问
       */
      c: 3,
      /**
       * @readonly 此值不可修改
       * @enum {number} 表明此为数值型枚举值
       */
      d: {
        one: 1,
        two: 2,
        three: 3
      }
    };
  },
  mounted() {
    /**
     * @event gv-jsdoc#xxxx 组建名#抛出事件名称
     * @type {object} 传出参数类型
     * @property {number} 传出参数的类型和说明
     */
    this.$emit("xxxx", {
      test: 1
    });
  },
  methods: {
    /**
     * @private
     * @param a 参数说明
     * @param b 参数说明
     * @param c 参数说明
     * @return {number} 若有返回值，类型和说明
     * @example this.xxxx(1,2,3) 方法调用示例
     */
    xxxx: function(a, b, c) {
      a = 1;
      b = 2;
      const test = a + b + c;
      test.toString();
      return a;
    }
  }
};
</script>

<style scoped="less">
.gv-jsdoc {
  
}
</style>