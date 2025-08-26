---
sidebar_position: 1
---

# React UI Components Library

Welcome to our comprehensive collection of **custom React UI components** built with SCSS for modern web applications.

## What You'll Find Here

This library provides a complete set of reusable React components that you can easily integrate into your projects:

- **Input Components** - Custom checkboxes, radio buttons, inputs, and selects
- **Layout Components** - Cards, containers, and grid systems
- **Basic Components** - Popups, modals, and utility elements

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

All components are built with CSS custom properties and can be easily customized:

```css
/* Customize theme variables */
:root {
  --primary-color: #007bff;
  --border-radius: 8px;
  --font-family: 'Inter', sans-serif;
}
```

## Getting Started

Choose your path:

- **[View All Components](/docs/components)** - Browse the complete component library organized by categories
- **[Input Components](/docs/components/input)** - Form elements like checkboxes and radio buttons
- **[Layout Components](/docs/components/layout)** - Navigation and structural components
- **[Basic Components](/docs/components/basic)** - Popups, modals, and utility components

## Component Categories

### 🎯 Input Components
Form elements and interactive controls:
- **Checkbox** - Custom checkbox with multiple sizes and states
- **Radio** - Radio buttons with color variants and sizes
- **Input** - Text inputs with validation states
- **Select** - Dropdown select components

### 🏗️ Layout Components
Structural and navigation components:
- **Navbar** - Responsive navigation bar
- **Header** - Page header components
- **Sidebar** - Collapsible sidebar navigation
- **Container** - Layout containers and grids

### 🔧 Basic Components
Fundamental UI building blocks:
- **Popup** - Modal popup with backdrop
- **Accordion** - Collapsible content sections
- **Chip** - Tag and badge components
- **Button** - Button variants and states

---

*Ready to build beautiful user interfaces? Explore our components and start building!*
