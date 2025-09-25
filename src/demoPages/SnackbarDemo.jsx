import React, { useState } from "react";
import { useSnackbar } from "../customHooks/useSnackbar";
import BasicSnackbar from "../components/sharedComponents/BasicSnackbar";
import "./snackbarDemo.scss";

// Demo 1: Basic Snackbar Types
export const BasicTypesDemo = () => {
  const { success, error, warning, info } = useSnackbar();

  const showSuccess = () => {
    success("Operation completed successfully!");
  };

  const showError = () => {
    error("Something went wrong", {
      secondaryMessage: "Please try again later"
    });
  };

  const showWarning = () => {
    warning("This action cannot be undone", {
      secondaryMessage: "Please proceed with caution"
    });
  };

  const showInfo = () => {
    info("New update available", {
      secondaryMessage: "Click here to learn more"
    });
  };

  return (
    <div className="snackbar-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Basic Snackbar Types</h3>
        <div className="demo-content">
          <div className="demo-controls">
            <button className="demo-button success" onClick={showSuccess}>
              Show Success
            </button>
            <button className="demo-button error" onClick={showError}>
              Show Error
            </button>
            <button className="demo-button warning" onClick={showWarning}>
              Show Warning
            </button>
            <button className="demo-button info" onClick={showInfo}>
              Show Info
            </button>
          </div>
        </div>
      </div>
      <BasicSnackbar />
    </div>
  );
};

// Demo 2: Position Override Examples
export const PositionOverrideDemo = () => {
  const { success, error, warning, info } = useSnackbar();

  const showTopRightSuccess = () => {
    success("Success message with top-right position!", {
      position: "top-right"
    });
  };

  const showTopLeftError = () => {
    error("Error message with top-left position!", {
      position: "top-left",
      secondaryMessage: "This error appears in top-left"
    });
  };

  const showTopWarning = () => {
    warning("Warning message with top center position!", {
      position: "top"
    });
  };

  const showBottomRightInfo = () => {
    info("Info message with bottom-right position!", {
      position: "bottom-right",
      secondaryMessage: "This info appears in bottom-right"
    });
  };

  return (
    <div className="snackbar-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Position Override Examples</h3>
        <div className="demo-content">
          <div className="demo-controls">
            <button className="demo-button success" onClick={showTopRightSuccess}>
              Success (Top Right)
            </button>
            <button className="demo-button error" onClick={showTopLeftError}>
              Error (Top Left)
            </button>
            <button className="demo-button warning" onClick={showTopWarning}>
              Warning (Top Center)
            </button>
            <button className="demo-button info" onClick={showBottomRightInfo}>
              Info (Bottom Right)
            </button>
          </div>
        </div>
      </div>
      <BasicSnackbar />
    </div>
  );
};

// Demo 3: Secondary Messages
export const SecondaryMessagesDemo = () => {
  const { success, error, warning, info } = useSnackbar();

  return (
    <div className="snackbar-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Secondary Messages</h3>
        <div className="demo-content">
          <div className="demo-controls">
            <button 
              className="demo-button success" 
              onClick={() => success("File uploaded successfully!", { 
                secondaryMessage: "Your document has been processed and is ready for review." 
              })}
            >
              Success with Details
            </button>
            <button 
              className="demo-button error" 
              onClick={() => error("Upload failed!", { 
                secondaryMessage: "Please check your internet connection and try again." 
              })}
            >
              Error with Details
            </button>
            <button 
              className="demo-button warning" 
              onClick={() => warning("Storage almost full!", { 
                secondaryMessage: "You have used 85% of your available storage space." 
              })}
            >
              Warning with Details
            </button>
            <button 
              className="demo-button info" 
              onClick={() => info("New feature available!", { 
                secondaryMessage: "Check out the new dashboard layout in the settings menu." 
              })}
            >
              Info with Details
            </button>
          </div>
        </div>
      </div>
      <BasicSnackbar />
    </div>
  );
};

// Demo 4: Position Configuration
export const PositionConfigDemo = () => {
  const { success, setPosition } = useSnackbar();
  const [selectedPosition, setSelectedPosition] = useState("bottom");

  const positions = [
    { value: "top-left", label: "Top Left" },
    { value: "top", label: "Top Center" },
    { value: "top-right", label: "Top Right" },
    { value: "bottom-left", label: "Bottom Left" },
    { value: "bottom", label: "Bottom Center" },
    { value: "bottom-right", label: "Bottom Right" }
  ];

  const handlePositionChange = (position) => {
    setSelectedPosition(position);
    setPosition(position);
  };

  const showTestMessage = () => {
    success(`Test message in ${selectedPosition} position!`);
  };

  return (
    <div className="snackbar-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Position Configuration</h3>
        <div className="demo-content">
          <div className="demo-controls">
            {positions.map((pos) => (
              <button
                key={pos.value}
                className={`demo-button ${selectedPosition === pos.value ? "active" : ""}`}
                onClick={() => handlePositionChange(pos.value)}
              >
                {pos.label}
              </button>
            ))}
          </div>
          <div className="demo-controls">
            <button className="demo-button success" onClick={showTestMessage}>
              Test Current Position
            </button>
          </div>
        </div>
      </div>
      <BasicSnackbar />
    </div>
  );
};

