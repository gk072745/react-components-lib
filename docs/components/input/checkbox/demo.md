import {
  BasicCheckboxDemo,
  SizeVariantsDemo,
  StatesDemo,
  VariantColorsDemo,
  SelectAllDemo,
  CustomIconDemo,
  MultipleCheckboxesDemo,
  SelectionDisplayDemo,
  ValueTypesDemo
} from "@site/src/demoPages/CheckboxDemo.jsx";

# Demo

This page demonstrates the Checkbox component with various configurations and examples.

## Demo 1: Basic Checkbox

### Code Example

```jsx
import BasicCheckbox from "@/src/components/sharedComponents/BasicCheckbox";
import { useState } from "react";

const BasicCheckboxDemo = () => {
  const [singleState, setSingleState] = useState(["option1"]);

  return (
    <BasicCheckbox
      label="Interactive Option 1"
      value="option1"
      selected={singleState}
      onChange={(updatedValue, checkboxValue) => {
        setSingleState(updatedValue);
      }}
    />
  );
};
```

### Interactive Demo

<BasicCheckboxDemo />

## Demo 2: Size Variants

### Code Example

```jsx
import BasicCheckbox from "@/src/components/sharedComponents/BasicCheckbox";
import { useState } from "react";

const SizeVariantsDemo = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (updatedValue) => {
    setSelectedOptions(updatedValue);
  };

  return (
    <div>
      <BasicCheckbox size="xs" label="Extra Small (xs)" value="xs" selected={selectedOptions} onChange={handleSelect} />
      <BasicCheckbox size="sm" label="Small (sm)" value="sm" selected={selectedOptions} onChange={handleSelect} />
      <BasicCheckbox size="md" label="Medium (md) - Default" value="md" selected={selectedOptions} onChange={handleSelect} />
      <BasicCheckbox size="lg" label="Large (lg)" value="lg" selected={selectedOptions} onChange={handleSelect} />
      <BasicCheckbox size="xl" label="Extra Large (xl)" value="xl" selected={selectedOptions} onChange={handleSelect} />
    </div>
  );
};
```

### Interactive Demo

<SizeVariantsDemo />

## Demo 3: Disabled and Readonly States

### Code Example

```jsx
import BasicCheckbox from "@/src/components/sharedComponents/BasicCheckbox";
import { useState } from "react";

const StatesDemo = () => {
  const [selectedOptions, setSelectedOptions] = useState(["readonly"]);

  const handleSelect = (updatedValue) => {
    setSelectedOptions(updatedValue);
  };

  return (
    <div>
      <BasicCheckbox label="Normal" value="normal" selected={selectedOptions} onChange={handleSelect} />
      <BasicCheckbox disabled={true} label="Disabled" value="disabled" selected={selectedOptions} onChange={handleSelect} />
      <BasicCheckbox readonly={true} label="Readonly" value="readonly" selected={selectedOptions} onChange={handleSelect} />
    </div>
  );
};
```

### Interactive Demo

<StatesDemo />

## Demo 4: Variant Colors

### Code Example

```jsx
import BasicCheckbox from "@/src/components/sharedComponents/BasicCheckbox";
import { useState } from "react";

const VariantColorsDemo = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (updatedValue) => {
    setSelectedOptions(updatedValue);
  };

  return (
    <div>
      <BasicCheckbox variant="default" label="Default Variant (Black)" value="default" selected={selectedOptions} onChange={handleSelect} />
      <BasicCheckbox variant="info" label="Info Variant (Blue)" value="info" selected={selectedOptions} onChange={handleSelect} />
    </div>
  );
};
```

### Interactive Demo

<VariantColorsDemo />

## Demo 5: Select All Functionality

### Code Example

