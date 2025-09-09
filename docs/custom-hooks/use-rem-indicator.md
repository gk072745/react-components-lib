---
sidebar_label: useRemIndicator
title: useRemIndicator
description: A tiny hook to get current px-per-rem and convert between rem and px.
---

### Location

```
src/customHooks/useRemIndicator.js
```

### File structure

```
src/
  customHooks/
    useRemIndicator.js
```

### What it does

- Exposes the current px value of 1rem as `remToPixel`
- Provides `convertRemToPixels(rem)` and `convertPixelsToRem(px)` helpers
- Updates automatically on window resize
- Requires a hidden 1rem element to measure the current root font size

### Copy‑paste code

```js
import { useCallback, useEffect, useRef, useState } from 'react';

// Hook that uses a hidden 1rem element to derive px/rem and helpers
export function useRemIndicator() {
  const [remToPixel, setRemToPixel] = useState(16);
  const remIndicatorRef = useRef(null);

  const calculateRemValue = useCallback(() => {
    const el = remIndicatorRef.current;
    if (el && el.offsetWidth) setRemToPixel(el.offsetWidth);
  }, []);

  const convertRemToPixels = useCallback((rem) => {
    if (typeof rem !== 'number' || Number.isNaN(rem)) return 0;
    return rem * remToPixel;
  }, [remToPixel]);

  const convertPixelsToRem = useCallback((px) => {
    if (typeof px !== 'number' || Number.isNaN(px) || remToPixel === 0) return 0;
    return px / remToPixel;
  }, [remToPixel]);

  useEffect(() => {
    calculateRemValue();
    window.addEventListener('resize', calculateRemValue);
    return () => window.removeEventListener('resize', calculateRemValue);
  }, [calculateRemValue]);

  // Consumers should render an element like:
  // <div ref={remIndicatorRef} style={{ position:'absolute', visibility:'hidden', width:'1rem', height:0, overflow:'hidden' }} />
  return {
    remToPixel,
    remIndicatorRef,
    convertRemToPixels,
    convertPixelsToRem,
  };
}
```

### Important: App-level wiring

To ensure consistent measurements, render the hidden 1rem indicator once at the app root and pass the `ref` from `useRemIndicator`. Example `App.jsx` setup:

```jsx
import { Outlet } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { useRemIndicator } from './customHooks/useRemIndicator';

function App() {
  const { remIndicatorRef } = useRemIndicator();

  return (
    <div className="App">
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
      <div
        id="remIndicator"
        ref={remIndicatorRef}
        style={{ position: 'absolute', top: -10000, left: -10000, background: 'transparent', opacity: 0, width: '1rem', height: '1rem', zIndex: 1, pointerEvents: 'none', visibility: 'hidden' }}
      />
    </div>
  );
}

export default App;
```