// Demo 5: Offset Configuration
export const OffsetConfigDemo = () => {
  const { success, setOffset } = useSnackbar();
  const [xOffset, setXOffset] = useState(1);
  const [yOffset, setYOffset] = useState(1);

  const changeOffset = (x, y) => {
    setXOffset(x);
    setYOffset(y);
    setOffset(x, y);
  };

  const showTestMessage = () => {
    success(`Test message with offset (${xOffset}, ${yOffset})`);
  };

  return (
    <div className="snackbar-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Offset Configuration</h3>
        <div className="demo-content">
          <div className="demo-controls">
            <button className="demo-button" onClick={() => changeOffset(1, 1)}>
              (1,1)
            </button>
            <button className="demo-button" onClick={() => changeOffset(2, 2)}>
              (2,2)
            </button>
            <button className="demo-button" onClick={() => changeOffset(3, 3)}>
              (3,3)
            </button>
            <button className="demo-button" onClick={() => changeOffset(1, 3)}>
              (1,3)
            </button>
          </div>
          <div className="demo-controls">
            <button className="demo-button success" onClick={showTestMessage}>
              Test Current Offset
            </button>
          </div>
        </div>
      </div>
      <BasicSnackbar />
    </div>
  );
};

// Demo 6: Timeout Configuration
export const TimeoutConfigDemo = () => {
  const { success, setDefaultTimeout } = useSnackbar();
  const [timeoutValue, setTimeoutValue] = useState(4000);

  const changeTimeout = (timeout) => {
    setTimeoutValue(timeout);
    setDefaultTimeout(timeout);
  };

  const showTestMessage = () => {
    success(`Test message with ${timeoutValue}ms timeout`);
  };

  return (
    <div className="snackbar-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Timeout Configuration</h3>
        <div className="demo-content">
          <div className="demo-controls">
            <button className="demo-button" onClick={() => changeTimeout(2000)}>
              2s
            </button>
            <button className="demo-button" onClick={() => changeTimeout(4000)}>
              4s
            </button>
            <button className="demo-button" onClick={() => changeTimeout(6000)}>
              6s
            </button>
            <button className="demo-button" onClick={() => changeTimeout(8000)}>
              8s
            </button>
          </div>
          <div className="demo-controls">
            <button className="demo-button success" onClick={showTestMessage}>
              Test Current Timeout
            </button>
          </div>
        </div>
      </div>
      <BasicSnackbar />
    </div>
  );
};

// Demo 7: Custom Messages
export const CustomMessagesDemo = () => {
  const { success, error, warning, info } = useSnackbar();
  const [customMessage, setCustomMessage] = useState("");
  const [customSecondaryMessage, setCustomSecondaryMessage] = useState("");
  const [customTimeout, setCustomTimeout] = useState(4000);

  const handleShowCustom = (type) => {
    const message = customMessage || `Custom ${type} message`;
    const secondaryMessage = customSecondaryMessage || null;
    
    switch (type) {
      case "success":
        success(message, { secondaryMessage, timeout: customTimeout });
        break;
      case "error":
        error(message, { secondaryMessage, timeout: customTimeout });
        break;
      case "warning":
        warning(message, { secondaryMessage, timeout: customTimeout });
        break;
      case "info":
        info(message, { secondaryMessage, timeout: customTimeout });
        break;
    }
  };

  return (
    <div className="snackbar-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Custom Messages</h3>
        <div className="demo-content">
          <div className="demo-input-group">
            <div className="input-group">
              <label htmlFor="custom-message">Primary Message:</label>
              <input
                id="custom-message"
                type="text"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Enter custom message..."
                className="demo-input"
              />
            </div>
            <div className="input-group">
              <label htmlFor="custom-secondary">Secondary Message (optional):</label>
              <input
                id="custom-secondary"
                type="text"
                value={customSecondaryMessage}
                onChange={(e) => setCustomSecondaryMessage(e.target.value)}
                placeholder="Enter secondary message..."
                className="demo-input"
              />
            </div>
            <div className="input-group">
              <label htmlFor="custom-timeout">Timeout (ms):</label>
              <input
                id="custom-timeout"
                type="number"
                value={customTimeout}
                onChange={(e) => setCustomTimeout(parseInt(e.target.value) || 4000)}
                min="1000"
                max="10000"
                step="1000"
                className="demo-input"
              />
            </div>
          </div>
          <div className="demo-controls">
            <button 
              className="demo-button success" 
              onClick={() => handleShowCustom("success")}
            >
              Custom Success
            </button>
            <button 
              className="demo-button error" 
              onClick={() => handleShowCustom("error")}
            >
              Custom Error
            </button>
            <button 
              className="demo-button warning" 
              onClick={() => handleShowCustom("warning")}
            >
              Custom Warning
            </button>
            <button 
              className="demo-button info" 
              onClick={() => handleShowCustom("info")}
            >
              Custom Info
            </button>
          </div>
        </div>
      </div>
      <BasicSnackbar />
    </div>
  );
};

// Demo 8: Persistent Snackbars
export const PersistentDemo = () => {
  const { error, warning } = useSnackbar();

  return (
    <div className="snackbar-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Persistent Snackbars</h3>
        <div className="demo-content">
          <div className="demo-controls">
            <button 
              className="demo-button error" 
              onClick={() => error("Critical error occurred!", { 
                isPersistent: true,
                secondaryMessage: "This error requires immediate attention and will not auto-dismiss." 
              })}
            >
              Persistent Error
            </button>
            <button 
              className="demo-button warning" 
              onClick={() => warning("Important notice!", { 
                isPersistent: true,
                secondaryMessage: "Please read this important information before proceeding." 
              })}
            >
              Persistent Warning
            </button>
          </div>
        </div>
      </div>
      <BasicSnackbar />
    </div>
  );
};

// Default export for backward compatibility
const SnackbarDemo = () => {
  return (
    <div className="snackbar-demo-container">
      <BasicTypesDemo />
      <PositionOverrideDemo />
      <SecondaryMessagesDemo />
      <PositionConfigDemo />
      <OffsetConfigDemo />
      <TimeoutConfigDemo />
      <CustomMessagesDemo />
      <PersistentDemo />
    </div>
  );
};

export default SnackbarDemo;