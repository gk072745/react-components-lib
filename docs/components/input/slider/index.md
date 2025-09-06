# Slider

A customizable single-value slider supporting sizes, colors, thumb labels, and keyboard/mouse/touch interactions.

## Features

- **Controlled or Uncontrolled-like**: Accepts `value` and `onChange`
- **Precision**: `step` with automatic decimal display
- **Thumb Labels**: Show on drag/focus or always with `thumbLabel`
- **Sizes & Colors**: `xs` → `xl`, and `default`/`primary`/`success`/`warning`/`danger`/`info`
- **Accessibility**: ARIA slider role, keyboard arrows, focus styles
- **Legacy colors**: Optional `thumbColor`/`trackColor` for older styling

## Basic Usage

```jsx
import React, { useState } from "react";
import BasicSlider from "../components/sharedComponents/BasicSlider";

export default function Example() {
  const [val, setVal] = useState(50);
  return (
    <BasicSlider value={val} onChange={setVal} min={0} max={100} step={1} />
  );
}
```

[API Reference →](./api)

[View Code →](./code)
