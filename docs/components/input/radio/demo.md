import {
SingleSelectionDemo,
MultipleSelectionDemo,
SizesDemo,
VariantColorsDemo,
StatesDemo,
ToggleModeDemo,
CustomChildrenDemo
} from "@site/src/demoPages/RadioDemo.jsx";

# Demo

This page demonstrates the Radio component with various configurations and examples.

## Demo 1: Single Selection

### Code Example

```jsx
import React, { useState } from "react";
import BasicRadio from "../components/sharedComponents/BasicRadio";

const SingleSelectionExample = () => {
  const [singleValue, setSingleValue] = useState("");

  const handleSingleChange = (newValue, selectedValue) => {
    console.log("Single radio changed:", { newValue, selectedValue });
    setSingleValue(newValue);
  };

  return (
    <div>
      <BasicRadio
        value="option1"
        modelValue={singleValue}
        onUpdateModelValue={setSingleValue}
        onChange={handleSingleChange}
        label="Option 1"
        size="md"
      />
      <BasicRadio
        value="option2"
        modelValue={singleValue}
        onUpdateModelValue={setSingleValue}
        onChange={handleSingleChange}
        label="Option 2"
        size="md"
      />
      <BasicRadio
        value="option3"
        modelValue={singleValue}
        onUpdateModelValue={setSingleValue}
        onChange={handleSingleChange}
        label="Option 3"
        size="md"
      />
    </div>
  );
};
```

### Interactive Demo

<SingleSelectionDemo />

## Demo 2: Multiple Selection

### Code Example

```jsx
import React, { useState } from "react";
import BasicRadio from "../components/sharedComponents/BasicRadio";

const MultipleSelectionExample = () => {
  const [multipleValues, setMultipleValues] = useState([]);

  const handleMultipleChange = (newValue, selectedValue) => {
    console.log("Multiple radio changed:", { newValue, selectedValue });
    setMultipleValues(newValue);
  };

  return (
    <div>
      <BasicRadio
        value="multi1"
        modelValue={multipleValues}
        onUpdateModelValue={setMultipleValues}
        onChange={handleMultipleChange}
        label="Multi Option 1"
        multiple={true}
        size="md"
      />
      <BasicRadio
        value="multi2"
        modelValue={multipleValues}
        onUpdateModelValue={setMultipleValues}
        onChange={handleMultipleChange}
        label="Multi Option 2"
        multiple={true}
        size="md"
      />
      <BasicRadio
        value="multi3"
        modelValue={multipleValues}
        onUpdateModelValue={setMultipleValues}
        onChange={handleMultipleChange}
        label="Multi Option 3"
        multiple={true}
        size="md"
      />
    </div>
  );
};
```

### Interactive Demo

<MultipleSelectionDemo />

## Demo 3: Sizes

### Code Example

```jsx
import React, { useState } from "react";
import BasicRadio from "../components/sharedComponents/BasicRadio";

const SizesExample = () => {
  const [sizeValue, setSizeValue] = useState("");

  return (
    <div>
      <BasicRadio
        value="xs"
        modelValue={sizeValue}
        onUpdateModelValue={setSizeValue}
        label="Extra Small"
        size="xs"
      />
      <BasicRadio
        value="sm"
        modelValue={sizeValue}
        onUpdateModelValue={setSizeValue}
        label="Small"
        size="sm"
      />
      <BasicRadio
        value="md"
        modelValue={sizeValue}
        onUpdateModelValue={setSizeValue}
        label="Medium"
        size="md"
      />
      <BasicRadio
        value="lg"
        modelValue={sizeValue}
        onUpdateModelValue={setSizeValue}
        label="Large"
        size="lg"
      />
      <BasicRadio
        value="xl"
        modelValue={sizeValue}
        onUpdateModelValue={setSizeValue}
        label="Extra Large"
        size="xl"
      />
    </div>
  );
};
```

### Interactive Demo

<SizesDemo />

## Demo 4: Variant Colors

