import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 是可选的
    // isAdmin?: boolean
    // 每个路由都必须声明
    requiresAuth: boolean
    title: String
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