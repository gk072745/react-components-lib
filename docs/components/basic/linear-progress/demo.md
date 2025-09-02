import {
BasicUsageExample,
HeightVariantsExample,
ColorVariantsExample,
ProgressValuesExample,
VariantsExample,
AbsolutePositioningExample
} from "@site/src/demoPages/LinearProgressDemo.jsx";

# Demo

This page alternates concise code examples with their corresponding interactive demos.

## Basic Usage

### Code Example

```jsx
import React, { useState, useEffect } from "react";
import LinearProgress from "../components/sharedComponents/LinearProgress";

export default function BasicUsageExample() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setProgress((p) => (p >= 100 ? 0 : p + 1)),
      100
    );
    return () => clearInterval(id);
  }, []);
  return (
    <div>
      <LinearProgress modelValue={progress} />
      <p>Auto-progressing bar: {progress}%</p>
    </div>
  );
}
```

### Interactive Demo

<BasicUsageExample />

## Height Variants

### Code Example

```jsx
import React, { useState } from "react";
import LinearProgress from "../components/sharedComponents/LinearProgress";

export default function HeightVariantsExample() {
  const [customHeight, setCustomHeight] = useState(8);
  return (
    <div>
      <LinearProgress modelValue={75} height={2} />
      <LinearProgress modelValue={75} height={4} />
      <LinearProgress modelValue={75} height={8} />
      <LinearProgress modelValue={75} height={16} />
      <label>
        Height:
        <input
          type="range"
          min="2"
          max="32"
          value={customHeight}
          onChange={(e) => setCustomHeight(Number(e.target.value))}
          style={{ marginLeft: 8 }}
        />
      </label>
      <LinearProgress modelValue={75} height={customHeight} />
    </div>
  );
}
```

### Interactive Demo

<HeightVariantsExample />

## Color Variants

### Code Example

```jsx
import React, { useState } from "react";
import LinearProgress from "../components/sharedComponents/LinearProgress";

export default function ColorVariantsExample() {
  const [color, setColor] = useState("#007bff");
  const [bg, setBg] = useState("#e0e0e0");
  return (
    <div>
      <LinearProgress modelValue={60} color="#000" bgColor="#e0e0e0" />
      <LinearProgress modelValue={60} color="#007bff" bgColor="#e3f2fd" />
      <LinearProgress modelValue={60} color="#28a745" bgColor="#e8f5e8" />
      <LinearProgress modelValue={60} color="#dc3545" bgColor="#f8e8e8" />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input type="color" value={bg} onChange={(e) => setBg(e.target.value)} />
      <LinearProgress modelValue={60} color={color} bgColor={bg} height={8} />
    </div>
  );
}
```

### Interactive Demo

<ColorVariantsExample />

## Progress Values

### Code Example

```jsx
import React, { useState } from "react";
import LinearProgress from "../components/sharedComponents/LinearProgress";

export default function ProgressValuesExample() {
  const [val, setVal] = useState(45);
  return (
    <div>
      <label>
        Progress:
        <input
          type="range"
          min="0"
          max="100"
          value={val}
          onChange={(e) => setVal(Number(e.target.value))}
          style={{ marginLeft: 8 }}
        />
      </label>
      <LinearProgress modelValue={val} height={8} />
      <LinearProgress modelValue={25} height={6} />
      <LinearProgress modelValue={50} height={6} />
      <LinearProgress modelValue={75} height={6} />
      <LinearProgress modelValue={100} height={6} />
    </div>
  );
}
```

### Interactive Demo

<ProgressValuesExample />

## Variants

### Code Example

```jsx
import React from "react";
import LinearProgress from "../components/sharedComponents/LinearProgress";

export default function VariantsExample() {
  return (
    <div>
      <LinearProgress modelValue={65} rounded={true} height={8} />
      <LinearProgress indeterminate={true} height={8} />
      <LinearProgress indeterminate={true} rounded={true} height={8} />
    </div>
  );
}
```

### Interactive Demo

<VariantsExample />

## Absolute Positioning

### Code Example

```jsx
import React from "react";
import LinearProgress from "../components/sharedComponents/LinearProgress";

export default function AbsolutePositioningExample() {
  return (
    <div
      style={{
        position: "relative",
        height: 100,
        border: "1px solid #ddd",
        padding: 20,
      }}
    >
      <LinearProgress
        absolute={true}
        modelValue={80}
        height={4}
        color="#007bff"
      />
      <p>Progress bar positioned at the top of this container</p>
      <p>Content below the progress bar</p>
    </div>
  );
}
```

### Interactive Demo

<AbsolutePositioningExample />
