<template>
  <div class="adsense-box py-12">
    <ins
      class="adsbygoogle"
    ></ins>
  </div>
</template>

<script>
import { onMounted } from '@nuxtjs/composition-api'

export default {
  name: 'Ads',
  setup(_, { root }) {
    onMounted(() => {
      root.$nextTick(() => {
        try {
          ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        } catch (error) {
          console.error('Adsbygoogle error is ', error)
        }
      })
    })
  },
}
</script>

<style scoped lang="scss">
.adsense-box {
  height: 90px;
  width: 100%;
}
</style>