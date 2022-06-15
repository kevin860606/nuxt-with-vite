<template>
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
    <a-sub-menu key="sub2">
		<span slot="title"><a-icon type="user" /><span>Form</span></span>
		<a-menu-item key="5">
			<nuxt-link to="/form">表單一</nuxt-link>
			</a-menu-item>
		</a-sub-menu>
	</a-menu>
	</a-layout-sider>
</template>

