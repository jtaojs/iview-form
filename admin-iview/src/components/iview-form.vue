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
          <Option v-for="(opt,i) in item.optList" :key="i" :label="opt.label" :value="opt.value" :disabled="opt.disabled"></Option>
        </Select>
        <DatePicker v-else v-model="item.value" :type="item.type" :format="item.format"></DatePicker>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formDynamic')">Submit</Button>
        <Button @click="handleReset('formDynamic')" style="margin-left: 8px">Reset</Button>
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

