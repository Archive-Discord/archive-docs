<template lang="pug">
    div
        .title.my-10.text-center
            h1.text-3xl.font-bold(v-if="!user") Archive Documents
            h1.text-3xl.font-bold(v-else) {{user.user.username}}님 Archive Documents에 오신걸 환영합니다!
            h2.text-xl.font-medium.font-gray-800.mt-3 Archive 관련 콘텐츠 들의 이용 가이드를 탐색하고, 문제를 해결하세요.
        hr

        .firstViewContent.my-10.flex.flex-col-reverse.px-6(class="lg:flex-row")
            .flex-grow
                h1.text-2xl.font-bold 자주 찾는 질문
                h2.text-lg.font-gray-800.my-3 Archive 관련 콘텐츠 이용 중 많은 고객분들이 자주 질문해주셨던 질문들을 모았습니다.
                p
                    .tag.inline.bg-gray-200.p-1.rounded-lg.text-gray-500 Archive
                    .tag.inline.bg-gray-200.p-1.rounded-lg.text-gray-500 FAQ
                    .tag.inline.bg-gray-200.p-1.rounded-lg.text-gray-500 Dashboard
                    .tag.inline.bg-gray-200.p-1.rounded-lg.text-gray-500 자주 찾는 질문
                p.my-3
                    nuxt-link(to="/category/faq")
                        button.w-full.flex-none.bg-gray-900.text-white.leading-6.py-2.px-3.border.border-transparent.rounded-xl.transition.duration-200(class="sm:w-auto hover:bg-gray-700 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none focus:ring-2")
                            | 탐색하기
                            i.fal.fa-arrow-right.ml-2
            img.w-full.h-auto.overflow-hidden.rounded-md.border.shadow-lg(src="~/assets/img/index/faq_left.png")
        
        hr

        .secondGrid.my-10.grid.grid-cols-1(class="lg:grid-cols-2")
            .px-5
                img.w-full.h-auto.overflow-hidden.rounded-md.border.shadow-lg.mb-2.mt-2(src="~/assets/img/index/battlebot-top.png")
                div
                    h1.text-2xl.font-bold 배틀이 대시보드 운영 가이드
                    h2.text-lg.font-gray-800.my-3 배틀이에서 대시보드 활용을 위한 꿀팁을 준비했습니다.
                    p
                        .tag.inline.bg-gray-200.p-1.rounded-lg.text-gray-500 Discord
                        .tag.inline.bg-gray-200.p-1.rounded-lg.text-gray-500 Battlebot
                        .tag.inline.bg-gray-200.p-1.rounded-lg.text-gray-500 Dashboard
                        .tag.inline.bg-gray-200.p-1.rounded-lg.text-gray-500 Verify
                    p.my-3
                        nuxt-link(to="/category/tutorials/battlebot")
                            button.w-full.flex-none.bg-gray-900.text-white.leading-6.py-2.px-3.border.border-transparent.rounded-xl.transition.duration-200(class="sm:w-auto hover:bg-gray-700 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none focus:ring-2")
                                | 탐색하기
                                i.fal.fa-arrow-right.ml-2
            .px-5
                img.w-full.h-auto.overflow-hidden.rounded-md.border.shadow-lg.mb-2.mt-2(src="~/assets/img/index/tns-bot-top.png")
                div
                    h1.text-2xl.font-bold TNS 봇으로 욕설 검열하기
                    h2.text-lg.font-gray-800.my-3 TNS 봇의 강력한 검열 기능을 통해 서버를 관리해 보세요
                    p
                        .tag.inline.bg-gray-200.p-1.rounded-lg.text-gray-500 Discord
                        .tag.inline.bg-gray-200.p-1.rounded-lg.text-gray-500 Abusive Language
                        .tag.inline.bg-gray-200.p-1.rounded-lg.text-gray-500 Server Mange
                    p.my-3
                        nuxt-link(to="/category/tutorials/tnsbot")
                            button.w-full.flex-none.bg-gray-900.text-white.leading-6.py-2.px-3.border.border-transparent.rounded-xl.transition.duration-200(class="sm:w-auto hover:bg-gray-700 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none focus:ring-2")
                                | 탐색하기
                                i.fal.fa-arrow-right.ml-2


</template>

<script>
export default {
    name: "index-page",
    data () {
        return {
            user: null
        }
    },
    mounted () {
        this.getUser()
    },
    methods: {
        async getUser() {
            const { data } = await this.$axios.get(`https://api.archiver.me/users/@me`, {
                headers: {
                    Authorization: this.$cookies.get('Authorization')
                }
            })
            this.user = data
        }
    },
}
</script>

<style lang="postcss" scoped>
.tag + .tag {
    margin-left: 6px;
}
</style>