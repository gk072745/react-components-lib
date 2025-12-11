import {
  BasicPositionsDemo,
  CornerPositionsDemo,
  ClickTriggerDemo,
  FocusTriggerDemo,
  VariantsDemo,
  ArrowOptionsDemo,
  CustomContentDemo,
  DelayOptionsDemo,
} from "@site/src/demoPages/TooltipDemo.jsx";

# Demo

This page demonstrates the Tooltip component with various configurations and examples.

## Demo 1: Basic Positions

### Code Example

```jsx
import React from "react";
import BasicTooltip from "../components/sharedComponents/BasicTooltip";

const BasicPositionsExample = () => {
  return (
    <div>
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
    </div>
  );
};
```

### Interactive Demo

<BasicPositionsDemo />

## Demo 2: Corner Positions

### Code Example

```jsx
import React from "react";
import BasicTooltip from "../components/sharedComponents/BasicTooltip";

const CornerPositionsExample = () => {
  return (
    <div>
      <BasicTooltip content="Top Left" position="top-left">
        <button>Top Left</button>
      </BasicTooltip>
      <BasicTooltip content="Top Right" position="top-right">
        <button>Top Right</button>
      </BasicTooltip>
      <BasicTooltip content="Bottom Left" position="bottom-left">
        <button>Bottom Left</button>
      </BasicTooltip>
      <BasicTooltip content="Bottom Right" position="bottom-right">
        <button>Bottom Right</button>
      </BasicTooltip>
    </div>
  );
};
```

### Interactive Demo

<CornerPositionsDemo />

## Demo 3: Click Trigger

### Code Example

```jsx
import React from "react";
import BasicTooltip from "../components/sharedComponents/BasicTooltip";

const ClickTriggerExample = () => {
  return (
    <div>
      <BasicTooltip content="Click to toggle" position="top" trigger="click">
        <button>Click Me</button>
      </BasicTooltip>
      <BasicTooltip
        content="Click outside to close"
        position="bottom"
        trigger="click"
      >
        <button>Click Outside</button>
      </BasicTooltip>
    </div>
  );
};
```

### Interactive Demo

<ClickTriggerDemo />

## Demo 4: Focus Trigger

### Code Example

```jsx
import React from "react";
import BasicTooltip from "../components/sharedComponents/BasicTooltip";

const FocusTriggerExample = () => {
  return (
    <div>
      <BasicTooltip content="Focus on input" position="top" trigger="focus">
        <input placeholder="Focus me" />
      </BasicTooltip>
      <BasicTooltip
        tooltip={
          <span>
            <b>Formatted</b> content allowed
          </span>
        }
        position="right"
        trigger="focus"
      >
        <button>Focusable Button</button>
      </BasicTooltip>
    </div>
  );
};
```

### Interactive Demo

<FocusTriggerDemo />

## Demo 5: Variants

### Code Example

```jsx
import React from "react";
import BasicTooltip from "../components/sharedComponents/BasicTooltip";

const VariantsExample = () => {
  return (
    <div>
      <BasicTooltip
        content="Light variant"
        customClass="tooltip-light"
        position="top"
      >
        <button>Light</button>
      </BasicTooltip>
      <BasicTooltip
        content="Success variant"
        customClass="tooltip-success"
        position="top"
      >
        <button>Success</button>
      </BasicTooltip>
      <BasicTooltip
        content="Error variant"
        customClass="tooltip-error"
        position="top"
      >
        <button>Error</button>
      </BasicTooltip>
      <BasicTooltip
        content="Warning variant"
        customClass="tooltip-warning"
        position="top"
      >
        <button>Warning</button>
      </BasicTooltip>
    </div>
  );
};
```

### Interactive Demo

<VariantsDemo />

## Demo 6: Arrow Options

### Code Example

```jsx
import React from "react";
import BasicTooltip from "../components/sharedComponents/BasicTooltip";

const ArrowOptionsExample = () => {
  return (
    <div>
      <BasicTooltip content="With arrow (default)" position="top">
        <button>With Arrow</button>
      </BasicTooltip>
      <BasicTooltip content="No arrow" showArrow={false} position="top">
        <button>No Arrow</button>
      </BasicTooltip>
    </div>
  );
};
```

### Interactive Demo

<ArrowOptionsDemo />

## Demo 7: Custom Content

### Code Example

```jsx
import React from "react";
import BasicTooltip from "../components/sharedComponents/BasicTooltip";

const CustomContentExample = () => {
  return (
    <div>
      <BasicTooltip
        tooltip={
          <span>
            <b>Bold</b> and <i>italic</i> content
          </span>
        }
        position="top"
      >
        <button>Rich Content</button>
      </BasicTooltip>
      <BasicTooltip
        tooltip={
          <div>
            <div>Line 1</div>
            <div>Line 2</div>
          </div>
        }
        position="top"
      >
        <button>Multi-line</button>
      </BasicTooltip>
    </div>
  );
};
```

### Interactive Demo

<CustomContentDemo />

## Demo 8: Delay Options

### Code Example

```jsx
import React from "react";
import BasicTooltip from "../components/sharedComponents/BasicTooltip";

const DelayOptionsExample = () => {
  return (
    <div>
      <BasicTooltip content="No delay" position="top" delay={0}>
        <button>No Delay</button>
      </BasicTooltip>
      <BasicTooltip content="500ms delay" position="top" delay={500}>
        <button>500ms Delay</button>
      </BasicTooltip>
      <BasicTooltip content="1000ms delay" position="top" delay={1000}>
        <button>1000ms Delay</button>
      </BasicTooltip>
    </div>
  );
};
```

### Interactive Demo

<DelayOptionsDemo />
