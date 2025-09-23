# API

## Component Signature

```jsx
<BasicFileInput
  // Core Props
  value={File | File[] | null}
  onChange={function}
  label={string}
  multiple={boolean}
  chip={boolean}

  // File Validation
  accept={string}
  maxFiles={number}
  maxSize={number}
  onValidate={function}

  // UI States
  disabled={boolean}
  readonly={boolean}
  loading={boolean}
  persistentDetails={boolean}
  hideDetails={boolean}

  // Icons & Buttons
  prepend={boolean}
  prependInner={boolean}
  appendInner={boolean}
  append={boolean}

  // Messages
  hint={string}

  // Styling
  className={string}
  style={object}

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

  // Custom Icons
  prependIcon={ReactNode}
  prependInnerIcon={ReactNode}
  appendInnerIcon={ReactNode}
  appendIcon={ReactNode}

  // React 19
  ref={function | object}
/>
```

## Props

### Core Props

| Prop       | Type                     | Default | Description                   |
| ---------- | ------------------------ | ------- | ----------------------------- |
| `value`    | `File \| File[] \| null` | `null`  | Current file(s) value         |
| `onChange` | `function`               | -       | Callback when files change    |
| `label`    | `string`                 | `''`    | Input label text              |
| `multiple` | `boolean`                | `false` | Allow multiple file selection |
| `chip`     | `boolean`                | `false` | Display files as chips        |

### File Validation Props

| Prop         | Type       | Default | Description                           |
| ------------ | ---------- | ------- | ------------------------------------- |
| `accept`     | `string`   | -       | Accepted file types (MIME/extensions) |
| `maxFiles`   | `number`   | -       | Maximum number of files allowed       |
| `maxSize`    | `number`   | -       | Maximum total file size in bytes      |
| `onValidate` | `function` | -       | Validation result callback            |

### UI State Props

| Prop                | Type      | Default | Description          |
| ------------------- | --------- | ------- | -------------------- |
| `disabled`          | `boolean` | `false` | Disable the input    |
| `readonly`          | `boolean` | `false` | Make input readonly  |
| `loading`           | `boolean` | `false` | Show loading spinner |
| `persistentDetails` | `boolean` | `true`  | Always show details  |
| `hideDetails`       | `boolean` | `false` | Hide details section |

### Icon & Button Props

| Prop           | Type      | Default | Description             |
| -------------- | --------- | ------- | ----------------------- |
| `prepend`      | `boolean` | `true`  | Show prepend icon       |
| `prependInner` | `boolean` | `true`  | Show inner prepend icon |
| `appendInner`  | `boolean` | `true`  | Show inner append icon  |
| `append`       | `boolean` | `true`  | Show append icon        |

### Message Props

| Prop   | Type     | Default | Description |
| ------ | -------- | ------- | ----------- |
| `hint` | `string` | `''`    | Help text   |

### Styling Props

| Prop        | Type     | Default | Description            |
| ----------- | -------- | ------- | ---------------------- |
| `className` | `string` | `''`    | Additional CSS classes |
| `style`     | `object` | `{}`    | Inline styles          |

### Custom Icon Props

| Prop               | Type        | Default               | Description               |
| ------------------ | ----------- | --------------------- | ------------------------- |
| `prependIcon`      | `ReactNode` | Default upload icon   | Custom prepend icon       |
| `prependInnerIcon` | `ReactNode` | Default document icon | Custom prepend inner icon |
| `appendInnerIcon`  | `ReactNode` | Default upload icon   | Custom append inner icon  |
| `appendIcon`       | `ReactNode` | Default upload icon   | Custom append icon        |

## File Validation

### File Type Validation

```jsx
// Accept only images
<BasicFileInput accept="image/*" />

// Accept specific extensions
<BasicFileInput accept=".pdf,.doc,.docx" />

// Accept specific MIME types
<BasicFileInput accept="application/pdf,image/jpeg" />
```

### File Count Validation

```jsx
// Limit to 3 files
<BasicFileInput multiple={true} maxFiles={3} />
```

### File Size Validation

```jsx
// Limit total size to 5MB
<BasicFileInput maxSize={5 * 1024 * 1024} />
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

## File Object Structure

When files are selected, they are provided as standard File objects:

```typescript
interface File {
  name: string; // File name
  size: number; // File size in bytes
  type: string; // MIME type
  lastModified: number; // Last modified timestamp
}
```

## Styling Classes

The component uses the following CSS classes for styling:

- `.file-input-wrapper` - Main wrapper container
- `.file-input-placeholder` - Placeholder area when no files selected
- `.file-input-selected-files` - Container for selected files
- `.file-chip` - Individual file chip styling
- `.file-name` - File name within chip
- `.remove-btn` - Remove button in file chip
- `.is-dragging` - Applied during drag operations

## Notes

- **File API Support**: Requires modern browsers with File API support
- **Drag & Drop**: Full drag and drop functionality with visual feedback
- **Accessibility**: Full keyboard navigation and screen reader support
- **Validation**: Comprehensive file validation system
- **Mobile Support**: Touch-friendly on mobile devices
- **Performance**: Optimized for large file selections
