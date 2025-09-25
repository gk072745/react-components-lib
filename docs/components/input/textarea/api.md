# API

This page documents the props and methods available for the BasicTextarea component.

## Props

### Basic Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `''` | Label text for the textarea |
| `placeholder` | `string` | `''` | Placeholder text |
| `value` | `string \| number` | `''` | Current value of the textarea |
| `hint` | `string` | `''` | Helpful hint text displayed below the textarea |
| `className` | `string` | `''` | Additional CSS classes |
| `style` | `object` | `{}` | Inline styles |

### Textarea Specific Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `rows` | `number` | `3` | Number of visible text lines |
| `minRows` | `number` | `1` | Minimum number of rows when autoGrow is enabled |
| `noResize` | `boolean` | `false` | Disable textarea resize functionality |
| `autoGrow` | `boolean` | `false` | Automatically grow textarea height based on content |
| `maxlength` | `number` | `undefined` | Maximum number of characters allowed |
| `counter` | `boolean` | `false` | Show character counter |

### State Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | `boolean` | `false` | Disable the textarea |
| `readonly` | `boolean` | `false` | Make the textarea readonly |
| `loading` | `boolean` | `false` | Show loading state |

### Validation Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `rules` | `array` | `[]` | Array of validation rules |
| `persistentDetails` | `boolean` | `true` | Keep details section always visible |
| `hideDetails` | `boolean` | `false` | Hide the details section |

### Icon Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `prepend` | `boolean` | `false` | Show prepend icon |
| `prependInner` | `boolean` | `false` | Show inner prepend icon |
| `append` | `boolean` | `false` | Show append icon |
| `appendInner` | `boolean` | `false` | Show inner append icon |
| `prependIcon` | `ReactNode` | `undefined` | Custom prepend icon |
| `prependInnerIcon` | `ReactNode` | `undefined` | Custom inner prepend icon |
| `appendIcon` | `ReactNode` | `undefined` | Custom append icon |
| `appendInnerIcon` | `ReactNode` | `undefined` | Custom inner append icon |

### Event Handlers

| Prop | Type | Description |
|------|------|-------------|
| `onChange` | `function` | Called when the value changes |
| `onFocus` | `function` | Called when the textarea gains focus |
| `onBlur` | `function` | Called when the textarea loses focus |
| `onInput` | `function` | Called on input events |
| `onKeyDown` | `function` | Called on key down events |
| `onKeyUp` | `function` | Called on key up events |
| `onKeyPress` | `function` | Called on key press events |
| `onClick` | `function` | Called on click events |
| `onDoubleClick` | `function` | Called on double click events |
| `onMouseDown` | `function` | Called on mouse down events |
| `onMouseUp` | `function` | Called on mouse up events |
| `onMouseEnter` | `function` | Called on mouse enter events |
| `onMouseLeave` | `function` | Called on mouse leave events |
| `onCopy` | `function` | Called on copy events |
| `onCut` | `function` | Called on cut events |
| `onPaste` | `function` | Called on paste events |
| `onCompositionStart` | `function` | Called on composition start events |
| `onCompositionUpdate` | `function` | Called on composition update events |
| `onCompositionEnd` | `function` | Called on composition end events |
| `onDragEnter` | `function` | Called on drag enter events |
| `onDragOver` | `function` | Called on drag over events |
| `onDragLeave` | `function` | Called on drag leave events |
| `onDrop` | `function` | Called on drop events |
| `onParentDragEnter` | `function` | Called on parent drag enter events |
| `onParentDragOver` | `function` | Called on parent drag over events |
| `onParentDragLeave` | `function` | Called on parent drag leave events |
| `onParentDrop` | `function` | Called on parent drop events |
| `onPrependClick` | `function` | Called when prepend icon is clicked |
| `onPrependInnerClick` | `function` | Called when inner prepend icon is clicked |
| `onClearClick` | `function` | Called when clear button is clicked |
| `onAppendClick` | `function` | Called when append icon is clicked |
| `onAppendInnerClick` | `function` | Called when inner append icon is clicked |
| `onValidate` | `function` | Called during validation |

## Validation Rules

The `rules` prop accepts an array of validation rule objects. Each rule object should have the following structure:

```jsx
{
  rule: string,           // Rule type (e.g., 'required', 'minLength', 'maxLength', 'email', 'pattern')
  condition?: any,        // Condition value (e.g., minimum length, maximum length, regex pattern)
  message: string         // Error message to display
}
```

### Supported Rule Types

| Rule Type | Description | Condition Required |
|-----------|-------------|-------------------|
| `required` | Field is required | No |
| `minLength` | Minimum character length | Yes (number) |
| `maxLength` | Maximum character length | Yes (number) |
| `email` | Valid email format | No |
| `pattern` | Custom regex pattern | Yes (RegExp or string) |

### Example Validation Rules

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

## Styling

The component uses CSS classes for styling. You can customize the appearance by targeting these classes:

### Main Classes

- `.default-text-area-wrapper` - Main wrapper class
- `.text-area-field` - The textarea element
- `.char-counter` - Character counter element

### State Classes

- `.focused` - Applied when textarea is focused
- `.disabled` - Applied when textarea is disabled
- `.readonly` - Applied when textarea is readonly
- `.loading` - Applied when textarea is in loading state
- `.error` - Applied when validation fails

### Example Custom Styling

```scss
.default-text-area-wrapper {
  .text-area-field {
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    padding: 12px;
    font-size: 16px;
    line-height: 1.5;
    
    &:focus {
      border-color: #007bff;
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
    }
  }
  
  .char-counter {
    color: #666;
    font-size: 12px;
    text-align: right;
  }
}
```

## Accessibility

The component includes several accessibility features:

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Clear focus indicators
- **Screen Reader Support**: Descriptive text and hints

### Accessibility Props

| Prop | Description |
|------|-------------|
| `label` | Provides accessible label for the textarea |
| `hint` | Provides additional context for screen readers |
| `placeholder` | Provides placeholder text for guidance |

## Examples

### Basic Usage

```jsx
import BasicTextarea from "@/src/components/sharedComponents/BasicTextarea";
import { useState } from "react";

const MyComponent = () => {
  const [value, setValue] = useState("");

  return (
    <BasicTextarea
      label="Your Message"
      placeholder="Enter your message here..."
      value={value}
      onChange={setValue}
      hint="This is a helpful hint"
    />
  );
};
```

### Advanced Usage

```jsx
import BasicTextarea from "@/src/components/sharedComponents/BasicTextarea";
import { useState } from "react";

const MyComponent = () => {
  const [value, setValue] = useState("");

  return (
    <BasicTextarea
      label="Feature-Rich Textarea"
      placeholder="Try all features..."
      value={value}
      onChange={setValue}
      autoGrow={true}
      counter={true}
      maxlength={200}
      rows={3}
      minRows={2}
      rules={[
        { rule: "required", message: "This field is required" },
        { rule: "minLength", condition: 5, message: "Must be at least 5 characters" },
      ]}
      hint="This textarea demonstrates all available features"
    />
  );
};
```
