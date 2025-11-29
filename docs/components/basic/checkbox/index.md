# Checkbox

A customizable checkbox component with support for multiple selection, select all functionality, custom sizes, variants, and slot-based customization.

## Overview

The BasicCheckbox component provides:

- Traditional checkbox functionality with custom styling
- Support for multiple selection with array-based state management
- Select all functionality for checkbox groups
- Multiple size variants (xs, sm, md, lg, xl)
- Multiple color variants (default, info)
- Disabled and readonly states
- Custom icon and label slots
- Flexible value comparison for complex data structures
- Accessible design with proper form semantics

## When to Use

Use the BasicCheckbox component when you need to:

- Allow users to select multiple options from a list
- Create custom checkbox designs that match your design system
- Implement checkbox groups with select all functionality
- Provide a consistent selection experience across your application
- Build forms with multiple choice questions
- Create filter interfaces with multiple selectable options
- Implement permission or feature toggle interfaces

## Key Features

- **Multiple Sizes**: Choose from xs, sm, md (default), lg, and xl sizes
- **Multiple Variants**: Default (black) and info (blue) color variants
- **Multiple Selection**: Support for selecting multiple options with array-based state
- **Select All**: Built-in support for selecting/deselecting all items in a group
- **Custom Slots**: Icon and label slots for complete customization
- **Disabled & Readonly States**: Support for disabled and readonly modes with visual feedback
- **Value Comparison**: Customizable value comparison function for complex data structures
- **Value Key Support**: Support for object-based items with value key extraction
- **Memoized**: Component is memoized for performance optimization

## Component Structure

The checkbox consists of:

- **Container**: Label element that wraps the entire checkbox
- **Hidden Input**: Native checkbox input (hidden for accessibility)
- **Custom Icon**: Visual checkbox element with inner tick mark
- **Label**: Text label or custom label slot content

[API Reference →](./api)

[View Code →](./code)

[View Demos →](./demo)
