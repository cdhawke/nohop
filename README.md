[![install size](https://packagephobia.com/badge?p=nohop)](https://packagephobia.com/result?p=nohop)

[![CI](https://github.com/cdhawke/nohop/actions/workflows/ci.yml/badge.svg)](https://github.com/cdhawke/nohop/actions/workflows/ci.yml)

# nohop

Debouncing is the practice of calling a function a MAXIMUM of one time within a certain amount of time.

This is a small (<12kb) package that provides the ability to debounce a function. It also allows cancellation of the debounce after it's been started.

- [nohop](#nohop)
  - [Installation](#installation)
  - [Usage](#usage)
    - [debounce](#debounce)
    - [cancel](#cancel)
  - [Examples](#examples)
    - [Event Handlers](#event-handlers)
    - [React](#react)
    - [License](#license)

## Installation

> Note: This package was compiled for ES6. It is only meant to be used in modern browsers. Don't try an use it in IE, or anything that doesn't support arrow functions

Using npm

```sh
npm install --save nohop
```

Using yarn

```sh
yarn add nohop
```

## Usage

> Note: This function only provides the ability to debounce, and cancel. There is no way to immediately invoke functions after they've been debounced. For this functionality, try using [debounce](https://www.npmjs.com/package/debounce)

### debounce

`debounce(fn, wait = 300)` will return a function that, when called, will trigger the passed `fn` after the specified amount of `wait` time. If the debounced function is called again before the amount of `wait` time has elapsed, then the internal timer will reset, delaying the `fn` invocation.

```tsx
import debounce from 'nohop';

const originalFunction = async () => {
  const response = await fetch(...);
  const json = await response.json();
  console.log(json);
};

const debouncedFunction = debounce(originalFunction, 300);
// Use the debounced function somewhere
```

### cancel

`debounce(fn, wait = 300).cancel()` will cancel all existing invocations of `fn` (if any), resetting the timers.

```tsx
// ...
const debouncedFunction = debounce(originalFunction, 300);
debouncedFunction(); // call the function
debouncedFunction.cancel(); // immediately cancel the function, resulting in 'originalFunction' never being invoked.
```

## Examples

### Event Handlers

```tsx
// Debouncing a mouse click event. Only a single mouse event
// will be registered if the user is clicking rapidly
import debounce from 'nohop';

const mouseDownHandler = (ev: MouseEvent) => {
  console.log('user moused down on: ', ev.target);
};

window.addEventListener('mousedown', debounce(mouseDownHandler, 200));
```

```js
const debounce = require('nohop');

const searchInput = document.createElement('input');
searchInput.placeholder = 'type something...';
searchInput.id = 'search';
searchInput.type = 'text';
// or in html: <input type="text" id="search" placeholder="type something..." />

document.body.appendChild(searchInput);

const search = (ev) => {
  console.log('searching...', ev.target.value);
};
const debouncedSearch = debounce(search, 300);

document.getElementById('search').onkeypress = debouncedSearch;
```

### React

```tsx
import debounce from 'nohop';

const search = (ev: React.ChangeEvent<HTMLInputElement>) => {
  // Make an API request with ev.target.value
  console.log('searching...', ev.target.value);
};

const debouncedSearch = debounce(search, 300);

<div>
  <input placeholder="type something" onChange={debouncedSearch} />
</div>;
```

```tsx
import debounce from 'nohop';

// Demonstrates basic search debouncing, but also provides an example of passing
// custom parameters along with whatever Event is being triggered.
const search = (filter: boolean, ev: React.ChangeEvent<HTMLInputElement>) => {
  console.log('custom filter parameter', filter);
  console.log('input value', ev.target.value);
};

const debouncedSearch = (filter: boolean) =>
  debounce((ev) => search(filter, ev), 300);

<div>
  <input placeholder="type something" onChange={debouncedSearch(true)} />
</div>;
```

### License

MIT

This function is very similar to [debounce](https://www.npmjs.com/package/debounce) and [lodash.debounce](https://www.npmjs.com/package/lodash.debounce), but smaller, inherently typed (no `@types/...` package needed), and without the ability to `flush` any existing debounced functions.
