# BasicFileInput

A comprehensive file input component with drag & drop support, file validation, multiple file selection, and chip-based file display.

## Features

- **Single & Multiple File Selection**: Support for both single file and multiple file uploads
- **Drag & Drop**: Intuitive drag and drop file upload functionality
- **File Validation**: Built-in validation for file types, sizes, and count limits
- **Chip Display**: Files displayed as removable chips for better UX
- **File Type Restrictions**: Accept specific file types using MIME types or extensions
- **Size Validation**: Validate individual file sizes and total upload size
- **Visual Feedback**: Loading states, disabled states, and validation feedback
- **Custom Icons**: Support for custom prepend and append icons
- **Accessibility**: Full keyboard navigation and screen reader support

## Basic Usage

```jsx
import BasicFileInput from "../components/sharedComponents/BasicFileInput";

function MyComponent() {
  const [files, setFiles] = useState(null);

  return (
    <BasicFileInput
      label="Upload your files"
      value={files}
      onChange={setFiles}
      multiple={true}
      chip={true}
    />
  );
}
```

## Props

| Prop                | Type             | Default | Description                                    |
| ------------------- | ---------------- | ------- | ---------------------------------------------- |
| `label`             | `string`         | `''`    | Label text for the input                       |
| `value`             | `File \| File[]` | `null`  | Current file(s) value                          |
| `onChange`          | `function`       | -       | Callback when files change                     |
| `multiple`          | `boolean`        | `false` | Allow multiple file selection                  |
| `chip`              | `boolean`        | `false` | Display files as removable chips               |
| `accept`            | `string`         | -       | Accepted file types (MIME types or extensions) |
| `maxFiles`          | `number`         | -       | Maximum number of files allowed                |
| `maxSize`           | `number`         | -       | Maximum total file size in bytes               |
| `disabled`          | `boolean`        | `false` | Disable the input                              |
| `loading`           | `boolean`        | `false` | Show loading state                             |
| `readonly`          | `boolean`        | `false` | Make input readonly                            |
| `hint`              | `string`         | `''`    | Helper text below the input                    |
| `persistentDetails` | `boolean`        | `true`  | Always show file details                       |
| `hideDetails`       | `boolean`        | `false` | Hide the details section                       |

## Examples

### Single File Upload

```jsx
<BasicFileInput
  label="Upload a document"
  value={singleFile}
  onChange={setSingleFile}
  accept=".pdf,.doc,.docx"
/>
```

### Multiple Files with Chips

```jsx
<BasicFileInput
  label="Upload multiple files"
  multiple={true}
  chip={true}
  value={files}
  onChange={setFiles}
  maxFiles={5}
/>
```

### Image Files Only

```jsx
<BasicFileInput
  label="Upload images"
  multiple={true}
  accept="image/*"
  value={images}
  onChange={setImages}
/>
```

### With Validation

```jsx
<BasicFileInput
  label="Upload with restrictions"
  multiple={true}
  maxFiles={3}
  maxSize={5 * 1024 * 1024} // 5MB
  accept=".pdf,.doc,.docx"
  value={files}
  onChange={setFiles}
  onValidate={(isValid, value, message) => {
    console.log("Validation:", { isValid, message });
  }}
/>
```

## Styling

The component uses CSS classes that can be customized:

- `.file-input-wrapper` - Main wrapper
- `.file-input-placeholder` - Placeholder area
- `.file-input-selected-files` - Selected files container
- `.file-chip` - Individual file chip
- `.file-name` - File name within chip
- `.remove-btn` - Remove button in chip

## Accessibility

- Full keyboard navigation support
- Screen reader compatible
- ARIA labels and descriptions
- Focus management
- Drag and drop accessibility

## Browser Support

- Modern browsers with File API support
- Drag and drop support
- File validation support
