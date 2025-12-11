# API

## Props

| Prop         | Type                                                                      | Default | Required | Description                                    |
| ------------ | ------------------------------------------------------------------------- | ------- | -------- | ---------------------------------------------- |
| `children`   | `node`                                                                    | -       | Yes      | Trigger element (required)                    |
| `content`    | `string`                                                                 | `''`    | No       | Tooltip text content                           |
| `tooltip`    | `node`                                                                    | `null`  | No       | Custom node content (overrides `content`)      |
| `position`   | `'top' \| 'bottom' \| 'left' \| 'right' \| 'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | `'top'` | No       | Tooltip position                               |
| `trigger`    | `'hover' \| 'click' \| 'focus'`                                          | `'hover'` | No    | Trigger behavior                               |
| `showArrow`  | `boolean`                                                                | `true`  | No       | Whether to show the arrow                      |
| `offset`     | `number`                                                                 | `8`     | No       | Distance in px from trigger                    |
| `delay`      | `number`                                                                 | `300`   | No       | Show delay in milliseconds                     |
| `hideDelay`  | `number`                                                                 | `100`   | No       | Hide delay in milliseconds                     |
| `customClass`| `string`                                                                 | `''`    | No       | Extra class to style tooltip box               |
| `disabled`   | `boolean`                                                                | `false` | No       | Disable tooltip                                |
| `className`  | `string`                                                                 | `''`    | No       | Class for wrapper                              |
| `style`      | `object`                                                                 | `{}`    | No       | Inline styles for tooltip box                  |
| `onShow`     | `function`                                                               | -       | No       | Called when tooltip shows                      |
| `onHide`     | `function`                                                               | -       | No       | Called when tooltip hides                      |
| `onToggle`   | `function(visible: boolean)`                                             | -       | No       | Called on visibility toggle                    |

## Event Handlers

### onShow()

Called when the tooltip becomes visible.

```jsx
<BasicTooltip
  content="Tooltip"
  onShow={() => console.log('Tooltip shown')}
>
  <button>Hover me</button>
</BasicTooltip>
```

### onHide()

Called when the tooltip is hidden.

```jsx
<BasicTooltip
  content="Tooltip"
  onHide={() => console.log('Tooltip hidden')}
>
  <button>Hover me</button>
</BasicTooltip>
```

### onToggle(visible)

Called when the tooltip visibility changes.

**Parameters:**
- `visible` (`boolean`): Whether the tooltip is now visible

```jsx
<BasicTooltip
  content="Tooltip"
  onToggle={(visible) => console.log('Tooltip visible:', visible)}
>
  <button>Hover me</button>
</BasicTooltip>
```

## Position Types

| Position       | Description                    |
| -------------- | ------------------------------ |
| `top`          | Above the trigger (default)    |
| `bottom`       | Below the trigger              |
| `left`         | To the left of the trigger     |
| `right`        | To the right of the trigger    |
| `top-left`     | Top-left corner                |
| `top-right`    | Top-right corner               |
| `bottom-left`  | Bottom-left corner             |
| `bottom-right` | Bottom-right corner            |

## Trigger Types

| Trigger | Description                                                                 |
| ------- | --------------------------------------------------------------------------- |
| `hover` | Shows on mouse enter, hides on mouse leave (default)                        |
| `click` | Toggles on click, closes when clicking outside                              |
| `focus` | Shows on focus, hides on blur (only works with focusable elements)          |

## Component Structure

The component consists of:

- **Wrapper**: Container element that wraps the trigger
- **Trigger**: The element that activates the tooltip (children)
- **Tooltip**: The tooltip content rendered via React Portal to document.body
- **Arrow**: Optional arrow pointing to the trigger

## Styling Features

The component supports:

- **Default variant**: Dark background with white text
- **Light variant**: Light background with dark text (`tooltip-light`)
- **Success variant**: Green background (`tooltip-success`)
- **Error variant**: Red background (`tooltip-error`)
- **Warning variant**: Yellow background (`tooltip-warning`)
- **Custom classes**: Add custom styling via `customClass` prop

## Positioning Behavior

The component includes smart positioning features:

- **Collision Detection**: Automatically detects when tooltip would go off-screen
- **Auto-flip**: Flips position when collision is detected (e.g., top → bottom)
- **Viewport Clamping**: Adjusts position to stay within viewport bounds
- **Arrow Positioning**: Arrow dynamically positions to point at trigger center

## Imperative Handle

The component exposes an imperative handle via `ref`:

```jsx
const tooltipRef = useRef();

// Show tooltip programmatically
tooltipRef.current?.show();

// Hide tooltip programmatically
tooltipRef.current?.hide();

// Toggle tooltip
tooltipRef.current?.toggle();

// Check visibility
const isVisible = tooltipRef.current?.isVisible;

<BasicTooltip ref={tooltipRef} content="Tooltip">
  <button>Trigger</button>
</BasicTooltip>
```

## Accessibility

The component includes several accessibility features:

- **ARIA Role**: Uses `role="tooltip"` for screen readers
- **Keyboard Navigation**: Focus trigger works with keyboard navigation
- **Focus Management**: Proper focus handling for focusable triggers
- **Screen Reader Support**: Tooltip content is accessible to screen readers
