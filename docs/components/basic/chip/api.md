# API

## BasicChip Component

The main chip component that provides customizable chip functionality with support for multiple variants, custom content, and closable functionality.

### Props

| Prop           | Type                                                                     | Default     | Required | Description                                                               |
| -------------- | ------------------------------------------------------------------------ | ----------- | -------- | ------------------------------------------------------------------------- |
| `chip`         | `object \| string`                                                       | -           | Yes      | Chip data (object or string)                                              |
| `textKey`      | `string`                                                                 | `'text'`    | No       | Key to extract text from chip object (when chip is an object)             |
| `valueKey`     | `string`                                                                 | `'value'`   | No       | Key to extract value from chip object (when chip is an object)            |
| `closable`     | `boolean`                                                                | `false`     | No       | Whether the chip can be closed/removed (shows default close button)       |
| `onDeleteChip` | `function`                                                               | -           | No       | Callback function fired when chip is deleted                              |
| `children`     | `ReactNode \| function`                                                  | -           | No       | Custom content or function to render chip content (replaces default text) |
| `prepend`      | `ReactNode \| function`                                                  | -           | No       | Content to render before chip text                                        |
| `append`       | `ReactNode \| function`                                                  | -           | No       | Content to render after chip text                                         |
| `close`        | `ReactNode \| function`                                                  | -           | No       | Custom close button component (replaces default close button)             |
| `variant`      | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'default'` | No       | Chip color variant                                                        |
| `variantType`  | `'solid' \| 'outlined' \| 'filled'`                                      | `'solid'`   | No       | Variant styling type                                                      |
| `disabled`     | `boolean`                                                                | `false`     | No       | Whether the chip is disabled (prevents interaction)                       |
| `className`    | `string`                                                                 | `''`        | No       | Additional CSS classes                                                    |
| `style`        | `object`                                                                 | `{}`        | No       | Additional inline styles                                                  |
| `onClick`      | `function`                                                               | -           | No       | Click handler for the chip                                                |

### Event Handlers

#### onDeleteChip

Callback function that is called when the chip is deleted (close button clicked).

**Signature:**

```js
onDeleteChip: (chipValue, event) => void
```

**Parameters:**

- `chipValue` (`any`): The extracted value from the chip (using `valueKey` if chip is object, or the chip itself if string)
- `event` (`SyntheticEvent`): The React synthetic event object

#### onClick

Callback function that is called when the chip is clicked.

**Signature:**

```js
onClick: (event) => void
```

**Parameters:**

- `event` (`SyntheticEvent`): The React synthetic event object

### Slot Functions

#### prepend

Content to render before the chip text. Can be a React node or a function.

**Signature (when function):**

```js
prepend: ({ chip, isDisabled }) => ReactNode;
```

**Parameters:**

- `chip` (`object | string`): The chip data
- `isDisabled` (`boolean`): Whether the chip is disabled

#### append

Content to render after the chip text. Can be a React node or a function.

**Signature (when function):**

```js
append: ({ chip, isDisabled }) => ReactNode;
```

**Parameters:**

- `chip` (`object | string`): The chip data
- `isDisabled` (`boolean`): Whether the chip is disabled

#### children

Custom content for the chip. Can be a React node or a function. When provided, replaces the default text display.

**Signature (when function):**

```js
children: ({ chip, isDisabled }) => ReactNode;
```

**Parameters:**

- `chip` (`object | string`): The chip data
- `isDisabled` (`boolean`): Whether the chip is disabled

#### close

Custom close button component. Can be a React node or a function. When provided, replaces the default close button.

**Signature (when function):**

```js
close: ({ chip, chipValue, isDisabled, onDelete }) => ReactNode;
```

**Parameters:**

- `chip` (`object | string`): The chip data
- `chipValue` (`any`): The extracted value from the chip
- `isDisabled` (`boolean`): Whether the chip is disabled
- `onDelete` (`function`): Function to trigger chip deletion (call this when close button is clicked)

### Variants

The chip supports six color variants:

- `default`: Gray/neutral styling
- `primary`: Blue styling
- `success`: Green styling
- `warning`: Yellow/orange styling
- `danger`: Red styling
- `info`: Cyan/teal styling

### Variant Types

The chip supports three variant types that change the visual style:

- `solid`: Solid background color with matching border (default)
- `outlined`: Transparent background with colored border
- `filled`: Light background color with darker border

### Accessibility Attributes

The component automatically applies the following accessibility attributes:

- `role="button"`: Indicates the chip is a button
- `tabIndex`: `0` when enabled, `-1` when disabled
- `aria-disabled`: `true` when disabled, `false` when enabled
- Close button has `aria-label="Remove chip"` for screen readers
