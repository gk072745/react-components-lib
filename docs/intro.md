---
sidebar_position: 1
---

# React UI Components Library

Welcome to our comprehensive collection of **custom React UI components** built with SCSS for modern web applications.

## What You'll Find Here

This library provides a complete set of reusable React components that you can easily integrate into your projects:

- **Form Components** - Custom checkboxes, radio buttons, inputs, and selects
- **Layout Components** - Cards, containers, and grid systems
- **Interactive Elements** - Buttons, modals, and navigation components
- **Utility Components** - Loading states, notifications, and feedback elements

## Quick Start

### Installation

```bash
npm install @your-org/react-ui-components
```

### Basic Usage

```jsx
import { Checkbox, RadioButton, CustomInput } from '@your-org/react-ui-components';

function MyForm() {
  return (
    <form>
      <CustomInput 
        type="text" 
        placeholder="Enter your name" 
        label="Full Name" 
      />
      <Checkbox 
        label="I agree to terms" 
        onChange={(checked) => console.log(checked)} 
      />
      <RadioButton 
        name="gender" 
        value="male" 
        label="Male" 
      />
    </form>
  );
}
```

## Customization

All components are built with SCSS and can be easily customized:

```scss
// Customize theme variables
$primary-color: #007bff;
$border-radius: 8px;
$font-family: 'Inter', sans-serif;

// Import your custom styles
@import '@your-org/react-ui-components/styles';
```

## Getting Started

Choose your path:

- **[View All Components](/docs/components)** - Browse the complete component library
- **[Tutorial](/docs/tutorial-basics/create-a-document)** - Step-by-step guide to using components
- **[Customization Guide](/docs/tutorial-extras/manage-docs-versions)** - Learn how to theme and customize

---

*Ready to build beautiful user interfaces? Let's get started!*
