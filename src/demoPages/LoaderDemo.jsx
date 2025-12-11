import React, { useState, useEffect } from "react";
import Loader from "../components/sharedComponents/Loader";
import "./loaderDemo.scss";

// Demo 1: Basic Usage
export const BasicUsageDemo = () => {
  return (
    <div className="loader-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Basic Usage</h3>
        <div className="demo-content">
          <div
            style={{
              position: "relative",
              height: "200px",
              border: "1px solid #e1e5e9",
              padding: "20px",
              borderRadius: "6px",
            }}
          >
            <Loader />
          </div>
          <p>Default loader with local positioning</p>
        </div>
      </div>
    </div>
  );
};

// Demo 2: Variant Colors
export const VariantColorsDemo = () => {
  return (
    <div className="loader-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Variant Colors</h3>
        <div className="demo-content">
          <div className="row">
            <div>
              <p>Default</p>
              <div
                style={{
                  position: "relative",
                  height: "100px",
                  border: "1px solid #e1e5e9",
                  padding: "20px",
                  borderRadius: "6px",
                }}
              >
                <Loader variant="default" />
              </div>
            </div>
            <div>
              <p>Primary</p>
              <div
                style={{
                  position: "relative",
                  height: "100px",
                  border: "1px solid #e1e5e9",
                  padding: "20px",
                  borderRadius: "6px",
                }}
              >
                <Loader variant="primary" />
              </div>
            </div>
            <div>
              <p>Success</p>
              <div
                style={{
                  position: "relative",
                  height: "100px",
                  border: "1px solid #e1e5e9",
                  padding: "20px",
                  borderRadius: "6px",
                }}
              >
                <Loader variant="success" />
              </div>
            </div>
            <div>
              <p>Warning</p>
              <div
                style={{
                  position: "relative",
                  height: "100px",
                  border: "1px solid #e1e5e9",
                  padding: "20px",
                  borderRadius: "6px",
                }}
              >
                <Loader variant="warning" />
              </div>
            </div>
            <div>
              <p>Danger</p>
              <div
                style={{
                  position: "relative",
                  height: "100px",
                  border: "1px solid #e1e5e9",
                  padding: "20px",
                  borderRadius: "6px",
                }}
              >
                <Loader variant="danger" />
              </div>
            </div>
            <div>
              <p>Info</p>
              <div
                style={{
                  position: "relative",
                  height: "100px",
                  border: "1px solid #e1e5e9",
                  padding: "20px",
                  borderRadius: "6px",
                }}
              >
                <Loader variant="info" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 3: Size Variants
export const SizeVariantsDemo = () => {
  const [customSize, setCustomSize] = useState(40);

  return (
    <div className="loader-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Size Variants</h3>
        <div className="demo-content">
          <div className="row">
            <div>
              <p>Small (20px)</p>
              <div
                style={{
                  position: "relative",
                  height: "100px",
                  border: "1px solid #e1e5e9",
                  padding: "20px",
                  borderRadius: "6px",
                }}
              >
                <Loader size={20} />
              </div>
            </div>
            <div>
              <p>Default (40px)</p>
              <div
                style={{
                  position: "relative",
                  height: "100px",
                  border: "1px solid #e1e5e9",
                  padding: "20px",
                  borderRadius: "6px",
                }}
              >
                <Loader size={40} />
              </div>
            </div>
            <div>
              <p>Medium (60px)</p>
              <div
                style={{
                  position: "relative",
                  height: "100px",
                  border: "1px solid #e1e5e9",
                  padding: "20px",
                  borderRadius: "6px",
                }}
              >
                <Loader size={60} />
              </div>
            </div>
            <div>
              <p>Large (80px)</p>
              <div
                style={{
                  position: "relative",
                  height: "100px",
                  border: "1px solid #e1e5e9",
                  padding: "20px",
                  borderRadius: "6px",
                }}
              >
                <Loader size={80} />
              </div>
            </div>
          </div>
          <div className="row">
            <div style={{ width: "100%" }}>
              <label>
                Custom Size: {customSize}px
                <input
                  type="range"
                  min="20"
                  max="120"
                  value={customSize}
                  onChange={(e) => setCustomSize(Number(e.target.value))}
                  style={{ width: "100%", marginTop: "0.5rem" }}
                />
              </label>
              <div
                style={{
                  position: "relative",
                  height: "150px",
                  border: "1px solid #e1e5e9",
                  padding: "20px",
                  borderRadius: "6px",
                  marginTop: "0.5rem",
                }}
              >
                <Loader size={customSize} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 4: Stroke Width Variants
export const WidthVariantsDemo = () => {
  const [customWidth, setCustomWidth] = useState(4);

  return (
    <div className="loader-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Stroke Width Variants</h3>
        <div className="demo-content">
          <div className="row">
            <div>
              <p>Thin (2px)</p>
              <div
                style={{
                  position: "relative",
                  height: "100px",
                  border: "1px solid #e1e5e9",
                  padding: "20px",
                  borderRadius: "6px",
                }}
              >
                <Loader size={50} width={2} />
              </div>
            </div>
            <div>
              <p>Default (4px)</p>
              <div
                style={{
                  position: "relative",
                  height: "100px",
                  border: "1px solid #e1e5e9",
                  padding: "20px",
                  borderRadius: "6px",
                }}
              >
                <Loader size={50} width={4} />
              </div>
            </div>
            <div>
              <p>Medium (6px)</p>
              <div
                style={{
                  position: "relative",
                  height: "100px",
                  border: "1px solid #e1e5e9",
                  padding: "20px",
                  borderRadius: "6px",
                }}
              >
                <Loader size={50} width={6} />
              </div>
            </div>
            <div>
              <p>Thick (8px)</p>
              <div
                style={{
                  position: "relative",
                  height: "100px",
                  border: "1px solid #e1e5e9",
                  padding: "20px",
                  borderRadius: "6px",
                }}
              >
                <Loader size={50} width={8} />
              </div>
            </div>
          </div>
          <div className="row">
            <div style={{ width: "100%" }}>
              <label>
                Custom Width: {customWidth}px
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={customWidth}
                  onChange={(e) => setCustomWidth(Number(e.target.value))}
                  style={{ width: "100%", marginTop: "0.5rem" }}
                />
              </label>
              <div
                style={{
                  position: "relative",
                  height: "100px",
                  border: "1px solid #e1e5e9",
                  padding: "20px",
                  borderRadius: "6px",
                  marginTop: "0.5rem",
                }}
              >
                <Loader size={50} width={customWidth} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 5: Positioning Variants
export const PositioningVariantsDemo = () => {
  const [showFullScreenLoader, setShowFullScreenLoader] = useState(false);

  useEffect(() => {
    if (showFullScreenLoader) {
      const timer = setTimeout(() => setShowFullScreenLoader(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showFullScreenLoader]);

  return (
    <div className="loader-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Positioning Variants</h3>
        <div className="demo-content">
          <div className="row">
            <div style={{ width: "100%" }}>
              <p>Local Loader (Relative)</p>
              <div
                style={{
                  position: "relative",
                  height: "150px",
                  border: "1px solid #e1e5e9",
                  padding: "20px",
                  borderRadius: "6px",
                }}
              >
                <Loader isLocalLoader={true} />
                <p style={{ marginTop: "10px" }}>Content below the loader</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div style={{ width: "100%" }}>
              <button
                onClick={() => setShowFullScreenLoader(true)}
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Show Full Screen Loader (3s)
              </button>
              <p style={{ marginTop: "0.5rem" }}>
                Click the button to see a full screen loader overlay
              </p>
            </div>
          </div>
        </div>
      </div>
      {showFullScreenLoader && (
        <Loader isLocalLoader={false} variant="primary" size={60} />
      )}
    </div>
  );
};

// Demo 6: Custom Image Loader
export const CustomImageDemo = () => {
  return (
    <div className="loader-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Custom Image Loader</h3>
        <div className="demo-content">
          <div className="row">
            <div style={{ width: "100%" }}>
              <p>Using Custom Image</p>
              <div
                style={{
                  position: "relative",
                  height: "150px",
                  border: "1px solid #e1e5e9",
                  padding: "20px",
                  borderRadius: "6px",
                }}
              >
                <Loader
                  src="https://upload.wikimedia.org/wikipedia/commons/d/de/Ajax-loader.gif"
                  size={60}
                  isLocalLoader={true}
                />
              </div>
              <p style={{ marginTop: "0.5rem" }}>
                Use custom images instead of the default SVG loader
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 7: Custom Children
export const CustomChildrenDemo = () => {
  return (
    <div className="loader-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Custom Children</h3>
        <div className="demo-content">
          <div className="row">
            <div style={{ width: "100%" }}>
              <p>Custom loader content</p>
              <div
                style={{
                  position: "relative",
                  height: "150px",
                  border: "1px solid #e1e5e9",
                  padding: "20px",
                  borderRadius: "6px",
                }}
              >
                <Loader isLocalLoader={true}>
                  <div
                    style={{
                      textAlign: "center",
                      color: "#007bff",
                      fontSize: "1.2rem",
                    }}
                  >
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        border: "4px solid #e1e5e9",
                        borderTop: "4px solid #007bff",
                        borderRadius: "50%",
                        animation: "spin 1s linear infinite",
                        margin: "0 auto",
                      }}
                    />
                    <p style={{ marginTop: "10px" }}>Loading...</p>
                  </div>
                </Loader>
              </div>
              <p style={{ marginTop: "0.5rem" }}>
                Render custom children to fully override loader content
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 8: All Variants Combined
export const AllVariantsDemo = () => {
  return (
    <div className="loader-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">All Variants Combined</h3>
        <div className="demo-content">
          <div className="row">
            <div style={{ width: "100%" }}>
              <p>Small, Primary, Thin</p>
              <div
                style={{
                  position: "relative",
                  height: "100px",
                  border: "1px solid #e1e5e9",
                  padding: "20px",
                  borderRadius: "6px",
                }}
              >
                <Loader size={30} width={2} variant="primary" />
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p>Large, Success, Thick</p>
              <div
                style={{
                  position: "relative",
                  height: "120px",
                  border: "1px solid #e1e5e9",
                  padding: "20px",
                  borderRadius: "6px",
                }}
              >
                <Loader size={80} width={8} variant="success" />
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <p>Medium, Danger, Rounded</p>
              <div
                style={{
                  position: "relative",
                  height: "100px",
                  border: "1px solid #e1e5e9",
                  padding: "20px",
                  borderRadius: "6px",
                }}
              >
                <Loader size={50} width={6} variant="danger" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Demo Component
export default function LoaderDemo() {
  return (
    <div className="loader-demo-container">
      <BasicUsageDemo />
      <VariantColorsDemo />
      <SizeVariantsDemo />
      <WidthVariantsDemo />
      <PositioningVariantsDemo />
      <CustomImageDemo />
      <CustomChildrenDemo />
      <AllVariantsDemo />
    </div>
  );
}
