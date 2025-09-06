import {
  ColorVariantsExample,
  BasicControlledExample,
  ThumbLabelsExample,
  AlwaysVisibleLabelsExample,
  SizesExample,
  DisabledReadonlyExample,
  CustomStepValuesExample,
  CustomRangesExample
} from "@site/src/demoPages/SliderDemo.jsx";

# Demo

This page alternates code examples with their interactive demos for the Slider.

## Color Variants

### Code Example

```jsx
import BasicSlider from "../components/sharedComponents/BasicSlider";

export default function ColorVariantsExample() {
  return (
    <div>
      <BasicSlider value={50} label="Default Color" min={0} max={100} step={1} color="default" size="md" />
      <BasicSlider value={60} label="Primary Color" min={0} max={100} step={1} color="primary" size="md" />
      <BasicSlider value={70} label="Success Color" min={0} max={100} step={1} color="success" size="md" />
      <BasicSlider value={80} label="Warning Color" min={0} max={100} step={1} color="warning" size="md" />
      <BasicSlider value={90} label="Danger Color" min={0} max={100} step={1} color="danger" size="md" />
      <BasicSlider value={40} label="Info Color" min={0} max={100} step={1} color="info" size="md" />
    </div>
  );
}
```

### Interactive Demo

<ColorVariantsExample />

## Basic Slider

### Code Example

```jsx
import React, { useState } from "react";
import BasicSlider from "../components/sharedComponents/BasicSlider";

export default function BasicControlledExample() {
  const [value, setValue] = useState(50);
  return (
    <div>
      <BasicSlider value={value} onChange={setValue} label="Volume Control" min={0} max={100} step={1} color="primary" size="md" />
      <p>Current Value: {value}</p>
    </div>
  );
}
```

### Interactive Demo

<BasicControlledExample />

## Slider with Thumb Labels

### Code Example

```jsx
import React, { useState } from "react";
import BasicSlider from "../components/sharedComponents/BasicSlider";

export default function ThumbLabelsExample() {
  const [val, setVal] = useState(75);
  return (
    <div>
      <BasicSlider value={val} onChange={setVal} label="Temperature Control" min={-50} max={150} step={5} color="success" thumbLabel={true} size="lg" />
      <p>Current Temperature: {val}°C</p>
    </div>
  );
}
```

### Interactive Demo

<ThumbLabelsExample />

## Slider with Always Visible Labels

### Code Example

```jsx
import React, { useState } from "react";
import BasicSlider from "../components/sharedComponents/BasicSlider";

export default function AlwaysVisibleLabelsExample() {
  const [val, setVal] = useState(25);
  return (
    <div>
      <BasicSlider value={val} onChange={setVal} label="Percentage Control" min={0} max={100} step={0.1} color="danger" thumbLabel="always" size="md" />
      <p>Current Percentage: {val.toFixed(1)}%</p>
    </div>
  );
}
```

### Interactive Demo

<AlwaysVisibleLabelsExample />

## Different Sizes

### Code Example

```jsx
import BasicSlider from "../components/sharedComponents/BasicSlider";

export default function SizesExample() {
  return (
    <div>
      <BasicSlider value={25} label="Extra Small" min={0} max={100} step={1} color="info" size="xs" />
      <BasicSlider value={30} label="Small" min={0} max={100} step={1} color="warning" size="sm" />
      <BasicSlider value={35} label="Medium" min={0} max={100} step={1} color="success" size="md" />
      <BasicSlider value={40} label="Large" min={0} max={100} step={1} color="danger" size="lg" />
      <BasicSlider value={45} label="Extra Large" min={0} max={100} step={1} color="primary" size="xl" />
    </div>
  );
}
```

### Interactive Demo

<SizesExample />

## Disabled and Readonly

### Code Example

```jsx
import BasicSlider from "../components/sharedComponents/BasicSlider";

export default function DisabledReadonlyExample() {
  return (
    <div>
      <BasicSlider value={50} label="Disabled Slider" min={0} max={100} step={1} color="primary" disabled={true} size="md" />
      <BasicSlider value={60} label="Readonly Slider" min={0} max={100} step={1} color="success" readonly={true} size="md" />
    </div>
  );
}
```

### Interactive Demo

<DisabledReadonlyExample />

## Custom Step Values

### Code Example

```jsx
import React, { useState } from "react";
import BasicSlider from "../components/sharedComponents/BasicSlider";

export default function CustomStepValuesExample() {
  const [val, setVal] = useState(60);
  return (
    <div>
      <BasicSlider value={val} onChange={setVal} label="Decimal Control" min={0} max={10} step={0.25} color="info" thumbLabel={true} size="md" />
      <p>Current Value: {val.toFixed(2)}</p>
    </div>
  );
}
```

### Interactive Demo

<CustomStepValuesExample />

## Custom Ranges

### Code Example

```jsx
import BasicSlider from "../components/sharedComponents/BasicSlider";

export default function CustomRangesExample() {
  return (
    <div>
      <BasicSlider value={5} label="Small Range (0-10)" min={0} max={10} step={1} color="primary" size="md" />
      <BasicSlider value={500} label="Large Range (0-1000)" min={0} max={1000} step={10} color="success" size="md" />
      <BasicSlider value={-25} label="Negative Range (-100 to 100)" min={-100} max={100} step={5} color="warning" size="md" />
    </div>
  );
}
```

### Interactive Demo

<CustomRangesExample />

