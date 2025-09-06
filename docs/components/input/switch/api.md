# API

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | boolean | `false` | Current on/off state |
| `disabled` | boolean | `false` | Disables the switch |
| `readonly` | boolean | `false` | Read-only state (no updates) |
| `bgColor` | string | `grey` | Track background color |
| `activeBgColor` | string | `grey` | Track background color when checked |
| `sliderColor` | string | - | Dot color (overrides default) |
| `activeSliderColor` | string | - | Dot color when checked (overrides default) |
| `size` | one of `xs`, `sm`, `md`, `lg`, `xl` | `xl` | Switch size |
| `label` | string | `''` | Label text |
| `labelPosition` | one of `left`, `right` | `right` | Label position |
| `inset` | boolean | `false` | Inset style variant |
| `dotLabels` | object `{ true: string, false: string }` | `null` | Dot label text for states |
| `dotLabelColors` | object `{ true: string, false: string }` | `{ true: '#000', false: '#000' }` | Dot label colors |
| `className` | string | `''` | Additional CSS classes |
| `style` | object | `{}` | Inline styles |
| `onChange` | function `(newValue: boolean) => void` | - | Called on toggle |

## Notes

- For controlled usage, pass `value` and `onChange`.
- Use classes like `color-primary` via the container to apply theme colors.
- `inset` adjusts sizes and dot behavior; see SCSS variables/mixins.

## Usage Examples

### Basic Controlled

```jsx
const [isOn, setIsOn] = useState(false);
<BasicSwitch value={isOn} onChange={setIsOn} label="Notifications" />
```

### Inset with Dot Labels

```jsx
<BasicSwitch inset dotLabels={{ true: 'ON', false: 'OFF' }} />
```
