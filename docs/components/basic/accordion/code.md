# Code

## Dependencies

This component requires:

- React 18+
- SCSS for styling
- PropTypes for prop validation

## Component Files

### React Component

**File:** `./sharedComponents/BasicAccordion.jsx`

```jsx
import React, { useState, useCallback, useMemo, memo } from "react";
import PropTypes from "prop-types";

const BasicAccordion = memo(
  ({
    prepend,
    title,
    append,
    children,
    initialIsOpen = false,
    onToggle,
    disabled = false,
  }) => {
    // =============================================================================
    // STATE MANAGEMENT
    // =============================================================================
    const [isOpen, setIsOpen] = useState(initialIsOpen);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleToggle = useCallback(() => {
      if (disabled) return;

      setIsOpen((prevIsOpen) => {
        const newIsOpen = !prevIsOpen;
        onToggle?.(newIsOpen);
        return newIsOpen;
      });
    }, [onToggle, disabled]);

    const handleKeyDown = useCallback(
      (e) => {
        if (disabled) return;

        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleToggle();
        }
      },
      [handleToggle, disabled]
    );

    // =============================================================================
    // COMPUTED VALUES
    // =============================================================================
    const accordionContentClass = useMemo(
      () => `accordion-content-slot ${isOpen ? "open" : ""}`,
      [isOpen]
    );

    const accordionHeaderClass = useMemo(() => "accordion-header", []);

    const accordionContainerClass = useMemo(
      () => `basic-accordion ${disabled ? "disabled" : ""}`,
      [disabled]
    );

    const defaultAppendIconClass = useMemo(
      () => `default-append-icon ${isOpen ? "rotated" : ""}`,
      [isOpen]
    );

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderPrepend = useMemo(
      () => (prepend ? prepend({ isOpen, handleToggle, disabled }) : null),
      [prepend, isOpen, handleToggle, disabled]
    );

    const renderAppend = useMemo(() => {
      if (append) {
        return append({ isOpen, handleToggle, disabled });
      }

      return (
        <div className={defaultAppendIconClass}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 12L2 6L3.4 4.6L8 9.2L12.6 4.6L14 6L8 12Z"
              fill="currentColor"
            />
          </svg>
        </div>
      );
    }, [append, isOpen, handleToggle, disabled, defaultAppendIconClass]);

    // =============================================================================
    // ACCESSIBILITY ATTRIBUTES
    // =============================================================================
    const accessibilityProps = useMemo(
      () => ({
        role: "button",
        tabIndex: disabled ? -1 : 0,
        "aria-expanded": isOpen,
        "aria-disabled": disabled,
      }),
      [disabled, isOpen]
    );

    // =============================================================================
    // RENDER
    // =============================================================================
    return (
      <div className={accordionContainerClass}>
        <div
          className={accordionHeaderClass}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          {...accessibilityProps}
        >
          {renderPrepend}
          <div className="accordion-title">{title || "Accordion Title"}</div>
          <div className="append-slot">{renderAppend}</div>
        </div>

        <div className={accordionContentClass}>{children}</div>
      </div>
    );
  }
);

// =============================================================================
// PROP TYPES
// =============================================================================
BasicAccordion.propTypes = {
  prepend: PropTypes.func,
  title: PropTypes.string,
  append: PropTypes.func,
  children: PropTypes.node,
  initialIsOpen: PropTypes.bool,
  onToggle: PropTypes.func,
  disabled: PropTypes.bool,
};

BasicAccordion.displayName = "BasicAccordion";

export default BasicAccordion;
```

### SCSS Component

- **Accordion SCSS Variables**
  **File:** `./assets/scss/abstracts/variables/_accordion-variables.scss`

> **Note:**  
> All base color, spacing, and typography variables should be defined in `variables.scss` for consistency and theme support.  
> In this file, import those variables and use them to define accordion-specific variables. This ensures that the accordion component inherits the global theme and can be easily updated by changing the main variables file.

```scss
// =============================================================================
// ACCORDION VARIABLES - COMPLETE SYSTEM
// =============================================================================
@use "../variables" as *;

// Accordion chip variables
$accordion-bg-1: $white;
$accordion-bg-2: $gray-50;
$accordion-bg-3: $gray-100;
$accordion-bg-4: $gray-200;
$accordion-color-1: $gray-800;
$accordion-color-2: $gray-700;
$accordion-color-3: $gray-600;
$accordion-color-4: $gray-900;
$accordion-border-1: $gray-200;
$accordion-border-2: $gray-300;
$accordion-shadow-1: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
$accordion-shadow-2: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
```

- **Accordion Main SCSS**
  **File:** `./assets/scss/components/_basic-accordion.scss`

