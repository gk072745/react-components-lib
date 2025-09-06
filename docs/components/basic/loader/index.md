# Loader

A flexible loader overlay with SVG or custom image support, local or full-screen positioning, and customizable size, stroke width, and colors.

## Features

- **Local or Full-screen**: Relative container overlay or fixed viewport overlay
- **SVG or Image**: Built-in animated SVG or custom image via `src`
- **Customizable**: Control `size`, `width` (stroke), `fillColor`, `emptyColor`, `bgColor`
- **Accessible**: Focus-visible styles and reduced-motion support
- **Composable**: Render custom children to fully override loader content

## Basic Usage

```jsx
import Loader from "../components/sharedComponents/Loader";

export default function Example() {
  return (
    <div style={{ position: "relative", height: 150 }}>
      <Loader />
    </div>
  );
}
```

[API Reference →](./api)

[View Code →](./code)
