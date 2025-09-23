# API

## Component Signature

```jsx
<BasicInput
  // Core Props
  value={string | number | object | array}
  onChange={function}
  label={string}
  placeholder={string}
  type={string}

  // Validation
  rules={array}
  asyncValidation={function}
  onValidate={function}

  // UI States
  disabled={boolean}
  readonly={boolean}
  loading={boolean}
  clearable={boolean}

  // Icons & Buttons
  prepend={boolean}
  prependInner={boolean}
  appendInner={boolean}
  append={boolean}

  // Messages
  hint={string}
  hideDetails={boolean}
  persistentDetails={boolean}

  // Styling
  className={string}
  style={object}
  hideSpinButtons={boolean}

  // Event Handlers
  onFocus={function}
  onBlur={function}
  onInput={function}
  onChangeEvent={function}
  onKeyDown={function}
  onKeyUp={function}
  onKeyPress={function}
  onClick={function}
  onDoubleClick={function}
  onMouseDown={function}
  onMouseUp={function}
  onMouseEnter={function}
  onMouseLeave={function}
  onCopy={function}
  onCut={function}
  onPaste={function}
  onCompositionStart={function}
  onCompositionUpdate={function}
  onCompositionEnd={function}
  onDragEnter={function}
  onDragOver={function}
  onDragLeave={function}
  onDrop={function}
  onParentDragEnter={function}
  onParentDragOver={function}
  onParentDragLeave={function}
  onParentDrop={function}
  onPrependClick={function}
  onPrependInnerClick={function}
  onClearClick={function}
  onAppendClick={function}
  onAppendInnerClick={function}

  // React 19
  ref={function | object}
/>
```

## Props

### Core Props

| Prop          | Type                                  | Default  | Description                 |
| ------------- | ------------------------------------- | -------- | --------------------------- |
| `value`       | `string \| number \| object \| array` | `''`     | The input value             |
| `onChange`    | `function`                            | -        | Callback when value changes |
| `label`       | `string`                              | `''`     | Input label text            |
| `placeholder` | `string`                              | `''`     | Placeholder text            |
| `type`        | `string`                              | `'text'` | HTML input type             |

### Validation Props

| Prop              | Type       | Default | Description                          |
| ----------------- | ---------- | ------- | ------------------------------------ |
| `rules`           | `array`    | `[]`    | Validation rules array               |
| `asyncValidation` | `function` | -       | Async validation function (React 19) |
| `onValidate`      | `function` | -       | Validation result callback           |

### UI State Props

| Prop        | Type      | Default | Description          |
| ----------- | --------- | ------- | -------------------- |
| `disabled`  | `boolean` | `false` | Disable the input    |
| `readonly`  | `boolean` | `false` | Make input readonly  |
| `loading`   | `boolean` | `false` | Show loading spinner |
| `clearable` | `boolean` | `false` | Show clear button    |

### Icon & Button Props

| Prop           | Type      | Default | Description             |
| -------------- | --------- | ------- | ----------------------- |
| `prepend`      | `boolean` | `false` | Show prepend icon       |
| `prependInner` | `boolean` | `false` | Show inner prepend icon |
| `appendInner`  | `boolean` | `false` | Show inner append icon  |
| `append`       | `boolean` | `false` | Show append icon        |

### Message Props

| Prop                | Type      | Default | Description              |
| ------------------- | --------- | ------- | ------------------------ |
| `hint`              | `string`  | `''`    | Help text                |
| `hideDetails`       | `boolean` | `false` | Hide validation messages |
| `persistentDetails` | `boolean` | `false` | Always show details      |

### Styling Props

| Prop              | Type      | Default | Description                |
| ----------------- | --------- | ------- | -------------------------- |
| `className`       | `string`  | `''`    | Additional CSS classes     |
| `style`           | `object`  | `{}`    | Inline styles              |
| `hideSpinButtons` | `boolean` | `false` | Hide number input spinners |

## Validation Rules

### Built-in Rules

