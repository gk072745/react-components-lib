import {
  BasicLoaderDemo,
  AutoHideLoaderDemo,
  BlockingActionDemo,
} from "@site/src/demoPages/CircularProgressDemo.jsx";

# Demo

This page demonstrates the Circular Progress Bar (loader overlay) with common usage patterns.

**Note:** The component requires `AppProvider` context to access the loader image assets.

## Demo 1: Basic Toggle

### Code Example

```jsx
import React, { useState } from "react";
import CircularProgressBar from "../components/sharedComponents/CircularProgressBar";
import { AppProvider } from "@site/src/context/AppProvider.jsx";

const BasicLoaderExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppProvider>
      <div>
        <button onClick={() => setOpen(true)}>Show Loader</button>
        <button onClick={() => setOpen(false)}>Hide Loader</button>
        {open && <CircularProgressBar />}
      </div>
    </AppProvider>
  );
};
```

### Interactive Demo

<BasicLoaderDemo />

## Demo 2: Auto-hide After Task

### Code Example

```jsx
import React, { useState } from "react";
import CircularProgressBar from "../components/sharedComponents/CircularProgressBar";
import { AppProvider } from "@site/src/context/AppProvider.jsx";

const AutoHideLoaderExample = () => {
  const [loading, setLoading] = useState(false);

  const runTask = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
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

### Interactive Demo

<AutoHideLoaderDemo />

## Demo 3: Blocking UI During Action

### Code Example

```jsx
import React, { useState } from "react";
import CircularProgressBar from "../components/sharedComponents/CircularProgressBar";
import { AppProvider } from "@site/src/context/AppProvider.jsx";

const BlockingActionExample = () => {
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 2000));
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

### Interactive Demo

<BlockingActionDemo />
