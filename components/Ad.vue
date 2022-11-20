<template>
  <div>
    <ins
      class="adsbygoogle pt-4"
      style="display: inline-block; width: 100%; height: 90px"
      data-ad-client="ca-pub-2701426579223876"
      data-ad-slot="8854969692"
    >
    </ins>
  </div>
</template>

<script>
import { onMounted } from "@nuxtjs/composition-api";
export default {
  name: "Ad",
  setup(_, { root }) {
    onMounted(() => {
      root.$nextTick(() => {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
          console.error("Adsbygoogle error is ", error);
        }
      });
    });
  },
};
</script>