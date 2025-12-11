import {
  BasicUsageDemo,
  VariantColorsDemo,
  HeightVariantsDemo,
  ProgressValuesDemo,
  RoundedIndeterminateDemo,
  AbsolutePositioningDemo,
  AllVariantsDemo,
  StatesDemo,
} from "@site/src/demoPages/LinearProgressDemo.jsx";

# Demo

This page demonstrates the Linear Progress component with various configurations and examples.

## Demo 1: Basic Usage

### Code Example

```jsx
import React, { useState, useEffect } from "react";
import LinearProgress from "../components/sharedComponents/LinearProgress";

const BasicUsageExample = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <LinearProgress modelValue={progress} />
      <p>Auto-progressing bar: {progress}%</p>
    </div>
  );
};
```

### Interactive Demo

<BasicUsageDemo />

## Demo 2: Variant Colors

### Code Example

```jsx
import React from "react";
import LinearProgress from "../components/sharedComponents/LinearProgress";

const VariantColorsExample = () => {
  return (
    <div>
      <LinearProgress modelValue={60} variant="default" />
      <LinearProgress modelValue={60} variant="primary" />
      <LinearProgress modelValue={60} variant="success" />
      <LinearProgress modelValue={60} variant="warning" />
      <LinearProgress modelValue={60} variant="danger" />
      <LinearProgress modelValue={60} variant="info" />
    </div>
  );
};
```

### Interactive Demo

<VariantColorsDemo />

## Demo 3: Height Variants

### Code Example

```jsx
import React from "react";
import LinearProgress from "../components/sharedComponents/LinearProgress";

const HeightVariantsExample = () => {
  return (
    <div>
      <LinearProgress modelValue={75} height={2} />
      <LinearProgress modelValue={75} height={4} />
      <LinearProgress modelValue={75} height={8} />
      <LinearProgress modelValue={75} height={16} />
    </div>
  );
};
```

### Interactive Demo

<HeightVariantsDemo />

## Demo 4: Progress Values

### Code Example

```jsx
import React, { useState } from "react";
import LinearProgress from "../components/sharedComponents/LinearProgress";

const ProgressValuesExample = () => {
  const [progress, setProgress] = useState(45);

  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={(e) => setProgress(Number(e.target.value))}
      />
      <LinearProgress modelValue={progress} height={8} />
      <LinearProgress modelValue={25} height={6} />
      <LinearProgress modelValue={50} height={6} />
      <LinearProgress modelValue={75} height={6} />
      <LinearProgress modelValue={100} height={6} />
    </div>
  );
};
```

### Interactive Demo

<ProgressValuesDemo />

## Demo 5: Rounded and Indeterminate

### Code Example

```jsx
import React from "react";
import LinearProgress from "../components/sharedComponents/LinearProgress";

const RoundedIndeterminateExample = () => {
  return (
    <div>
      <LinearProgress modelValue={65} rounded={true} height={8} />
      <LinearProgress indeterminate={true} height={8} />
      <LinearProgress indeterminate={true} rounded={true} height={8} />
    </div>
  );
};
```

### Interactive Demo

<RoundedIndeterminateDemo />

## Demo 6: Absolute Positioning

### Code Example

```jsx
import React from "react";
import LinearProgress from "../components/sharedComponents/LinearProgress";

const AbsolutePositioningExample = () => {
  return (
    <div style={{ position: "relative", height: 100, border: "1px solid #ddd", padding: 20 }}>
      <LinearProgress absolute={true} modelValue={80} height={4} />
      <p>Progress bar positioned at the top of this container</p>
      <p>Content below the progress bar</p>
    </div>
  );
};
```

### Interactive Demo

<AbsolutePositioningDemo />

## Demo 7: All Variants Combined

### Code Example

```jsx
import React from "react";
import LinearProgress from "../components/sharedComponents/LinearProgress";

const AllVariantsExample = () => {
  return (
    <div>
      <LinearProgress
        modelValue={50}
        variant="default"
        rounded={true}
        height={8}
      />
      <LinearProgress
        modelValue={75}
        variant="success"
        rounded={true}
        height={8}
      />
      <LinearProgress
        indeterminate={true}
        variant="danger"
        height={8}
      />
    </div>
  );
};
```

### Interactive Demo

<AllVariantsDemo />

## Demo 8: States Demo

### Code Example

```jsx
import React, { useState, useEffect } from "react";
import LinearProgress from "../components/sharedComponents/LinearProgress";

const StatesExample = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <LinearProgress modelValue={0} height={6} />
      <LinearProgress modelValue={progress} height={6} />
      <LinearProgress modelValue={100} height={6} />
      <LinearProgress indeterminate={true} height={6} />
    </div>
  );
};
```

### Interactive Demo

<StatesDemo />
