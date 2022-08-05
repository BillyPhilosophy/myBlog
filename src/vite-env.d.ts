/// <reference types="vite/client" />
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
