<template>
  <div>
    <div>
      <a-select default-value="漢堡" style="width: 120px">
        <a-select-option value="漢堡">
          漢堡
        </a-select-option>
        <a-select-option value="薯條">
          薯條
        </a-select-option>
        <a-select-option value="主席">
          小熊維尼
        </a-select-option>
    </a-select>
    </div>
    <div style="padding:10px 8px;">
      數量 :
    <a-input-number id="inputNumber" v-model="value" :min="0" style="margin-left: 1px; width:70px;" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'WinniePage',
  async asyncData({app}) {
    const asd = await app.$axios.$get(`https://reqres.in/api/user/2`);
    console.log(asd);
    return { asd }
  },
  data() {
    return {
      value: 1,
      menu:[]
    };
  },
  mounted() {
  },
}
</script>
