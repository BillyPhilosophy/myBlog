import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'


// https://vitejs.dev/config/
export default defineConfig(({mode})=>{
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd())
  };
  return{
    plugins: [
      vue(),
      AutoImport({
        dts: true,
        imports: ['vue', 'vue-router'],
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        dirs: ['src/components'],
        extensions: ['vue'],
        dts: true,
        resolvers: [ElementPlusResolver()],
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]'
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
          javascriptEnabled: true,
          additionalData: `@import "@/assets/style/mixins.scss";`
        }
      },
      // postcss: {
      //   plugins: [require('autoprefixer'), require('tailwindcss')]
      // }
    },
    define: {
      'process.env': process.env
    },
    server: {
      port:5002,
      proxy:{
        '/api': {
          target: process.env.VITE_BASE_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        }
      }
    }
  }
})
