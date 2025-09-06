# API

## Props

| Prop                | Type                                   | Default   | Description                                                                    |
| ------------------- | -------------------------------------- | --------- | ------------------------------------------------------------------------------ |
| `size`              | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'`    | The size of the range slider                                                   |
| `disabled`          | `boolean`                              | `false`   | Whether the range slider is disabled                                           |
| `readonly`          | `boolean`                              | `false`   | Whether the range slider is readonly                                           |
| `step`              | `number`                               | `0.1`     | The step increment for the range values                                        |
| `color`             | `string`                               | `'black'` | The color of the filled track                                                  |
| `thumbColor`        | `string`                               | `'black'` | The color of the thumb handles                                                 |
| `trackColor`        | `string`                               | `'grey'`  | The color of the track background                                              |
| `label`             | `string`                               | `''`      | The label text for the range slider                                            |
| `min`               | `number`                               | `0`       | The minimum value of the range                                                 |
| `max`               | `number`                               | `100`     | The maximum value of the range                                                 |
| `thumbLabel`        | `boolean \| 'always'`                  | `false`   | Whether to show thumb labels (true = on drag/focus, 'always' = always visible) |
| `thumbLabelClasses` | `string[]`                             | `[]`      | Additional CSS classes for thumb labels                                        |
| `labelClasses`      | `string[]`                             | `[]`      | Additional CSS classes for the label                                           |
| `value`             | `[number, number]`                     | `[0, 0]`  | The current range values [min, max]                                            |
| `className`         | `string`                               | `''`      | Additional CSS classes for the container                                       |
| `style`             | `object`                               | `{}`      | Additional inline styles for the container                                     |

## Events

| Event      | Type                                 | Description                         |
| ---------- | ------------------------------------ | ----------------------------------- |
| `onChange` | `(values: [number, number]) => void` | Called when the range values change |

## CSS Classes

The component uses the following CSS classes:

- `.basic-range-input-wrapper` - Main container
- `.slider-track` - The track element
- `.slider-filled` - The filled portion of the track
- `.slider-thumb` - Thumb handles
- `.min-thumb` - Minimum thumb handle
- `.max-thumb` - Maximum thumb handle
- `.thumb-label` - Thumb labels
- `.slider-label` - The label element

## Usage Examples

### Basic Range Slider

```jsx
import BasicRange from "../components/sharedComponents/BasicRange";

const [rangeValues, setRangeValues] = useState([20, 80]);

<BasicRange
  value={rangeValues}
  onChange={setRangeValues}
  min={0}
  max={100}
  label="Price Range"
/>;
```

### Customized Range Slider

```jsx
<BasicRange
  value={[30, 70]}
  onChange={(values) => console.log("Range changed:", values)}
  size="lg"
  color="#007bff"
  thumbColor="#0056b3"
  trackColor="#e9ecef"
  step={5}
  thumbLabel={true}
  label="Custom Range"
  labelClasses={["custom-label"]}
/>
```

### Disabled Range Slider

```jsx
<BasicRange
  value={[25, 75]}
  onChange={setRangeValues}
  disabled={true}
  label="Disabled Range"
/>
```

### Range with Always Visible Labels

```jsx
<BasicRange
  value={[10, 90]}
  onChange={setRangeValues}
  thumbLabel="always"
  thumbLabelClasses={["always-visible"]}
  label="Range with Labels"
/>
```
