interface NoHop {
  /**
   * generic default function that receives an arbitrary number of arguments
   * to be executed after a specific amount of time.
   *
   * @param {...any[]} args arguments to be invoked
   * @memberof NoHop
   */
  (...args: any[]): void;
  /**
   * cancels any existing debounced method that is waiting to resolve.
   *
   * @memberof NoHop
   */
  cancel(): void;
}

/**
 * noHop is the default function which implements debounce, and attaches
 * the subfunction for cancelling invocations
 *
 * @param {(...args: any[]) => void} func any function with or without arguments which will be debounced
 * @param {number} [wait=300] the number of milliseconds to wait before invoking the `func` param
 *
 * @example
 *
 * ```tsx
 * import debounce from 'nohop'
 *
 * const search = async () => {
 *   const response = await fetch(...);
 *   const json = await response.json();
 *   console.log(json);
 * }
 *
 * const debouncedSearch = debounce(search);
 *
 * return <input onClick={debouncedSearch} />
 * ```
 *
 * @return {*}  {NoHop}
 */
const noHop = (func: (...args: any[]) => void, wait = 300): NoHop => {
  let timeout: NodeJS.Timeout;

  /**
   * debounce is the main function
   *
   * @param {...any[]} args any args that were passed through the initial `noHop` function call.
   */
  const debounce = (...args: any[]) => {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      return func(...args);
    }, wait);
  };

  debounce.cancel = () => {
    timeout && clearTimeout(timeout);
  };

  return debounce;
};

export default noHop;
