# API

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | one of `xs`, `sm`, `md`, `lg`, `xl` | `md` | Slider size |
| `disabled` | boolean | `false` | Disable interactions |
| `readonly` | boolean | `false` | Read-only (no updates) |
| `step` | number | `0.1` | Step size; decimals supported |
| `color` | one of `default`, `primary`, `success`, `warning`, `danger`, `info`, `black` | `default` | Color variant; `black` for legacy styling |
| `thumbColor` | string | `black` | Legacy thumb color (when color is `black`/`default`) |
| `trackColor` | string | `grey` | Legacy track color (when color is `black`/`default`) |
| `label` | string | `''` | Field label |
| `min` | number | `0` | Minimum value |
| `max` | number | `100` | Maximum value |
| `thumbLabel` | boolean or `'always'` | `false` | Show value label near thumb |
| `thumbLabelClasses` | array | `[]` | Extra classes for thumb label |
| `labelClasses` | array | `[]` | Extra classes for main label |
| `value` | number | `0` | Current value |
| `className` | string | `''` | Additional CSS classes |
| `style` | object | `{}` | Inline styles |
| `onChange` | function `(newValue: number) => void` | - | Called when value changes |

## Notes

- Keyboard: ArrowLeft/ArrowRight adjusts by `step`; value is clamped between `min` and `max`.
- Decimals: Display precision inferred from `step`.
- Thumb Label: `true` shows on drag/focus; `'always'` shows permanently.

## Usage Examples

### Basic Controlled

```jsx
const [val, setVal] = useState(50);
<BasicSlider value={val} onChange={setVal} min={0} max={100} step={1} />
```

### With Thumb Label

```jsx
<BasicSlider value={75} onChange={setVal} thumbLabel={true} />
```

### Always Visible Label

```jsx
<BasicSlider value={25} onChange={setVal} thumbLabel="always" step={0.1} />
```
