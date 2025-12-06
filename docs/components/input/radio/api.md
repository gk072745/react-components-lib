# API

## BasicRadio Component

A flexible radio button component that supports both traditional single selection and multiple selection modes with extensive customization options.

### Props

| Prop              | Type                                                                    | Default | Required | Description                                      |
| ----------------- | ----------------------------------------------------------------------- | ------- | -------- | ------------------------------------------------ |
| `size`            | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                                 | `'sm'`  | No       | Size variant of the radio button                 |
| `variant`         | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'default'` | No    | Color variant of the radio button               |
| `disabled`        | `boolean`                                                               | `false` | No       | Whether the radio is disabled                    |
| `readonly`        | `boolean`                                                               | `false` | No       | Whether the radio is readonly                    |
| `toggle`          | `boolean`                                                               | `false` | No       | Whether the radio can be toggled off             |
| `label`           | `string`                                                                | `''`    | No       | Label text for the radio                         |
| `value`           | `string \| number \| boolean`                                          | -       | Yes      | Value of the radio option                        |
| `multiple`        | `boolean`                                                               | `false` | No       | Whether multiple selection is allowed            |
| `modelValue`      | `string \| number \| boolean \| array`                                  | -       | No       | Current selected value(s)                        |
| `selected`        | `string \| number \| boolean \| array`                                  | -       | No       | Alternative to modelValue                       |
| `valueComparator` | `function`                                                              | -       | No       | Custom function to compare values                |
| `className`       | `string`                                                                | `''`    | No       | Additional CSS classes                            |
| `style`           | `object`                                                                | `{}`    | No       | Additional inline styles                         |
| `onChange`         | `function`                                                              | -       | No       | Callback when radio selection changes            |
| `onUpdateModelValue` | `function`                                                           | -       | No       | Callback to update the model value               |
| `children`        | `ReactNode \| function`                                                | -       | No       | Custom radio icon or render function             |

### Event Handlers

#### onChange

Callback function that is called when the radio selection changes.

**Signature:**

```js
onChange: (newValue, selectedValue, event) => void
```

**Parameters:**

- `newValue` (string | number | boolean | array): The new selected value(s) after the change
- `selectedValue` (string | number | boolean): The value of the radio option that was clicked
- `event` (Event): The click event object

**Note:** In multiple selection mode, `newValue` will be an array. In single selection mode, it will be a single value.

#### onUpdateModelValue

Callback function that is called to update the model value. This is typically used for two-way data binding.

**Signature:**

```js
onUpdateModelValue: (newValue) => void
```

**Parameters:**

- `newValue` (string | number | boolean | array): The new selected value(s) to set

### Value Management

The component supports two props for managing the selected value:

- **`modelValue`**: Primary prop for two-way data binding (Vue-style naming)
- **`selected`**: Alternative prop name (React-style naming)

Both props work identically. If both are provided, `modelValue` takes precedence.

### Selection Modes

#### Single Selection Mode (default)

In single selection mode, only one option can be selected at a time. When a new option is selected, the previous selection is automatically deselected.

- `multiple={false}` (default)
- `modelValue` should be a single value (string, number, or boolean)
- When `toggle={true}`, clicking the selected option will deselect it

#### Multiple Selection Mode

In multiple selection mode, multiple options can be selected simultaneously.

- `multiple={true}`
- `modelValue` should be an array of values
- Clicking an option toggles its selection state
- When `toggle={false}` and only one option is selected, it cannot be deselected

### Custom Value Comparison

The `valueComparator` prop allows you to provide a custom function to compare values. This is useful when working with objects or complex value types.

**Signature:**

```js
valueComparator: (internalValue, value, multiple) => boolean
```

**Parameters:**

- `internalValue` (string | number | boolean | array): The current selected value(s)
- `value` (string | number | boolean): The value of the radio option being checked
- `multiple` (boolean): Whether multiple selection mode is enabled

**Returns:**

- `boolean`: Whether the radio option should be considered checked

### Custom Icon Rendering

The `children` prop can be used to provide custom radio icons. It accepts either:

1. **React Node**: A static custom icon element
2. **Render Function**: A function that receives state and returns a React node

**Render Function Signature:**

```js
children: ({ isChecked, disabled, readonly }) => ReactNode
```

**Parameters:**

- `isChecked` (boolean): Whether the radio is currently selected
- `disabled` (boolean): Whether the radio is disabled
- `readonly` (boolean): Whether the radio is readonly

### Size Variants

| Size | Description                    |
| ---- | ------------------------------ |
| `xs` | Extra small (0.75rem)          |
| `sm` | Small (0.875rem) - default     |
| `md` | Medium (1rem)                  |
| `lg` | Large (1.125rem)               |
| `xl` | Extra large (1.25rem)           |

### Color Variants

| Variant   | Description                    |
| --------- | ------------------------------ |
| `default` | Default gray/blue theme        |
| `primary` | Primary blue theme             |
| `success` | Success green theme            |
| `warning` | Warning yellow theme           |
| `danger`  | Danger red theme               |
| `info`    | Info cyan theme                |

### Accessibility

The component provides:

- Proper ARIA attributes (`aria-disabled`)
- Keyboard navigation support (tabIndex)
- Focus-visible styles for keyboard navigation
- Screen reader support via native radio input
- Role attribute for semantic meaning
- Hidden native input for form submission compatibility