```scss
// =============================================================================
// BASIC ACCORDION COMPONENT
// =============================================================================
// This file contains all styles for the BasicAccordion component.
// The accordion supports both enabled and disabled states with smooth transitions.
@use "../abstracts" as *;

.basic-accordion {
  // =============================================================================
  // CONTAINER STYLES
  // =============================================================================
  width: 100%; // Full width container
  border-radius: 0.5rem; // Rounded corners for modern look
  overflow: hidden; // Hide content that overflows
  border: 0.0625rem solid $accordion-border-1; // Subtle border
  background: $accordion-bg-1; // Background color
  transition: all $transition-base; // Smooth transitions for all changes

  // =============================================================================
  // DISABLED STATE STYLES
  // =============================================================================
  // When the accordion is disabled, reduce opacity and prevent interactions
  &.disabled {
    opacity: 0.6; // Reduce visibility to indicate disabled state
    pointer-events: none; // Prevent all mouse interactions
  }

  // =============================================================================
  // HEADER STYLES
  // =============================================================================
  .accordion-header {
    // =============================================================================
    // BASIC HEADER PROPERTIES
    // =============================================================================
    width: 100%; // Full width header
    background: transparent; // Transparent background
    border: none; // No border on header
    cursor: pointer; // Pointer cursor for clickable area
    padding: 1rem 1.25rem; // Comfortable padding
    font-size: 1rem; // Standard font size
    font-weight: $font-weight-medium; // Medium font weight
    color: $accordion-color-1; // Primary text color
    text-align: left; // Left-aligned text
    transition: all $transition-slow; // Smooth transitions
    position: relative; // Relative positioning for child elements

    // =============================================================================
    // FLEXBOX LAYOUT
    // =============================================================================
    display: flex; // Flexbox for horizontal layout
    align-items: center; // Vertically center all elements
    gap: 0.75rem; // Consistent spacing between elements

    // =============================================================================
    // HOVER EFFECTS
    // =============================================================================
    // Hover effects for interactive state
    &:hover {
      background-color: $accordion-bg-2; // Subtle background change
      color: $primary-color; // Primary color for text
    }

    // =============================================================================
    // PREPEND SLOT STYLES
    // =============================================================================
    // Area for custom content before the title (icons, badges, etc.)
    .prepend-slot {
      display: flex; // Flexbox for alignment
      align-items: center; // Vertically center content
      margin-right: 0.75rem; // Space between prepend and title
    }

    // =============================================================================
    // TITLE SLOT STYLES
    // =============================================================================
    // Area for the main accordion title
    .title-slot {
      flex: 1; // Take remaining space
      font-weight: $font-weight-medium; // Medium font weight
    }

    // =============================================================================
    // APPEND SLOT STYLES
    // =============================================================================
    // Area for custom content after the title (icons, badges, etc.)
    .append-slot {
      display: flex; // Flexbox for alignment
      align-items: center; // Vertically center content
      margin-left: auto; // Push to the right side

      // =============================================================================
      // DEFAULT APPEND ICON STYLES
      // =============================================================================
      // Default chevron/arrow icon that rotates when accordion opens
      .default-append-icon {
        width: 1.25rem; // Fixed width
        height: 1.25rem; // Fixed height (square)
        display: flex; // Flexbox for centering
        align-items: center; // Vertically center
        justify-content: center; // Horizontally center
        color: $accordion-color-3; // Icon color
        transition: all $transition-base; // Smooth rotation transition

        // =============================================================================
        // ROTATED STATE (WHEN ACCORDION IS OPEN)
        // =============================================================================
        // Rotate the icon 180 degrees when accordion is open
        &.rotated {
          transform: rotate(180deg); // Flip the arrow
        }
      }
    }
  }

  // =============================================================================
  // CONTENT SLOT STYLES
  // =============================================================================
  // Area that contains the accordion content (children)
  .accordion-content-slot {
    // =============================================================================
    // TRANSITION PROPERTIES
    // =============================================================================
    // Smooth transitions for opening/closing animation
    transition: opacity $transition-base, // Fade in/out
      visibility $transition-base,
      // Show/hide
      height $transition-base; // Height animation

    // =============================================================================
    // DEFAULT STATE (CLOSED)
    // =============================================================================
    background-color: $accordion-bg-1; // Background color
    visibility: hidden; // Hidden by default
    opacity: 0; // Transparent by default
    height: 0; // No height by default

    // =============================================================================
    // OPEN STATE
    // =============================================================================
    // When accordion is open, show content with padding
    &.open {
      visibility: visible; // Make visible
      opacity: 1; // Fully opaque
      height: auto; // Auto height for content
      padding: 1rem 1.25rem; // Comfortable padding
    }
  }
}
```

- **SCSS Abstracts Index**
  **File:** `./assets/scss/abstracts/index.scss`

> **Note:**  
> This file forwards all abstract modules including variables, functions, mixins, and breakpoints. It ensures that all component-specific variables (like accordion variables) are available when importing abstracts.

```scss
// =============================================================================
// ABSTRACTS INDEX - Forwards all abstract modules
// =============================================================================

// variables
@forward "variables";
@forward "variables/accordion-variables";

// functions
@forward "functions";

// mixins
@forward "mixins";

// breakpoints
@forward "breakpoints";
```
