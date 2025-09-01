# Code

## Dependencies

This component requires:

- React 18+
- SCSS for styling
- PropTypes for prop validation

## Component Files

### React Component

**File:** `./sharedComponents/BasicPopup.jsx`

```jsx
import { memo, useCallback, useMemo } from "react";
import PropTypes from "prop-types";

const BasicPopup = memo(
  ({ children, height = 27.75, width = 27.75, onPopupOutsideClick }) => {
    const containerStyle = useMemo(
      () => ({
        height: `${height}rem`,
        width: `${width}rem`,
      }),
      [height, width]
    );

    const handleOutsideClick = useCallback(() => {
      onPopupOutsideClick?.();
    }, [onPopupOutsideClick]);

    const handleContainerClick = useCallback((e) => {
      e.stopPropagation();
    }, []);

    return (
      <div className="popup-component-wrapper" onClick={handleOutsideClick}>
        <div
          className="popup-component-container"
          style={containerStyle}
          onClick={handleContainerClick}
        >
          {children}
        </div>
      </div>
    );
  }
);

BasicPopup.propTypes = {
  children: PropTypes.node,
  height: PropTypes.number,
  width: PropTypes.number,
  onPopupOutsideClick: PropTypes.func,
};

export default BasicPopup;
```

### SCSS Component

**File:** `./assets/scss/components/_basic-popup.scss`

```scss
@use "../abstracts" as *;

.popup-component-wrapper {
  z-index: z("modal-backdrop");
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: grid;
  place-content: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);

  .popup-component-container {
    background-color: #ffffff;
    position: relative;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 83px 0px rgba(16, 7, 36, 0.12);
  }
}
```

### SCSS Abstracts Index

**File:** `./assets/scss/abstracts/index.scss`

```scss
// =============================================================================
// ABSTRACTS INDEX - Forwards all abstract modules
// =============================================================================

// variables
@forward "variables";

// functions
@forward "functions";

// mixins
@forward "mixins";

// breakpoints
@forward "breakpoints";
```

**Purpose:** This file forwards all abstract modules including variables, functions, mixins, and breakpoints. It ensures that all component-specific variables are available when importing abstracts.

**Key Features:**

- **Variables**: Forwards base variables and all component-specific variables
- **Functions**: Forwards utility functions
- **Mixins**: Forwards base mixins and component-specific mixins
- **Breakpoints**: Forwards responsive breakpoints
- **Modular Structure**: Organized imports for maintainability
