# BasicTextarea

A comprehensive, feature-rich textarea component with auto-grow, validation, character counter, and modern React 19 support.

## Overview

The BasicTextarea component provides a flexible and powerful textarea field with extensive customization options including auto-grow functionality, validation, character counting, and modern React 19 features.

## Key Features

- **Auto Grow**: Automatically adjusts height based on content
- **Character Counter**: Shows current character count with optional maximum limit
- **Validation System**: Built-in validation rules with custom error messages
- **Custom Icons**: Support for custom prepend and append icons
- **Multiple States**: Support for disabled, readonly, and loading states
- **No Resize Option**: Disable textarea resize functionality
- **React 19 Support**: Modern features and enhanced performance
- **Accessibility**: Full keyboard navigation and screen reader support
- **Customizable**: Extensive styling and behavior options

## Quick Start

```jsx
import BasicTextarea from "@/src/components/sharedComponents/BasicTextarea";
import { useState } from "react";

const MyComponent = () => {
  const [value, setValue] = useState("");

  return (
    <BasicTextarea
      label="Your Message"
      placeholder="Enter your message here..."
      value={value}
      onChange={setValue}
      hint="This is a helpful hint"
    />
  );
};
```

## Basic Usage

### Simple Textarea

```jsx
<BasicTextarea
  label="Basic Textarea"
  placeholder="Enter your message here..."
  value={value}
  onChange={setValue}
/>
```

### Auto Growing Textarea

```jsx
<BasicTextarea
  label="Auto Growing Textarea"
  placeholder="Type to see auto-resize..."
  value={value}
  onChange={setValue}
  autoGrow={true}
  minRows={2}
/>
```

### With Character Counter

```jsx
<BasicTextarea
  label="With Character Counter"
  placeholder="Type to see character count..."
  value={value}
  onChange={setValue}
  maxlength={100}
  counter={true}
/>
```

### With Validation

```jsx
<BasicTextarea
  label="With Validation"
  placeholder="Enter at least 10 characters..."
  value={value}
  onChange={setValue}
  rules={[
    { rule: "required", message: "This field is required" },
    { rule: "minLength", condition: 10, message: "Must be at least 10 characters" },
  ]}
/>
```

## Props Overview

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `''` | Label text for the textarea |
| `placeholder` | `string` | `''` | Placeholder text |
| `value` | `string \| number` | `''` | Current value of the textarea |
| `hint` | `string` | `''` | Helpful hint text |
| `autoGrow` | `boolean` | `false` | Automatically grow height based on content |
| `counter` | `boolean` | `false` | Show character counter |
| `maxlength` | `number` | `undefined` | Maximum number of characters allowed |
| `noResize` | `boolean` | `false` | Disable textarea resize functionality |
| `rows` | `number` | `3` | Number of visible text lines |
| `minRows` | `number` | `1` | Minimum number of rows when autoGrow is enabled |
| `disabled` | `boolean` | `false` | Disable the textarea |
| `readonly` | `boolean` | `false` | Make the textarea readonly |
| `loading` | `boolean` | `false` | Show loading state |
| `rules` | `array` | `[]` | Array of validation rules |

## Key Features

### Auto Grow Functionality

The textarea can automatically grow in height as the user types, providing a better user experience for longer content.

```jsx
<BasicTextarea
  label="Auto Growing Textarea"
  value={value}
  onChange={setValue}
  autoGrow={true}
  minRows={2}
/>
```

### Character Counter

Display a character counter to help users stay within limits.

```jsx
<BasicTextarea
  label="With Character Counter"
  value={value}
  onChange={setValue}
  maxlength={100}
  counter={true}
/>
```

### Validation Rules

Built-in validation with customizable rules and error messages.

```jsx
<BasicTextarea
  label="With Validation"
  value={value}
  onChange={setValue}
  rules={[
    { rule: "required", message: "This field is required" },
    { rule: "minLength", condition: 10, message: "Must be at least 10 characters" },
  ]}
/>
```

### Custom Icons

Support for custom prepend and append icons.

```jsx
<BasicTextarea
  label="Custom Icons"
  value={value}
  onChange={setValue}
  prepend={true}
  append={true}
  prependIcon={customPrependIcon}
  appendIcon={customAppendIcon}
/>
```

## Styling

The component uses CSS classes for styling and can be customized through CSS.

### Main Classes

- `.default-text-area-wrapper` - Main wrapper class
- `.text-area-field` - The textarea element
- `.char-counter` - Character counter element

### Example Custom Styling

```scss
.default-text-area-wrapper {
  .text-area-field {
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    padding: 12px;
    font-size: 16px;
    line-height: 1.5;
    
    &:focus {
      border-color: #007bff;
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
    }
  }
}
```

## Accessibility

The component includes several accessibility features:

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Clear focus indicators
- **Screen Reader Support**: Descriptive text and hints

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Related Components

- [BasicInput](./basic-input) - Single-line input component
- [BasicFileInput](./file-input) - File input component

## Examples

Check out the [Demo](./demo) page for interactive examples and the [API Reference](./api) for detailed prop documentation.
