import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
// const path = require("path");    //引入node的path模块
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueSetupExtend()],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    open: true
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `
          @import "@/assets/styles/variables.less";
          @import "@/assets/styles/mixins.less";
        `
      }
    }
  }
})
