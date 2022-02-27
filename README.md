# nohop

Debounce a function. Simple.

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

```tsx
import debounce from 'nohop';
const originalFunction = async () => {
  const response = await fetch(...);
  const json = await response.json();
  console.log(json);
};
const debouncedFunction = debounce(originalFunction, 300);
// Use the debounced function in a click handler
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
