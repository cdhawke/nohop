
export interface DebounceProps {
  callback: Function;
  wait: number;
}

const debounce = ({callback, wait = 300}: DebounceProps) => {
  let timer: number;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => { callback.apply(this, args); }, wait);
  };
}

export default debounce;
