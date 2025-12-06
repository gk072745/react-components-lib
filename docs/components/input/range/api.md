# API

## BasicRange Component

A flexible dual-thumb range slider component that allows users to select a range of values between a minimum and maximum with extensive customization options.

### Props

| Prop                | Type                                   | Default   | Required | Description                                                                    |
| ------------------- | -------------------------------------- | --------- | -------- | ------------------------------------------------------------------------------ |
| `size`              | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'`    | No       | Size variant of the range slider                                               |
| `variant`           | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'default'` | No    | Color variant of the range slider                                             |
| `disabled`          | `boolean`                              | `false`   | No       | Whether the range slider is disabled                                           |
| `readonly`          | `boolean`                              | `false`   | No       | Whether the range slider is readonly                                           |
| `step`              | `number`                               | `0.1`     | No       | The step increment for the range values                                        |
| `label`             | `string`                               | `''`      | No       | The label text for the range slider                                            |
| `min`               | `number`                               | `0`       | No       | The minimum value of the range                                                 |
| `max`               | `number`                               | `100`     | No       | The maximum value of the range                                                 |
| `thumbLabel`        | `boolean \| 'always'`                  | `false`   | No       | Whether to show thumb labels (true = on drag/focus, 'always' = always visible) |
| `thumbLabelClasses` | `string[]`                             | `[]`      | No       | Additional CSS classes for thumb labels                                        |
| `labelClasses`      | `string[]`                             | `[]`      | No       | Additional CSS classes for the label                                           |
| `value`             | `[number, number]`                     | `[0, 0]`  | No       | The current range values [min, max]                                            |
| `className`         | `string`                               | `''`      | No       | Additional CSS classes for the container                                       |
| `style`             | `object`                               | `{}`      | No       | Additional inline styles for the container                                     |
| `onChange`          | `function`                             | -         | No       | Callback when the range values change                                          |

### Event Handlers

#### onChange

Callback function that is called when the range values change.

**Signature:**

```js
onChange: (values) => void
```

**Parameters:**

- `values` (array): An array containing `[minValue, maxValue]` representing the current range selection

**Note:** The callback is triggered whenever either thumb is moved or the track is clicked.

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

- **Mouse/Touch Drag**: Click and drag thumbs to adjust values
- **Track Click**: Click anywhere on the track to jump to that position (closest thumb moves)
- **Keyboard Navigation**: Use arrow keys when focused to adjust values
- **Touch Support**: Full touch event support for mobile devices

### Keyboard Navigation

When the slider track is focused:

- **Arrow Right**: Increase the active thumb value by one step
- **Arrow Left**: Decrease the active thumb value by one step

The component prevents min value from exceeding max value and vice versa.

### Accessibility

The component provides:

- Proper ARIA attributes (`role="slider"`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow`)
- Keyboard navigation support
- Focus-visible styles for keyboard navigation
- Screen reader support via ARIA attributes
- Disabled and readonly state indicators
