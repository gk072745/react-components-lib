# API

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | node | - | Trigger element (required) |
| `content` | string | `''` | Tooltip text content |
| `tooltip` | node | `null` | Custom node content (overrides `content`) |
| `position` | one of `top`, `bottom`, `left`, `right`, `top-left`, `top-right`, `bottom-left`, `bottom-right` | `top` | Tooltip position |
| `trigger` | one of `hover`, `click`, `focus` | `hover` | Trigger behavior |
| `showArrow` | boolean | `true` | Whether to show the arrow |
| `offset` | number | `8` | Distance in px from trigger |
| `delay` | number | `300` | Show delay in ms |
| `hideDelay` | number | `100` | Hide delay in ms |
| `customClass` | string | `''` | Extra class to style tooltip box |
| `disabled` | boolean | `false` | Disable tooltip |
| `className` | string | `''` | Class for wrapper |
| `style` | object | `{}` | Inline styles for tooltip box |
| `onShow` | function | - | Called when tooltip shows |
| `onHide` | function | - | Called when tooltip hides |
| `onToggle` | function `(visible: boolean)` | - | Called on visibility toggle |

## Notes

- Auto-flips when colliding with viewport edges and clamps within viewport.
- For `click`, clicking outside closes the tooltip.
- For `focus`, only shows for focusable elements.

## Usage Examples

### Basic

```jsx
<BasicTooltip content="Hello" position="top"><button>Hover me</button></BasicTooltip>
```

### Click Trigger

```jsx
<BasicTooltip content="Click to toggle" trigger="click"><button>Click</button></BasicTooltip>
```

### Custom Node Content

```jsx
<BasicTooltip tooltip={<span><b>Formatted</b> content</span>} position="right">
  <button>Info</button>
</BasicTooltip>
```
