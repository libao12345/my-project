<template>
    <div>
        <div class="title">
            热销推荐
        </div>
        <ul>
            <li class="item border-bottom" v-for="item of recommentList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    data() {
        return {
            recommentList: [{
                id: '00001',
                imgUrl: 'https://img1.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_256x160_6ae804bb.jpg',
                title: '八达岭长城',
                desc: '一定要看那块“不到长城非好汉”碑'
            },{
                id: '00002',
                imgUrl: 'https://img1.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_256x160_6ae804bb.jpg',
                title: '八达岭长城',
                desc: '一定要看那块“不到长城非好汉”碑'
            },{
                id: '00003',
                imgUrl: 'https://img1.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_256x160_6ae804bb.jpg',
                title: '八达岭长城',
                desc: '一定要看那块“不到长城非好汉”碑'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/mixins.styl'
    .title
        margin-top .2rem
        line-height .8rem
        background #eee
        text-text-indent .2rem
    .item
        overflow hidden
        display flex
        height 1.9rem
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex 1
            padding .1rem
            min-width 0
            .item-title
                line-height .54rem
                font-size .32rem
                ellipsis()
            .item-desc
                line-height .4rem
                color #ccc
                ellipsis()
            .item-button
                line-height .44rem
                margin-top .16rem
                background #ff9300
                padding 0 .1rem
                border-radius .06rem
                color #fff
</style>