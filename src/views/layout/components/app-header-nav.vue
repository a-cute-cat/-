<script lang="ts" setup name="AppHeaderNav">
    import useStore from "@/store/index"
    const {category} = useStore();
    category.getAllCategory()

</script>

<template>
	<ul class="app-header-nav">
		<li class="home"><RouterLink to="/">首页</RouterLink></li>
		<li v-for="item,index in category.list" :key="index" @mouseenter="category.show(item.id)" @mouseleave="category.hide(item.id)">
      <Router-link :to="`/category/${item.id}`" @click="category.hide(item.id)">{{ item.name }}</Router-link>
			<div class="layer" :class="{open: item.open}">
				<ul>
					<li v-for="sub in item.children" :key="sub.id">
						<Router-link :to="`/category/sub/${sub.id}`" @click="category.hide(item.id)">
              <img
								:src="sub.picture"
								alt=""
							/>
							<p>{{sub.name}}</p>
            </Router-link>
					</li>
				</ul>
			</div>
		</li>
	</ul>
</template>

<style lang="less" scoped>
.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;
  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
      &:hover {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
    }
    // 新增样式
    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
      // > .layer {
      //   height: 132px;
      //   opacity: 1;
      // }
    }
  }
}
// 新增样式
.layer {
  width: 1240px;
  background-color: #fff;
  position: absolute;
  left: -200px;
  top: 56px;
  height: 0;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0 5px #ccc;
  transition: all 0.2s 0.1s;
  &.open {
    height: 132px;
    opacity: 1;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    height: 132px;
    li {
      width: 110px;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
      }
      p {
        padding-top: 10px;
      }
      &:hover {
        p {
          color: @xtxColor;
        }
      }
    }
  }
}
</style>
