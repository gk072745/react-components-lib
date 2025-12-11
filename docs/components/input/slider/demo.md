import {
  BasicSliderDemo,
  VariantColorsDemo,
  SizesDemo,
  ThumbLabelsDemo,
  StepControlDemo,
  CustomRangesDemo,
  StatesDemo,
  WithLabelsDemo
} from "@site/src/demoPages/SliderDemo.jsx";

# Demo

This page demonstrates the Slider component with various configurations and examples.

## Demo 1: Basic Slider

### Code Example

```jsx
import React, { useState } from "react";
import BasicSlider from "../components/sharedComponents/BasicSlider";

const BasicSliderExample = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (newValue) => {
    console.log("Basic slider changed:", newValue);
    setSliderValue(newValue);
  };

  return (
    <BasicSlider
      value={sliderValue}
      onChange={handleSliderChange}
      label="Volume Control"
      min={0}
      max={100}
      step={1}
      variant="primary"
      size="md"
    />
  );
};
```

### Interactive Demo

<BasicSliderDemo />

## Demo 2: Variant Colors

### Code Example

```jsx
import React, { useState } from "react";
import BasicSlider from "../components/sharedComponents/BasicSlider";

const VariantColorsExample = () => {
  const [defaultValue, setDefaultValue] = useState(50);
  const [primaryValue, setPrimaryValue] = useState(60);
  const [successValue, setSuccessValue] = useState(70);
  const [warningValue, setWarningValue] = useState(80);
  const [dangerValue, setDangerValue] = useState(90);
  const [infoValue, setInfoValue] = useState(40);

  return (
    <div>
      <BasicSlider
        value={defaultValue}
        onChange={setDefaultValue}
        label="Default"
        min={0}
        max={100}
        step={1}
        variant="default"
        size="md"
      />
      <BasicSlider
        value={primaryValue}
        onChange={setPrimaryValue}
        label="Primary"
        min={0}
        max={100}
        step={1}
        variant="primary"
        size="md"
      />
      <BasicSlider
        value={successValue}
        onChange={setSuccessValue}
        label="Success"
        min={0}
        max={100}
        step={1}
        variant="success"
        size="md"
      />
      <BasicSlider
        value={warningValue}
        onChange={setWarningValue}
        label="Warning"
        min={0}
        max={100}
        step={1}
        variant="warning"
        size="md"
      />
      <BasicSlider
        value={dangerValue}
        onChange={setDangerValue}
        label="Danger"
        min={0}
        max={100}
        step={1}
        variant="danger"
        size="md"
      />
      <BasicSlider
        value={infoValue}
        onChange={setInfoValue}
        label="Info"
        min={0}
        max={100}
        step={1}
        variant="info"
        size="md"
      />
    </div>
  );
};
```

### Interactive Demo

<VariantColorsDemo />

## Demo 3: Size Variants

### Code Example

```jsx
import React, { useState } from "react";
import BasicSlider from "../components/sharedComponents/BasicSlider";

const SizesExample = () => {
  const [xsValue, setXsValue] = useState(25);
  const [smValue, setSmValue] = useState(30);
  const [mdValue, setMdValue] = useState(35);
  const [lgValue, setLgValue] = useState(40);
  const [xlValue, setXlValue] = useState(45);

  return (
    <div>
      <BasicSlider
        value={xsValue}
        onChange={setXsValue}
        label="Extra Small (xs)"
        min={0}
        max={100}
        step={1}
        variant="info"
        size="xs"
      />
      <BasicSlider
        value={smValue}
        onChange={setSmValue}
        label="Small (sm)"
        min={0}
        max={100}
        step={1}
        variant="warning"
        size="sm"
      />
      <BasicSlider
        value={mdValue}
        onChange={setMdValue}
        label="Medium (md)"
        min={0}
        max={100}
        step={1}
        variant="success"
        size="md"
      />
      <BasicSlider
        value={lgValue}
        onChange={setLgValue}
        label="Large (lg)"
        min={0}
        max={100}
        step={1}
        variant="danger"
        size="lg"
      />
      <BasicSlider
        value={xlValue}
        onChange={setXlValue}
        label="Extra Large (xl)"
        min={0}
        max={100}
        step={1}
        variant="primary"
        size="xl"
      />
    </div>
  );
};
```

