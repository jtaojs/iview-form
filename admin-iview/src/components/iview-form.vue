<template>
  <div id="geo-sel">
    <Form
      ref="formDynamic"
      :model="formDynamic"
      :label-width="formDynamic.labelWidth"
      :inline="formDynamic.inline"
      :label-position="formDynamic.labelPosition"
    >
      <FormItem
        v-for="(item, index) in formDynamic.items"
        :key="index"
        :label="item.label"
        :prop="'items.'+index+'.value'"
        :rules="item.rules"
      >
        <Input
          v-model="item.value"
          v-if="item.type==='input'"
          :type="item.subType"
          :prefix="item.prefix"
          :size="item.size"
          :placeholder="item.placeholder"
          :clearable="item.clearable"
          :readonly="item.readonly"
          :disabled="item.disabled"
          :suffix="item.suffix"
        />
        <Select
          v-else-if="item.type==='select'"
          v-model="item.value"
          :multiple="item.mulpitle"
          :disabled="item.disabled"
          :clearable="item.clearable"
          :size="item.size"
          :placeholder="item.placeholder"
          :prefix="item.prefix"
        >
          <Option
            v-for="(opt,i) in item.optList"
            :key="i"
            :label="opt.label"
            :value="opt.value"
            :disabled="opt.disabled"
          ></Option>
        </Select>
        <DatePicker
          v-else-if="item.type==='daterange'"
          v-model="item.value"
          :type="item.type"
          :format="item.format"
          :placeholder="item.placeholder"
          :placement="item.placememt"
          :size="item.size"
          :disabled="item.disabled"
          :clearable="item.clearable"
          :readonly="item.readonly"
          :separator="item.separator"
        ></DatePicker>
        <RadioGroup v-else-if="item.type==='radio'" v-model="item.value">
          <Radio v-for="(sex,i) in item.gender" :key="i" :label="sex.value">
            <Icon :type="sex.type"></Icon>
            <span>{{sex.gen}}</span>
          </Radio>
        </RadioGroup>
        <CheckboxGroup v-else-if="item.type==='checkbox'" v-model="item.value">
          <Checkbox v-for="(check,i) in item.checks" :key="i" :label="check.value">
            <Icon :type="check.type"></Icon>
            <span>{{check.label}}</span>
          </Checkbox>
        </CheckboxGroup>
        <Slider
          v-else
          v-model="item.value"
          :show-input="item.showInput"
          :min="item.min"
          :max="item.max"
          :range="item.range"
          :step="item.step"
          :disabled="item.disabled"
          :show-stops="item.showStops"
          :show-tip="item.showTip"
          :input-size="item.inputSize"
        ></Slider>
      </FormItem>
      <FormItem>
        <ButtonGroup
          v-for="(opra, i) in formDynamic.operations"
          :key="i"
          :shape="opra.shape"
          :vertical="opra.vertical"
          :size="opra.size"
        >
          <Button
            @click="handleSubmit('formDynamic')"
            :type="opra.typeSubmit"
            :size="opra.sizeSubmit"
            :ghost="opra.ghostSubmit"
            :long="opra.longSubmit"
            :disabled="opra.disabledSubmit"
            :icon="opra.iconSubmit"
          >{{opra.labelSubmit}}</Button>
          <Button
            @click="handleReset('formDynamic')"
            :size="opra.sizeReset"
            :type="opra.typeReset"
            :ghost="opra.ghostReset"
            :long="opra.longReset"
            :disabled="opra.disabledReset"
            :icon="opra.iconReset"
          >{{opra.labelReset}}</Button>
        </ButtonGroup>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  props: {
    formDynamic: {
      type: Object,
      require: true
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          //console.log(valid)
          //this.$Message.success("Success!");
          var formValue = {};
          this.formDynamic.items.forEach((val, i) => {
            formValue[val.prop] = val.value;
          });
          //console.log(formValue);
          this.$emit("submitForm", formValue);
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>

