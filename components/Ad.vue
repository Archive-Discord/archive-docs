<template>
   <div class='py-5 px-2'>
		<div class="z-0 mx-auto w-full text-center text-white adsense-box">
				<adsbygoogle class="ads" slot="8854969692"/>
		</div>
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

<style lang="scss" scoped>
.adsense-box {
  height: 90px;
}

.ads {
  display: inline-block;
  width: 100%;
  height: 90px;
}
</style>