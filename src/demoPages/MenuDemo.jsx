import React, { useRef, useState } from "react";
import BasicMenu from "../components/sharedComponents/BasicMenu";
import "./menuDemo.scss";

// Demo 1: Basic Click Menu
export const BasicClickMenuDemo = () => {
  return (
    <div className="menu-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Basic Click Menu</h3>
        <div className="demo-content">
          <div className="demo-group">
            <BasicMenu
              trigger={<button className="demo-button">Open Menu</button>}
              placement="bottom"
            >
              <div className="demo-menu-content">
                <div className="menu-item">Option 1</div>
                <div className="menu-item">Option 2</div>
                <div className="menu-item">Option 3</div>
              </div>
            </BasicMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 2: Hover Menu
export const HoverMenuDemo = () => {
  return (
    <div className="menu-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Hover Menu</h3>
        <div className="demo-content">
          <div className="demo-group">
            <BasicMenu
              trigger={<button className="demo-button">Hover Me</button>}
              triggerType="hover"
              placement="bottom"
            >
              <div className="demo-menu-content">
                <div className="menu-item">Hover Option 1</div>
                <div className="menu-item">Hover Option 2</div>
                <div className="menu-item">Hover Option 3</div>
              </div>
            </BasicMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 3: Placement Options
export const PlacementDemo = () => {
  return (
    <div className="menu-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Placement Options</h3>
        <div className="demo-content">
          <div className="placement-grid">
            <BasicMenu trigger={<button className="demo-button">Top</button>} placement="top">
              <div className="demo-menu-content">
                <div className="menu-item">Top Menu</div>
              </div>
            </BasicMenu>
            <BasicMenu trigger={<button className="demo-button">Bottom</button>} placement="bottom">
              <div className="demo-menu-content">
                <div className="menu-item">Bottom Menu</div>
              </div>
            </BasicMenu>
            <BasicMenu trigger={<button className="demo-button">Left</button>} placement="left">
              <div className="demo-menu-content">
                <div className="menu-item">Left Menu</div>
              </div>
            </BasicMenu>
            <BasicMenu trigger={<button className="demo-button">Right</button>} placement="right">
              <div className="demo-menu-content">
                <div className="menu-item">Right Menu</div>
              </div>
            </BasicMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 4: Placement Variants
export const PlacementVariantsDemo = () => {
  return (
    <div className="menu-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Placement Variants</h3>
        <div className="demo-content">
          <div className="placement-grid">
            <BasicMenu trigger={<button className="demo-button">Top Start</button>} placement="top-start">
              <div className="demo-menu-content">
                <div className="menu-item">Top Start</div>
              </div>
            </BasicMenu>
            <BasicMenu trigger={<button className="demo-button">Top End</button>} placement="top-end">
              <div className="demo-menu-content">
                <div className="menu-item">Top End</div>
              </div>
            </BasicMenu>
            <BasicMenu trigger={<button className="demo-button">Bottom Start</button>} placement="bottom-start">
              <div className="demo-menu-content">
                <div className="menu-item">Bottom Start</div>
              </div>
            </BasicMenu>
            <BasicMenu trigger={<button className="demo-button">Bottom End</button>} placement="bottom-end">
              <div className="demo-menu-content">
                <div className="menu-item">Bottom End</div>
              </div>
            </BasicMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 5: Custom Width
export const CustomWidthDemo = () => {
  return (
    <div className="menu-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Custom Width</h3>
        <div className="demo-content">
          <div className="demo-group">
            <BasicMenu
              trigger={<button className="demo-button">Auto Width</button>}
              matchTriggerWidth={false}
            >
              <div className="demo-menu-content">
                <div className="menu-item">This menu has auto width</div>
              </div>
            </BasicMenu>
            <BasicMenu
              trigger={<button className="demo-button">300px Width</button>}
              width={300}
            >
              <div className="demo-menu-content">
                <div className="menu-item">This menu is 300px wide</div>
              </div>
            </BasicMenu>
            <BasicMenu
              trigger={<button className="demo-button">Match Trigger</button>}
              matchTriggerWidth={true}
            >
              <div className="demo-menu-content">
                <div className="menu-item">This menu matches trigger width</div>
              </div>
            </BasicMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 6: Custom Offset
export const CustomOffsetDemo = () => {
  return (
    <div className="menu-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Custom Offset</h3>
        <div className="demo-content">
          <div className="demo-group">
            <BasicMenu
              trigger={<button className="demo-button">Default Offset</button>}
              placement="bottom"
            >
              <div className="demo-menu-content">
                <div className="menu-item">Default offset [0, 0.125]</div>
              </div>
            </BasicMenu>
            <BasicMenu
              trigger={<button className="demo-button">Large Offset</button>}
              placement="bottom"
              offset={[0, 1]}
            >
              <div className="demo-menu-content">
                <div className="menu-item">Large offset [0, 1]</div>
              </div>
            </BasicMenu>
            <BasicMenu
              trigger={<button className="demo-button">Horizontal Offset</button>}
              placement="right"
              offset={[1, 0]}
            >
              <div className="demo-menu-content">
                <div className="menu-item">Horizontal offset [1, 0]</div>
              </div>
            </BasicMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 7: Menu with Callbacks
export const CallbacksDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleOpen = () => {
    setIsOpen(true);
    setMessage("Menu opened!");
  };

  const handleClose = () => {
    setIsOpen(false);
    setMessage("Menu closed!");
  };

  return (
    <div className="menu-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Menu with Callbacks</h3>
        <div className="demo-content">
          <div className="demo-group">
            <BasicMenu
              trigger={<button className="demo-button">Menu with Callbacks</button>}
              onOpen={handleOpen}
              onClose={handleClose}
            >
              <div className="demo-menu-content">
                <div className="menu-item">Option 1</div>
                <div className="menu-item">Option 2</div>
              </div>
            </BasicMenu>
          </div>
          <div className="demo-state">
            <strong>Status:</strong> {isOpen ? "Open" : "Closed"}
          </div>
          {message && (
            <div className="demo-state">
              <strong>Message:</strong> {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Demo 8: Programmatic Control
export const ProgrammaticControlDemo = () => {
  const menuRef = useRef(null);
  const [status, setStatus] = useState("");

  const handleOpen = () => {
    menuRef.current?.openMenu();
    setStatus("Menu opened programmatically");
  };

  const handleClose = () => {
    menuRef.current?.closeMenu();
    setStatus("Menu closed programmatically");
  };

  const handleToggle = () => {
    menuRef.current?.toggleMenu();
    setStatus(`Menu toggled. Is open: ${menuRef.current?.isOpen}`);
  };

  return (
    <div className="menu-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Programmatic Control</h3>
        <div className="demo-content">
          <div className="demo-controls">
            <button className="demo-button" onClick={handleOpen}>
              Open
            </button>
            <button className="demo-button" onClick={handleClose}>
              Close
            </button>
            <button className="demo-button" onClick={handleToggle}>
              Toggle
            </button>
          </div>
          <div className="demo-group">
            <BasicMenu
              ref={menuRef}
              trigger={<button className="demo-button">Controlled Menu</button>}
            >
              <div className="demo-menu-content">
                <div className="menu-item">Option 1</div>
                <div className="menu-item">Option 2</div>
              </div>
            </BasicMenu>
          </div>
          {status && (
            <div className="demo-state">
              <strong>Status:</strong> {status}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Demo 9: Disable Outside Click Close
export const DisableOutsideClickDemo = () => {
  return (
    <div className="menu-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Disable Outside Click Close</h3>
        <div className="demo-content">
          <div className="demo-group">
            <BasicMenu
              trigger={<button className="demo-button">Close on Outside Click (Default)</button>}
              closeOnOutsideClick={true}
            >
              <div className="demo-menu-content">
                <div className="menu-item">Click outside to close</div>
              </div>
            </BasicMenu>
            <BasicMenu
              trigger={<button className="demo-button">Don't Close on Outside Click</button>}
              closeOnOutsideClick={false}
            >
              <div className="demo-menu-content">
                <div className="menu-item">Must press ESC to close</div>
              </div>
            </BasicMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 10: Complex Menu Content
export const ComplexContentDemo = () => {
  return (
    <div className="menu-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Complex Menu Content</h3>
        <div className="demo-content">
          <div className="demo-group">
            <BasicMenu
              trigger={<button className="demo-button">Complex Menu</button>}
              width={250}
            >
              <div className="demo-menu-content complex-menu">
                <div className="menu-header">Menu Header</div>
                <div className="menu-item">Profile Settings</div>
                <div className="menu-item">Account Settings</div>
                <div className="menu-item">Privacy Settings</div>
                <div className="menu-item menu-item-danger">Sign Out</div>
              </div>
            </BasicMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

// Default export for backward compatibility
const MenuDemo = () => {
  return (
    <div className="menu-demo-container">
      <BasicClickMenuDemo />
      <HoverMenuDemo />
      <PlacementDemo />
      <PlacementVariantsDemo />
      <CustomWidthDemo />
      <CustomOffsetDemo />
      <CallbacksDemo />
      <ProgrammaticControlDemo />
      <DisableOutsideClickDemo />
      <ComplexContentDemo />
    </div>
  );
};

export default MenuDemo;

