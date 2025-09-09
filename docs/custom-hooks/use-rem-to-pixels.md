---
sidebar_label: useRemToPixels
title: useRemToPixels
description: Utilities to convert rem to pixels — one-off helper and a reactive hook.
---

### Location

```
src/customHooks/useRemToPixels.js
```

### File structure

```
src/
  customHooks/
    useRemToPixels.js
```

### What it does

- `remToPixels(rem)`: simple function for one-off conversions (no React needed)
- `useRemToPixels()`: React hook that tracks root font-size and exposes converters

### Copy‑paste code

```js
import { useCallback, useEffect, useRef, useState } from 'react';

// Simple utility for one-off conversions without reactive updates
export function remToPixels(remValue) {
  if (typeof remValue !== 'number' || Number.isNaN(remValue)) return 0;
  try {
    const root = document.documentElement;
    const computedStyle = getComputedStyle(root);
    const rootFontSize = parseFloat(computedStyle.fontSize);
    if (Number.isNaN(rootFontSize) || rootFontSize <= 0) return remValue * 16;
    return remValue * rootFontSize;
  } catch (e) {
    return remValue * 16;
  }
}

// React hook for reactive rem→px conversions with monitoring of root font-size
export function useRemToPixels() {
  const [rootFontSize, setRootFontSize] = useState(16);
  const resizeObserverRef = useRef(null);

  const updateRootFontSize = useCallback(() => {
    try {
      const root = document.documentElement;
      const computedStyle = getComputedStyle(root);
      const size = parseFloat(computedStyle.fontSize);
      if (!Number.isNaN(size) && size > 0) setRootFontSize(size);
    } catch (_) {
      setRootFontSize(16);
    }
  }, []);

  const convertRemToPixels = useCallback((rem) => {
    if (typeof rem !== 'number' || Number.isNaN(rem)) return 0;
    return rem * rootFontSize;
  }, [rootFontSize]);

  const convertMultipleRemToPixels = useCallback((values) => {
    if (!Array.isArray(values)) return [];
    return values.map((v) => convertRemToPixels(v));
  }, [convertRemToPixels]);

  const convertOffsetToPixels = useCallback((offset) => {
    if (!Array.isArray(offset) || offset.length !== 2) return [0, 0];
    return [convertRemToPixels(offset[0]), convertRemToPixels(offset[1])];
  }, [convertRemToPixels]);

  const setupMonitoring = useCallback(() => {
    updateRootFontSize();
    if (typeof ResizeObserver !== 'undefined') {
      const obs = new ResizeObserver(updateRootFontSize);
      obs.observe(document.documentElement);
      resizeObserverRef.current = obs;
    }
    window.addEventListener('resize', updateRootFontSize);
  }, [updateRootFontSize]);

  const cleanupMonitoring = useCallback(() => {
    if (resizeObserverRef.current) {
      resizeObserverRef.current.disconnect();
      resizeObserverRef.current = null;
    }
    window.removeEventListener('resize', updateRootFontSize);
  }, [updateRootFontSize]);

  useEffect(() => {
    setupMonitoring();
    return cleanupMonitoring;
  }, [setupMonitoring, cleanupMonitoring]);

  return {
    rootFontSize,
    convertRemToPixels,
    convertMultipleRemToPixels,
    convertOffsetToPixels,
    updateRootFontSize,
    setupMonitoring,
    cleanupMonitoring,
  };
}
```

### Tiny examples

```js
// One-off conversion (no React):
import { remToPixels } from '@/src/customHooks/useRemToPixels';
const px = remToPixels(2); // 2rem → e.g. 32px if root is 16px
```

```jsx
// Minimal React usage:
import React from 'react';
import { useRemToPixels } from '@/src/customHooks/useRemToPixels';

const MiniRemToPx = () => {
  const { convertRemToPixels } = useRemToPixels();
  return <span>1.5rem = {convertRemToPixels(1.5)} px</span>;
};
```
