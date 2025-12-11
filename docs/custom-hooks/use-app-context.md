---
sidebar_label: useAppContext
title: useAppContext
description: A hook to access the application context with error handling for usage outside provider.
---

### Location

```
src/customHooks/useAppContext.js
```

### File structure

```
src/
  customHooks/
    useAppContext.js
```

### What it does

- Provides access to the AppContext
- Throws an error if used outside of AppProvider
- Ensures context is always available when hook is used

### Copy‑paste code

```js
import { useContext } from 'react';
import { AppContext } from '../context/AppContext.js';

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
```

### Basic usage

```jsx
import React from 'react';
import { useAppContext } from '@/src/customHooks/useAppContext';

function MyComponent() {
  const { Constants, appImages } = useAppContext();

  return (
    <div>
      <img src={appImages['loader.gif']} alt="Loading..." />
      <p>App Name: {Constants.APP_NAME}</p>
    </div>
  );
}
```

### Accessing context values

```jsx
import React from 'react';
import { useAppContext } from '@/src/customHooks/useAppContext';

function CircularProgressBar() {
  const { appImages } = useAppContext();

  const handleMouseUp = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="loading-animation" onMouseUp={handleMouseUp}>
      <img src={appImages['loader.gif']} alt="Loading..." />
    </div>
  );
}
```

### Important: App-level setup

The hook must be used within an `AppProvider`. Make sure your app is wrapped with the provider:

```jsx
import React from 'react';
import { AppProvider } from '@/src/context/AppProvider';
import MyComponent from './MyComponent';

function App() {
  return (
    <AppProvider>
      <MyComponent />
    </AppProvider>
  );
}
```
