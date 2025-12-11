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

# Demo

This page demonstrates the File Input component with various configurations and examples.

## Demo 1: Single File Input

### Code Example

```jsx
import BasicFileInput from "@/src/components/sharedComponents/BasicFileInput";
import { useState } from "react";

const SingleFileDemo = () => {
  const [singleFile, setSingleFile] = useState(null);

  const handleSingleFileChange = (file) => {
    setSingleFile(file);
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
  };

  return (
    <BasicFileInput
      label="Upload files with chip display"
      multiple={true}
      chip={true}
      value={chipFiles}
      onChange={handleChipFilesChange}
      hint="Files will be displayed as chips"
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
  };

  return (
    <BasicFileInput
      label="Upload images only"
      multiple={true}
      accept="image/*"
      value={imageFiles}
      onChange={handleImageFilesChange}
      hint="Only image files are accepted"
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
  };

  return (
    <BasicFileInput
      label="Upload with validation"
      multiple={true}
      maxFiles={3}
      maxSize={5 * 1024 * 1024}
      value={validatedFiles}
      onChange={handleValidatedFilesChange}
      hint="Maximum 3 files, 5MB total size"
    />
  );
};
```

### Interactive Demo

<ValidationDemo />

## Demo 6: Drag and Drop

### Code Example

```jsx
import BasicFileInput from "@/src/components/sharedComponents/BasicFileInput";
import { useState } from "react";

const DragDropDemo = () => {
  const [droppedFiles, setDroppedFiles] = useState([]);

  const handleDroppedFilesChange = (files) => {
    setDroppedFiles(files);
  };

  return (
    <BasicFileInput
      label="Drag and drop files here"
      multiple={true}
      chip={true}
      value={droppedFiles}
      onChange={handleDroppedFilesChange}
      hint="You can drag and drop files or click to select"
    />
  );
};
```

### Interactive Demo

<DragDropDemo />

## Demo 7: States (Disabled, Loading, Readonly)

### Code Example

```jsx
import BasicFileInput from "@/src/components/sharedComponents/BasicFileInput";
import { useState } from "react";

const StatesDemo = () => {
  const [loadingFiles, setLoadingFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingFilesChange = (files) => {
    setLoadingFiles(files);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div>
      <BasicFileInput
        label="Disabled file input"
        disabled={true}
        hint="This input is disabled"
      />
      <BasicFileInput
        label="Loading file input"
        multiple={true}
        value={loadingFiles}
        onChange={handleLoadingFilesChange}
        loading={isLoading}
        hint="Files are being uploaded..."
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

## Demo 8: Default Icons

### Code Example

```jsx
import BasicFileInput from "@/src/components/sharedComponents/BasicFileInput";
import { useState } from "react";

const IconsDemo = () => {
  const [iconFiles, setIconFiles] = useState([]);

  const handleIconFilesChange = (files) => {
    setIconFiles(files);
  };

  return (
    <BasicFileInput
      label="Upload with default icons"
      multiple={true}
      value={iconFiles}
      onChange={handleIconFilesChange}
      hint="Default file icons are displayed"
    />
  );
};
```

### Interactive Demo

<IconsDemo />

## Demo 9: Custom Icons

### Code Example

```jsx
import BasicFileInput from "@/src/components/sharedComponents/BasicFileInput";
import { useState } from "react";

const CustomIconsDemo = () => {
  const [customFiles, setCustomFiles] = useState([]);

  const handleCustomFilesChange = (files) => {
    setCustomFiles(files);
  };

  const customIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
    </svg>
  );

  return (
    <BasicFileInput
      label="Upload with custom icons"
      multiple={true}
      value={customFiles}
      onChange={handleCustomFilesChange}
      prependIcon={customIcon}
      appendIcon={customIcon}
      hint="Custom icons are displayed"
    />
  );
};
```

### Interactive Demo

<CustomIconsDemo />
