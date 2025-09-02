import React, { useState } from "react";
import BasicBreadCrumb from "../components/sharedComponents/BasicBreadCrumb";
import "./breadcrumbDemo.scss";

export const BasicBreadcrumbDemo = () => {
  const basicItems = [
    { label: "Home", to: "/" },
    { label: "Components", to: "/components" },
    { label: "Breadcrumb", to: null, disabled: true },
  ];

  return (
    <div className="breadcrumb-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Basic Usage</h3>
        <div className="demo-content">
          <div className="demo-group">
            <BasicBreadCrumb items={basicItems} />
          </div>
          <p className="demo-description">
            Default separator (/) and gap (0.5rem)
          </p>
        </div>
      </div>
    </div>
  );
};

export const EcommerceBreadcrumbDemo = () => {
  const ecommerceItems = [
    { label: "Home", to: "/" },
    { label: "Electronics", to: "/electronics" },
    { label: "Computers", to: "/electronics/computers" },
    { label: "Laptops", to: "/electronics/computers/laptops" },
    { label: "Gaming Laptops", to: null, disabled: true },
  ];

  return (
    <div className="breadcrumb-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">E-commerce Navigation</h3>
        <div className="demo-content">
          <div className="demo-group">
            <BasicBreadCrumb
              items={ecommerceItems}
              separator="›"
              gap="0.75rem"
            />
          </div>
          <p className="demo-description">
            Shows a typical e-commerce breadcrumb with custom separator and gap
          </p>
        </div>
      </div>
    </div>
  );
};

export const FileSystemBreadcrumbDemo = () => {
  const fileSystemItems = [
    { label: "Root", to: "/" },
    { label: "Documents", to: "/documents" },
    { label: "Work", to: "/documents/work" },
    { label: "Projects", to: "/documents/work/projects" },
    { label: "React App", to: null, disabled: true },
  ];

  return (
    <div className="breadcrumb-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">File System Navigation</h3>
        <div className="demo-content">
          <div className="demo-group">
            <BasicBreadCrumb items={fileSystemItems} separator="→" gap="1rem" />
          </div>
          <p className="demo-description">
            File system style navigation with arrow separator
          </p>
        </div>
      </div>
    </div>
  );
};

