import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // ?是可选的
    // meta属性包含的内容
    title?: string,
    requiresAuth?: boolean
    keepAlive?: boolean
  }
}

declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';