const noHop = (func: (...args: any[]) => void, wait: number) => {
  let timeout: NodeJS.Timeout;
  const debounce = (...args: any[]) => {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      return func(...args);
    }, wait);
  };

  debounce.clear = () => {
    timeout && clearTimeout(timeout);
  };
  return debounce;
};

export default noHop;
