<template>
    <div>
        <detail-banner 
            :sightName="sightName" 
            :bannerImg="bannerImg"
            :bannerImgs="gallaryImgs"
        ></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data() {
        return {
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
            list: [],
            idList: []
        }
    },
    methods: {
        getDetailInfo() {
            axios.get('/api/detail.json?', {
                params: {
                    id: this.$route.params.id
                }
            }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc(res) {
            res = res.data
            if( res.ret && res.data ) {
                const data = res.data
                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.gallaryImgs = data.gallaryImgs
                this.list = data.categoryList
            }
        }
    },
    mounted() {
        this.getDetailInfo()
        this.idList.push(this.$route.params.id) // idList临时缓冲变量数组
    },
    activated() { // 每次组件被激活就调用
        const newId = this.$route.params.id
        if(this.idList.indexOf(newId) > -1) { //判断当前id不在IdList中，发起请求
            return
        } else {
            this.getDetailInfo();
            this.idList.push(newId) 
        }      
    }
}
</script>

<style lang='stylus' scoped>
    .content
        height 50rem
</style>