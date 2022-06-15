<template>
  <div>
    <a-form-model
      ref="formRef"
      :model="formState"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-model-item  label="Activity name" prop="name">
        <a-input v-model="formState.name" type="text"/>
      </a-form-model-item>
      <a-form-model-item label="Activity zone" prop="region">
        <a-select v-model="formState.region" placeholder="please select your zone">
          <a-select-option value="shanghai">
            Zone one
          </a-select-option>
          <a-select-option value="beijing">
            Zone two
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="Activity time"  prop="date1">
          <a-date-picker  show-time type="date" placeholder="Pick a date" style="width: 100%;" @change="onChange"/><br/>
          <!-- <a-button @click="btnClick">选择日期之后点击输出当前选中时间</a-button>
          {{formState.date1}} -->
      </a-form-model-item>
      <a-form-model-item label="Instant delivery" prop="delivery">
        <a-switch v-model="formState.delivery" />
      </a-form-model-item>
      <a-form-model-item label="Activity type" prop="type">
        <a-checkbox-group v-model="formState.type">
          <a-checkbox value="1" name="type">
            Online
          </a-checkbox>
          <a-checkbox value="2" name="type">
            Promotion
          </a-checkbox>
          <a-checkbox value="3" name="type">
            Offline
          </a-checkbox>
        </a-checkbox-group>
      </a-form-model-item>
      <a-form-model-item label="Resources" prop="resource">
      <a-radio-group v-model="formState.resource">
        <a-radio value="1">
          Sponsor
        </a-radio>
        <a-radio value="2">
          Venue
        </a-radio>
      </a-radio-group>
      </a-form-model-item>
      <a-form-model-item label="Activity form" prop="desc">
        <a-input v-model="formState.desc" type="textarea" />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit">Create</a-button>
        <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import moment from 'moment';
export default {
  name: 'FormPage',
  data() {
    return {
      value: 1,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      // dateFormat:'YYYY/MM/DD',
      formState:{
        name:'',
        region:'',
        date1: '2020-06-06',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      time2:undefined,
      rules: {
        name: [
          {
            required: true,
            message: 'Please input Activity name',
            trigger: 'blur',
          },
          {
            min: 3,
            max: 5,
            message: 'Length should be 3 to 5',
            trigger: 'blur',
          },
        ],
        region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
        date1: [{ required: true, message: 'Please pick a date', trigger: 'change' }],
        type: [
          {
            type: 'array',
            required: true,
            message: 'Please select at least one activity type',
            trigger: 'change',
          },
        ],
        resource: [
          { required: true, message: 'Please select activity resource', trigger: 'change' },
        ],
        desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
      }
    };
  },
  mounted() {
    console.log(this.$moment());
  },
  methods:{
	  onSubmit(){
		  this.$refs.formRef.validate().then(() => {
			  console.log('ok')
		  })
		  .catch(error => {
          console.log('error', error);
        });
	  },
    resetForm() {
      this.$refs.formRef.resetFields();
    },
    // btnClick(){
    // // 输出当前选中时间
    // console.log(this.formState.date1,'-----');
    // // 将当前选中时间进行格式化
    // const currentPicker = this.$moment(this.formState.date1).format('YYYY-MM-DD')
    //   console.log(currentPicker)
    // //  查看格式化之后的类型
    //   console.log(typeof currentPicker)
    // },
    onChange(date, dateString) {
      const time = date
      this.formState.date1 = dateString
      console.log(time);
    },
  }
}
</script>
<style>
</style>