<template>
	<client-only>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <TheSider/>
      <a-layout>
        <TheHeader/>
        <TheContent/>
        <TheFooter/>
      </a-layout>
    </a-layout>
  </client-only>
</template>

<script>
export default ({
  name:'DefaultLayout',
  data() {
    return {
      collapsed: false,
    };
  },
});
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>