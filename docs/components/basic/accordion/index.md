# Accordion

A customizable accordion component with support for expandable/collapsible content sections, custom prepend/append slots, and full accessibility support.

## Overview

The BasicAccordion component provides:

- Expandable and collapsible content sections with smooth animations
- Customizable header with prepend and append slots
- Smooth animations and transitions
- Accessible design with proper ARIA attributes
- Keyboard navigation support (Enter/Space keys)
- Disabled state support
- Initial open/closed state control
- Toggle callback support

## When to Use

Use the BasicAccordion component when you need to:

- Organize content into collapsible sections
- Create FAQ pages or help documentation
- Show/hide detailed information on demand
- Reduce visual clutter by hiding content until needed
- Create navigation menus with expandable sub-items
- Display hierarchical information in a compact format

## Key Features

- **Expandable Content**: Show/hide content sections with smooth height and opacity transitions
- **Custom Slots**: Prepend and append slots allow custom icons, badges, or buttons
- **Initial State**: Control whether accordion starts open or closed via `initialIsOpen`
- **Disabled State**: Disable accordion interaction when needed with visual feedback
- **Keyboard Navigation**: Full keyboard support with Enter/Space keys for accessibility
- **Accessibility**: Proper ARIA attributes (aria-expanded, aria-disabled, role, tabIndex)
- **Event Callbacks**: Handle state changes with `onToggle` callback
- **Default Icon**: Built-in chevron icon that rotates when accordion opens/closes
- **Memoized**: Component is memoized for performance optimization

## Component Structure

The accordion consists of:
- **Header**: Clickable header with title and optional prepend/append content
- **Content**: Expandable content area that shows/hides based on state
- **Default Icon**: Chevron icon that rotates 180° when accordion is open

[API Reference →](./api)

[View Code →](./code)

[View Demos →](./demo)
