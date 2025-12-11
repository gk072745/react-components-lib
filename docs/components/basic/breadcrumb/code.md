# Code

## Dependencies

This component requires:

- React 18+
- React Router DOM 6+
- PropTypes 15.8+
- SCSS for styling

## Component Files

### React Component

```
src/
├── components/
    └── sharedComponents/
        └── BasicBreadCrumb.jsx
```

- **Path**: `src/components/sharedComponents/BasicBreadCrumb.jsx`
- **Description**: Main breadcrumb component implementation

```jsx
import React, { useMemo, useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const BasicBreadCrumb = memo(
  ({ items = [], separator = '/', gap = '0.5rem', className = '', style = {}, onItemClick, ...props }) => {
    const navigate = useNavigate();

    // =============================================================================
    // COMPUTED VALUES
    // =============================================================================
    const containerStyle = useMemo(
      () => ({
        gap: gap,
        ...style,
      }),
      [gap, style]
    );

    const itemStyle = useMemo(
      () => ({
        gap: gap,
      }),
      [gap]
    );

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleClick = useCallback(
      (item, event) => {
        if (!item.disabled && item.to) {
          // Call custom click handler if provided
          if (onItemClick) {
            onItemClick(item, event);
          } else {
            // Default navigation behavior
            navigate(item.to);
          }
        }
      },
      [navigate, onItemClick]
    );

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderSeparator = useMemo(() => {
      // If separator is a function, call it with context
      if (typeof separator === 'function') {
        return separator();
      }

      // If separator is a React element or component
      if (React.isValidElement(separator)) {
        return separator;
      }

      // If separator is an object with render method
      if (separator && typeof separator === 'object' && separator.render) {
        return separator.render();
      }

      // Default: render as string
      return <span className="breadcrumb-separator">{separator}</span>;
    }, [separator]);

    const renderBreadcrumbItem = useCallback(
      (item, index) => {
        const isLast = index === items.length - 1;
        const isClickable = !item.disabled && item.to;

        return (
          <div key={index} className="breadcrumb-item" style={itemStyle}>
            <span
              className={`label ${item.disabled ? 'disabled' : ''}`}
              onClick={isClickable ? (event) => handleClick(item, event) : undefined}
              role={isClickable ? 'button' : undefined}
              tabIndex={isClickable ? 0 : undefined}
              onKeyDown={
                isClickable
                  ? (event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        handleClick(item, event);
                      }
                    }
                  : undefined
              }
            >
              {item.label}
            </span>
            {!isLast && renderSeparator}
          </div>
        );
      },
      [items.length, itemStyle, handleClick, renderSeparator]
    );

    // =============================================================================
    // COMPUTED STYLES
    // =============================================================================
    const containerClass = useMemo(() => {
      const classes = ['breadcrumb-container'];
      if (className) classes.push(className);
      return classes.join(' ');
    }, [className]);

    // =============================================================================
    // RENDER
    // =============================================================================
    return (
      <nav className={containerClass} style={containerStyle} aria-label="Breadcrumb navigation" {...props}>
        {items.map(renderBreadcrumbItem)}
      </nav>
    );
  }
);

// =============================================================================
// PROP TYPES
// =============================================================================
BasicBreadCrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      disabled: PropTypes.bool,
    })
  ).isRequired,
  separator: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
    PropTypes.shape({
      render: PropTypes.func,
    }),
  ]),
  gap: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onItemClick: PropTypes.func,
};

BasicBreadCrumb.defaultProps = {
  items: [],
  separator: '/',
  gap: '0.5rem',
  className: '',
  style: {},
};

BasicBreadCrumb.displayName = 'BasicBreadCrumb';

export default BasicBreadCrumb;
```

### SCSS Component

```
src/
├── assets/
    └── scss/
        └── components/
            └── _basic-breadcrumb.scss
```

- **Path**: `src/assets/scss/components/_basic-breadcrumb.scss`
- **Description**: Breadcrumb component styles

**Note:** This component uses SCSS variables from the abstracts directory. The component imports abstracts via `@use '../abstracts' as *;`

```scss
// =============================================================================
// BASIC BREADCRUMB COMPONENT STYLES
// =============================================================================
@use '../abstracts' as *;

.breadcrumb-container {
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  // Focus styles for accessibility
  &:focus-visible {
    outline: 0.125rem solid #2196f3;
    outline-offset: 0.125rem;
  }
}

// =============================================================================
// BREADCRUMB ITEM STYLES
// =============================================================================

.breadcrumb-item {
  display: flex;
  align-items: center;
  position: relative;

  // Label styles
  .label {
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 0.875rem;
    font-weight: 500;
    user-select: none;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    color: #333;
    position: relative;
    outline: none;

    // Focus styles for accessibility
    &:focus-visible {
      outline: 0.125rem solid #2196f3;
      outline-offset: 0.125rem;
    }

    // Disabled state
    &.disabled {
      cursor: default;
      color: #888;
      opacity: 0.8;
      pointer-events: none;
    }

    // Interactive states (only when not disabled)
    &:not(.disabled) {
      &:hover {
        color: #007bff;
        background-color: rgba(0, 123, 255, 0.1);
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 0 0.125rem rgba(0, 123, 255, 0.25);
      }

      &:active {
        transform: translateY(0.0625rem);
      }
    }
  }
}

// =============================================================================
// SEPARATOR STYLES
// =============================================================================

.breadcrumb-separator {
  margin: 0 0.25rem;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  // SVG separators
  svg {
    width: 1em;
    height: 1em;
    vertical-align: middle;
    fill: currentColor;
  }

  // Icon separators
  i,
  .icon {
    font-size: 0.875em;
    line-height: 1;
  }
}
```

### SCSS Abstracts

```
src/
├── assets/
    └── scss/
        └── abstracts/
            └── index.scss
```

- **Path**: `src/assets/scss/abstracts/index.scss`
- **Description**: Global SCSS variables, mixins, and functions

**Note:** The breadcrumb component uses variables, functions, mixins, and breakpoints from the abstracts directory. These are imported via the abstracts index file.

```scss
// =============================================================================
// ABSTRACTS INDEX - Forwards all abstract modules
// =============================================================================

// variables
@forward 'variables';

// functions
@forward 'functions';

// mixins
@forward 'mixins';

// breakpoints
@forward 'breakpoints';
```
