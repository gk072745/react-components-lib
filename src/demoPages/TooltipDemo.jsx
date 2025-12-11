import React from "react";
import BasicTooltip from "../components/sharedComponents/BasicTooltip.jsx";
import "./tooltipDemo.scss";

const Box = ({ children }) => (
  <div
    style={{
      display: "inline-block",
      padding: "1rem",
      background: "#f3f4f6",
      borderRadius: "0.375rem",
    }}
  >
    {children}
  </div>
);

// Demo 1: Basic Positions
export const BasicPositionsDemo = () => {
  return (
    <div className="tooltip-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Basic Positions</h3>
        <div className="demo-content">
          <div className="row">
            <BasicTooltip content="Top tooltip" position="top">
              <Box>Hover Top</Box>
            </BasicTooltip>
            <BasicTooltip content="Bottom tooltip" position="bottom">
              <Box>Hover Bottom</Box>
            </BasicTooltip>
            <BasicTooltip content="Left tooltip" position="left">
              <Box>Hover Left</Box>
            </BasicTooltip>
            <BasicTooltip content="Right tooltip" position="right">
              <Box>Hover Right</Box>
            </BasicTooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 2: Corner Positions
export const CornerPositionsDemo = () => {
  return (
    <div className="tooltip-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Corner Positions</h3>
        <div className="demo-content">
          <div className="row">
            <BasicTooltip content="Top Left" position="top-left">
              <Box>Top Left</Box>
            </BasicTooltip>
            <BasicTooltip content="Top Right" position="top-right">
              <Box>Top Right</Box>
            </BasicTooltip>
            <BasicTooltip content="Bottom Left" position="bottom-left">
              <Box>Bottom Left</Box>
            </BasicTooltip>
            <BasicTooltip content="Bottom Right" position="bottom-right">
              <Box>Bottom Right</Box>
            </BasicTooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 3: Click Trigger
export const ClickTriggerDemo = () => {
  return (
    <div className="tooltip-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Click Trigger</h3>
        <div className="demo-content">
          <div className="row">
            <BasicTooltip content="Click to toggle" position="top" trigger="click">
              <Box>Click Me</Box>
            </BasicTooltip>
            <BasicTooltip
              content="Click outside to close"
              position="bottom"
              trigger="click"
            >
              <Box>Click Outside</Box>
            </BasicTooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 4: Focus Trigger
export const FocusTriggerDemo = () => {
  return (
    <div className="tooltip-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Focus Trigger</h3>
        <div className="demo-content">
          <div className="row">
            <BasicTooltip content="Focus on input" position="top" trigger="focus">
              <input
                placeholder="Focus me"
                style={{
                  padding: "0.5rem 0.75rem",
                  border: "1px solid #e5e7eb",
                  borderRadius: "0.375rem",
                }}
              />
            </BasicTooltip>
            <BasicTooltip
              tooltip={
                <span>
                  <b>Formatted</b> content allowed
                </span>
              }
              position="right"
              trigger="focus"
            >
              <button style={{ padding: "0.5rem 0.75rem" }}>
                Focusable Button
              </button>
            </BasicTooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 5: Variants
export const VariantsDemo = () => {
  return (
    <div className="tooltip-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Variants</h3>
        <div className="demo-content">
          <div className="row">
            <BasicTooltip
              content="Light variant"
              customClass="tooltip-light"
              position="top"
            >
              <Box>Light</Box>
            </BasicTooltip>
            <BasicTooltip
              content="Success variant"
              customClass="tooltip-success"
              position="top"
            >
              <Box>Success</Box>
            </BasicTooltip>
            <BasicTooltip
              content="Error variant"
              customClass="tooltip-error"
              position="top"
            >
              <Box>Error</Box>
            </BasicTooltip>
            <BasicTooltip
              content="Warning variant"
              customClass="tooltip-warning"
              position="top"
            >
              <Box>Warning</Box>
            </BasicTooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 6: Arrow Options
export const ArrowOptionsDemo = () => {
  return (
    <div className="tooltip-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Arrow Options</h3>
        <div className="demo-content">
          <div className="row">
            <BasicTooltip content="With arrow (default)" position="top">
              <Box>With Arrow</Box>
            </BasicTooltip>
            <BasicTooltip content="No arrow" showArrow={false} position="top">
              <Box>No Arrow</Box>
            </BasicTooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 7: Custom Content
export const CustomContentDemo = () => {
  return (
    <div className="tooltip-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Custom Content</h3>
        <div className="demo-content">
          <div className="row">
            <BasicTooltip
              tooltip={
                <span>
                  <b>Bold</b> and <i>italic</i> content
                </span>
              }
              position="top"
            >
              <Box>Rich Content</Box>
            </BasicTooltip>
            <BasicTooltip
              tooltip={
                <div>
                  <div>Line 1</div>
                  <div>Line 2</div>
                </div>
              }
              position="top"
            >
              <Box>Multi-line</Box>
            </BasicTooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 8: Delay Options
export const DelayOptionsDemo = () => {
  return (
    <div className="tooltip-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Delay Options</h3>
        <div className="demo-content">
          <div className="row">
            <BasicTooltip content="No delay" position="top" delay={0}>
              <Box>No Delay</Box>
            </BasicTooltip>
            <BasicTooltip content="500ms delay" position="top" delay={500}>
              <Box>500ms Delay</Box>
            </BasicTooltip>
            <BasicTooltip
              content="1000ms delay"
              position="top"
              delay={1000}
            >
              <Box>1000ms Delay</Box>
            </BasicTooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Demo Component
export default function TooltipDemo() {
  return (
    <div className="tooltip-demo-container">
      <BasicPositionsDemo />
      <CornerPositionsDemo />
      <ClickTriggerDemo />
      <FocusTriggerDemo />
      <VariantsDemo />
      <ArrowOptionsDemo />
      <CustomContentDemo />
      <DelayOptionsDemo />
    </div>
  );
}
