import { BasicLoaderDemo, AutoHideLoaderDemo, BlockingActionDemo } from "@site/src/demoPages/CircularProgressDemo.jsx";

# Demo

This page demonstrates the Circular Progress Bar (loader overlay) with common usage patterns.

## Demo 1: Basic Toggle

### Code Example

```jsx
import React, { useState } from "react";
import CircularProgressBar from "../components/sharedComponents/CircularProgressBar";

const BasicLoaderDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Show Loader</button>
      <button onClick={() => setOpen(false)} style={{ marginLeft: "0.5rem" }}>
        Hide Loader
      </button>
      {open && <CircularProgressBar />}
    </div>
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

const AutoHideLoaderDemo = () => {
  const [loading, setLoading] = useState(false);

  const runTask = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
  };

  return (
    <div>
      <button onClick={runTask}>Run Task</button>
      {loading && <CircularProgressBar />}
    </div>
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

const BlockingActionDemo = () => {
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
    <div>
      <button onClick={submit} disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
      {loading && <CircularProgressBar />}
    </div>
  );
};
```

### Interactive Demo

<BlockingActionDemo />
