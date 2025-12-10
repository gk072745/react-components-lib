# API

## BasicTextarea Component

A comprehensive textarea component built on top of BasicInput with additional textarea-specific features.

### Props

| Prop                | Type                                   | Default   | Required | Description                                                                    |
| ------------------- | -------------------------------------- | --------- | -------- | ------------------------------------------------------------------------------ |
| `label`             | `string`                               | `''`      | No       | Label text for the textarea                                                    |
| `placeholder`       | `string`                               | `''`      | No       | Placeholder text                                                               |
| `value`             | `string \| number`                     | `''`      | No       | Current value of the textarea                                                  |
| `hint`              | `string`                               | `''`      | No       | Helpful hint text displayed below the textarea                                 |
| `rows`              | `number`                               | `3`       | No       | Number of visible text lines                                                   |
| `minRows`           | `number`                               | `1`       | No       | Minimum number of rows when autoGrow is enabled                                |
| `noResize`          | `boolean`                              | `false`   | No       | Disable textarea resize functionality                                          |
| `autoGrow`          | `boolean`                              | `false`   | No       | Automatically grow textarea height based on content                              |
| `maxlength`         | `number`                               | `undefined` | No     | Maximum number of characters allowed                                           |
| `counter`           | `boolean`                              | `false`   | No       | Show character counter                                                         |
| `disabled`          | `boolean`                              | `false`   | No       | Disable the textarea                                                           |
| `readonly`          | `boolean`                              | `false`   | No       | Make the textarea readonly                                                     |
| `loading`           | `boolean`                              | `false`   | No       | Show loading state                                                             |
| `rules`             | `array`                                | `[]`      | No       | Array of validation rules                                                      |
| `persistentDetails` | `boolean`                              | `true`    | No       | Keep details section always visible                                            |
| `hideDetails`       | `boolean`                              | `false`   | No       | Hide the details section                                                       |
| `prependIcon`       | `ReactNode`                            | `undefined` | No     | Custom prepend icon                                                            |
| `prependInnerIcon`  | `ReactNode`                            | `undefined` | No     | Custom inner prepend icon                                                      |
| `appendIcon`        | `ReactNode`                            | `undefined` | No     | Custom append icon                                                             |
| `appendInnerIcon`   | `ReactNode`                            | `undefined` | No     | Custom inner append icon                                                       |
| `className`         | `string`                               | `''`      | No       | Additional CSS classes for the container                                       |
| `style`             | `object`                               | `{}`      | No       | Additional inline styles for the container                                      |

### Event Handlers

| Prop                | Type       | Description                                    |
| ------------------- | ---------- | ---------------------------------------------- |
| `onChange`          | `function` | Called when the value changes                  |
| `onFocus`           | `function` | Called when the textarea gains focus           |
| `onBlur`            | `function` | Called when the textarea loses focus           |
| `onInput`           | `function` | Called on input events                         |
| `onKeyDown`         | `function` | Called on key down events                      |
| `onKeyUp`           | `function` | Called on key up events                        |
| `onKeyPress`        | `function` | Called on key press events                     |
| `onClick`           | `function` | Called on click events                         |
| `onDoubleClick`     | `function` | Called on double click events                  |
| `onMouseDown`       | `function` | Called on mouse down events                    |
| `onMouseUp`         | `function` | Called on mouse up events                      |
| `onMouseEnter`      | `function` | Called on mouse enter events                   |
| `onMouseLeave`      | `function` | Called on mouse leave events                    |
| `onCopy`            | `function` | Called on copy events                           |
| `onCut`             | `function` | Called on cut events                           |
| `onPaste`           | `function` | Called on paste events                         |
| `onCompositionStart`| `function` | Called on composition start events            |
| `onCompositionUpdate`| `function` | Called on composition update events          |
| `onCompositionEnd`  | `function` | Called on composition end events               |
| `onDragEnter`       | `function` | Called on drag enter events                    |
| `onDragOver`        | `function` | Called on drag over events                     |
| `onDragLeave`       | `function` | Called on drag leave events                    |
| `onDrop`            | `function` | Called on drop events                          |
| `onParentDragEnter` | `function` | Called on parent drag enter events            |
| `onParentDragOver`  | `function` | Called on parent drag over events              |
| `onParentDragLeave` | `function` | Called on parent drag leave events            |
| `onParentDrop`      | `function` | Called on parent drop events                   |
| `onPrependClick`    | `function` | Called when prepend icon is clicked            |
| `onPrependInnerClick`| `function` | Called when inner prepend icon is clicked    |
| `onClearClick`      | `function` | Called when clear button is clicked            |
| `onAppendClick`     | `function` | Called when append icon is clicked             |
| `onAppendInnerClick`| `function` | Called when inner append icon is clicked      |
| `onValidate`        | `function` | Called during validation                       |
| `onChangeEvent`     | `function` | Called on change events (raw event)            |

### Validation Rules

The `rules` prop accepts an array of validation rule objects. Each rule object should have the following structure:

```jsx
{
  rule: string,           // Rule type (e.g., 'required', 'minLength', 'maxLength', 'email', 'pattern')
  condition?: any,        // Condition value (e.g., minimum length, maximum length, regex pattern)
  message: string         // Error message to display
}
```

#### Supported Rule Types

| Rule Type   | Description              | Condition Required |
| ---------- | ------------------------ | ------------------ |
| `required` | Field is required        | No                 |
| `minLength`| Minimum character length | Yes (number)       |
| `maxLength`| Maximum character length | Yes (number)       |
| `email`    | Valid email format       | No                 |
| `pattern`  | Custom regex pattern     | Yes (RegExp or string) |

#### Example Validation Rules

```jsx
const validationRules = [
  { rule: 'required', message: 'This field is required' },
  { rule: 'minLength', condition: 10, message: 'Must be at least 10 characters' },
  { rule: 'maxLength', condition: 100, message: 'Must be no more than 100 characters' },
  { rule: 'email', message: 'Please enter a valid email address' },
  { rule: 'pattern', condition: /^[A-Z]/, message: 'Must start with uppercase letter' }
];

<BasicTextarea
  label="Validated Textarea"
  rules={validationRules}
  // ... other props
/>
```

### Auto Grow

When `autoGrow` is enabled, the textarea automatically adjusts its height based on content:

```jsx
<BasicTextarea
  label="Auto Growing Textarea"
  value={value}
  onChange={setValue}
  autoGrow={true}
  minRows={2}
/>
```

### Character Counter

Display a character counter with optional maximum length:

```jsx
<BasicTextarea
  label="With Character Counter"
  value={value}
  onChange={setValue}
  maxlength={100}
  counter={true}
/>
```

### Custom Icons

The component supports custom icons for prepend, prependInner, append, and appendInner positions:

```jsx
const customIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24">
    {/* SVG content */}
  </svg>
);

<BasicTextarea
  label="Custom Icons"
  value={value}
  onChange={setValue}
  prependIcon={customIcon}
  appendIcon={customIcon}
/>
```

### Accessibility

The component includes several accessibility features:

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Clear focus indicators
- **Screen Reader Support**: Descriptive text and hints
