# API

## BasicFileInput Component

The main file input component that provides file selection functionality with support for single/multiple files, drag-and-drop, validation, and custom display options.

### Props

| Prop                | Type                     | Default | Required | Description                                                                   |
| ------------------- | ------------------------ | ------- | -------- | ----------------------------------------------------------------------------- |
| `label`             | `string`                 | `''`    | No       | Label text for the file input                                                 |
| `maxFiles`          | `number`                 | -       | No       | Maximum number of files allowed (for multiple file selection)                 |
| `maxSize`           | `number`                 | -       | No       | Maximum total file size in bytes                                              |
| `multiple`          | `boolean`                | `false` | No       | Whether multiple files can be selected                                        |
| `value`             | `File \| File[] \| null` | `null`  | No       | Current file(s) value                                                         |
| `chip`              | `boolean`                | `false` | No       | Whether to display files as chips (for multiple files)                        |
| `persistentDetails` | `boolean`                | `true`  | No       | Whether to always show file details (file count, total size)                  |
| `accept`            | `string`                 | -       | No       | Comma-separated list of accepted file types (e.g., ".pdf,.doc" or "image/\*") |
| `hideDetails`       | `boolean`                | `false` | No       | Whether to hide the details section                                           |
| `hint`              | `string`                 | `''`    | No       | Hint text displayed below the input                                           |
| `loading`           | `boolean`                | `false` | No       | Whether the input is in loading state                                         |
| `disabled`          | `boolean`                | `false` | No       | Whether the input is disabled                                                 |
| `readonly`          | `boolean`                | `false` | No       | Whether the input is readonly                                                 |
| `className`         | `string`                 | `''`    | No       | Additional CSS classes                                                        |
| `style`             | `object`                 | `{}`    | No       | Additional inline styles                                                      |
| `prependIcon`       | `ReactNode`              | -       | No       | Custom prepend icon (replaces default file icon)                              |
| `prependInnerIcon`  | `ReactNode`              | -       | No       | Custom prepend inner icon (replaces default document icon)                    |
| `appendIcon`        | `ReactNode`              | -       | No       | Custom append icon (replaces default file icon)                               |
| `appendInnerIcon`   | `ReactNode`              | -       | No       | Custom append inner icon (replaces default upload icon)                       |

### Event Handlers

#### onChange

Callback function that is called when files are selected or removed.

**Signature:**

```js
onChange: (value) => void
```

**Parameters:**

- `value` (`File | File[] | null`): The selected file(s) or null if cleared

#### onInput

Callback function that is called when files are selected (similar to onChange but for input events).

**Signature:**

```js
onInput: (value) => void
```

**Parameters:**

- `value` (`File | File[] | null`): The selected file(s) or null if cleared

#### onFocus

Callback function that is called when the input receives focus.

**Signature:**

```js
onFocus: (event) => void
```

**Parameters:**

- `event` (`SyntheticEvent`): The React synthetic event object

#### onBlur

Callback function that is called when the input loses focus.

**Signature:**

```js
onBlur: (event) => void
```

**Parameters:**

- `event` (`SyntheticEvent`): The React synthetic event object

#### onPaste

Callback function that is called when files are pasted into the input.

**Signature:**

```js
onPaste: (event) => void
```

**Parameters:**

- `event` (`ClipboardEvent`): The clipboard event object

#### onDragEnter

Callback function that is called when a drag operation enters the input area.

**Signature:**

```js
onDragEnter: (event) => void
```

**Parameters:**

- `event` (`DragEvent`): The drag event object

#### onDragOver

Callback function that is called when a drag operation is over the input area.

**Signature:**

```js
onDragOver: (event) => void
```

**Parameters:**

- `event` (`DragEvent`): The drag event object

#### onDragLeave

Callback function that is called when a drag operation leaves the input area.

**Signature:**

```js
onDragLeave: (event) => void
```

**Parameters:**

- `event` (`DragEvent`): The drag event object

#### onDrop

Callback function that is called when files are dropped onto the input.

**Signature:**

```js
onDrop: (event) => void
```

**Parameters:**

- `event` (`DragEvent`): The drag event object

#### onParentDragEnter

Callback function that is called when a drag operation enters the parent container.

**Signature:**

```js
onParentDragEnter: (event) => void
```

**Parameters:**

- `event` (`DragEvent`): The drag event object

#### onParentDragOver

Callback function that is called when a drag operation is over the parent container.

**Signature:**

```js
onParentDragOver: (event) => void
```

**Parameters:**

- `event` (`DragEvent`): The drag event object

#### onParentDragLeave

Callback function that is called when a drag operation leaves the parent container.

**Signature:**

```js
onParentDragLeave: (event) => void
```

**Parameters:**

- `event` (`DragEvent`): The drag event object

#### onParentDrop

Callback function that is called when files are dropped onto the parent container.

**Signature:**

```js
onParentDrop: (event) => void
```

**Parameters:**

- `event` (`DragEvent`): The drag event object

#### onValidate

Callback function that is called when validation occurs.

**Signature:**

```js
onValidate: (isValid, errors) => void
```

**Parameters:**

- `isValid` (`boolean`): Whether the input is valid
- `errors` (`array`): Array of validation error messages

### Additional Event Handlers

The component also supports the following standard event handlers (all with signature `(event) => void`):

- `onChangeEvent`: Native change event handler
- `onKeyDown`: Key down event handler
- `onKeyUp`: Key up event handler
- `onKeyPress`: Key press event handler
- `onClick`: Click event handler
- `onDoubleClick`: Double click event handler
- `onMouseDown`: Mouse down event handler
- `onMouseUp`: Mouse up event handler
- `onMouseEnter`: Mouse enter event handler
- `onMouseLeave`: Mouse leave event handler
- `onCopy`: Copy event handler
- `onCut`: Cut event handler
- `onCompositionStart`: Composition start event handler
- `onCompositionUpdate`: Composition update event handler
- `onCompositionEnd`: Composition end event handler
- `onAppendClick`: Append icon click handler
- `onAppendInnerClick`: Append inner icon click handler

### Validation Rules

The component automatically creates validation rules based on the following props:

- **maxFiles**: Validates that the number of selected files does not exceed the maximum
- **maxSize**: Validates that the total size of all files does not exceed the maximum (in bytes)
- **accept**: Validates that all selected files match the accepted file types

Validation messages are automatically generated and displayed in the input's details section.

### File Display Modes

#### Single File Mode (`multiple={false}`)

- Displays the selected file name as text
- If `chip={true}`, displays the file as a chip with a remove button

#### Multiple File Mode (`multiple={true}`)

- If `chip={false}`: Displays file names as comma-separated text
- If `chip={true}`: Displays each file as a separate chip with individual remove buttons

### File Size Display

When files are selected, the component automatically displays:

- Number of files (for multiple file mode)
- Total file size in a human-readable format (B, kB, mB, gB, tB)

This information is shown in the details section on the right side.

### Accessibility

The component uses the underlying BasicInput component which provides:

- Proper label association
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- ARIA attributes
