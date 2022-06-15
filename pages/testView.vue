<template>
  <div>
    <div>
      <a-select default-value="漢堡" style="width: 120px;">
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
	async  asyncData({$order}) {
	const eee= 1;
	const qwe = await $order.list() ;
	console.log(qwe);
	return {eee};
  },
  data() {
    return {
      value: 1,
      menu:[],
    };
  },
  mounted() {
  },
}
</script>
