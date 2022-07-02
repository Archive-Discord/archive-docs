<template>
  <div class="adsense-box pb-4">
    <ins
      class="adsbygoogle"
    ></ins>
  </div>
</template>

<script>
import { onMounted } from '@nuxtjs/composition-api'

export default {
  name: 'Ad',
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