<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" />
            <div class="banner-info">
                <div class="banner-title">
                    追忆昔日万园之园
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe692;</span> 39
                </div>
            </div>
        </div>
        <common-gallary 
            :imgs="imgs" 
            v-show="showGallary"
            @close="handleGallaryClose"
        ></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name: 'DetailBanner',
    data() {
        return {
            imgs: ['https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1595590570&di=1cdc12ee10b6ff31f0d3fdf9f3de3ba7&src=http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595600660447&di=a5dae25197e12dfdf3e494f24129916b&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F56%2F12%2F01300000164151121576126282411.jpg'],
            showGallary: false
        }
    },
    methods: {
        handleBannerClick() {
            this.showGallary = true
        },
        handleGallaryClose() {
            this.showGallary = false
        }
    },
    components: {
        CommonGallary
    }
}
</script>

<style lang='stylus' scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            line-height .6rem
            color #fff
            background-image linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem
            .banner-number
                height .32rem
                padding 0 .4rem
                margin-top .14rem
                line-height .32rem
                border-radius .2rem
                background rgba(0, 0, 0, 0.8)
                font-size .24rem
                .banner-icon
                    font-size .24rem

</style>