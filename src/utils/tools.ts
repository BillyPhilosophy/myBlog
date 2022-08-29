/**
 * 自行封装一个节流函数
 * @param time 节流时间
 * @param fn 节流函数
 */
 export const throttle = (time: number, fn: () => any) => {
  let flag = true;
  return function (...args: any) {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, time);
  };
};
/**
 * 自行封装一个防抖
 * @param time 防抖时间
 * @param fn 防抖函数
 */
export const debounce = (time: number, fn: () => any) => {
  const timmer = null;
  return function (...args: any) {
    clearTimeout(timmer);
    setTimeout(() => {
      fn.apply(this, args);
    }, time);
  };
};
