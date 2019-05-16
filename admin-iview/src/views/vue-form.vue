<template>
  <div class="geo-form">
    <iview-form :formDynamic="formDynamic" @submitForm="submitForm"></iview-form>
  </div>
</template>
<script>
import IviewForm from "@/components/iview-form.vue"; //引入表达组件@/components/form/geo-form
export default {
  components: {
    IviewForm
  },
  data() {
    return {
      //传给子组件的数据
      formDynamic: {
        inline: false, //表单配置,是否为line样式  返回值boolean
        labelWidth: 80, //label与input select datepicker输入框的间隔
        labelPositon: "left", //label出现的位置 默认为right
        items: [
          {
            value: "张靓颖", //formitem的默认值
            prop: "name", //formitem的prop,用于key=value传值 必须
            type: "input", //formitem加载表单项内容部 必须(暂时只有input select date)
            subType: "text", //Input组件的类型  (type为input是必选) 值可为password  textarea等
            label: "姓名", //formitem输入框前提示文字
            size: "small", //表单项尺寸可为small large
            placeholder: "请输入姓名", //表单项提示文字
            clearable: false, //点击清楚
            disabled: false, //禁用
            readonly: false, //只读
            maxlength: 80, //type为input,最大输入字符
            prefix: "ios-contact", //type为input 输入框前icon'
            suffix: "ios-search", //type为input 输入框后icon'
            autofocus: false, //自动获取鼠标焦点
            rules: {
              //formitem验证规则
              required: true, //必填,true是采取验证;false时不进行验证
              message: "姓名不能为空", //验证不通过,提示消息
              trigger: "blur" //触发验证方式
            }
          },
          {
            value: "25", //默认值
            type: "input",
            prop: "age",
            label: "年龄",
            rules: {
              required: true,
              message: "年龄不能为空",
              trigger: "blur"
            }
          },
          {
            type: "select", //select类型
            prop: "yyh", //formitem的prop,用于key=value传值 必须
            value: "zgyd", //默认值,
            label: "运营商", //formitem输入框前提示文字
            multiple: false, //是否支持多选
            disabled: false, //是否禁止选择
            clearable: false, //是否可清除
            size: "small", //表单项大小
            placeholder: "请选择", //提示性文字
            prefix: "ios-contact", //表单控件内icon
            optList: [
              //select选择项
              { label: "中国移动", value: "zgyd", disabled: true },//是否禁止选择
              { label: "中国电信", value: "zgdx" }
            ],
            rules: {
              //验证规则
              required: true,
              message: "运营商不能为空",
              trigger: "blur"
            }
          },
          {
            type: "daterange", //date类型
            prop: "date",
            subtype: "date",
            label: "开始时间",
            value: ["2016-01-01", "2016-02-15"], //默认值
            format: "yyyy-MM-dd", //时间格式
            rules: {
              //验证规则
              type: "array",
              required: true,
              fields: {
                0: { type: "date", required: true, message: "请输入起止日期" },
                1: { type: "date", required: true, message: "请输入起止日期" }
              }
            }
          }
        ]
      }
    };
  },
  methods: {
    //提交,查询等方法
    submitForm(formValue) {
      //formValue:获取的表单内容  Object类型{prop:value,...}
      console.log(formValue);
    }
  }
};
</script>
<style lang="scss">
.geo-form {
  width: 300px;
  margin-top: 50px;
}
</style>
