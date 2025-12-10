# API

## BasicSlider Component

A flexible single-value slider component that allows users to select a value between a minimum and maximum with extensive customization options.

### Props

| Prop                | Type                                   | Default   | Required | Description                                                                    |
| ------------------- | -------------------------------------- | --------- | -------- | ------------------------------------------------------------------------------ |
| `size`              | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'`    | No       | Size variant of the slider                                                     |
| `variant`           | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'default'` | No    | Color variant of the slider                                                   |
| `disabled`          | `boolean`                              | `false`   | No       | Whether the slider is disabled                                                 |
| `readonly`          | `boolean`                              | `false`   | No       | Whether the slider is readonly                                                 |
| `step`              | `number`                               | `0.1`     | No       | The step increment for the value                                               |
| `label`             | `string`                               | `''`      | No       | The label text for the slider                                                  |
| `min`               | `number`                               | `0`       | No       | The minimum value                                                              |
| `max`               | `number`                               | `100`     | No       | The maximum value                                                              |
| `thumbLabel`        | `boolean \| 'always'`                  | `false`   | No       | Whether to show thumb label (true = on drag/focus, 'always' = always visible) |
| `thumbLabelClasses` | `string[]`                             | `[]`      | No       | Additional CSS classes for thumb label                                        |
| `labelClasses`      | `string[]`                             | `[]`      | No       | Additional CSS classes for the label                                           |
| `value`             | `number`                               | `0`       | No       | The current value                                                              |
| `className`         | `string`                               | `''`      | No       | Additional CSS classes for the container                                      |
| `style`             | `object`                               | `{}`      | No       | Additional inline styles for the container                                     |
| `onChange`          | `function`                             | -         | No       | Callback when the value changes                                                |

### Event Handlers

#### onChange

Callback function that is called when the slider value changes.

**Signature:**

```js
onChange: (value) => void
```

**Parameters:**

- `value` (number): The new slider value

**Note:** The callback is triggered whenever the thumb is moved, the track is clicked, or keyboard navigation is used.

### Thumb Labels

The `thumbLabel` prop controls when thumb labels are displayed:

- `false` (default): Labels are never shown
- `true`: Labels are shown when dragging or when the slider is focused
- `'always'`: Labels are always visible

### Size Variants

| Size | Description                    |
| ---- | ------------------------------ |
| `xs` | Extra small (0.25rem track)    |
| `sm` | Small (0.3125rem track)        |
| `md` | Medium (0.375rem track) - default |
| `lg` | Large (0.5rem track)           |
| `xl` | Extra large (0.625rem track)   |

### Color Variants

| Variant   | Description                    |
| --------- | ------------------------------ |
| `default` | Default blue theme             |
| `primary` | Primary blue theme             |
| `success` | Success green theme            |
| `warning` | Warning yellow theme           |
| `danger`  | Danger red theme               |
| `info`    | Info cyan theme                |

### Interaction Methods

The component supports multiple interaction methods:

- **Mouse/Touch Drag**: Click and drag the thumb to adjust the value
- **Track Click**: Click anywhere on the track to jump to that position
- **Keyboard Navigation**: Use arrow keys when focused to adjust the value
- **Touch Support**: Full touch event support for mobile devices

### Keyboard Navigation

When the slider track is focused:

- **Arrow Right**: Increase the value by one step
- **Arrow Left**: Decrease the value by one step

The component prevents the value from exceeding the min/max bounds.

### Accessibility

The component provides:

- Proper ARIA attributes (`role="slider"`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow`)
- Keyboard navigation support
- Focus-visible styles for keyboard navigation
- Screen reader support via ARIA attributes
- Disabled and readonly state indicators
