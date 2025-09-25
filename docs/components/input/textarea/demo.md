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
import TextareaDemo from "@site/src/demoPages/TextareaDemo.jsx";

# Demo

This page demonstrates the BasicTextarea component with various configurations and examples.

## Demo 1: Basic Textarea

### Code Example

```jsx
import BasicTextarea from "@/src/components/sharedComponents/BasicTextarea";
import { useState } from "react";

const BasicTextareaDemo = () => {
  const [basicValue, setBasicValue] = useState("");

  const handleBasicChange = (newValue) => {
    setBasicValue(newValue);
    console.log("Basic textarea changed:", newValue);
  };

  return (
    <BasicTextarea
      label="Basic Textarea"
      placeholder="Enter your message here..."
      value={basicValue}
      onChange={handleBasicChange}
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
import BasicTextarea from "@/src/components/sharedComponents/BasicTextarea";
import { useState } from "react";

const AutoGrowDemo = () => {
  const [autoGrowValue, setAutoGrowValue] = useState("");

  const handleAutoGrowChange = (newValue) => {
    setAutoGrowValue(newValue);
    console.log("Auto grow textarea changed:", newValue);
  };

  return (
    <BasicTextarea
      label="Auto Grow Textarea"
      placeholder="Type to see auto-resize..."
      value={autoGrowValue}
      onChange={handleAutoGrowChange}
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
import BasicTextarea from "@/src/components/sharedComponents/BasicTextarea";
import { useState } from "react";

const CounterDemo = () => {
  const [counterValue, setCounterValue] = useState("");

  const handleCounterChange = (newValue) => {
    setCounterValue(newValue);
    console.log("Counter textarea changed:", newValue);
  };

  return (
    <BasicTextarea
      label="With Character Counter"
      placeholder="Type to see character count..."
      value={counterValue}
      onChange={handleCounterChange}
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
import BasicTextarea from "@/src/components/sharedComponents/BasicTextarea";
import { useState } from "react";

const ValidationDemo = () => {
  const [validationValue, setValidationValue] = useState("");

  const handleValidationChange = (newValue) => {
    setValidationValue(newValue);
    console.log("Validation textarea changed:", newValue);
  };

  return (
    <BasicTextarea
      label="With Validation"
      placeholder="Enter at least 10 characters..."
      value={validationValue}
      onChange={handleValidationChange}
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
import BasicTextarea from "@/src/components/sharedComponents/BasicTextarea";
import { useState } from "react";

const NoResizeDemo = () => {
  const [noResizeValue, setNoResizeValue] = useState("");

  const handleNoResizeChange = (newValue) => {
    setNoResizeValue(newValue);
    console.log("No resize textarea changed:", newValue);
  };

  return (
    <BasicTextarea
      label="No Resize Textarea"
      placeholder="This textarea cannot be resized..."
      value={noResizeValue}
      onChange={handleNoResizeChange}
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
import BasicTextarea from "@/src/components/sharedComponents/BasicTextarea";

const StatesDemo = () => {
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
import BasicTextarea from "@/src/components/sharedComponents/BasicTextarea";
import { useState } from "react";

const CustomIconsDemo = () => {
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
      prepend={true}
      append={true}
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
import BasicTextarea from "@/src/components/sharedComponents/BasicTextarea";
import { useState } from "react";

const AllFeaturesDemo = () => {
  const [allFeaturesValue, setAllFeaturesValue] = useState("");

  const handleAllFeaturesChange = (newValue) => {
    setAllFeaturesValue(newValue);
    console.log("All features textarea changed:", newValue);
  };

  return (
    <BasicTextarea
      label="Feature-Rich Textarea"
      placeholder="Try all features..."
      value={allFeaturesValue}
      onChange={handleAllFeaturesChange}
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

## Demo 9: Complete Demo

### Interactive Demo

<TextareaDemo />