### Code Example

```jsx
import React, { useState } from "react";
import BasicRadio from "../components/sharedComponents/BasicRadio";

const VariantColorsExample = () => {
  const [colorValue, setColorValue] = useState("default");

  const handleColorChange = (newValue) => {
    setColorValue(newValue);
  };

  return (
    <div>
      <BasicRadio
        value="default"
        modelValue={colorValue}
        onUpdateModelValue={handleColorChange}
        label="Default"
        variant="default"
        size="md"
      />
      <BasicRadio
        value="primary"
        modelValue={colorValue}
        onUpdateModelValue={handleColorChange}
        label="Primary"
        variant="primary"
        size="md"
      />
      <BasicRadio
        value="success"
        modelValue={colorValue}
        onUpdateModelValue={handleColorChange}
        label="Success"
        variant="success"
        size="md"
      />
      <BasicRadio
        value="warning"
        modelValue={colorValue}
        onUpdateModelValue={handleColorChange}
        label="Warning"
        variant="warning"
        size="md"
      />
      <BasicRadio
        value="danger"
        modelValue={colorValue}
        onUpdateModelValue={handleColorChange}
        label="Danger"
        variant="danger"
        size="md"
      />
      <BasicRadio
        value="info"
        modelValue={colorValue}
        onUpdateModelValue={handleColorChange}
        label="Info"
        variant="info"
        size="md"
      />
    </div>
  );
};
```

### Interactive Demo

<VariantColorsDemo />

## Demo 5: States

### Code Example

```jsx
import React, { useState } from "react";
import BasicRadio from "../components/sharedComponents/BasicRadio";

const StatesExample = () => {
  const [stateValue, setStateValue] = useState("");

  return (
    <div>
      <BasicRadio
        value="normal"
        modelValue={stateValue}
        onUpdateModelValue={setStateValue}
        label="Normal"
        size="md"
      />
      <BasicRadio
        value="disabled"
        modelValue={stateValue}
        onUpdateModelValue={setStateValue}
        label="Disabled"
        disabled={true}
        size="md"
      />
      <BasicRadio
        value="readonly"
        modelValue={stateValue}
        onUpdateModelValue={setStateValue}
        label="Readonly"
        readonly={true}
        size="md"
      />
    </div>
  );
};
```

### Interactive Demo

<StatesDemo />

## Demo 6: Toggle Mode

### Code Example

```jsx
import React, { useState } from "react";
import BasicRadio from "../components/sharedComponents/BasicRadio";

const ToggleModeExample = () => {
  const [toggleValue, setToggleValue] = useState("");

  return (
    <div>
      <BasicRadio
        value="toggle1"
        modelValue={toggleValue}
        onUpdateModelValue={setToggleValue}
        label="Toggle Option 1"
        toggle={true}
        size="md"
      />
      <BasicRadio
        value="toggle2"
        modelValue={toggleValue}
        onUpdateModelValue={setToggleValue}
        label="Toggle Option 2"
        toggle={true}
        size="md"
      />
    </div>
  );
};
```

### Interactive Demo

<ToggleModeDemo />

## Demo 7: Custom Children

### Code Example

```jsx
import React, { useState } from "react";
import BasicRadio from "../components/sharedComponents/BasicRadio";

const CustomChildrenExample = () => {
  const [customValue, setCustomValue] = useState("");

  return (
    <div>
      <BasicRadio
        value="custom1"
        modelValue={customValue}
        onUpdateModelValue={setCustomValue}
        label="Custom Icon"
        size="md"
      >
        {({ isChecked }) => (
          <div
            className="custom-radio"
            style={{
              borderColor: isChecked ? "#007bff" : "#ccc",
              backgroundColor: isChecked ? "#007bff" : "white",
            }}
          >
            {isChecked && <span>✓</span>}
          </div>
        )}
      </BasicRadio>
    </div>
  );
};
```

### Interactive Demo

<CustomChildrenDemo />
