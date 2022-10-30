import {defineStore} from 'pinia'
import {reqBannerList, reqNewList, reqHotList, reqBrandList} from '@/api/index'
import {BannerItem, GoodItem, HotGoods, Brand} from '@/types/data'

export default defineStore('home', {
    state() {
        return {
            bannerList: [] as BannerItem[],
            newGoodList: [] as GoodItem[],
            hotGoodList: [] as HotGoods[],
            brandList: [] as Brand[]
        }
    },
    actions: {
        async getBannerList() {
            const res = await reqBannerList();
            if (res.status == 200) {
                // console.log(res)
                this.bannerList = res.data.result
            }
        },
        async getNewList() {
            const res = await reqNewList();
            if (res.status == 200) {
                // console.log(res)
                this.newGoodList = res.data.result
            }
        },
        async getHotList() {
            const res = await reqHotList();
            if (res.status == 200) {
                console.log(res)
                this.hotGoodList= res.data.result
            }
        },
        async getBrandList() {
            const res = await reqBrandList();
            if (res.status == 200) {
                console.log(res)
                this.brandList = res.data.result
            }
        }
    },
    getters: {}
})