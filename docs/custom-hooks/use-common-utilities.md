---
sidebar_label: useCommonUtilities
title: useCommonUtilities
description: Simple navigation, clipboard, and string helpers as a reusable hook.
---

### Location

```
src/customHooks/useCommonUtilities.js
```

### File structure

```
src/
  customHooks/
    useCommonUtilities.js
```

### What it does

- `capitalizeFirstLetter(text)`: returns the text with the first letter uppercased
- `goToRoute(path)`: navigates to a route using `react-router-dom`
- `copyToClipboard(text)`: copies text to system clipboard

### Copy‑paste code

```js
import { useNavigate } from 'react-router-dom';

export function useCommonUtilities() {
  const navigate = useNavigate();

  function capitalizeFirstLetter(string) {
    let lowercasedString = string.toLowerCase();
    return lowercasedString.charAt(0).toUpperCase() + lowercasedString.slice(1);
  }

  function goToRoute(path) {
    navigate(path);
  }

  async function copyToClipboard(textToCopy) {
    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }

  return {
    capitalizeFirstLetter,
    goToRoute,
    copyToClipboard,
  };
}
```

### Basic usage

```jsx
import React from 'react';
import { useCommonUtilities } from '@/src/customHooks/useCommonUtilities';

const Example = () => {
  const { capitalizeFirstLetter, goToRoute, copyToClipboard } = useCommonUtilities();

  return (
    <div>
      <button onClick={() => alert(capitalizeFirstLetter('hello world'))}>Capitalize</button>
      <button onClick={() => goToRoute('/docs')}>Go to Docs</button>
      <button onClick={() => copyToClipboard('Copied text!')}>Copy</button>
    </div>
  );
};
```
