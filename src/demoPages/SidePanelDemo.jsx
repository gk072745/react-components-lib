import React, { useState } from "react";
import SidePanel from "../components/sharedComponents/SidePanel";
import "./sidePanelDemo.scss";

// Demo 1: Basic Usage
export const BasicUsageDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="side-panel-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Basic Usage</h3>
        <div className="demo-content">
          <button
            onClick={() => setIsOpen(true)}
            className="demo-button"
          >
            Open Side Panel
          </button>
          <p>Click the button to open the side panel</p>
          <SidePanel isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
        </div>
      </div>
    </div>
  );
};

// Demo 2: With Custom Styling
export const CustomStylingDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="side-panel-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Custom Styling</h3>
        <div className="demo-content">
          <button
            onClick={() => setIsOpen(true)}
            className="demo-button"
          >
            Open Custom Styled Panel
          </button>
          <p>Side panel with custom width and styling</p>
          <SidePanel
            isOpen={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
            style={{
              width: "350px",
              backgroundColor: "#f8f9fa",
            }}
          />
        </div>
      </div>
    </div>
  );
};

// Demo 3: Controlled State
export const ControlledStateDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="side-panel-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Controlled State</h3>
        <div className="demo-content">
          <div className="button-group">
            <button
              onClick={() => setIsOpen(true)}
              className="demo-button"
            >
              Open Panel
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="demo-button secondary"
            >
              Close Panel
            </button>
          </div>
          <p>Current state: {isOpen ? "Open" : "Closed"}</p>
          <SidePanel isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
        </div>
      </div>
    </div>
  );
};

// Demo 4: With Custom ClassName
export const CustomClassNameDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="side-panel-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Custom ClassName</h3>
        <div className="demo-content">
          <button
            onClick={() => setIsOpen(true)}
            className="demo-button"
          >
            Open Panel with Custom Class
          </button>
          <p>Side panel with additional custom class</p>
          <SidePanel
            isOpen={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
            className="custom-side-panel"
          />
        </div>
      </div>
    </div>
  );
};

// Demo 5: Navigation Example
export const NavigationExampleDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="side-panel-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Navigation Example</h3>
        <div className="demo-content">
          <button
            onClick={() => setIsOpen(true)}
            className="demo-button"
          >
            Open Navigation Panel
          </button>
          <p>Side panel with navigation items and breadcrumb</p>
          <SidePanel isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
        </div>
      </div>
    </div>
  );
};

// Demo 6: Overlay Interaction
export const OverlayInteractionDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="side-panel-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Overlay Interaction</h3>
        <div className="demo-content">
          <button
            onClick={() => setIsOpen(true)}
            className="demo-button"
          >
            Open Panel
          </button>
          <p>Click the overlay to close the panel</p>
          <SidePanel isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
        </div>
      </div>
    </div>
  );
};

// Demo 7: Popup Integration
export const PopupIntegrationDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="side-panel-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Popup Integration</h3>
        <div className="demo-content">
          <button
            onClick={() => setIsOpen(true)}
            className="demo-button"
          >
            Open Panel with Popup
          </button>
          <p>Open the panel and click "Popup Example" to see popup integration</p>
          <SidePanel isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
        </div>
      </div>
    </div>
  );
};

// Demo 8: All Features Combined
export const AllFeaturesDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="side-panel-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">All Features Combined</h3>
        <div className="demo-content">
          <button
            onClick={() => setIsOpen(true)}
            className="demo-button"
          >
            Open Full Featured Panel
          </button>
          <p>Side panel with all features: navigation, breadcrumb, popup, and custom styling</p>
          <SidePanel
            isOpen={isOpen}
            onToggle={() => setIsOpen(!isOpen)}
            className="featured-panel"
            style={{
              boxShadow: "4px 0 20px rgba(0, 0, 0, 0.15)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

// Main Demo Component
export default function SidePanelDemo() {
  return (
    <div className="side-panel-demo-container">
      <BasicUsageDemo />
      <CustomStylingDemo />
      <ControlledStateDemo />
      <CustomClassNameDemo />
      <NavigationExampleDemo />
      <OverlayInteractionDemo />
      <PopupIntegrationDemo />
      <AllFeaturesDemo />
    </div>
  );
}

