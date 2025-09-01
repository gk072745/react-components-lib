# Radio

A versatile and customizable radio button component that supports both single and multiple selection modes.

## Features

- **Single & Multiple Selection**: Support for both traditional single selection and multiple selection modes
- **Customizable Sizing**: Five different sizes from extra small to extra large
- **Color Customization**: Customizable colors for both the radio button and label
- **Toggle Mode**: Ability to deselect options in single selection mode
- **Custom Icons**: Support for custom radio icons and render functions
- **Accessibility**: Full keyboard navigation and screen reader support
- **State Management**: Support for disabled and readonly states
- **Flexible Value Types**: Support for string, number, and boolean values

## Use Cases

- **Form Inputs**: Standard form radio button groups
- **Settings Panels**: Configuration options and preferences
- **Filter Controls**: Multiple selection filters for data
- **Quiz Applications**: Multiple choice questions
- **Custom UI Elements**: Custom radio-like components with custom icons

## Key Features

### Single Selection Mode

Traditional radio button behavior where only one option can be selected at a time.

```jsx
<BasicRadio
  value="option1"
  modelValue={selectedValue}
  onUpdateModelValue={setSelectedValue}
  label="Option 1"
/>
```

### Multiple Selection Mode

Allows multiple options to be selected simultaneously, similar to checkboxes.

```jsx
<BasicRadio
  value="option1"
  modelValue={selectedValues}
  onUpdateModelValue={setSelectedValues}
  multiple={true}
  label="Option 1"
/>
```

### Toggle Mode

Enables deselection of options in single selection mode.

```jsx
<BasicRadio
  value="option1"
  modelValue={selectedValue}
  onUpdateModelValue={setSelectedValue}
  toggle={true}
  label="Toggle Option"
/>
```

### Custom Icons

Support for custom radio icons using render functions.

```jsx
<BasicRadio
  value="option1"
  modelValue={selectedValue}
  onUpdateModelValue={setSelectedValue}
  label="Custom Icon"
>
  {({ isChecked }) => (
    <div className={`custom-radio ${isChecked ? "checked" : ""}`}>
      {isChecked && <span>✓</span>}
    </div>
  )}
</BasicRadio>
```

## Basic Usage

```jsx
import React, { useState } from "react";
import BasicRadio from "../components/sharedComponents/BasicRadio";

const RadioExample = () => {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div>
      <BasicRadio
        value="option1"
        modelValue={selectedValue}
        onUpdateModelValue={setSelectedValue}
        label="Option 1"
        size="md"
      />
      <BasicRadio
        value="option2"
        modelValue={selectedValue}
        onUpdateModelValue={setSelectedValue}
        label="Option 2"
        size="md"
      />
    </div>
  );
};
```

## Customization

The component offers extensive customization options:

- **Sizes**: `xs`, `sm`, `md`, `lg`, `xl`
- **Colors**: Any valid CSS color for radio and label
- **States**: `disabled`, `readonly`
- **Behavior**: `toggle`, `multiple`
- **Styling**: Custom CSS classes and inline styles
- **Icons**: Custom render functions for unique designs