### Interactive Demo

<SizesDemo />

## Demo 4: Thumb Labels

### Code Example

```jsx
import React, { useState } from "react";
import BasicSlider from "../components/sharedComponents/BasicSlider";

const ThumbLabelsExample = () => {
  const [thumbLabelValue, setThumbLabelValue] = useState(75);
  const [alwaysLabelValue, setAlwaysLabelValue] = useState(25);

  return (
    <div>
      <BasicSlider
        value={thumbLabelValue}
        onChange={setThumbLabelValue}
        label="Show on Drag/Focus"
        min={-50}
        max={150}
        step={5}
        variant="success"
        thumbLabel={true}
        size="lg"
      />
      <BasicSlider
        value={alwaysLabelValue}
        onChange={setAlwaysLabelValue}
        label="Always Visible"
        min={0}
        max={100}
        step={0.1}
        variant="danger"
        thumbLabel="always"
        size="md"
      />
    </div>
  );
};
```

### Interactive Demo

<ThumbLabelsDemo />

## Demo 5: Step Control

### Code Example

```jsx
import React, { useState } from "react";
import BasicSlider from "../components/sharedComponents/BasicSlider";

const StepControlExample = () => {
  const [decimalValue, setDecimalValue] = useState(60);

  return (
    <BasicSlider
      value={decimalValue}
      onChange={setDecimalValue}
      label="Decimal Control (step: 0.25)"
      min={0}
      max={10}
      step={0.25}
      variant="info"
      thumbLabel={true}
      size="md"
    />
  );
};
```

### Interactive Demo

<StepControlDemo />

## Demo 6: Custom Ranges

### Code Example

```jsx
import React, { useState } from "react";
import BasicSlider from "../components/sharedComponents/BasicSlider";

const CustomRangesExample = () => {
  const [smallRangeValue, setSmallRangeValue] = useState(5);
  const [largeRangeValue, setLargeRangeValue] = useState(500);
  const [negativeRangeValue, setNegativeRangeValue] = useState(-25);

  return (
    <div>
      <BasicSlider
        value={smallRangeValue}
        onChange={setSmallRangeValue}
        label="Small Range (0-10)"
        min={0}
        max={10}
        step={1}
        variant="primary"
        size="md"
      />
      <BasicSlider
        value={largeRangeValue}
        onChange={setLargeRangeValue}
        label="Large Range (0-1000)"
        min={0}
        max={1000}
        step={10}
        variant="success"
        size="md"
      />
      <BasicSlider
        value={negativeRangeValue}
        onChange={setNegativeRangeValue}
        label="Negative Range (-100 to 100)"
        min={-100}
        max={100}
        step={5}
        variant="warning"
        size="md"
      />
    </div>
  );
};
```

### Interactive Demo

<CustomRangesDemo />

## Demo 7: States

### Code Example

```jsx
import React from "react";
import BasicSlider from "../components/sharedComponents/BasicSlider";

const StatesExample = () => {
  return (
    <div>
      <BasicSlider
        value={50}
        label="Disabled Slider"
        min={0}
        max={100}
        step={1}
        variant="primary"
        disabled={true}
        size="md"
      />
      <BasicSlider
        value={60}
        label="Readonly Slider"
        min={0}
        max={100}
        step={1}
        variant="success"
        readonly={true}
        size="md"
      />
    </div>
  );
};
```

### Interactive Demo

<StatesDemo />

## Demo 8: With Labels

### Code Example

```jsx
import React, { useState } from "react";
import BasicSlider from "../components/sharedComponents/BasicSlider";

const WithLabelsExample = () => {
  const [labeledValue, setLabeledValue] = useState(50);

  return (
    <BasicSlider
      value={labeledValue}
      onChange={setLabeledValue}
      label="Volume"
      min={0}
      max={100}
      step={1}
      variant="primary"
      size="md"
    />
  );
};
```

### Interactive Demo

<WithLabelsDemo />
