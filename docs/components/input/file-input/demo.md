import {
SingleFileDemo,
MultipleFilesDemo,
ChipDisplayDemo,
ImageFilesDemo,
ValidationDemo,
DragDropDemo,
StatesDemo,
IconsDemo,
CustomIconsDemo
} from "@site/src/demoPages/FileInputDemo.jsx";
import FileInputDemo from "@site/src/demoPages/FileInputDemo.jsx";

# Demo

This page demonstrates the BasicFileInput component with various configurations and examples.

## Demo 1: Single File Input

### Code Example

```jsx
import BasicFileInput from "@/src/components/sharedComponents/BasicFileInput";
import { useState } from "react";

const SingleFileDemo = () => {
  const [singleFile, setSingleFile] = useState(null);

  const handleSingleFileChange = (file) => {
    setSingleFile(file);
    console.log("Single file changed:", file);
  };

  return (
    <BasicFileInput
      label="Upload a single file"
      value={singleFile}
      onChange={handleSingleFileChange}
      hint="Select any file to upload"
    />
  );
};
```

### Interactive Demo

<SingleFileDemo />

## Demo 2: Multiple Files Input

### Code Example

```jsx
import BasicFileInput from "@/src/components/sharedComponents/BasicFileInput";
import { useState } from "react";

const MultipleFilesDemo = () => {
  const [multipleFiles, setMultipleFiles] = useState([]);

  const handleMultipleFilesChange = (files) => {
    setMultipleFiles(files);
    console.log("Multiple files changed:", files);
  };

  return (
    <BasicFileInput
      label="Upload multiple files"
      multiple={true}
      value={multipleFiles}
      onChange={handleMultipleFilesChange}
      hint="Select multiple files to upload"
    />
  );
};
```

### Interactive Demo

<MultipleFilesDemo />

## Demo 3: File Chips Display

### Code Example

```jsx
import BasicFileInput from "@/src/components/sharedComponents/BasicFileInput";
import { useState } from "react";

const ChipDisplayDemo = () => {
  const [chipFiles, setChipFiles] = useState([]);

  const handleChipFilesChange = (files) => {
    setChipFiles(files);
    console.log("Chip files changed:", files);
  };

  return (
    <BasicFileInput
      label="Upload files with chips"
      multiple={true}
      chip={true}
      value={chipFiles}
      onChange={handleChipFilesChange}
      hint="Files will be displayed as removable chips"
    />
  );
};
```

### Interactive Demo

<ChipDisplayDemo />

## Demo 4: Image Files Only

### Code Example

```jsx
import BasicFileInput from "@/src/components/sharedComponents/BasicFileInput";
import { useState } from "react";

const ImageFilesDemo = () => {
  const [imageFiles, setImageFiles] = useState([]);

  const handleImageFilesChange = (files) => {
    setImageFiles(files);
    console.log("Image files changed:", files);
  };

  return (
    <BasicFileInput
      label="Upload images only"
      multiple={true}
      accept="image/*"
      value={imageFiles}
      onChange={handleImageFilesChange}
      hint="Only image files are allowed"
    />
  );
};
```

### Interactive Demo

<ImageFilesDemo />

## Demo 5: File Validation

### Code Example

```jsx
import BasicFileInput from "@/src/components/sharedComponents/BasicFileInput";
import { useState } from "react";

const ValidationDemo = () => {
  const [validatedFiles, setValidatedFiles] = useState([]);

  const handleValidatedFilesChange = (files) => {
    setValidatedFiles(files);
    console.log("Validated files changed:", files);
  };

  const handleValidation = (isValid, value, message) => {
    console.log("Validation result:", { isValid, value, message });
  };

  return (
    <BasicFileInput
      label="Upload with validation"
      multiple={true}
      maxFiles={3}
      maxSize={5 * 1024 * 1024} // 5MB
      accept=".pdf,.doc,.docx,.txt"
      value={validatedFiles}
      onChange={handleValidatedFilesChange}
      onValidate={handleValidation}
      hint="Max 3 files, 5MB total, PDF/DOC/TXT only"
    />
  );
};
```

### Interactive Demo

<ValidationDemo />

## Demo 6: Drag & Drop Demo

### Code Example

```jsx
import BasicFileInput from "@/src/components/sharedComponents/BasicFileInput";

const DragDropDemo = () => {
  return (
    <BasicFileInput
      label="Drag & drop files here"
      multiple={true}
      chip={true}
      hint="Drag files from your computer or click to browse"
    />
  );
};
```

### Interactive Demo

<DragDropDemo />

## Demo 7: Different States

### Code Example

```jsx
import BasicFileInput from "@/src/components/sharedComponents/BasicFileInput";

const StatesDemo = () => {
  return (
    <div className="file-input-grid">
      <BasicFileInput
        label="Disabled file input"
        disabled={true}
        hint="This input is disabled"
      />
      <BasicFileInput
        label="Uploading files..."
        loading={true}
        hint="Files are being processed"
      />
      <BasicFileInput
        label="Readonly file input"
        readonly={true}
        hint="This input is readonly"
      />
    </div>
  );
};
```

### Interactive Demo

<StatesDemo />

## Demo 8: Icon Variations

### Code Example

```jsx
import BasicFileInput from "@/src/components/sharedComponents/BasicFileInput";

const IconsDemo = () => {
  return (
    <div className="file-input-grid">
      <BasicFileInput
        label="No Outer Icons"
        multiple={true}
        chip={true}
        prepend={false}
        append={false}
        hint="Only inner icons are visible"
      />
      <BasicFileInput
        label="No Inner Icons"
        multiple={true}
        chip={true}
        prependInner={false}
        appendInner={false}
        hint="Only outer icons are visible"
      />
      <BasicFileInput
        label="No Icons At All"
        multiple={true}
        chip={true}
        prepend={false}
        prependInner={false}
        appendInner={false}
        append={false}
        hint="No icons visible - clean design"
      />
    </div>
  );
};
```

### Interactive Demo

<IconsDemo />

## Demo 9: Custom Icons

### Code Example

```jsx
import BasicFileInput from "@/src/components/sharedComponents/BasicFileInput";

const CustomIconsDemo = () => {
  return (
    <BasicFileInput
      label="Custom icons"
      multiple={true}
      prependIcon={
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
      appendIcon={
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
      hint="Custom icons for better visual appeal"
    />
  );
};
```

### Interactive Demo

<CustomIconsDemo />

## Demo 10: Complete Demo

### Interactive Demo

<FileInputDemo />
