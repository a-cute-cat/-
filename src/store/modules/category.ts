import {defineStore} from 'pinia'
import {reqCategory} from '@/api/index'
import {CategoryItem} from '@/types/data'
import {topCategory} from '@/store/constants'

const defaultCategory = topCategory.map(item => {
    return {name: item}
})
export default defineStore('category', {
    state() {
        return {
            list: defaultCategory as CategoryItem[]
        }
    },
    actions: {
        async getAllCategory() {
            const res = await reqCategory();
            // console.log(res.data);
            if (res.status == 200) {
                res.data.result.forEach(item => item.open = false)
                this.list = res.data.result;
            }
        },
        show(id:string) {
            const itemObj = this.list.find(item => item.id === id);
            itemObj!.open = true;    // !表示非空断言，?只能读取不能赋值
        },
        hide(id:string) {
            const itemObj = this.list.find(item => item.id === id);
            itemObj!.open = false;    // !表示非空断言，?只能读取不能赋值
        }
    },
    getters: {}
})