export const CustomSeparatorDemo = () => {
  const [customSeparator, setCustomSeparator] = useState("›");
  const customSeparatorItems = [
    { label: "Start", to: "/" },
    { label: "Middle", to: "/middle" },
    { label: "End", to: null, disabled: true },
  ];

  return (
    <div className="breadcrumb-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Custom Separator</h3>
        <div className="demo-content">
          <div className="demo-group">
            <div className="separator-control">
              <label htmlFor="separator">Separator: </label>
              <input
                id="separator"
                type="text"
                value={customSeparator}
                onChange={(e) => setCustomSeparator(e.target.value)}
                className="separator-input"
              />
            </div>
            <BasicBreadCrumb
              items={customSeparatorItems}
              separator={customSeparator}
              gap="0.5rem"
            />
          </div>
          <p className="demo-description">
            Try different separators like: ›, →, &gt;, |, •, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export const SVGSeparatorDemo = () => {
  const customSeparatorItems = [
    { label: "Start", to: "/" },
    { label: "Middle", to: "/middle" },
    { label: "End", to: null, disabled: true },
  ];

  return (
    <div className="breadcrumb-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">SVG Separators</h3>
        <div className="demo-content">
          <div className="demo-group">
            <div className="separator-example">
              <h4>Arrow Separator:</h4>
              <BasicBreadCrumb
                items={customSeparatorItems}
                separator={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                }
                gap="0.5rem"
              />
            </div>

            <div className="separator-example">
              <h4>Chevron Separator:</h4>
              <BasicBreadCrumb
                items={customSeparatorItems}
                separator={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                }
                gap="0.5rem"
              />
            </div>

            <div className="separator-example">
              <h4>Dot Separator:</h4>
              <BasicBreadCrumb
                items={customSeparatorItems}
                separator={
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                }
                gap="0.75rem"
              />
            </div>
          </div>
          <p className="demo-description">
            SVG separators provide crisp, scalable icons that maintain quality
            at any size.
          </p>
        </div>
      </div>
    </div>
  );
};

export const FunctionSeparatorDemo = () => {
  const customSeparatorItems = [
    { label: "Start", to: "/" },
    { label: "Middle", to: "/middle" },
    { label: "End", to: null, disabled: true },
  ];

  return (
    <div className="breadcrumb-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Dynamic Separators</h3>
        <div className="demo-content">
          <div className="demo-group">
            <div className="separator-example">
              <h4>Function-based Separator:</h4>
              <BasicBreadCrumb
                items={customSeparatorItems}
                separator={() => (
                  <span
                    style={{
                      color: "#007bff",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                    }}
                  >
                    →
                  </span>
                )}
                gap="0.5rem"
              />
            </div>

            <div className="separator-example">
              <h4>Object with Render Method:</h4>
              <BasicBreadCrumb
                items={customSeparatorItems}
                separator={{
                  render: () => (
                    <span
                      style={{
                        color: "#28a745",
                        fontSize: "1.1rem",
                        padding: "0 0.25rem",
                      }}
                    >
                      •
                    </span>
                  ),
                }}
                gap="0.5rem"
              />
            </div>
          </div>
          <p className="demo-description">
            Use functions or objects with render methods for dynamic,
            context-aware separators.
          </p>
        </div>
      </div>
    </div>
  );
};

export const CustomGapDemo = () => {
  const [customGap, setCustomGap] = useState("0.5rem");
  const customSeparatorItems = [
    { label: "Start", to: "/" },
    { label: "Middle", to: "/middle" },
    { label: "End", to: null, disabled: true },
  ];

  return (
    <div className="breadcrumb-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Custom Gap</h3>
        <div className="demo-content">
          <div className="demo-group">
            <div className="gap-control">
              <label htmlFor="gap">Gap: </label>
              <input
                id="gap"
                type="text"
                value={customGap}
                onChange={(e) => setCustomGap(e.target.value)}
                className="gap-input"
              />
            </div>
            <BasicBreadCrumb
              items={customSeparatorItems}
              separator="›"
              gap={customGap}
            />
          </div>
          <p className="demo-description">
            Try different gap values like: 0.25rem, 0.5rem, 1rem, 1.5rem
          </p>
        </div>
      </div>
    </div>
  );
};

export const InteractiveBreadcrumbDemo = () => {
  return (
    <div className="breadcrumb-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Interactive Example</h3>
        <div className="demo-content">
          <div className="demo-group">
            <BasicBreadCrumb
              items={[
                { label: "Home", to: "/" },
                { label: "Demo", to: "/demo" },
                { label: "Breadcrumb", to: "/demo/breadcrumb" },
                { label: "Current Page", to: null, disabled: true },
              ]}
              separator="›"
              gap="0.5rem"
            />
          </div>
          <p className="demo-description">
            Click on any breadcrumb item to navigate (except the current page)
          </p>
        </div>
      </div>
    </div>
  );
};

export const CodeExamplesDemo = () => {
  // Example data for each demo
  const breadcrumbItems = [
    { label: "Home", to: "/" },
    { label: "Section", to: "/section" },
    { label: "Current", to: null, disabled: true },
  ];

  return (
    <div className="breadcrumb-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Usage Examples (Interactive)</h3>
        <div className="demo-content">
          <div className="demo-group">
            <div className="code-example">
              <h4>Basic Implementation:</h4>
              <BasicBreadCrumb
                items={breadcrumbItems}
                separator="›"
                gap="0.5rem"
              />
            </div>

            <div className="code-example">
              <h4>SVG Separator:</h4>
              <BasicBreadCrumb
                items={breadcrumbItems}
                separator={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                }
                gap="0.5rem"
              />
            </div>

            <div className="code-example">
              <h4>Function Separator:</h4>
              <BasicBreadCrumb
                items={breadcrumbItems}
                separator={() => (
                  <span style={{ color: "#007bff", fontSize: "1.2rem" }}>
                    →
                  </span>
                )}
                gap="0.5rem"
              />
            </div>

            <div className="code-example">
              <h4>Custom Click Handler:</h4>
              <BasicBreadCrumb
                items={breadcrumbItems}
                separator="›"
                gap="0.5rem"
                onItemClick={(item, event) => {
                  alert(`Custom click: ${item.label}`);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BreadcrumbDemo = () => {
  return (
    <div className="breadcrumb-demo-container">
      <BasicBreadcrumbDemo />
      <EcommerceBreadcrumbDemo />
      <FileSystemBreadcrumbDemo />
      <CustomSeparatorDemo />
      <SVGSeparatorDemo />
      <FunctionSeparatorDemo />
      <CustomGapDemo />
      <InteractiveBreadcrumbDemo />
      <CodeExamplesDemo />
    </div>
  );
};

export default BreadcrumbDemo;
