<template lang="pug">
    div
        nav.fixed.w-full.top-0.h-14.border-b.w-full.bg-gray-100(style="z-index: 9999;")
            .w-full.max-w-7xl.mx-auto.flex-none.flex.items-center.justify-between.h-full.px-3(class="md:px-6 lg:px-10 xl:px-16")
                nuxt-link.logoArea(to="/")
                    img.h-8(src="/logo_sm.png")
                .searchArea(class="w-4/6")
                    search
                .iconArea
                    a(href="https://github.com/archive-discord/archive-docs")
                        i.fab.fa-github
        
        .h-16
        
        .max-w-7xl.mx-auto.mb-5.px-3(class="md:px-6 lg:px-10 xl:px-16")
            nuxt

            footer.border-t.w-full.mx-auto.flex.items-center.py-5.justify-center.bottom-0.max-w-7xl.px-3(class="md:px-6 lg:px-10 xl:px-16") Designed by @BawAppie
</template>

<script>
export default {
    
}
</script>

<style lang="postcss" scoped>

</style>