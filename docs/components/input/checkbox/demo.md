import {
BasicCheckboxDemo,
SizeVariantsDemo,
StatesDemo,
CustomColorsDemo,
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
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (updatedValue, checkboxValue, event) => {
    setSelectedOptions(updatedValue);
  };

  return (
    <BasicCheckbox
      label="Option 1"
      value="option1"
      selected={selectedOptions}
      onChange={handleSelect}
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

const BasicCheckboxDemo = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (updatedValue, checkboxValue, event) => {
    setSelectedOptions(updatedValue);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <BasicCheckbox
        size="xs"
        label="Extra Small (xs)"
        value="xs"
        selected={selectedOptions}
        onChange={handleSelect}
      />
      <BasicCheckbox
        size="sm"
        label="Small (sm)"
        value="sm"
        selected={selectedOptions}
        onChange={handleSelect}
      />
      <BasicCheckbox
        size="md"
        label="Medium (md) - Default"
        value="md"
        selected={selectedOptions}
        onChange={handleSelect}
      />
      <BasicCheckbox
        size="lg"
        label="Large (lg)"
        value="lg"
        selected={selectedOptions}
        onChange={handleSelect}
      />
      <BasicCheckbox
        size="xl"
        label="Extra Large (xl)"
        value="xl"
        selected={selectedOptions}
        onChange={handleSelect}
      />
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

const BasicCheckboxDemo = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (updatedValue, checkboxValue, event) => {
    setSelectedOptions(updatedValue);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <BasicCheckbox
        label="Normal Checkbox"
        value="normal"
        selected={selectedOptions}
        onChange={handleSelect}
      />
      <BasicCheckbox
        disabled={true}
        label="Disabled Checkbox"
        value="disabled"
        selected={selectedOptions}
        onChange={handleSelect}
      />
      <BasicCheckbox
        readonly={true}
        label="Readonly Checkbox"
        value="readonly"
        selected={selectedOptions}
        onChange={handleSelect}
      />
    </div>
  );
};
```

### Interactive Demo

<StatesDemo />

## Demo 4: Custom Colors

### Code Example

```jsx
import BasicCheckbox from "@/src/components/sharedComponents/BasicCheckbox";
import { useState } from "react";

const BasicCheckboxDemo = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [customColors, setCustomColors] = useState({
    backgroundColor: "#2196F3",
    innerTickColor: "#ffffff",
    labelColor: "#333333",
  });

  const handleSelect = (updatedValue, checkboxValue, event) => {
    setSelectedOptions(updatedValue);
  };

  return (
    <div className="checkbox-demo">
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          Background Color:
          <input
            type="color"
            value={customColors.backgroundColor}
            onChange={(e) =>
              setCustomColors((prev) => ({
                ...prev,
                backgroundColor: e.target.value,
              }))
            }
            style={{ marginLeft: "0.5rem" }}
          />
        </label>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          Tick Color:
          <input
            type="color"
            value={customColors.innerTickColor}
            onChange={(e) =>
              setCustomColors((prev) => ({
                ...prev,
                innerTickColor: e.target.value,
              }))
            }
            style={{ marginLeft: "0.5rem" }}
          />
        </label>
        <label style={{ display: "block", marginBottom: "0.5rem" }}>
          Label Color:
          <input
            type="color"
            value={customColors.labelColor}
            onChange={(e) =>
              setCustomColors((prev) => ({
                ...prev,
                labelColor: e.target.value,
              }))
            }
            style={{ marginLeft: "0.5rem" }}
          />
        </label>
      </div>
      <BasicCheckbox
        label="Custom Colored Checkbox"
        value="custom"
        selected={selectedOptions}
        onChange={handleSelect}
        backgroundColor={customColors.backgroundColor}
        innerTickColor={customColors.innerTickColor}
        labelColor={customColors.labelColor}
      />
    </div>
  );
};
```

### Interactive Demo

<CustomColorsDemo />

## Demo 5: Select All Functionality

### Code Example

```jsx
import BasicCheckbox from "@/src/components/sharedComponents/BasicCheckbox";
import { useState } from "react";

const BasicCheckboxDemo = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleSelect = (updatedValue, checkboxValue, event) => {
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
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <BasicCheckbox
        label="Select All Items"
        value="selectAll"
        selected={selectedOptions}
        onChange={handleSelect}
        allItems={sampleItems}
        valueKey="id"
      />
      <div
        style={{
          marginLeft: "2rem",
          borderLeft: "2px solid #eeeeee",
          paddingLeft: "1rem",
        }}
      >
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

const BasicCheckboxDemo = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleSelect = (updatedValue, checkboxValue, event) => {
    setSelectedOptions(updatedValue);
  };

  const CustomIcon = ({ isChecked }) => (
    <div
      style={{
        width: "20px",
        height: "20px",
        border: "2px solid #ff6b6b",
        borderRadius: "4px",
        backgroundColor: isChecked ? "#ff6b6b" : "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "12px",
        fontWeight: "bold",
      }}
    >
      {isChecked ? "✓" : ""}
    </div>
  );

  const CustomLabel = ({ isChecked }) => (
    <span
      style={{
        color: isChecked ? "#ff6b6b" : "#666666",
        fontWeight: isChecked ? "bold" : "normal",
      }}
    >
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

const BasicCheckboxDemo = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (updatedValue, checkboxValue, event) => {
    setSelectedOptions(updatedValue);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1rem",
      }}
    >
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

const BasicCheckboxDemo = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (updatedValue, checkboxValue, event) => {
    setSelectedOptions(updatedValue);
  };

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
        }}
      >
        {["Option A", "Option B", "Option C", "Option D"].map(
          (option, index) => (
            <BasicCheckbox
              key={index}
              label={option}
              value={`option-${index}`}
              selected={selectedOptions}
              onChange={handleSelect}
            />
          )
        )}
      </div>

      <div
        style={{
          padding: "1rem",
          backgroundColor: "#f5f5f5",
          borderRadius: "4px",
          marginTop: "1rem",
        }}
      >
        <strong>Currently Selected:</strong>
        <div style={{ marginTop: "0.5rem" }}>
          {selectedOptions.length > 0 ? (
            <ul style={{ margin: 0, paddingLeft: "1rem" }}>
              {selectedOptions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <em>No items selected</em>
          )}
        </div>
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

const BasicCheckboxDemo = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (updatedValue, checkboxValue, event) => {
    setSelectedOptions(updatedValue);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <BasicCheckbox
        label="String Value"
        value="string-value"
        selected={selectedOptions}
        onChange={handleSelect}
      />
      <BasicCheckbox
        label="Number Value"
        value={42}
        selected={selectedOptions}
        onChange={handleSelect}
      />
      <BasicCheckbox
        label="Boolean Value"
        value={true}
        selected={selectedOptions}
        onChange={handleSelect}
      />
    </div>
  );
};
```

### Interactive Demo

<ValueTypesDemo />
