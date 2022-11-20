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
export default {
  mounted() {
    try {
      var isAdsenseNotLoaded =
        !adsbygoogle || typeof adsbygoogle.loaded === "undefined";
      if (isAdsenseNotLoaded) {
        (adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.log(e, "Failed Adsense");
    }
  },
};
</script>