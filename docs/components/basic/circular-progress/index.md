# Circular Progress Bar

A simple full-screen loader overlay component for indicating long-running actions. It displays a centered loader image on top of the app content.

## Features

- **Full-screen overlay**: Covers the viewport while loading
- **Center aligned**: Loader graphic centered with flexbox
- **Easy control**: Show by mounting, hide by unmounting
- **Accessible**: Prevents accidental interactions underneath
- **Lightweight**: Minimal, framework-friendly

## Use Cases

- **Async tasks**: Show during API requests or background jobs
- **Navigation waits**: Indicate loading on route changes
- **Form submissions**: Block the UI while processing

## Key Behavior

- Render `<CircularProgressBar />` to show the overlay
- Unmount the component to hide it

## Basic Usage

```jsx
import React, { useState } from "react";
import CircularProgressBar from "../components/sharedComponents/CircularProgressBar";

const Example = () => {
  const [loading, setLoading] = useState(false);

  async function submit() {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
  }

  return (
    <div>
      <button onClick={submit}>Submit</button>
      {loading && <CircularProgressBar />}
    </div>
  );
};
```
