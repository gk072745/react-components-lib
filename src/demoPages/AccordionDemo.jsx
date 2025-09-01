import BasicAccordion from "../components/sharedComponents/BasicAccordion";
import PropTypes from "prop-types";
import { useState } from "react";
import "./accordionDemo.scss";

// Demo 1: Status Indicator
export const StatusIndicatorDemo = () => {
  const statusPrepend = ({ isOpen }) => {
    return (
      <div
        style={{
          color: isOpen ? "green" : "red",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        {isOpen ? "✓" : "✗"}
      </div>
    );
  };

  return (
    <div className="accordion-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Status Indicator</h3>
        <div className="demo-content">
          <BasicAccordion
            title="Status Indicator Example"
            prepend={statusPrepend}
          >
            <div>
              <p>
                This accordion shows a status indicator that changes based on
                open/closed state.
              </p>
            </div>
          </BasicAccordion>
        </div>
      </div>
    </div>
  );
};

// Demo 2: Custom Toggle Button
export const CustomToggleDemo = () => {
  const togglePrepend = ({ isOpen, handleToggle }) => {
    return (
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleToggle();
        }}
        style={{
          padding: "4px 8px",
          backgroundColor: isOpen ? "#4CAF50" : "#f44336",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "12px",
        }}
      >
        {isOpen ? "Close" : "Open"}
      </button>
    );
  };

  return (
    <div className="accordion-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Custom Toggle Button</h3>
        <div className="demo-content">
          <BasicAccordion title="Custom Toggle Example" prepend={togglePrepend}>
            <div>
              <p>
                This example has a custom toggle button in the prepend slot.
              </p>
            </div>
          </BasicAccordion>
        </div>
      </div>
    </div>
  );
};

// Demo 3: Animated Icon
export const AnimatedIconDemo = () => {
  const animatedPrepend = ({ isOpen }) => {
    return (
      <div
        style={{
          transition: "transform 0.3s ease",
          transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
          fontSize: "16px",
        }}
      >
        ▶
      </div>
    );
  };

  return (
    <div className="accordion-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Animated Icon</h3>
        <div className="demo-content">
          <BasicAccordion
            title="Animated Icon Example"
            prepend={animatedPrepend}
          >
            <div>
              <p>
                This accordion has an animated arrow icon that rotates when
                opened.
              </p>
            </div>
          </BasicAccordion>
        </div>
      </div>
    </div>
  );
};

// Demo 4: Counter with Status Append
export const CounterStatusDemo = () => {
  const counterPrepend = ({ isOpen }) => {
    return (
      <div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: isOpen ? "#2196F3" : "#cccccc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "12px",
          fontWeight: "bold",
        }}
      >
        {isOpen ? "1" : "0"}
      </div>
    );
  };

  const statusAppend = ({ isOpen }) => {
    return (
      <div
        style={{
          color: isOpen ? "#2196F3" : "#666666",
          fontSize: "12px",
          fontWeight: "bold",
        }}
      >
        {isOpen ? "ACTIVE" : "INACTIVE"}
      </div>
    );
  };

  return (
    <div className="accordion-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Counter with Status</h3>
        <div className="demo-content">
          <BasicAccordion
            title="Counter Example"
            prepend={counterPrepend}
            append={statusAppend}
          >
            <div>
              <p>
                This example shows a counter in prepend and status text in
                append.
              </p>
            </div>
          </BasicAccordion>
        </div>
      </div>
    </div>
  );
};

// Demo 5: Complex Prepend
export const ComplexPrependDemo = () => {
  const complexPrepend = ({ isOpen, handleToggle }) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span style={{ color: isOpen ? "green" : "orange" }}>
          {isOpen ? "●" : "○"}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleToggle();
          }}
          style={{
            padding: "2px 6px",
            fontSize: "10px",
            backgroundColor: "#f0f0f0",
            border: "1px solid #cccccc",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          Toggle
        </button>
      </div>
    );
  };

  return (
    <div className="accordion-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Complex Prepend</h3>
        <div className="demo-content">
          <BasicAccordion
            title="Complex Prepend Example"
            prepend={complexPrepend}
          >
            <div>
              <p>This example has multiple elements in the prepend slot.</p>
            </div>
          </BasicAccordion>
        </div>
      </div>
    </div>
  );
};

// Demo 6: Badge Append Only
export const BadgeAppendDemo = () => {
  const badgeAppend = ({ isOpen }) => {
    return (
      <div
        style={{
          padding: "4px 8px",
          backgroundColor: isOpen ? "#4CAF50" : "#f44336",
          color: "white",
          borderRadius: "12px",
          fontSize: "10px",
          fontWeight: "bold",
        }}
      >
        {isOpen ? "OPEN" : "CLOSED"}
      </div>
    );
  };

  return (
    <div className="accordion-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Badge Append Only</h3>
        <div className="demo-content">
          <BasicAccordion title="Badge Append Example" append={badgeAppend}>
            <div>
              <p>This example only customizes the append slot with a badge.</p>
            </div>
          </BasicAccordion>
        </div>
      </div>
    </div>
  );
};

