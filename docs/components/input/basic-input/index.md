# BasicInput

A comprehensive, feature-rich input component with validation, loading states, and modern React 19 support.

## Overview

The BasicInput component provides a flexible and powerful input field with extensive customization options including validation, loading states, prepend/append functionality, and modern React 19 features like async validation.

## Key Features

- **Multiple Input Types**: Text, email, password, number, tel, url
- **Validation System**: Built-in validation rules with custom error messages
- **Loading States**: Visual loading indicators with spinner animations
- **Prepend/Append Support**: Icons and buttons on both sides of the input
- **Password Toggle**: Built-in show/hide password functionality
- **Clear Button**: Optional clear functionality with smooth animations
- **Floating Labels**: Animated labels that float when focused or filled
- **React 19 Support**: Modern async validation and enhanced performance
- **Accessibility**: Full keyboard navigation and screen reader support
- **Customizable**: Extensive styling and behavior options

## Quick Start

```jsx
import BasicInput from "../components/sharedComponents/BasicInput";

function MyComponent() {
  const [value, setValue] = useState("");

  return (
    <BasicInput
      value={value}
      onChange={setValue}
      label="Email Address"
      type="email"
      placeholder="Enter your email"
    />
  );
}
```

## Common Use Cases

- **Form Inputs**: Standard form fields with validation
- **Search Fields**: With prepend/append icons and clear functionality
- **Password Fields**: With toggle visibility and strength indicators
- **Loading States**: During async operations like API calls
- **Data Entry**: Number inputs, URLs, phone numbers with proper validation
