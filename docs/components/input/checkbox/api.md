# API

## BasicCheckbox Component

The main checkbox component that provides customizable checkbox functionality with support for multiple selection and select all.

### Props

| Prop              | Type                                                      | Default                                    | Required | Description                                                                 |
| ----------------- | --------------------------------------------------------- | ------------------------------------------ | -------- | --------------------------------------------------------------------------- |
| `size`            | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                   | `'md'`                                     | No       | Size of the checkbox                                                        |
| `variant`         | `'default' \| 'info'`                                     | `'default'`                                | No       | Color variant of the checkbox                                              |
| `disabled`        | `boolean`                                                 | `false`                                    | No       | Whether the checkbox is disabled (prevents interaction)                     |
| `readonly`        | `boolean`                                                 | `false`                                    | No       | Whether the checkbox is readonly (prevents interaction but maintains state) |
| `label`           | `string`                                                  | `''`                                       | No       | Text label for the checkbox                                                |
| `value`           | `string \| number \| boolean`                            | `''`                                       | No       | Value of the checkbox (used for selection state)                           |
| `selected`        | `array`                                                   | `[]`                                       | No       | Array of selected values (for multiple selection)                         |
| `valueComparator` | `function`                                                 | `(a, b) => Array.isArray(a) && a.includes(b)` | No       | Custom function to compare values for selection state                      |
| `allItems`        | `array`                                                   | `[]`                                       | No       | Array of all items (required for selectAll functionality)                |
| `valueKey`        | `string`                                                  | `''`                                       | No       | Key to extract value from object items (for selectAll)                     |
| `onChange`        | `function`                                                 | -                                          | No       | Callback function fired when checkbox state changes                        |
| `children`        | `ReactNode`                                               | -                                          | No       | Additional content to render after the label                              |
| `icon`            | `elementType`                                             | -                                          | No       | Custom icon component (replaces default checkbox visual)                   |
| `labelSlot`       | `elementType`                                             | -                                          | No       | Custom label component (replaces default label text)                      |

### Event Handlers

#### onChange

Callback function that is called whenever the checkbox state changes.

**Signature:**

```js
onChange: (newValue, checkboxValue, event) => void
```

**Parameters:**

- `newValue` (`array`): The updated array of selected values
- `checkboxValue` (`string | number | boolean`): The value of the checkbox that was clicked
- `event` (`SyntheticEvent`): The React synthetic event object

### Slot Functions

#### icon

Component that renders a custom checkbox icon, replacing the default checkbox visual.

**Signature:**

```js
icon: ({ isChecked }) => ReactNode
```

**Parameters:**

- `isChecked` (`boolean`): Whether the checkbox is currently checked

#### labelSlot

Component that renders a custom label, replacing the default label text.

**Signature:**

```js
labelSlot: ({ isChecked }) => ReactNode
```

**Parameters:**

- `isChecked` (`boolean`): Whether the checkbox is currently checked

### Size Variants

The checkbox supports five size variants:

- `xs`: Extra small (0.75rem checkbox, 0.625rem font)
- `sm`: Small (0.875rem checkbox, 0.75rem font)
- `md`: Medium - Default (1rem checkbox, 0.875rem font)
- `lg`: Large (1.125rem checkbox, 1rem font)
- `xl`: Extra large (1.25rem checkbox, 1.125rem font)

### Color Variants

The checkbox supports two color variants:

- `default`: Black checkbox with black border and white tick
- `info`: Blue checkbox (#2196f3) with blue border and white tick

### Select All Functionality

When `value="selectAll"` is used along with `allItems` and optionally `valueKey`, the checkbox will:

- Check if all items are selected when determining its checked state
- Select all items when clicked (if not all are selected)
- Deselect all items when clicked (if all are selected)

### Accessibility

The component uses a native `<input type="checkbox">` element (hidden visually) for proper form semantics and accessibility. The component maintains:

- Proper label association via the `<label>` wrapper
- Keyboard navigation support (native checkbox behavior)
- Screen reader compatibility
- Disabled state handling
