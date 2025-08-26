---
sidebar_position: 1
sidebar_label: 'Popup'
title: 'Popup Component'
description: 'Modal popup component with backdrop'
---

# Popup Component

A customizable popup/modal component built with React and CSS.

## Basic Usage

```jsx
import { BasicPopup } from '@your-org/react-ui-components';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Popup</button>
      
      <BasicPopup 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="My Popup"
      >
        <p>This is the popup content.</p>
      </BasicPopup>
    </>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | `false` | Whether the popup is visible |
| `onClose` | `function` | - | Callback when popup closes |
| `title` | `string` | - | Popup title |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the popup |
| `closeOnBackdrop` | `boolean` | `true` | Close on backdrop click |
| `closeOnEscape` | `boolean` | `true` | Close on Escape key |
| `showCloseButton` | `boolean` | `true` | Show close button |

## Examples

### Different Sizes

```jsx
<BasicPopup size="sm" title="Small Popup">
  <p>Small popup content</p>
</BasicPopup>

<BasicPopup size="md" title="Medium Popup">
  <p>Medium popup content</p>
</BasicPopup>

<BasicPopup size="lg" title="Large Popup">
  <p>Large popup content</p>
</BasicPopup>

<BasicPopup size="xl" title="Extra Large Popup">
  <p>Extra large popup content</p>
</BasicPopup>
```

### Custom Close Behavior

```jsx
<BasicPopup 
  title="Custom Popup"
  closeOnBackdrop={false}
  closeOnEscape={false}
  showCloseButton={false}
>
  <p>This popup can only be closed programmatically.</p>
  <button onClick={() => setIsOpen(false)}>Close</button>
</BasicPopup>
```

### With Form

```jsx
<BasicPopup title="Login Form">
  <form onSubmit={handleSubmit}>
    <div>
      <label>Email:</label>
      <input type="email" required />
    </div>
    <div>
      <label>Password:</label>
      <input type="password" required />
    </div>
    <button type="submit">Login</button>
  </form>
</BasicPopup>
```

## Styling

The popup uses CSS custom properties for theming:

```css
:root {
  --popup-backdrop-bg: rgba(0, 0, 0, 0.6);
  --popup-bg: #ffffff;
  --popup-border-radius: 0.5rem;
  --popup-shadow: 0px 0px 83px 0px rgba(16, 7, 36, 0.12);
}
```

## Accessibility

The popup component includes:

- **Focus management**: Traps focus inside the popup
- **ARIA attributes**: Proper roles and labels
- **Keyboard navigation**: Escape key to close
- **Screen reader support**: Announcements and descriptions
