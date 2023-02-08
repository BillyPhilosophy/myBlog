import type {Ref} from 'vue'
/**
 * 
 */
export const useMousePointer = (x:Ref<number>,y:Ref<number>,offset:number) => {
  const xPos = computed(() => {
    let res = 0;
    const halfVal = window.innerWidth / 2;
    res = x.value - halfVal;
    return res / offset;
  });
  const yPos = computed(() => {
    let res = 0;
    const halfVal = window.innerHeight / 2;
    res = y.value - halfVal;
    return res / offset;
  });
  return {
    xPos,
    yPos
  };
}