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

Search:

```js
const search = () => {
  console.log('searching...');
};

const debouncedSearch = debounce(search, 300);

<div>
  <input placeholder="type something" onChange={debouncedSearch} />
</div>;
```

Event Handlers:

```js

```