| Rule        | Type     | Description              |
| ----------- | -------- | ------------------------ |
| `required`  | `string` | Field is required        |
| `minLength` | `number` | Minimum character length |
| `maxLength` | `number` | Maximum character length |
| `email`     | `string` | Valid email format       |
| `number`    | `string` | Valid number format      |
| `tel`       | `string` | Valid phone number       |
| `url`       | `string` | Valid URL format         |
| `minValue`  | `number` | Minimum numeric value    |
| `maxValue`  | `number` | Maximum numeric value    |

### Custom Rules

```jsx
const customRules = [
  { rule: "required", message: "This field is required" },
  { rule: "minLength", condition: 3, message: "Must be at least 3 characters" },
  { rule: (value) => value.includes("@"), message: "Must contain @ symbol" },
  { rule: /^[A-Z]/, message: "Must start with uppercase letter" },
];
```

## Async Validation (React 19)

```jsx
const asyncValidation = async (value) => {
  // Simulate API call
  const response = await fetch("/api/validate", {
    method: "POST",
    body: JSON.stringify({ value }),
  });

  const result = await response.json();

  return {
    valid: result.isValid,
    message: result.message || "Validation failed",
  };
};

<BasicInput
  value={value}
  onChange={setValue}
  asyncValidation={asyncValidation}
  loading={isValidating}
/>;
```

## Event Handlers

### Input Events

| Handler         | Type       | Description                         |
| --------------- | ---------- | ----------------------------------- |
| `onFocus`       | `function` | Input focus event                   |
| `onBlur`        | `function` | Input blur event                    |
| `onInput`       | `function` | Input change event                  |
| `onChangeEvent` | `function` | Change event with full event object |

### Keyboard Events

| Handler      | Type       | Description     |
| ------------ | ---------- | --------------- |
| `onKeyDown`  | `function` | Key down event  |
| `onKeyUp`    | `function` | Key up event    |
| `onKeyPress` | `function` | Key press event |

### Mouse Events

| Handler         | Type       | Description        |
| --------------- | ---------- | ------------------ |
| `onClick`       | `function` | Click event        |
| `onDoubleClick` | `function` | Double click event |
| `onMouseDown`   | `function` | Mouse down event   |
| `onMouseUp`     | `function` | Mouse up event     |
| `onMouseEnter`  | `function` | Mouse enter event  |
| `onMouseLeave`  | `function` | Mouse leave event  |

### Clipboard Events

| Handler   | Type       | Description |
| --------- | ---------- | ----------- |
| `onCopy`  | `function` | Copy event  |
| `onCut`   | `function` | Cut event   |
| `onPaste` | `function` | Paste event |

### Drag & Drop Events

| Handler       | Type       | Description      |
| ------------- | ---------- | ---------------- |
| `onDragEnter` | `function` | Drag enter event |
| `onDragOver`  | `function` | Drag over event  |
| `onDragLeave` | `function` | Drag leave event |
| `onDrop`      | `function` | Drop event       |

### Icon Click Events

| Handler               | Type       | Description              |
| --------------------- | ---------- | ------------------------ |
| `onPrependClick`      | `function` | Prepend icon click       |
| `onPrependInnerClick` | `function` | Inner prepend icon click |
| `onAppendClick`       | `function` | Append icon click        |
| `onAppendInnerClick`  | `function` | Inner append icon click  |
| `onClearClick`        | `function` | Clear button click       |

## Input Types

| Type       | Description         | Validation                   |
| ---------- | ------------------- | ---------------------------- |
| `text`     | Standard text input | Basic validation             |
| `email`    | Email input         | Email format validation      |
| `password` | Password input      | Password strength validation |
| `number`   | Numeric input       | Number format validation     |
| `tel`      | Phone number input  | Phone format validation      |
| `url`      | URL input           | URL format validation        |

## Notes

- **React 19 Support**: Uses modern React 19 features for enhanced performance
- **Accessibility**: Full keyboard navigation and screen reader support
- **Validation**: Comprehensive validation system with custom rules
- **Loading States**: Visual feedback during async operations
- **Modern Ref Handling**: No forwardRef needed in React 19
- **Performance**: Optimized re-renders and memory usage
