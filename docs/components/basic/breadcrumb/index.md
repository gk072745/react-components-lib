# BreadCrumb

A flexible and accessible breadcrumb navigation component that provides clear navigation hierarchy and supports various separator types, custom styling, and interactive behaviors.

## Features

- **Flexible Separators**: Support for strings, React elements, functions, and objects with render methods
- **Customizable Spacing**: Configurable gaps between breadcrumb items
- **Accessibility**: Proper ARIA labels, keyboard navigation, and screen reader support
- **Interactive Items**: Clickable breadcrumb items with custom click handlers
- **Disabled State**: Support for non-clickable breadcrumb items
- **Custom Styling**: Extensible styling through CSS classes and inline styles
- **Performance Optimized**: Memoized callbacks and efficient re-rendering
- **TypeScript Ready**: Full PropTypes validation and type safety

## Use Cases

- **Website Navigation**: Show current page location in site hierarchy
- **E-commerce**: Product category and subcategory navigation
- **File Systems**: Directory structure navigation
- **Documentation**: Section and subsection breadcrumbs
- **Admin Panels**: Hierarchical navigation in complex interfaces
- **Mobile Apps**: Breadcrumb navigation for deep content structures

## Key Features

- **Multiple Separator Types**: String, element, function, or object-based separators
- **Responsive Design**: Adapts to different screen sizes and orientations
- **Custom Navigation**: Override default navigation behavior with custom handlers
- **Visual Feedback**: Hover and focus states for better user experience
- **Semantic HTML**: Proper navigation structure with semantic markup
- **Flexible Layout**: Customizable spacing and alignment options

## Basic Usage

```jsx
import React from "react";
import BasicBreadCrumb from "../components/sharedComponents/BasicBreadCrumb";

const Example = () => {
  const breadcrumbItems = [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "Electronics", to: "/products/electronics" },
    { label: "Smartphones", to: "/products/electronics/smartphones" },
  ];

  return (
    <BasicBreadCrumb items={breadcrumbItems} separator=" > " gap="0.75rem" />
  );
};
```

## How It Works

1. **Item Processing**: Processes an array of breadcrumb items with labels and navigation targets
2. **Separator Rendering**: Renders separators between items using various input types
3. **Navigation Handling**: Manages click events and navigation behavior
4. **Accessibility**: Provides proper ARIA labels and keyboard navigation support
5. **Styling**: Applies custom styles and CSS classes for visual customization

## Separator Types

### String Separators

```jsx
separator = " > "; // Basic text separator
separator = " | "; // Pipe separator
separator = " › "; // Arrow separator
```

### Element Separators

```jsx
separator={<span style={{ color: "#666" }}>→</span>}
separator={<Icon name="chevron-right" />}
```

### Function Separators

```jsx
separator={() => <span style={{ color: "#999" }}>•</span>}
separator={() => <CustomSeparator />}
```

### Object Separators

```jsx
separator={{
  render: () => <span style={{ color: "#ccc" }}>|</span>
}}
```

## Accessibility Features

- **ARIA Labels**: Proper `aria-label` for breadcrumb navigation
- **Keyboard Navigation**: Tab and Enter key support for interactive items
- **Screen Reader Support**: Hidden separators from screen readers
- **Focus Management**: Clear focus indicators for keyboard users
- **Semantic Structure**: Proper navigation landmark for assistive technologies

[API Reference →](./api)

[View Code →](./code)
