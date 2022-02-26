import nohop from '.';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

let tracker = 0;
describe('nohop', () => {
  const f = () => {
    tracker = 2;
  };
  it('should debounce', async () => {
    nohop(f, 100)();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 100);
    jest.runAllTimers();
    expect(tracker).toEqual(2);
  });
});
