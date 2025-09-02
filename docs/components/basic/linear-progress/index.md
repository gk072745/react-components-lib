# Linear Progress

A flexible linear progress bar supporting determinate and indeterminate modes with customizable size, color, rounding, and positioning.

## Features

- **Determinate**: Shows exact completion using `modelValue` and `max`
- **Indeterminate**: Animated bar for unknown durations
- **Customizable**: Control `height`, `color`, `bgColor`, and `rounded`
- **Absolute positioning**: Pin to the top of a container with `absolute`
- **Accessible**: Keyboard focus styles and reduced motion-friendly transitions

## Use Cases

- **Task progress**: Uploads, downloads, or long-running operations
- **Page/top bars**: Route or data-loading indicators at the top
- **Inline status**: Section-level progress within cards or forms

## Basic Usage

```jsx
import React from "react";
import LinearProgress from "../components/sharedComponents/LinearProgress";

export default function Example() {
  return <LinearProgress modelValue={60} color="#0d6efd" height={6} />;
}
```

[API Reference →](./api)

[View Code →](./code)
