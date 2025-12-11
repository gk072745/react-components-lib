# API

## Props

This component does not accept any props.

- The loader is rendered full-screen when the component is mounted
- Control visibility by conditionally rendering the component (mount/unmount)
- The component requires `AppProvider` context to access loader image assets

## Component Structure

The component consists of:

- **Overlay Container**: Full-screen fixed position overlay with semi-transparent background
- **Loader Image**: Centered animated GIF image loaded from app context
- **Event Handling**: Prevents event propagation to underlying content

## CSS Classes

| Class Name | Description |
| ---------- | ----------- |
| `.loading-animation` | Full-screen overlay container |
| `.initial-loader` | Additional class for initial loading state |
| `.translucent-background` | Semi-transparent background overlay |

## Event Handlers

### onMouseUp

The component handles `onMouseUp` events to prevent event propagation to underlying content.

## Dependencies

### AppProvider Context

The component requires `AppProvider` context to access the loader image:

```jsx
import { AppProvider } from "@site/src/context/AppProvider.jsx";

<AppProvider>
  <CircularProgressBar />
</AppProvider>
```

The context provides `appImages` which includes the `loader.gif` image.

## Usage Patterns

### Basic Toggle

Show/hide the loader by conditionally rendering:

```jsx
import React, { useState } from "react";
import CircularProgressBar from "../components/sharedComponents/CircularProgressBar";
import { AppProvider } from "@site/src/context/AppProvider.jsx";

const BasicExample = () => {
  const [loading, setLoading] = useState(false);

  return (
    <AppProvider>
      <div>
        <button onClick={() => setLoading(true)}>Show Loader</button>
        <button onClick={() => setLoading(false)}>Hide Loader</button>
        {loading && <CircularProgressBar />}
      </div>
    </AppProvider>
  );
};
```

### Auto-hide After Async Task

Automatically hide the loader after an async operation completes:

```jsx
import React, { useState } from "react";
import CircularProgressBar from "../components/sharedComponents/CircularProgressBar";
import { AppProvider } from "@site/src/context/AppProvider.jsx";

const AsyncExample = () => {
  const [loading, setLoading] = useState(false);

  const runTask = async () => {
    setLoading(true);
    try {
      await fetch('/api/data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppProvider>
      <div>
        <button onClick={runTask}>Run Task</button>
        {loading && <CircularProgressBar />}
      </div>
    </AppProvider>
  );
};
```

### Blocking UI During Action

Block user interactions during critical operations:

```jsx
import React, { useState } from "react";
import CircularProgressBar from "../components/sharedComponents/CircularProgressBar";
import { AppProvider } from "@site/src/context/AppProvider.jsx";

const BlockingExample = () => {
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    try {
      await submitForm();
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppProvider>
      <div>
        <button onClick={submit} disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
        {loading && <CircularProgressBar />}
      </div>
    </AppProvider>
  );
};
```

## Styling

The component uses fixed positioning to cover the entire viewport:

- **Position**: `fixed` covering all edges (top: 0, bottom: 0, left: 0, right: 0)
- **Z-index**: 20 (appears above most content)
- **Background**: Semi-transparent overlay (`#3a393a54`)
- **Loader Size**: 3rem × 3rem centered image
- **Pointer Events**: All events captured by overlay, image has `pointer-events: none`

## Accessibility

The component includes several accessibility features:

- **Visual Feedback**: Clear loading indicator for users
- **Event Blocking**: Prevents accidental interactions during loading
- **Alt Text**: Loader image includes `alt="Loading..."` for screen readers
- **Full Coverage**: Overlay ensures users cannot interact with underlying content
