<template>
	<client-only>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider >
        <div class="logo" />
        <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
          <a-menu-item key="1">
            <a-icon type="pie-chart" />
            首頁測試
            <nuxt-link to="/"></nuxt-link>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="user" /><span>User</span></span>
          <a-menu-item key="4">
                <nuxt-link to="/testView">測試子選單2</nuxt-link>
              </a-menu-item>
              <a-menu-item key="3">
                <nuxt-link to="/winnie">點餐頁面</nuxt-link>
              </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0" >
          <img src="/doNotOpen.png" width="50" height="50" />
          hearder我不知道要放啥
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>這裡是</a-breadcrumb-item>
            <a-breadcrumb-item>路徑item</a-breadcrumb-item>
          </a-breadcrumb>
          <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
            <Nuxt/>
          </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          這裡是footer
        </a-layout-footer>
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