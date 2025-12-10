import {
  BasicTextareaDemo,
  AutoGrowDemo,
  CounterDemo,
  ValidationDemo,
  NoResizeDemo,
  StatesDemo,
  CustomIconsDemo,
  AllFeaturesDemo
} from "@site/src/demoPages/TextareaDemo.jsx";

# Demo

This page demonstrates the BasicTextarea component with various configurations and examples.

## Demo 1: Basic Textarea

### Code Example

```jsx
import React, { useState } from "react";
import BasicTextarea from "../components/sharedComponents/BasicTextarea";

const BasicTextareaExample = () => {
  const [basicValue, setBasicValue] = useState("");

  return (
    <BasicTextarea
      label="Basic Textarea"
      placeholder="Enter your message here..."
      value={basicValue}
      onChange={setBasicValue}
      hint="This is a basic textarea with default settings"
    />
  );
};
```

### Interactive Demo

<BasicTextareaDemo />

## Demo 2: Auto Grow Textarea

### Code Example

```jsx
import React, { useState } from "react";
import BasicTextarea from "../components/sharedComponents/BasicTextarea";

const AutoGrowExample = () => {
  const [autoGrowValue, setAutoGrowValue] = useState("");

  return (
    <BasicTextarea
      label="Auto Grow Textarea"
      placeholder="Type to see auto-resize..."
      value={autoGrowValue}
      onChange={setAutoGrowValue}
      autoGrow={true}
      minRows={2}
      hint="This textarea automatically grows as you type"
    />
  );
};
```

### Interactive Demo

<AutoGrowDemo />

## Demo 3: Character Counter

### Code Example

```jsx
import React, { useState } from "react";
import BasicTextarea from "../components/sharedComponents/BasicTextarea";

const CounterExample = () => {
  const [counterValue, setCounterValue] = useState("");

  return (
    <BasicTextarea
      label="With Character Counter"
      placeholder="Type to see character count..."
      value={counterValue}
      onChange={setCounterValue}
      maxlength={100}
      counter={true}
      hint="Shows character count with maximum limit"
    />
  );
};
```

### Interactive Demo

<CounterDemo />

## Demo 4: Validation Rules

### Code Example

```jsx
import React, { useState } from "react";
import BasicTextarea from "../components/sharedComponents/BasicTextarea";

const ValidationExample = () => {
  const [validationValue, setValidationValue] = useState("");

  return (
    <BasicTextarea
      label="With Validation"
      placeholder="Enter at least 10 characters..."
      value={validationValue}
      onChange={setValidationValue}
      rules={[
        { rule: "required", message: "This field is required" },
        { rule: "minLength", condition: 10, message: "Must be at least 10 characters" },
      ]}
      hint="This textarea has validation rules"
    />
  );
};
```

### Interactive Demo

<ValidationDemo />

## Demo 5: No Resize

### Code Example

```jsx
import React, { useState } from "react";
import BasicTextarea from "../components/sharedComponents/BasicTextarea";

const NoResizeExample = () => {
  const [noResizeValue, setNoResizeValue] = useState("");

  return (
    <BasicTextarea
      label="No Resize Textarea"
      placeholder="This textarea cannot be resized..."
      value={noResizeValue}
      onChange={setNoResizeValue}
      noResize={true}
      rows={4}
      hint="This textarea has resize disabled"
    />
  );
};
```

### Interactive Demo

<NoResizeDemo />

## Demo 6: Different States

### Code Example

```jsx
import React, { useState } from "react";
import BasicTextarea from "../components/sharedComponents/BasicTextarea";

const StatesExample = () => {
  const [loadingValue, setLoadingValue] = useState("");
  const [disabledValue] = useState("This textarea is disabled");
  const [readonlyValue] = useState("This textarea is readonly");

  return (
    <div className="textarea-grid">
      <BasicTextarea
        label="Disabled Textarea"
        value={disabledValue}
        disabled={true}
        hint="This textarea is disabled"
      />
      <BasicTextarea
        label="Loading Textarea"
        placeholder="This textarea is loading..."
        value={loadingValue}
        onChange={setLoadingValue}
        loading={true}
        hint="This textarea shows loading state"
      />
      <BasicTextarea
        label="Readonly Textarea"
        value={readonlyValue}
        readonly={true}
        hint="This textarea is readonly"
      />
    </div>
  );
};
```

### Interactive Demo

<StatesDemo />

## Demo 7: Custom Icons

### Code Example

```jsx
import React, { useState } from "react";
import BasicTextarea from "../components/sharedComponents/BasicTextarea";

const CustomIconsExample = () => {
  const [customIconsValue, setCustomIconsValue] = useState("");

  const customPrependIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2z" fill="#1C274C" />
    </svg>
  );

  const customAppendIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2z" fill="#1C274C" />
    </svg>
  );

  return (
    <BasicTextarea
      label="Custom Icons"
      placeholder="Textarea with custom icons..."
      value={customIconsValue}
      onChange={setCustomIconsValue}
      prependIcon={customPrependIcon}
      appendIcon={customAppendIcon}
      hint="This textarea has custom icons"
    />
  );
};
```

### Interactive Demo

<CustomIconsDemo />

## Demo 8: All Features Combined

### Code Example

```jsx
import React, { useState } from "react";
import BasicTextarea from "../components/sharedComponents/BasicTextarea";

const AllFeaturesExample = () => {
  const [allFeaturesValue, setAllFeaturesValue] = useState("");

  return (
    <BasicTextarea
      label="Feature-Rich Textarea"
      placeholder="Try all features..."
      value={allFeaturesValue}
      onChange={setAllFeaturesValue}
      autoGrow={true}
      counter={true}
      maxlength={200}
      rows={3}
      minRows={2}
      rules={[
        { rule: "required", message: "This field is required" },
        { rule: "minLength", condition: 5, message: "Must be at least 5 characters" },
      ]}
      hint="This textarea demonstrates all available features"
    />
  );
};
```

### Interactive Demo

<AllFeaturesDemo />
