# SliderGroup

A horizontal card slider with arrows and optional dots, supporting custom card content and selection.

## Features

- **Arrow positions**: `top`, `bottom`, `center`, `center-outside`
- **Dots navigation**: Optional, auto-calculated based on content width
- **Selection**: Click to select a card (toggleable)
- **Custom cards**: Render function to supply any JSX per item
- **Responsive**: Smooth scrolling and resize handling

## Basic Usage

```jsx
import SliderGroup from "../components/sharedComponents/SliderGroup";

export default function Example() {
  const items = [1,2,3,4,5,6,7,8,9,10];
  return (
    <SliderGroup items={items} arrowsPosition="bottom" showArrowsAlways={true} showDots={true} />
  );
}
```

[API Reference →](./api)

[View Code →](./code)
