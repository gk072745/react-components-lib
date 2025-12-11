# API

## Props

| Prop        | Type       | Default | Required | Description                                    |
| ----------- | ---------- | ------- | -------- | ---------------------------------------------- |
| `isOpen`    | `boolean`  | -       | Yes      | Controls whether the side panel is open         |
| `onToggle`  | `function` | -       | Yes      | Callback function to toggle the panel state    |
| `className` | `string`   | `''`    | No       | Additional CSS classes                         |
| `style`     | `object`   | `{}`    | No       | Inline styles for the panel container          |

## Event Handlers

### onToggle

Called when the panel should be toggled (opened or closed).

**Signature:**
```typescript
onToggle: () => void
```

**Usage:**
- Triggered when clicking the close button
- Triggered when clicking the overlay
- Triggered when clicking a navigation link (closes panel)

## Component Structure

The component consists of:

- **Overlay**: Semi-transparent backdrop that appears when panel is open
- **Panel Container**: Main panel with fixed positioning
- **Header**: Contains title, close button, and breadcrumb
- **Navigation**: Scrollable list of navigation items
- **Footer**: Footer content with version info
- **Popup**: Optional popup integration for additional content

## Features

### Navigation Items

The component includes a predefined list of navigation items with:
- Path routing using React Router
- Icons for visual identification
- Active state highlighting
- Hover effects
- Popup integration option

### Overlay Interaction

- Semi-transparent black overlay (`rgba(0, 0, 0, 0.5)`)
- Clicking overlay closes the panel
- Smooth fade transition
- Backdrop blur effect

### Active State

Navigation items are highlighted when:
- Current route matches the item path
- Active items show blue color and background
- Active items have a left border indicator
- Active items show a right arrow indicator

## Usage Examples

### Basic Usage

```jsx
import React, { useState } from "react";
import SidePanel from "../components/sharedComponents/SidePanel";

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Panel</button>
      <SidePanel isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
    </>
  );
};
```

### With Custom Styling

```jsx
<SidePanel
  isOpen={isOpen}
  onToggle={() => setIsOpen(!isOpen)}
  style={{
    width: "350px",
    backgroundColor: "#f8f9fa",
  }}
/>
```

### With Custom ClassName

```jsx
<SidePanel
  isOpen={isOpen}
  onToggle={() => setIsOpen(!isOpen)}
  className="custom-side-panel"
/>
```

## Styling

The component uses:

- **Position**: Fixed positioning from top-left
- **Width**: 300px (default, customizable via style prop)
- **Height**: 100vh (full viewport height)
- **Background**: White (`#ffffff`)
- **Z-index**: 1030 (higher than navbar)
- **Transition**: Smooth left slide animation (0.3s ease)
- **Box Shadow**: Right-side shadow for depth

## Accessibility

The component includes several accessibility features:

- **Keyboard Navigation**: Focus-visible styles for keyboard users
- **Focus Management**: Proper focus handling within the panel
- **ARIA Support**: Can be enhanced with ARIA attributes
- **Click Outside**: Overlay click closes panel for better UX
- **Smooth Transitions**: Hardware-accelerated animations