```jsx
import BasicCheckbox from "@/src/components/sharedComponents/BasicCheckbox";
import { useState } from "react";

const SelectAllDemo = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (updatedValue) => {
    setSelectedOptions(updatedValue);
  };

  const sampleItems = [
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Banana", category: "Fruit" },
    { id: 3, name: "Carrot", category: "Vegetable" },
    { id: 4, name: "Tomato", category: "Vegetable" },
    { id: 5, name: "Orange", category: "Fruit" },
  ];

  return (
    <div>
      <BasicCheckbox
        label="Select All Items"
        value="selectAll"
        selected={selectedOptions}
        onChange={handleSelect}
        allItems={sampleItems}
        valueKey="id"
      />
      {sampleItems.map((item) => (
        <BasicCheckbox
          key={item.id}
          label={item.name}
          value={item.id}
          selected={selectedOptions}
          onChange={handleSelect}
        />
      ))}
    </div>
  );
};
```

### Interactive Demo

<SelectAllDemo />

## Demo 6: Custom Icon and Label

### Code Example

```jsx
import BasicCheckbox from "@/src/components/sharedComponents/BasicCheckbox";
import { useState } from "react";

const CustomIconDemo = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (updatedValue) => {
    setSelectedOptions(updatedValue);
  };

  const CustomIcon = ({ isChecked }) => (
    <div className="custom-icon">{isChecked ? "■" : ""}</div>
  );

  const CustomLabel = ({ isChecked }) => (
    <span className={`custom-label ${isChecked ? "selected" : ""}`}>
      Custom Label {isChecked ? "(Selected)" : "(Not Selected)"}
    </span>
  );

  return (
    <BasicCheckbox
      label="Custom Icon and Label"
      value="custom"
      selected={selectedOptions}
      onChange={handleSelect}
      icon={CustomIcon}
      labelSlot={CustomLabel}
    />
  );
};
```

### Interactive Demo

<CustomIconDemo />

## Demo 7: Multiple Checkboxes

### Code Example

```jsx
import BasicCheckbox from "@/src/components/sharedComponents/BasicCheckbox";
import { useState } from "react";

const MultipleCheckboxesDemo = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (updatedValue) => {
    setSelectedOptions(updatedValue);
  };

  return (
    <div>
      {["Option A", "Option B", "Option C", "Option D"].map((option, index) => (
        <BasicCheckbox
          key={index}
          label={option}
          value={`option-${index}`}
          selected={selectedOptions}
          onChange={handleSelect}
        />
      ))}
    </div>
  );
};
```

### Interactive Demo

<MultipleCheckboxesDemo />

## Demo 8: Current Selection Display

### Code Example

```jsx
import BasicCheckbox from "@/src/components/sharedComponents/BasicCheckbox";
import { useState } from "react";

const SelectionDisplayDemo = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (updatedValue) => {
    setSelectedOptions(updatedValue);
  };

  return (
    <div>
      {["Option A", "Option B", "Option C", "Option D"].map((option, index) => (
        <BasicCheckbox
          key={index}
          label={option}
          value={`option-${index}`}
          selected={selectedOptions}
          onChange={handleSelect}
        />
      ))}
      <div>
        <strong>Currently Selected:</strong>
        {selectedOptions.length > 0 ? (
          <ul>
            {selectedOptions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <em>No items selected</em>
        )}
      </div>
    </div>
  );
};
```

### Interactive Demo

<SelectionDisplayDemo />

## Demo 9: Different Value Types

### Code Example

```jsx
import BasicCheckbox from "@/src/components/sharedComponents/BasicCheckbox";
import { useState } from "react";

const ValueTypesDemo = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (updatedValue) => {
    setSelectedOptions(updatedValue);
  };

  return (
    <div>
      <BasicCheckbox label="String Value" value="string-value" selected={selectedOptions} onChange={handleSelect} />
      <BasicCheckbox label="Number Value" value={42} selected={selectedOptions} onChange={handleSelect} />
      <BasicCheckbox label="Boolean Value" value={true} selected={selectedOptions} onChange={handleSelect} />
    </div>
  );
};
```

### Interactive Demo

<ValueTypesDemo />
