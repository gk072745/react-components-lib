# API

## BasicInput Component

The main input component that provides text input functionality with support for various input types, validation, custom icons, floating labels, and extensive event handling.

### Props

| Prop                        | Type                                  | Default  | Required | Description                                                     |
| --------------------------- | ------------------------------------- | -------- | -------- | --------------------------------------------------------------- |
| `label`                     | `string`                              | `''`     | No       | Label text for the input                                        |
| `placeholder`               | `string`                              | `''`     | No       | Placeholder text                                                |
| `type`                      | `string`                              | `'text'` | No       | HTML input type (text, email, password, number, tel, url, etc.) |
| `value`                     | `string \| number \| object \| array` | `''`     | No       | Current input value                                             |
| `rules`                     | `array`                               | `[]`     | No       | Array of validation rules                                       |
| `asyncValidation`           | `function`                            | -        | No       | Async validation function (React 19)                            |
| `prepend`                   | `boolean`                             | `false`  | No       | Whether to show prepend icon (outer)                            |
| `prependInner`              | `boolean`                             | `false`  | No       | Whether to show prepend inner icon                              |
| `appendInner`               | `boolean`                             | `false`  | No       | Whether to show append inner icon                               |
| `append`                    | `boolean`                             | `false`  | No       | Whether to show append icon (outer)                             |
| `clearable`                 | `boolean`                             | `false`  | No       | Whether to show clear button                                    |
| `hideDetails`               | `boolean`                             | `false`  | No       | Whether to hide the details section                             |
| `hint`                      | `string`                              | `''`     | No       | Hint text displayed below the input                             |
| `loading`                   | `boolean`                             | `false`  | No       | Whether the input is in loading state                           |
| `disabled`                  | `boolean`                             | `false`  | No       | Whether the input is disabled                                   |
| `readonly`                  | `boolean`                             | `false`  | No       | Whether the input is readonly                                   |
| `persistentDetails`         | `boolean`                             | `false`  | No       | Whether to always show file details                             |
| `hideSpinButtons`           | `boolean`                             | `false`  | No       | Whether to hide number input spin buttons                       |
| `className`                 | `string`                              | `''`     | No       | Additional CSS classes                                          |
| `style`                     | `object`                              | `{}`     | No       | Additional inline styles                                        |
| `prependIcon`               | `ReactNode`                           | -        | No       | Custom prepend icon (replaces default icon)                     |
| `prependInnerIcon`          | `ReactNode`                           | -        | No       | Custom prepend inner icon (replaces default icon)               |
| `appendIcon`                | `ReactNode`                           | -        | No       | Custom append icon (replaces default icon)                      |
| `appendInnerIcon`           | `ReactNode`                           | -        | No       | Custom append inner icon (replaces default icon)                |
| `customInputField`          | `function`                            | -        | No       | Custom input field renderer function                            |
| `customDetailsRightContent` | `function`                            | -        | No       | Custom details right content renderer function                  |
| `ref`                       | `function \| object`                  | -        | No       | React 19 ref (no forwardRef needed)                             |

### Event Handlers

#### onChange

Callback function that is called when the input value changes.

**Signature:**

```js
onChange: (value) => void
```

**Parameters:**

- `value` (`string | number`): The new input value

#### onInput

Callback function that is called when the input value changes (input event).

**Signature:**

```js
onInput: (event) => void
```

**Parameters:**

- `event` (`SyntheticEvent`): The React synthetic event object

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

#### onValidate

Callback function that is called when validation occurs.

**Signature:**

```js
onValidate: (isValid, value, message) => void
```

**Parameters:**

- `isValid` (`boolean`): Whether the input is valid
- `value` (`string | number | object | array`): The current input value
- `message` (`string`): Validation error message (empty if valid)

#### onChangeEvent

Callback function that is called when the input value changes (native change event).

**Signature:**

```js
onChangeEvent: (event) => void
```

**Parameters:**

- `event` (`SyntheticEvent`): The React synthetic event object

### Additional Event Handlers

The component also supports the following standard event handlers (all with signature `(event) => void`):

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
- `onPaste`: Paste event handler
- `onCompositionStart`: Composition start event handler
- `onCompositionUpdate`: Composition update event handler
- `onCompositionEnd`: Composition end event handler
- `onDragEnter`: Drag enter event handler
- `onDragOver`: Drag over event handler
- `onDragLeave`: Drag leave event handler
- `onDrop`: Drop event handler
- `onParentDragEnter`: Parent drag enter event handler
- `onParentDragOver`: Parent drag over event handler
- `onParentDragLeave`: Parent drag leave event handler
- `onParentDrop`: Parent drop event handler
- `onPrependClick`: Prepend icon click handler
- `onPrependInnerClick`: Prepend inner icon click handler
- `onClearClick`: Clear button click handler
- `onAppendClick`: Append icon click handler
- `onAppendInnerClick`: Append inner icon click handler

