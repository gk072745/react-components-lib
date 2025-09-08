import {
  HoverPositionsExample,
  CornerPositionsExample,
  ClickTriggerExample,
  FocusTriggerExample,
  VariantsAndArrowExample
} from "@site/src/demoPages/TooltipDemo.jsx";

# Demo

This page alternates code examples with their corresponding interactive demos.

## Hover Trigger (default)

### Code Example

```jsx
import BasicTooltip from '../components/sharedComponents/BasicTooltip';

export default function HoverPositionsExample() {
  return (
    <>
      <BasicTooltip content="Top tooltip" position="top">
        <button>Hover Top</button>
      </BasicTooltip>
      <BasicTooltip content="Bottom tooltip" position="bottom">
        <button>Hover Bottom</button>
      </BasicTooltip>
      <BasicTooltip content="Left tooltip" position="left">
        <button>Hover Left</button>
      </BasicTooltip>
      <BasicTooltip content="Right tooltip" position="right">
        <button>Hover Right</button>
      </BasicTooltip>
    </>
  );
}
```

### Interactive Demo

<HoverPositionsExample />

## Corner Positions

### Code Example

```jsx
import BasicTooltip from '../components/sharedComponents/BasicTooltip';

export default function CornerPositionsExample() {
  return (
    <>
      <BasicTooltip content="Top Left" position="top-left"><button>Top Left</button></BasicTooltip>
      <BasicTooltip content="Top Right" position="top-right"><button>Top Right</button></BasicTooltip>
      <BasicTooltip content="Bottom Left" position="bottom-left"><button>Bottom Left</button></BasicTooltip>
      <BasicTooltip content="Bottom Right" position="bottom-right"><button>Bottom Right</button></BasicTooltip>
    </>
  );
}
```

### Interactive Demo

<CornerPositionsExample />

## Click Trigger

### Code Example

```jsx
import BasicTooltip from '../components/sharedComponents/BasicTooltip';

export default function ClickTriggerExample() {
  return (
    <>
      <BasicTooltip content="Click to toggle" position="top" trigger="click"><button>Click Me</button></BasicTooltip>
      <BasicTooltip content="Click outside to close" position="bottom" trigger="click"><button>Click Outside</button></BasicTooltip>
    </>
  );
}
```

### Interactive Demo

<ClickTriggerExample />

## Focus Trigger

### Code Example

```jsx
import BasicTooltip from '../components/sharedComponents/BasicTooltip';

export default function FocusTriggerExample() {
  return (
    <>
      <BasicTooltip content="Focus on input" position="top" trigger="focus">
        <input placeholder="Focus me" />
      </BasicTooltip>
      <BasicTooltip content={<span><b>Formatted</b> content allowed</span>} position="right" trigger="focus">
        <button>Focusable Button</button>
      </BasicTooltip>
    </>
  );
}
```

### Interactive Demo

<FocusTriggerExample />

## Variants and Arrow

### Code Example

```jsx
import BasicTooltip from '../components/sharedComponents/BasicTooltip';

export default function VariantsAndArrowExample() {
  return (
    <>
      <BasicTooltip content="Light variant" customClass="tooltip-light" position="top"><button>Light</button></BasicTooltip>
      <BasicTooltip content="Success variant" customClass="tooltip-success" position="top"><button>Success</button></BasicTooltip>
      <BasicTooltip content="Error variant" customClass="tooltip-error" position="top"><button>Error</button></BasicTooltip>
      <BasicTooltip content="Warning variant" customClass="tooltip-warning" position="top"><button>Warning</button></BasicTooltip>
      <BasicTooltip content="No arrow" showArrow={false} position="top"><button>No Arrow</button></BasicTooltip>
    </>
  );
}
```

### Interactive Demo

<VariantsAndArrowExample />


