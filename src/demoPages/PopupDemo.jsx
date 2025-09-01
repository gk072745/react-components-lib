import React, { useState, useEffect } from "react";
import BasicPopup from "../components/sharedComponents/BasicPopup";
import "./popupDemo.scss";

// Demo 1: Basic Popup
export const BasicPopupDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <div className="popup-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Basic Popup</h3>
        <div className="demo-content">
          <button className="demo-button" onClick={() => setIsOpen(true)}>
            Open Basic Popup
          </button>
          {isOpen && (
            <BasicPopup onPopupOutsideClick={() => setIsOpen(false)}>
              <div className="popup-content">
                <h3>Basic Popup</h3>
                <p>This is a basic popup with default size.</p>
                <button onClick={() => setIsOpen(false)}>Close</button>
              </div>
            </BasicPopup>
          )}
        </div>
      </div>
    </div>
  );
};

// Demo 2: Custom Size Popup
export const CustomSizePopupDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <div className="popup-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Custom Size Popup</h3>
        <div className="demo-content">
          <button className="demo-button" onClick={() => setIsOpen(true)}>
            Open Large Popup
          </button>
          {isOpen && (
            <BasicPopup
              height={35}
              width={45}
              onPopupOutsideClick={() => setIsOpen(false)}
            >
              <div className="popup-content">
                <h3>Large Popup</h3>
                <p>
                  This popup has custom dimensions: 35rem height × 45rem width
                </p>
                <div className="popup-grid">
                  <div className="grid-item">Item 1</div>
                  <div className="grid-item">Item 2</div>
                  <div className="grid-item">Item 3</div>
                  <div className="grid-item">Item 4</div>
                </div>
                <button onClick={() => setIsOpen(false)}>Close</button>
              </div>
            </BasicPopup>
          )}
        </div>
      </div>
    </div>
  );
};

// Demo 3: Small Popup
export const SmallPopupDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <div className="popup-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Small Popup</h3>
        <div className="demo-content">
          <button className="demo-button" onClick={() => setIsOpen(true)}>
            Open Small Popup
          </button>
          {isOpen && (
            <BasicPopup
              height={15}
              width={20}
              onPopupOutsideClick={() => setIsOpen(false)}
            >
              <div className="popup-content">
                <h4>Small Popup</h4>
                <p>Compact popup for quick messages.</p>
                <button onClick={() => setIsOpen(false)}>OK</button>
              </div>
            </BasicPopup>
          )}
        </div>
      </div>
    </div>
  );
};

// Demo 4: Form Popup
export const FormPopupDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsOpen(false);
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="popup-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Form Popup</h3>
        <div className="demo-content">
          <button className="demo-button" onClick={() => setIsOpen(true)}>
            Open Form Popup
          </button>
          {isOpen && (
            <BasicPopup
              height={25}
              width={30}
              onPopupOutsideClick={() => setIsOpen(false)}
            >
              <div className="popup-content">
                <h3>Contact Form</h3>
                <form onSubmit={handleSubmit} className="popup-form">
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-actions">
                    <button type="submit">Submit</button>
                    <button type="button" onClick={() => setIsOpen(false)}>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </BasicPopup>
          )}
        </div>
      </div>
    </div>
  );
};

// Demo 5: Confirmation Popup
export const ConfirmationPopupDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const handleConfirm = () => {
    console.log(`Confirmed action: ${action}`);
    setIsOpen(false);
    setAction("");
  };

  const openConfirmation = (actionType) => {
    setAction(actionType);
    setIsOpen(true);
  };

  return (
    <div className="popup-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Confirmation Popup</h3>
        <div className="demo-content">
          <div className="button-group">
            <button
              className="demo-button danger"
              onClick={() => openConfirmation("delete")}
            >
              Delete Item
            </button>
            <button
              className="demo-button warning"
              onClick={() => openConfirmation("logout")}
            >
              Logout
            </button>
          </div>
          {isOpen && (
            <BasicPopup
              height={20}
              width={25}
              onPopupOutsideClick={() => setIsOpen(false)}
            >
              <div className="popup-content">
                <h3>Confirm Action</h3>
                <p>Are you sure you want to {action}?</p>
                <p className="warning-text">This action cannot be undone.</p>
                <div className="confirmation-actions">
                  <button className="confirm-button" onClick={handleConfirm}>
                    Confirm
                  </button>
                  <button
                    className="cancel-button"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </BasicPopup>
          )}
        </div>
      </div>
    </div>
  );
};

