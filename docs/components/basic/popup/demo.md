import {
BasicPopupDemo,
CustomSizePopupDemo,
SmallPopupDemo,
FormPopupDemo,
ConfirmationPopupDemo,
ContentPopupDemo,
MultiplePopupsDemo
} from "@site/src/demoPages/PopupDemo.jsx";

# Demo

This page demonstrates the Popup component with various configurations and examples.

## Demo 1: Basic Popup

### Code Example

```jsx
import React, { useState } from "react";
import BasicPopup from "@/src/components/sharedComponents/BasicPopup";

const BasicPopupDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Basic Popup</button>
      {isOpen && (
        <BasicPopup onPopupOutsideClick={() => setIsOpen(false)}>
          <div>
            <h3>Basic Popup</h3>
            <p>This is a basic popup with default size.</p>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </BasicPopup>
      )}
    </div>
  );
};
```

### Interactive Demo

<BasicPopupDemo />

## Demo 2: Custom Size Popup

### Code Example

```jsx
import React, { useState } from "react";
import BasicPopup from "@/src/components/sharedComponents/BasicPopup";

const CustomSizePopupDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Large Popup</button>
      {isOpen && (
        <BasicPopup
          height={35}
          width={45}
          onPopupOutsideClick={() => setIsOpen(false)}
        >
          <div>
            <h3>Large Popup</h3>
            <p>This popup has custom dimensions: 35rem height × 45rem width</p>
            <div className="popup-grid">
              <div>Item 1</div>
              <div>Item 2</div>
              <div>Item 3</div>
              <div>Item 4</div>
            </div>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </BasicPopup>
      )}
    </div>
  );
};
```

### Interactive Demo

<CustomSizePopupDemo />

## Demo 3: Small Popup

### Code Example

```jsx
import React, { useState } from "react";
import BasicPopup from "@/src/components/sharedComponents/BasicPopup";

const SmallPopupDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Small Popup</button>
      {isOpen && (
        <BasicPopup
          height={15}
          width={20}
          onPopupOutsideClick={() => setIsOpen(false)}
        >
          <div>
            <h4>Small Popup</h4>
            <p>Compact popup for quick messages.</p>
            <button onClick={() => setIsOpen(false)}>OK</button>
          </div>
        </BasicPopup>
      )}
    </div>
  );
};
```

### Interactive Demo

<SmallPopupDemo />

## Demo 4: Form Popup

### Code Example

```jsx
import React, { useState } from "react";
import BasicPopup from "@/src/components/sharedComponents/BasicPopup";

const FormPopupDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsOpen(false);
    setFormData({ name: "", email: "" });
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Form Popup</button>
      {isOpen && (
        <BasicPopup
          height={25}
          width={30}
          onPopupOutsideClick={() => setIsOpen(false)}
        >
          <div>
            <h3>Contact Form</h3>
            <form onSubmit={handleSubmit}>
              <div>
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
              <div>
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
              <div>
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
  );
};
```

### Interactive Demo

<FormPopupDemo />

## Demo 5: Confirmation Popup

### Code Example

```jsx
import React, { useState } from "react";
import BasicPopup from "@/src/components/sharedComponents/BasicPopup";

const ConfirmationPopupDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState("");

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
    <div>
      <button onClick={() => openConfirmation("delete")}>Delete Item</button>
      <button onClick={() => openConfirmation("logout")}>Logout</button>
      {isOpen && (
        <BasicPopup
          height={20}
          width={25}
          onPopupOutsideClick={() => setIsOpen(false)}
        >
          <div>
            <h3>Confirm Action</h3>
            <p>Are you sure you want to {action}?</p>
            <p>This action cannot be undone.</p>
            <div>
              <button onClick={handleConfirm}>Confirm</button>
              <button onClick={() => setIsOpen(false)}>Cancel</button>
            </div>
          </div>
        </BasicPopup>
      )}
    </div>
  );
};
```

### Interactive Demo

<ConfirmationPopupDemo />

## Demo 6: Content Popup

### Code Example

```jsx
import React, { useState } from "react";
import BasicPopup from "@/src/components/sharedComponents/BasicPopup";

const ContentPopupDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>View Content</button>
      {isOpen && (
        <BasicPopup
          height={40}
          width={50}
          onPopupOutsideClick={() => setIsOpen(false)}
        >
          <div>
            <div>
              <h3>Detailed Information</h3>
              <button onClick={() => setIsOpen(false)}>×</button>
            </div>
            <div>
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
                This component is perfect for dialogs, forms, confirmations, and
                any content that needs to be displayed as an overlay.
              </p>
            </div>
          </div>
        </BasicPopup>
      )}
    </div>
  );
};
```

### Interactive Demo

<ContentPopupDemo />

## Demo 7: Multiple Popups

### Code Example

```jsx
import React, { useState } from "react";
import BasicPopup from "@/src/components/sharedComponents/BasicPopup";

const MultiplePopupsDemo = () => {
  const [popups, setPopups] = useState({
    popup1: false,
    popup2: false,
    popup3: false,
  });

  const togglePopup = (popupName) => {
    setPopups((prev) => ({
      ...prev,
      [popupName]: !prev[popupName],
    }));
  };

  return (
    <div>
      <button onClick={() => togglePopup("popup1")}>Popup 1</button>
      <button onClick={() => togglePopup("popup2")}>Popup 2</button>
      <button onClick={() => togglePopup("popup3")}>Popup 3</button>

      {popups.popup1 && (
        <BasicPopup
          height={20}
          width={25}
          onPopupOutsideClick={() => togglePopup("popup1")}
        >
          <div>
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
          <div>
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
          <div>
            <h3>Popup 3</h3>
            <p>Third popup content</p>
            <button onClick={() => togglePopup("popup3")}>Close</button>
          </div>
        </BasicPopup>
      )}
    </div>
  );
};
```

### Interactive Demo

<MultiplePopupsDemo />
