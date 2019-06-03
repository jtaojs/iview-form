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
            value: "于谦", //formitem的默认值
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
            value: "45", //默认值
            type: "input",
            prop: "age",
            label: "年龄",
            size: "small",
            rules: {
              required: true,
              //type:'number',
              message: "年龄不能为空",
              trigger: "blur"
            }
          },
          {
            type: "select", //select类型
            prop: "yyh", //formitem的prop,用于key=value传值 必须
            value: "zgyd", //默认值,
            label: "工作单位", //formitem输入框前提示文字
            multiple: false, //是否支持多选
            disabled: false, //是否禁止选择
            clearable: false, //是否可清除
            size: "small", //表单项大小
            placeholder: "请选择", //提示性文字
            prefix: "ios-contact", //表单控件内icon
            optList: [
              //select选择项
              { label: "德云社", value: "zgyd", disabled: true }, //是否禁止选择
              { label: "青曲社", value: "zgdx" }
            ],
            rules: {
              //验证规则
              required: true,
              message: "运营商不能为空",
              trigger: "blur"
            }
          },
          {
            type: "treeSelect", //select类型
            prop: "orgName",
            label: "组织机构",
            value: null,
            multiple: false,
            index: "INDEX",
            valueConsistsOf: "LEAF_PRIORITY",
            results: true,
            showCount: true,
            branchNodes: true,
            placeholder: "请选择分公司",
            num: 1,
            options: [
              {
                id: "a",
                label: "河北省天然气有限公司",
                children: [
                  {
                    id: "b",
                    label: "管道分公司"
                  },
                  {
                    id: "c",
                    label: "沙河分公司"
                  },
                  {
                    id: "d",
                    label: "清河分公司"
                  },
                  {
                    id: "e",
                    label: "涞源分公司"
                  },
                  {
                    id: "f",
                    label: "临西分公司"
                  },
                  {
                    id: "g",
                    label: "晋州分公司"
                  },
                  {
                    id: "h",
                    label: "辛集分公司"
                  }
                ]
              }
            ]
          },
          {
            type: "daterange", //date类型
            prop: "date",
            subtype: "date",
            label: "开始时间",
            size: "small",
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
          },
          {
            type: "radio", //是否加载radio
            value: "1", //默认值
            label: "性别", //表单项前提示文字
            prop: "gender", //formitem的prop
            gender: [
              //单选项
              { gen: "男", value: "1", type: "logo-apple" }, //type:gen前的icon
              { gen: "女", value: "0", type: "logo-apple" },
              { gen: "保密", value: "2", type: "logo-apple" }
            ]
          },
          {
            type: "checkbox",
            value: ["1", "2", "3"],
            label: "爱好",
            prop: "habby",
            checks: [
              { label: "抽烟", value: "1", type: "logo-apple" },
              { label: "喝酒", value: "2", type: "logo-apple" },
              { label: "烫头", value: "3", type: "logo-apple" }
            ]
          },
          {
            type: "slider", //表单项类型
            value: 20, //默认值
            label: "进度条", //提示性文字
            prop: "progress", //formitem的prop
            min: 0, //最小值
            max: 88, //最大值
            range: false, //是否开启双向滑动
            step: 1, //滑动的步长  建议能被 max-min整除
            disabled: false, //禁用滑块
            showStops: true, //是否显示刻度 非密集时建议使用
            showTip: "hover", //提示性文字出现的方式
            inputSize: "small", //输入框的大小
            showInput: true //是否展示输入框,单滑块时使用
          }
        ],
        operations: [
          {
            shape: "circle",
            vertical: false,
            size: "large",
            typeSubmit: "primary",
            typeReset: "error",
            size: "small",
            labelSubmit: "Submit",
            labelReset: "Reset",
            sizeSubmit: "small",
            sizeReset: "small",
            ghostSubmit: true,
            ghostReset: true,
            longSubmit: false,
            longReset: false,
            disabledSubmit: false,
            disabledReset: false,
            iconSubmit: "ios-search",
            iconReset: "ios-refresh"
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
