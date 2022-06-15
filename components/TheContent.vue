<template>
  <a-layout-content style="margin: 0 16px">
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>這裡是</a-breadcrumb-item>
      <a-breadcrumb-item>路徑item</a-breadcrumb-item>
    </a-breadcrumb>
    <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
      <Nuxt/>
    </div>
  </a-layout-content>
</template>

