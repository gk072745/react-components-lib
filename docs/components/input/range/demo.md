import {
BasicRangeDemo,
VariantColorsDemo,
SizesDemo,
StepControlDemo,
ThumbLabelsDemo,
StatesDemo,
CustomRangesDemo
} from "@site/src/demoPages/RangeDemo.jsx";

# Demo

This page demonstrates the Range component with various configurations and examples.

## Demo 1: Basic Range

### Code Example

```jsx
import React, { useState } from "react";
import BasicRange from "../components/sharedComponents/BasicRange";

const BasicRangeExample = () => {
  const [rangeValues, setRangeValues] = useState([20, 80]);

  const handleRangeChange = (values) => {
    console.log("Basic range changed:", values);
    setRangeValues(values);
  };

  return (
    <BasicRange
      value={rangeValues}
      onChange={handleRangeChange}
      min={0}
      max={100}
      label="Basic Range Slider"
    />
  );
};
```

### Interactive Demo

<BasicRangeDemo />

## Demo 2: Variant Colors

### Code Example

```jsx
import React, { useState } from "react";
import BasicRange from "../components/sharedComponents/BasicRange";

const VariantColorsExample = () => {
  const [colorValues, setColorValues] = useState([30, 70]);

  return (
    <div>
      <BasicRange
        value={colorValues}
        onChange={setColorValues}
        min={0}
        max={100}
        variant="default"
        label="Default"
      />
      <BasicRange
        value={colorValues}
        onChange={setColorValues}
        min={0}
        max={100}
        variant="primary"
        label="Primary"
      />
      <BasicRange
        value={colorValues}
        onChange={setColorValues}
        min={0}
        max={100}
        variant="success"
        label="Success"
      />
      <BasicRange
        value={colorValues}
        onChange={setColorValues}
        min={0}
        max={100}
        variant="warning"
        label="Warning"
      />
      <BasicRange
        value={colorValues}
        onChange={setColorValues}
        min={0}
        max={100}
        variant="danger"
        label="Danger"
      />
      <BasicRange
        value={colorValues}
        onChange={setColorValues}
        min={0}
        max={100}
        variant="info"
        label="Info"
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
import BasicRange from "../components/sharedComponents/BasicRange";

const SizesExample = () => {
  const [sizeValues, setSizeValues] = useState([25, 75]);

  return (
    <div>
      <BasicRange
        value={sizeValues}
        onChange={setSizeValues}
        min={0}
        max={100}
        size="xs"
        label="Extra Small"
      />
      <BasicRange
        value={sizeValues}
        onChange={setSizeValues}
        min={0}
        max={100}
        size="sm"
        label="Small"
      />
      <BasicRange
        value={sizeValues}
        onChange={setSizeValues}
        min={0}
        max={100}
        size="md"
        label="Medium"
      />
      <BasicRange
        value={sizeValues}
        onChange={setSizeValues}
        min={0}
        max={100}
        size="lg"
        label="Large"
      />
      <BasicRange
        value={sizeValues}
        onChange={setSizeValues}
        min={0}
        max={100}
        size="xl"
        label="Extra Large"
      />
    </div>
  );
};
```

### Interactive Demo

<SizesDemo />

## Demo 4: Step Control

### Code Example

```jsx
import React, { useState } from "react";
import BasicRange from "../components/sharedComponents/BasicRange";

const StepControlExample = () => {
  const [stepValues, setStepValues] = useState([20, 80]);

  return (
    <div>
      <BasicRange
        value={stepValues}
        onChange={setStepValues}
        min={0}
        max={100}
        step={1}
        label="Step: 1"
      />
      <BasicRange
        value={stepValues}
        onChange={setStepValues}
        min={0}
        max={100}
        step={5}
        label="Step: 5"
      />
      <BasicRange
        value={stepValues}
        onChange={setStepValues}
        min={0}
        max={100}
        step={10}
        label="Step: 10"
      />
      <BasicRange
        value={stepValues}
        onChange={setStepValues}
        min={0}
        max={100}
        step={0.1}
        label="Step: 0.1"
      />
    </div>
  );
};
```

### Interactive Demo

<StepControlDemo />

## Demo 5: Thumb Labels

### Code Example

```jsx
import React, { useState } from "react";
import BasicRange from "../components/sharedComponents/BasicRange";

const ThumbLabelsExample = () => {
  const [labelValues, setLabelValues] = useState([30, 70]);

  return (
    <div>
      <BasicRange
        value={labelValues}
        onChange={setLabelValues}
        min={0}
        max={100}
        thumbLabel={true}
        label="Labels on Drag/Focus"
      />
      <BasicRange
        value={labelValues}
        onChange={setLabelValues}
        min={0}
        max={100}
        thumbLabel="always"
        label="Always Visible Labels"
      />
      <BasicRange
        value={labelValues}
        onChange={setLabelValues}
        min={0}
        max={100}
        thumbLabel={false}
        label="No Labels"
      />
    </div>
  );
};
```

### Interactive Demo

<ThumbLabelsDemo />

## Demo 6: States

### Code Example

```jsx
import React, { useState } from "react";
import BasicRange from "../components/sharedComponents/BasicRange";

const StatesExample = () => {
  const [stateValues, setStateValues] = useState([40, 60]);

  return (
    <div>
      <BasicRange
        value={stateValues}
        onChange={setStateValues}
        min={0}
        max={100}
        label="Normal"
      />
      <BasicRange
        value={stateValues}
        onChange={setStateValues}
        min={0}
        max={100}
        disabled={true}
        label="Disabled"
      />
      <BasicRange
        value={stateValues}
        onChange={setStateValues}
        min={0}
        max={100}
        readonly={true}
        label="Readonly"
      />
    </div>
  );
};
```

### Interactive Demo

<StatesDemo />

## Demo 7: Custom Ranges

### Code Example

```jsx
import React, { useState } from "react";
import BasicRange from "../components/sharedComponents/BasicRange";

const CustomRangesExample = () => {
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [ageRange, setAgeRange] = useState([18, 65]);
  const [ratingRange, setRatingRange] = useState([3, 5]);

  return (
    <div>
      <BasicRange
        value={priceRange}
        onChange={setPriceRange}
        min={0}
        max={500}
        step={10}
        variant="primary"
        thumbLabel={true}
        label="Price Range ($)"
      />
      <BasicRange
        value={ageRange}
        onChange={setAgeRange}
        min={0}
        max={100}
        step={1}
        variant="success"
        thumbLabel={true}
        label="Age Range"
      />
      <BasicRange
        value={ratingRange}
        onChange={setRatingRange}
        min={1}
        max={5}
        step={0.5}
        variant="warning"
        thumbLabel="always"
        label="Rating Range"
      />
    </div>
  );
};
```

### Interactive Demo

<CustomRangesDemo />
