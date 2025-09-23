import React, { useState } from "react";
import BasicFileInput from "../components/sharedComponents/BasicFileInput";
import "./fileInputDemo.scss";

// Demo 1: Single File Input
export const SingleFileDemo = () => {
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

// Demo 2: Multiple Files Input
export const MultipleFilesDemo = () => {
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

// Demo 3: File Chips Display
export const ChipDisplayDemo = () => {
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

// Demo 4: Image Files Only
export const ImageFilesDemo = () => {
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

// Demo 5: File Validation
export const ValidationDemo = () => {
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

// Demo 6: Drag & Drop Demo
export const DragDropDemo = () => {
  return (
    <BasicFileInput
      label="Drag & drop files here"
      multiple={true}
      chip={true}
      hint="Drag files from your computer or click to browse"
    />
  );
};

// Demo 7: Different States
export const StatesDemo = () => {
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

// Demo 8: Icon Variations
export const IconsDemo = () => {
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

// Demo 9: Custom Icons
export const CustomIconsDemo = () => {
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

// Complete Demo Component
const FileInputDemo = () => {
  const [singleFile, setSingleFile] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState([]);
  const [chipFiles, setChipFiles] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [validatedFiles, setValidatedFiles] = useState([]);

  const handleSingleFileChange = (file) => {
    setSingleFile(file);
    console.log("Single file changed:", file);
  };

  const handleMultipleFilesChange = (files) => {
    setMultipleFiles(files);
    console.log("Multiple files changed:", files);
  };

  const handleChipFilesChange = (files) => {
    setChipFiles(files);
    console.log("Chip files changed:", files);
  };

  const handleImageFilesChange = (files) => {
    setImageFiles(files);
    console.log("Image files changed:", files);
  };

  const handleValidatedFilesChange = (files) => {
    setValidatedFiles(files);
    console.log("Validated files changed:", files);
  };

  const handleValidation = (isValid, value, message) => {
    console.log("Validation result:", { isValid, value, message });
  };

  return (
    <div className="file-input-demo">
      <div className="demo-header">
        <h1>BasicFileInput Component Demo</h1>
        <p>
          Comprehensive file input component with drag & drop, validation, and
          multiple file support.
        </p>
      </div>

      <div className="demo-section">
        <h2>Single File Input</h2>
        <p>Basic single file selection with default styling.</p>
        <BasicFileInput
          label="Upload a single file"
          value={singleFile}
          onChange={handleSingleFileChange}
          hint="Select any file to upload"
        />
        {singleFile && (
          <div className="file-info">
            <strong>Selected file:</strong> {singleFile.name} (
            {Math.round(singleFile.size / 1024)} KB)
          </div>
        )}
      </div>

      <div className="demo-section">
        <h2>Multiple Files Input</h2>
        <p>Select multiple files at once.</p>
        <BasicFileInput
          label="Upload multiple files"
          multiple={true}
          value={multipleFiles}
          onChange={handleMultipleFilesChange}
          hint="Select multiple files to upload"
        />
        {Array.isArray(multipleFiles) && multipleFiles.length > 0 && (
          <div className="file-info">
            <strong>Selected files ({multipleFiles.length}):</strong>
            <ul>
              {multipleFiles.map((file, index) => (
                <li key={index}>
                  {file.name} ({Math.round(file.size / 1024)} KB)
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="demo-section">
        <h2>File Chips Display</h2>
        <p>Files displayed as removable chips for better UX.</p>
        <BasicFileInput
          label="Upload files with chips"
          multiple={true}
          chip={true}
          value={chipFiles}
          onChange={handleChipFilesChange}
          hint="Files will be displayed as removable chips"
        />
        {Array.isArray(chipFiles) && chipFiles.length > 0 && (
          <div className="file-info">
            <strong>Files with chips ({chipFiles.length}):</strong>
            <p>
              Files are displayed as chips above. Click the × to remove
              individual files.
            </p>
          </div>
        )}
      </div>

      <div className="demo-section">
        <h2>Image Files Only</h2>
        <p>Restrict file selection to images only.</p>
        <BasicFileInput
          label="Upload images only"
          multiple={true}
          accept="image/*"
          value={imageFiles}
          onChange={handleImageFilesChange}
          hint="Only image files are allowed"
        />
        {Array.isArray(imageFiles) && imageFiles.length > 0 && (
          <div className="file-info">
            <strong>Selected images ({imageFiles.length}):</strong>
            <ul>
              {imageFiles.map((file, index) => (
                <li key={index}>
                  {file.name} ({Math.round(file.size / 1024)} KB)
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="demo-section">
        <h2>File Validation</h2>
        <p>File input with size and count restrictions.</p>
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
        {Array.isArray(validatedFiles) && validatedFiles.length > 0 && (
          <div className="file-info">
            <strong>Validated files ({validatedFiles.length}):</strong>
            <ul>
              {validatedFiles.map((file, index) => (
                <li key={index}>
                  {file.name} ({Math.round(file.size / 1024)} KB)
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="demo-section">
        <h2>Drag & Drop Demo</h2>
        <p>Try dragging files from your computer onto the input below.</p>
        <BasicFileInput
          label="Drag & drop files here"
          multiple={true}
          chip={true}
          hint="Drag files from your computer or click to browse"
        />
      </div>

      <div className="demo-section">
        <h2>Disabled State</h2>
        <p>File input in disabled state.</p>
        <BasicFileInput
          label="Disabled file input"
          disabled={true}
          hint="This input is disabled"
        />
      </div>

      <div className="demo-section">
        <h2>Loading State</h2>
        <p>File input with loading indicator.</p>
        <BasicFileInput
          label="Uploading files..."
          loading={true}
          hint="Files are being processed"
        />
      </div>

      <div className="demo-section">
        <h2>No Outer Icons</h2>
        <p>
          File input without prepend and append icons - only inner icons remain.
        </p>
        <BasicFileInput
          label="No Outer Icons File Input"
          multiple={true}
          chip={true}
          prepend={false}
          append={false}
          hint="Only inner icons are visible, outer icons are hidden"
        />
      </div>

      <div className="demo-section">
        <h2>No Inner Icons</h2>
        <p>
          File input without prependInner and appendInner icons - only outer
          icons remain.
        </p>
        <BasicFileInput
          label="No Inner Icons File Input"
          multiple={true}
          chip={true}
          prependInner={false}
          appendInner={false}
          hint="Only outer icons are visible, inner icons are hidden"
        />
      </div>

      <div className="demo-section">
        <h2>No Icons At All</h2>
        <p>File input without any icons - completely icon-free design.</p>
        <BasicFileInput
          label="No Icons File Input"
          multiple={true}
          chip={true}
          prepend={false}
          prependInner={false}
          appendInner={false}
          append={false}
          hint="No icons visible - clean minimalist design"
        />
      </div>

      <div className="demo-section">
        <h2>No Icons + No Details</h2>
        <p>
          File input without any icons and without details section -
          ultra-minimalist design.
        </p>
        <BasicFileInput
          label="Ultra Minimalist File Input"
          multiple={true}
          chip={true}
          prepend={false}
          prependInner={false}
          appendInner={false}
          append={false}
          hideDetails={true}
          hint="No icons and no details - maximum minimalism"
        />
      </div>

      <div className="demo-section">
        <h2>Custom Icons</h2>
        <p>File input with custom prepend and append icons.</p>
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
      </div>
    </div>
  );
};

export default FileInputDemo;