// Demo 6: Content Popup
export const ContentPopupDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <div className="popup-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Content Popup</h3>
        <div className="demo-content">
          <button className="demo-button" onClick={() => setIsOpen(true)}>
            View Content
          </button>
          {isOpen && (
            <BasicPopup
              height={40}
              width={50}
              onPopupOutsideClick={() => setIsOpen(false)}
            >
              <div className="popup-content">
                <div className="content-header">
                  <h3>Detailed Information</h3>
                  <button
                    className="close-button"
                    onClick={() => setIsOpen(false)}
                  >
                    ×
                  </button>
                </div>
                <div className="content-body">
                  <h4>About This Component</h4>
                  <p>
                    The BasicPopup component is a versatile modal overlay that
                    provides:
                  </p>
                  <ul>
                    <li>Customizable dimensions</li>
                    <li>Outside click handling</li>
                    <li>Flexible content rendering</li>
                    <li>Clean overlay design</li>
                    <li>Responsive behavior</li>
                  </ul>
                  <h4>Usage Examples</h4>
                  <p>
                    This component is perfect for dialogs, forms, confirmations,
                    and any content that needs to be displayed as an overlay.
                  </p>
                </div>
              </div>
            </BasicPopup>
          )}
        </div>
      </div>
    </div>
  );
};

// Demo 7: Multiple Popups
export const MultiplePopupsDemo = () => {
  const [popups, setPopups] = useState({
    popup1: false,
    popup2: false,
    popup3: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const hasOpenPopup = Object.values(popups).some((isOpen) => isOpen);
      if (hasOpenPopup) {
        setPopups({
          popup1: false,
          popup2: false,
          popup3: false,
        });
      }
    };

    const hasOpenPopup = Object.values(popups).some((isOpen) => isOpen);
    if (hasOpenPopup) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [popups]);

  const togglePopup = (popupName) => {
    setPopups((prev) => ({
      ...prev,
      [popupName]: !prev[popupName],
    }));
  };

  return (
    <div className="popup-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Multiple Popups</h3>
        <div className="demo-content">
          <div className="button-group">
            <button
              className="demo-button"
              onClick={() => togglePopup("popup1")}
            >
              Popup 1
            </button>
            <button
              className="demo-button"
              onClick={() => togglePopup("popup2")}
            >
              Popup 2
            </button>
            <button
              className="demo-button"
              onClick={() => togglePopup("popup3")}
            >
              Popup 3
            </button>
          </div>

          {popups.popup1 && (
            <BasicPopup
              height={20}
              width={25}
              onPopupOutsideClick={() => togglePopup("popup1")}
            >
              <div className="popup-content">
                <h3>Popup 1</h3>
                <p>First popup content</p>
                <button onClick={() => togglePopup("popup1")}>Close</button>
              </div>
            </BasicPopup>
          )}

          {popups.popup2 && (
            <BasicPopup
              height={18}
              width={22}
              onPopupOutsideClick={() => togglePopup("popup2")}
            >
              <div className="popup-content">
                <h3>Popup 2</h3>
                <p>Second popup content</p>
                <button onClick={() => togglePopup("popup2")}>Close</button>
              </div>
            </BasicPopup>
          )}

          {popups.popup3 && (
            <BasicPopup
              height={16}
              width={20}
              onPopupOutsideClick={() => togglePopup("popup3")}
            >
              <div className="popup-content">
                <h3>Popup 3</h3>
                <p>Third popup content</p>
                <button onClick={() => togglePopup("popup3")}>Close</button>
              </div>
            </BasicPopup>
          )}
        </div>
      </div>
    </div>
  );
};

// Default export for backward compatibility
const PopupDemo = () => {
  return (
    <div className="popup-demo-container">
      <BasicPopupDemo />
      <CustomSizePopupDemo />
      <SmallPopupDemo />
      <FormPopupDemo />
      <ConfirmationPopupDemo />
      <ContentPopupDemo />
      <MultiplePopupsDemo />
    </div>
  );
};

export default PopupDemo;
