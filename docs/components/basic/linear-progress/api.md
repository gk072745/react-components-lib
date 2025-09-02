# API

## Props

| Prop            | Type      | Default     | Description                                 |
| --------------- | --------- | ----------- | ------------------------------------------- |
| `modelValue`    | `number`  | `0`         | Current progress value                      |
| `max`           | `number`  | `100`       | Maximum value used to compute percentage    |
| `indeterminate` | `boolean` | `false`     | Shows animated bar for unknown progress     |
| `height`        | `number`  | `4`         | Bar height in pixels                        |
| `color`         | `string`  | `'#000'`    | Progress bar color                          |
| `bgColor`       | `string`  | `'#e0e0e0'` | Background track color                      |
| `rounded`       | `boolean` | `false`     | Rounds track and bar corners                |
| `absolute`      | `boolean` | `false`     | Positions the bar absolute at container top |
| `className`     | `string`  | `''`        | Additional CSS classes                      |
| `style`         | `object`  | `{}`        | Inline styles for the container             |

## Notes

- Percentage is computed as `(modelValue / max) * 100` and clamped to 0–100.
- When `indeterminate` is true, width animation overrides the determinate width.

## Usage Examples

### Basic Determinate

```jsx
<LinearProgress modelValue={60} color="#0d6efd" height={6} />
```

### Indeterminate

```jsx
<LinearProgress indeterminate={true} />
```

### Absolute Top Bar

```jsx
<div style={{ position: "relative", height: 80 }}>
  <LinearProgress absolute={true} modelValue={35} />
</div>
```

### Rounded Corners

```jsx
<LinearProgress modelValue={70} rounded={true} height={8} />
```
