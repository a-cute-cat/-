import type { App } from "vue"
import XtxSkeleton from "@/components/skeleton/index.vue"
import XtxCarousel from "@/components/carousel/index.vue"
import XtxMore from "@/components/more/index.vue"
import { useIntersectionObserver } from "@vueuse/core"
import defaultImg from '@/assets/images/200.png'
export default {
	install(app: App) {
		app.component("XtxSkeleton", XtxSkeleton)
		app.component("XtxCarousel", XtxCarousel)
		app.component("XtxMore", XtxMore)
        app.directive('lazy', {
            mounted(el: HTMLImageElement, {value}) {
                const {stop} = useIntersectionObserver(el, ([{isIntersecting}]) => {
                    if (isIntersecting) {
                        stop()
                        el.src = value
                        el.onerror = function() {
                            el.src = defaultImg
                        }
                    }
                })
            }
        })
	},
}
