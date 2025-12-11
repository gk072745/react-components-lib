# API

## Props

| Prop            | Type                                                                  | Default     | Required | Description                                    |
| --------------- | --------------------------------------------------------------------- | ----------- | -------- | ---------------------------------------------- |
| `modelValue`    | `number`                                                              | `0`         | No       | Current progress value                         |
| `max`           | `number`                                                              | `100`       | No       | Maximum value used to compute percentage       |
| `indeterminate` | `boolean`                                                             | `false`     | No       | Shows animated bar for unknown progress        |
| `variant`       | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'default'` | No       | Color variant of the progress bar              |
| `height`        | `number`                                                              | `4`         | No       | Bar height in pixels                           |
| `rounded`       | `boolean`                                                             | `false`     | No       | Rounds track and bar corners                   |
| `absolute`      | `boolean`                                                             | `false`     | No       | Positions the bar absolute at container top    |
| `className`     | `string`                                                              | `''`        | No       | Additional CSS classes                         |
| `style`         | `object`                                                              | `{}`        | No       | Inline styles for the container                |

## Component Structure

The component consists of:

- **Container**: Outer wrapper with background color and positioning
- **Progress Bar**: Inner bar showing the progress percentage or indeterminate animation

## Variant Types

| Variant   | Description                    |
| --------- | ------------------------------ |
| `default` | Default blue color (default)   |
| `primary` | Primary blue color             |
| `success` | Green color for success states |
| `warning` | Yellow color for warnings      |
| `danger`  | Red color for errors            |
| `info`    | Cyan color for information      |

## Value Calculation

The percentage is computed as `(modelValue / max) * 100` and clamped to 0–100%.

When `indeterminate` is true, the width animation overrides the determinate width calculation.

## Usage Examples

### Basic Determinate

```jsx
import LinearProgress from "../components/sharedComponents/LinearProgress";

<LinearProgress modelValue={60} />
```

### With Variant

```jsx
<LinearProgress modelValue={75} variant="success" height={8} />
```

### Indeterminate

```jsx
<LinearProgress indeterminate={true} />
```

### Rounded Corners

```jsx
<LinearProgress modelValue={70} rounded={true} height={8} />
```

### Absolute Positioning

```jsx
<div style={{ position: "relative", height: 80 }}>
  <LinearProgress absolute={true} modelValue={35} />
</div>
```

### Combined Options

```jsx
<LinearProgress
  modelValue={85}
  variant="success"
  rounded={true}
  height={6}
/>
```

## Styling

The component uses:

- **Background**: Light gray background (`#e9ecef`) for all variants
- **Progress Colors**: Variant-specific colors for the progress bar
- **Transitions**: Smooth width transitions (0.3s ease) for determinate mode
- **Animations**: Infinite animation for indeterminate mode
- **Border Radius**: 6.25rem (100px) when `rounded` is true

## Accessibility

The component includes several accessibility features:

- **Focus Styles**: Visible focus outline for keyboard navigation
- **ARIA Support**: Can be enhanced with ARIA attributes for screen readers
- **Visual Feedback**: Clear progress indication for users
- **Reduced Motion**: Respects user preferences for animations
