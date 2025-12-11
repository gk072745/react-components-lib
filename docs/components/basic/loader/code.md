# Code

## Dependencies

This component requires:

- React 18+
- SCSS for styling
- PropTypes for prop validation

## Component Files

### React Component

```
src/
├── components/
    └── sharedComponents/
        └── Loader.jsx
```

- **Path**: `src/components/sharedComponents/Loader.jsx`
- **Description**: Loader component implementation

```jsx
import React, { useMemo, memo } from 'react';
import PropTypes from 'prop-types';

const Loader = memo(
  ({
    size = 40,
    width = 4,
    variant = 'default',
    isLocalLoader = true,
    src = '',
    className = '',
    style = {},
    children,
    ...props
  }) => {
    // =============================================================================
    // COMPUTED STYLES
    // =============================================================================
    const containerStyle = useMemo(
      () => ({
        ...style,
      }),
      [style]
    );

    const imageStyle = useMemo(
      () => ({
        width: `${size}px`,
        height: `${size}px`,
      }),
      [size]
    );

    const svgStyle = useMemo(
      () => ({
        width: size,
        height: size,
      }),
      [size]
    );

    const containerClass = useMemo(() => {
      const classes = ['loader-wrapper', variant];
      if (isLocalLoader) classes.push('local-loader');
      if (className) classes.push(className);
      return classes.join(' ');
    }, [variant, isLocalLoader, className]);

    // =============================================================================
    // RENDER
    // =============================================================================
    return (
      <div className={containerClass} style={containerStyle} {...props}>
        {children || (
          <>
            {src ? (
              <img src={src} alt="loader" className="custom-loader-img" style={imageStyle} />
            ) : (
              <svg className="indeterminate-loader" style={svgStyle} viewBox="25 25 50 50">
                <circle className="track" cx="50" cy="50" r="20" fill="none" strokeWidth={width} />
                <circle className="arc" cx="50" cy="50" r="20" fill="none" strokeWidth={width} strokeLinecap="round" />
              </svg>
            )}
          </>
        )}
      </div>
    );
  }
);

// =============================================================================
// PROP TYPES
// =============================================================================
Loader.propTypes = {
  size: PropTypes.number,
  width: PropTypes.number,
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger', 'info']),
  isLocalLoader: PropTypes.bool,
  src: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};

Loader.defaultProps = {
  size: 40,
  width: 4,
  variant: 'default',
  isLocalLoader: true,
  src: '',
  className: '',
  style: {},
  children: null,
};

Loader.displayName = 'Loader';

export default Loader;
```

### SCSS Component

```
src/
├── assets/
    └── scss/
        └── components/
            └── _loader.scss
```

- **Path**: `src/assets/scss/components/_loader.scss`
- **Description**: Loader component styles

**Note:** This component uses SCSS variables and functions from the abstracts directory. The component imports abstracts via `@use '../abstracts' as *;`

```scss
// =============================================================================
// LOADER COMPONENT STYLES
// =============================================================================
@use '../abstracts' as *;

*,
*::after,
*::before {
  box-sizing: border-box;
}

.loader-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: all;
  user-select: none;
  cursor: default;
  background-color: rgba(255, 255, 255, 0.75);

  // Local loader variant (relative positioning)
  &.local-loader {
    position: relative;
    width: 100%;
    height: 100%;
  }

  // Focus styles for accessibility
  &:focus-visible {
    outline: 0.125rem solid #2196f3;
    outline-offset: 0.125rem;
  }

  // SVG Loader styles
  .indeterminate-loader {
    animation: rotate 2s linear infinite;

    .track {
      stroke: #e0e0e0;
    }

    .arc {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
      animation: dash 1.5s ease-in-out infinite;
    }
  }

  // Custom image loader
  .custom-loader-img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  // =============================================================================
  // VARIANT STYLES
  // =============================================================================

  // Default Variant
  &.default {
    .indeterminate-loader {
      .arc {
        stroke: #000000;
      }
    }
  }

  // Primary Variant
  &.primary {
    .indeterminate-loader {
      .arc {
        stroke: #007bff;
      }
    }
  }

  // Success Variant
  &.success {
    .indeterminate-loader {
      .arc {
        stroke: #28a745;
      }
    }
  }

  // Warning Variant
  &.warning {
    .indeterminate-loader {
      .arc {
        stroke: #ffc107;
      }
    }
  }

  // Danger Variant
  &.danger {
    .indeterminate-loader {
      .arc {
        stroke: #dc3545;
      }
    }
  }

  // Info Variant
  &.info {
    .indeterminate-loader {
      .arc {
        stroke: #17a2b8;
      }
    }
  }
}

// =============================================================================
// ANIMATIONS
// =============================================================================

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -2.1875rem;
  }

  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -7.75rem;
  }
}

// =============================================================================
// ACCESSIBILITY SUPPORT
// =============================================================================

// Reduced motion support
@media (prefers-reduced-motion: reduce) {
  .loader-wrapper {
    .indeterminate-loader {
      animation: none;

      .arc {
        animation: none;
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -2.1875rem;
      }
    }
  }
}
```