### Validation Rules

The component supports validation through the `rules` prop. Each rule can be:

1. **String rule**: Built-in validation rule name (e.g., `'required'`, `'email'`, `'minLength'`)
2. **Function rule**: Custom validation function that returns `true` for valid, `false` for invalid
3. **RegExp rule**: Regular expression pattern to test against the value

**Rule Object Structure:**

```js
{
  rule: string | function | RegExp,
  message?: string,
  condition?: number
}
```

**Built-in String Rules:**

- `'required'`: Field is required
- `'minLength'`: Minimum character length (requires `condition`)
- `'maxLength'`: Maximum character length (requires `condition`)
- `'email'`: Valid email format
- `'number'`: Valid number format
- `'phone'`: Valid phone number (10 digits)
- `'url'`: Valid URL format
- `'minValue'`: Minimum numeric value (requires `condition`)
- `'maxValue'`: Maximum numeric value (requires `condition`)

**Type-based Validation:**

The component automatically validates based on the `type` prop:

- `type="email"`: Validates email format
- `type="number"`: Validates number format
- `type="tel"`: Validates phone number format (10 digits)
- `type="url"`: Validates URL format

### Async Validation

The component supports async validation through the `asyncValidation` prop (React 19 feature).

**Signature:**

```js
asyncValidation: (value) => Promise<{ valid: boolean, message?: string }>
```

**Parameters:**

- `value` (`string | number | object | array`): The current input value

**Returns:**

- `Promise<{ valid: boolean, message?: string }>`: Promise resolving to validation result

### Custom Input Field

The component supports a custom input field renderer through the `customInputField` prop.

**Signature:**

```js
customInputField: (props) => ReactNode;
```

**Props provided to customInputField:**

- `inputRef`: Ref for the input element
- `inputClass`: CSS class for the input
- `internalType`: Current input type
- `readonly`: Whether input is readonly
- `disabled`: Whether input is disabled
- `placeholder`: Placeholder text
- `internalValue`: Current input value
- `triggerEvent`: Function to trigger events
- `onChangeEvent`: Change event handler
- `onFocus`: Focus event handler
- `onBlur`: Blur event handler
- `onKeyDown`: Key down event handler
- `onClick`: Click event handler
- `onDoubleClick`: Double click event handler
- `onMouseDown`: Mouse down event handler
- `onMouseUp`: Mouse up event handler
- `onMouseEnter`: Mouse enter event handler
- `onMouseLeave`: Mouse leave event handler
- `onKeyUp`: Key up event handler
- `onKeyPress`: Key press event handler
- `onCopy`: Copy event handler
- `onCut`: Cut event handler
- `onPaste`: Paste event handler
- `onCompositionStart`: Composition start event handler
- `onCompositionUpdate`: Composition update event handler
- `onCompositionEnd`: Composition end event handler
- `onDragEnter`: Drag enter event handler
- `onDragOver`: Drag over event handler
- `onDragLeave`: Drag leave event handler
- `onDrop`: Drop event handler
- `renderClearButton`: Clear button element

### Custom Details Right Content

The component supports custom details right content through the `customDetailsRightContent` prop.

**Signature:**

```js
customDetailsRightContent: (props) => ReactNode;
```

**Props provided to customDetailsRightContent:**

- `internalValue`: Current input value
- `hint`: Hint text
- `error`: Whether there is an error
- `errorMessage`: Error message
- `persistentDetails`: Whether details are persistent
- `focused`: Whether input is focused

### Ref API (React 19)

The component exposes methods through the ref prop:

- `validate()`: Manually trigger validation
- `setInternalValue(value)`: Set the internal value
- `focus()`: Focus the input element
- `blur()`: Blur the input element

### Input Types

Supported input types:

- `text`: Standard text input
- `email`: Email input with automatic email validation
- `password`: Password input with visibility toggle
- `number`: Numeric input with automatic number validation
- `tel`: Phone number input with automatic phone validation
- `url`: URL input with automatic URL validation

### Accessibility

The component provides:

- Proper label association
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- ARIA attributes
- Password visibility toggle for password inputs
