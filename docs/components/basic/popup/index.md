# Popup

A simple and customizable popup component for displaying modal content with outside click handling.

## Overview

The Popup component provides:

- Customizable dimensions with height and width props
- Outside click detection and handling
- Simple and clean modal overlay
- Flexible content rendering
- Responsive design support

## When to Use

Use the Popup component when you need to:

- Display modal dialogs or overlays
- Show additional information without navigation
- Create confirmation dialogs
- Display forms or content that requires user attention
- Implement lightbox-style content displays
- Show temporary notifications or alerts

## Key Features

- **Customizable Size**: Set custom height and width using rem units
- **Outside Click Handling**: Detect and handle clicks outside the popup
- **Flexible Content**: Accept any React content as children
- **Clean Overlay**: Simple background overlay for focus
- **Event Propagation**: Proper event handling to prevent unwanted interactions
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Proper focus management and keyboard navigation

## Basic Usage

```jsx
import BasicPopup from "@/src/components/sharedComponents/BasicPopup";

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Popup</button>
      {isOpen && (
        <BasicPopup onPopupOutsideClick={() => setIsOpen(false)}>
          <div>
            <h2>Popup Content</h2>
            <p>This is the popup content.</p>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </BasicPopup>
      )}
    </div>
  );
};
```

## Customization

The popup can be customized with different sizes and content:

```jsx
// Small popup
<BasicPopup height={15} width={20}>
  <div>Small content</div>
</BasicPopup>

// Large popup
<BasicPopup height={40} width={50}>
  <div>Large content area</div>
</BasicPopup>
```

[API Reference →](./api)

[View Code →](./code)
