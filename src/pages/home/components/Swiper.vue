<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides 首页轮播 -->
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>  
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {
        list: Array
    },
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true,  //循环轮播
                autoplay: 3000, //自动播放
                autoplayDisableOnInteraction: false  //触摸后重新启动自动播放
            }
        }
    },
    computed: {
        showSwiper() {
            return this.list.length
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active  // 样式穿透
        background #fff
    .wrapper
        overflow hidden
        width 100%
        height 0
        padding-bottom 31.25%
        background #eee
        .swiper-img
            width 100%
</style>