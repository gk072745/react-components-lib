# API

## Props

This component does not accept any props.

- The loader is rendered full-screen when the component is mounted.
- Control visibility by conditionally rendering the component (mount/unmount).

## Events

None.

## CSS Classes

- `.loading-animation` - Full-screen overlay container centered with the loader image
  - Nested `img` is the loader graphic

## Usage Examples

### Basic Loader Toggle

```jsx
import React, { useState } from "react";
import CircularProgressBar from "../components/sharedComponents/CircularProgressBar";

export default function BasicLoaderToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Show Loader</button>
      <button onClick={() => setIsOpen(false)} style={{ marginLeft: "0.5rem" }}>
        Hide Loader
      </button>

      {isOpen && <CircularProgressBar />}
    </div>
  );
}
```

### Auto-hide After Action

```jsx
import React, { useState } from "react";
import CircularProgressBar from "../components/sharedComponents/CircularProgressBar";

export default function AutoHideLoader() {
  const [isLoading, setIsLoading] = useState(false);

  const runTask = async () => {
    setIsLoading(true);
    // Simulate async work
    await new Promise((r) => setTimeout(r, 1500));
    setIsLoading(false);
  };

  return (
    <div>
      <button onClick={runTask}>Run Task</button>
      {isLoading && <CircularProgressBar />}
    </div>
  );
}
```
