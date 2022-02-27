// import nohop from '.';

// jest.useFakeTimers();
// jest.spyOn(global, 'setTimeout');

// let tracker = 0;

// const f = jest.fn((p?: number) => {
//   if (!p) {
//     tracker = tracker + 2;
//     return;
//   }
//   tracker = tracker + p;
// });

// describe('nohop', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//     tracker = 0;
//   });

//   it('should invoke setTimeout', async () => {
//     nohop(f, 100)();
//     expect(setTimeout).toHaveBeenCalledTimes(1);
//     expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 100);
//     jest.runAllTimers();
//     expect(tracker).toEqual(2);
//   });

//   it('should pass function arguments', async () => {
//     nohop(() => f(5), 100)();
//     jest.runAllTimers();
//     expect(tracker).toEqual(5);
//   });

//   it('should debounce properly', async () => {
//     const debouncedF = nohop(f, 100);

//     setTimeout(debouncedF, 50);
//     setTimeout(debouncedF, 100);
//     setTimeout(debouncedF, 150);

//     jest.runAllTimers();

//     expect(f).toHaveBeenCalledTimes(1);
//   });

//   it('should debounce properly', async () => {
//     const debouncedF = nohop(f, 100);

//     debouncedF();
//     setTimeout(debouncedF, 50);
//     setTimeout(debouncedF, 100);
//     setTimeout(debouncedF, 150);

//     jest.runAllTimers();

//     expect(f).toHaveBeenCalledTimes(1);
//   });

//   it('should call twice when timeout expires', async () => {
//     const debouncedF = nohop(f, 100);

//     debouncedF();
//     setTimeout(debouncedF, 101);

//     jest.runAllTimers();

//     expect(f).toHaveBeenCalledTimes(2);
//   });
// });
