# API

## BasicPopup Component

The main popup component that provides customizable modal functionality with outside click handling and flexible sizing.

### Props

| Prop                  | Type        | Default | Required | Description                              |
| --------------------- | ----------- | ------- | -------- | ---------------------------------------- |
| `children`            | `ReactNode` | -       | No       | Content to display inside the popup      |
| `height`              | `number`    | `27.75` | No       | Height of the popup in rem units         |
| `width`               | `number`    | `27.75` | No       | Width of the popup in rem units          |
| `onPopupOutsideClick` | `function`  | -       | No       | Callback when clicking outside the popup |

### Event Handlers

#### onPopupOutsideClick

Callback function that is called when the user clicks outside the popup container.

**Signature:**

```js
onPopupOutsideClick: () => void
```

**Parameters:**

- No parameters

**Note:** This callback is triggered when clicking on the backdrop/wrapper area, but not when clicking inside the popup container itself.

### Component Structure

The popup consists of two main elements:

- **Wrapper** (`.popup-component-wrapper`): The outer container that covers the entire viewport and handles outside clicks
- **Container** (`.popup-component-container`): The inner container that holds the popup content with customizable dimensions

### Styling Features

- **Fixed Positioning**: The popup is positioned fixed to cover the entire viewport
- **Centered Layout**: Content is centered using CSS Grid
- **Backdrop**: Semi-transparent black background (rgba(0, 0, 0, 0.6)) with blur effect
- **Container Styling**: White background, rounded corners, and shadow for depth
- **Z-Index**: Uses z-index from abstracts for proper layering

### Event Handling

- **Outside Click**: Clicking on the wrapper (backdrop) triggers `onPopupOutsideClick`
- **Inside Click**: Clicking inside the container stops event propagation to prevent closing
- **Event Propagation**: Proper event handling ensures clicks inside the popup don't close it

### Accessibility

The component provides:

- Proper modal structure for screen readers
- Focus management (content should be focusable)
- Keyboard navigation support (ESC key handling should be implemented by parent)
- Visual focus indicators
- Backdrop for visual focus
