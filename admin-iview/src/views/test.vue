<template>
  <div class="ss">
    <VueSlideBar
      v-model="slider.value"
      :data="slider.data"
      :range="slider.range"
      :labelStyles="{ color: '#4a4a4a', backgroundColor: '#4a4a4a' }"
      :processStyle="{ backgroundColor: '#d8d8d8' }"
      @callbackRange="callbackRange"
      :isDisabled="false"
    />
    <template slot="tooltip" slot-scope="tooltip">
      <img src="static/images/rectangle-slider.svg">
    </template>
  </div>
</template>
    </VueSlideBar>
    <h2>Value: {{slider.value}}</h2>
    <h2>Label: {{rangeValue.label}}</h2>
  </div>
</template>

<script>
import VueSlideBar from "vue-slide-bar";

export default {
  data() {
    return {
      rangeValue: {},
      slider: {
        value: 45,
        data: [],
        range: []
      }
    };
  },
  mounted() {
    this.list();
  },
  methods: {
    callbackRange(val) {
      this.rangeValue = val;

      let timer = setTimeout(() => {
        console.log("起作用了");
        //this.isaa = false;
      }, 10000);
      clearTimeout(timer);
    },
    list() {
      let arr = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29
      ];
      this.slider.data = arr;
      for (var i = 0; i < arr.length; i++) {
        var obj = {};
        obj.label = arr[i];
        this.slider.range.push(obj);
      }
    }
  },
  components: {
    VueSlideBar
  }
};
</script>
<style lang="scss">
.ss {
  margin-left: 200px;
  width: 300px;
  overflow: auto;
}
</style>
