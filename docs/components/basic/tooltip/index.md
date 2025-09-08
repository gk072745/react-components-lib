# Tooltip

A flexible tooltip component with smart positioning, collision handling, triggers, and optional arrow.

## Features

- **Positions**: `top`, `bottom`, `left`, `right`, plus corners `top-left`, `top-right`, `bottom-left`, `bottom-right`
- **Triggers**: `hover` (default), `click`, `focus`
- **Collision handling**: Auto flip and viewport-bound adjustments
- **Arrow**: Toggle visibility with `showArrow`
- **Custom content**: Accepts string or React node via `content` or `tooltip`

## Basic Usage

```jsx
import BasicTooltip from '../components/sharedComponents/BasicTooltip';

export default function Example() {
  return (
    <BasicTooltip content="Hello" position="top">
      <button>Hover me</button>
    </BasicTooltip>
  );
}
```

[API Reference →](./api)

[View Code →](./code)
