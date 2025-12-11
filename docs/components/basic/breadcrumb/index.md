# Breadcrumb

A flexible and accessible breadcrumb navigation component that provides clear navigation hierarchy and supports various separator types, custom styling, and interactive behaviors.

## Overview

The BasicBreadCrumb component provides:

- Flexible separator support (string, React element, function, or object with render method)
- Customizable spacing between breadcrumb items
- Accessible navigation with proper ARIA labels
- Clickable breadcrumb items with Link components
- Disabled state support for non-clickable items
- Custom styling through CSS classes and inline styles
- Performance optimized with memoized callbacks
- Full PropTypes validation

## When to Use

Use the BasicBreadCrumb component when you need to:

- Show current page location in site hierarchy
- Create product category and subcategory navigation
- Display directory structure navigation
- Show section and subsection breadcrumbs in documentation
- Provide hierarchical navigation in complex interfaces
- Create breadcrumb navigation for deep content structures

## Key Features

- **Multiple Separator Types**: String, element, function, or object-based separators
- **Customizable Gap**: Configurable spacing between breadcrumb items
- **Accessibility**: Proper ARIA labels and semantic HTML structure
- **Custom Navigation**: Support for custom click handlers via `onItemClick`
- **Visual Feedback**: Hover and focus states for better user experience
- **Disabled Items**: Support for non-clickable breadcrumb items
- **Link Integration**: Uses Docusaurus Link component for navigation
- **Memoized**: Component is memoized for performance optimization

## Component Structure

The breadcrumb consists of:

- **Container**: Navigation container with flexbox layout
- **Items**: Individual breadcrumb items with labels
- **Separators**: Customizable separators between items
- **Links**: Clickable items use Link components for navigation

[API Reference →](./api)

[View Code →](./code)

[View Demos →](./demo)