// Demo 7: Default Behavior
export const DefaultBehaviorDemo = () => {
  return (
    <div className="accordion-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Default Behavior</h3>
        <div className="demo-content">
          <BasicAccordion title="Default Accordion">
            <div>
              <p>
                This accordion uses the default prepend and append behavior.
              </p>
            </div>
          </BasicAccordion>
        </div>
      </div>
    </div>
  );
};

// Demo 8: Static Disabled State
export const StaticDisabledDemo = () => {
  const disabledPrepend = ({ isOpen, disabled }) => {
    return (
      <div
        style={{
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          backgroundColor: disabled
            ? "#cccccc"
            : isOpen
            ? "#4CAF50"
            : "#f44336",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "10px",
          opacity: disabled ? 0.6 : 1,
        }}
      >
        {disabled ? "🚫" : isOpen ? "✓" : "✗"}
      </div>
    );
  };

  const disabledAppend = ({ isOpen, disabled }) => {
    return (
      <div
        style={{
          padding: "4px 8px",
          backgroundColor: disabled
            ? "#cccccc"
            : isOpen
            ? "#4CAF50"
            : "#f44336",
          color: "white",
          borderRadius: "12px",
          fontSize: "10px",
          fontWeight: "bold",
          opacity: disabled ? 0.6 : 1,
        }}
      >
        {disabled ? "DISABLED" : isOpen ? "OPEN" : "CLOSED"}
      </div>
    );
  };

  return (
    <div className="accordion-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Static Disabled State</h3>
        <div className="demo-content">
          <BasicAccordion
            title="Disabled Accordion (Static)"
            disabled={true}
            prepend={disabledPrepend}
            append={disabledAppend}
          >
            <div>
              <p>
                This accordion is permanently disabled and shows disabled state
                styling.
              </p>
            </div>
          </BasicAccordion>
        </div>
      </div>
    </div>
  );
};

// Demo 9: Conditional Disabled State
export const ConditionalDisabledDemo = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const disabledPrepend = ({ isOpen, disabled }) => {
    return (
      <div
        style={{
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          backgroundColor: disabled
            ? "#cccccc"
            : isOpen
            ? "#4CAF50"
            : "#f44336",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "10px",
          opacity: disabled ? 0.6 : 1,
        }}
      >
        {disabled ? "🚫" : isOpen ? "✓" : "✗"}
      </div>
    );
  };

  const disabledAppend = ({ isOpen, disabled }) => {
    return (
      <div
        style={{
          padding: "4px 8px",
          backgroundColor: disabled
            ? "#cccccc"
            : isOpen
            ? "#4CAF50"
            : "#f44336",
          color: "white",
          borderRadius: "12px",
          fontSize: "10px",
          fontWeight: "bold",
          opacity: disabled ? 0.6 : 1,
        }}
      >
        {disabled ? "DISABLED" : isOpen ? "OPEN" : "CLOSED"}
      </div>
    );
  };

  return (
    <div className="accordion-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Conditional Disabled State</h3>
        <div className="demo-content">
          <div style={{ marginBottom: "1rem" }}>
            <button
              onClick={() => setIsDisabled(!isDisabled)}
              style={{
                padding: "8px 16px",
                backgroundColor: isDisabled ? "#f44336" : "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                marginBottom: "1rem",
              }}
            >
              {isDisabled ? "Enable" : "Disable"} Accordion
            </button>
            <p style={{ fontSize: "14px", color: "#666666" }}>
              Current state:{" "}
              <strong>{isDisabled ? "Disabled" : "Enabled"}</strong>
            </p>
          </div>
          <BasicAccordion
            title="Conditional Disabled Accordion"
            disabled={isDisabled}
            prepend={disabledPrepend}
            append={disabledAppend}
          >
            <div>
              <p>
                This accordion can be toggled between enabled and disabled
                states using the button above.
              </p>
              <p>
                When disabled, it shows visual feedback and prevents
                interactions.
              </p>
            </div>
          </BasicAccordion>
        </div>
      </div>
    </div>
  );
};

// Demo 10: Disabled with Default Styling
export const DisabledDefaultDemo = () => {
  return (
    <div className="accordion-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Disabled with Default Styling</h3>
        <div className="demo-content">
          <BasicAccordion title="Disabled Default Accordion" disabled={true}>
            <div>
              <p>
                This accordion is disabled but uses the default prepend and
                append styling.
              </p>
              <p>
                Notice how the default arrow icon also shows disabled state.
              </p>
            </div>
          </BasicAccordion>
        </div>
      </div>
    </div>
  );
};

// Default export for backward compatibility
const AccordionDemo = () => {
  return (
    <div className="accordion-demo-container">
      <StatusIndicatorDemo />
      <CustomToggleDemo />
      <AnimatedIconDemo />
      <CounterStatusDemo />
      <ComplexPrependDemo />
      <BadgeAppendDemo />
      <DefaultBehaviorDemo />
      <StaticDisabledDemo />
      <ConditionalDisabledDemo />
      <DisabledDefaultDemo />
    </div>
  );
};

AccordionDemo.propTypes = {};

export default AccordionDemo;
