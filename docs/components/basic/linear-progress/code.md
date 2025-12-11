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
        └── LinearProgress.jsx
```

- **Path**: `src/components/sharedComponents/LinearProgress.jsx`
- **Description**: Linear progress bar component implementation

```jsx
import React, { useMemo, memo } from 'react';
import PropTypes from 'prop-types';

const LinearProgress = memo(
  ({
    absolute = false,
    variant = 'default',
    height = 4,
    indeterminate = false,
    modelValue = 0,
    max = 100,
    rounded = false,
    className = '',
    style = {},
    ...props
  }) => {
    // =============================================================================
    // COMPUTED VALUES
    // =============================================================================
    const percentage = useMemo(() => {
      return Math.min(100, Math.max(0, (modelValue / max) * 100));
    }, [modelValue, max]);

    // =============================================================================
    // COMPUTED STYLES
    // =============================================================================
    const containerStyle = useMemo(
      () => ({
        height: `${height}px`,
        ...style,
      }),
      [height, style]
    );

    const progressBarStyle = useMemo(
      () => ({
        width: indeterminate ? '40%' : `${percentage}%`,
      }),
      [indeterminate, percentage]
    );

    const containerClass = useMemo(() => {
      const classes = ['linear-progress-container', variant];
      if (absolute) classes.push('absolute');
      if (rounded) classes.push('rounded');
      if (indeterminate) classes.push('indeterminate');
      if (className) classes.push(className);
      return classes.join(' ');
    }, [variant, absolute, rounded, indeterminate, className]);

    const progressBarClass = useMemo(() => {
      const classes = ['linear-progress-bar'];
      if (indeterminate) classes.push('indeterminate-bar');
      return classes.join(' ');
    }, [indeterminate]);

    // =============================================================================
    // RENDER
    // =============================================================================
    return (
      <div className={containerClass} style={containerStyle} {...props}>
        <div className={progressBarClass} style={progressBarStyle} />
      </div>
    );
  }
);

// =============================================================================
// PROP TYPES
// =============================================================================
LinearProgress.propTypes = {
  absolute: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger', 'info']),
  height: PropTypes.number,
  indeterminate: PropTypes.bool,
  modelValue: PropTypes.number,
  max: PropTypes.number,
  rounded: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

LinearProgress.defaultProps = {
  absolute: false,
  variant: 'default',
  height: 4,
  indeterminate: false,
  modelValue: 0,
  max: 100,
  rounded: false,
  className: '',
  style: {},
};

LinearProgress.displayName = 'LinearProgress';

export default LinearProgress;
```

### SCSS Component

```
src/
├── assets/
    └── scss/
        └── components/
            └── _linear-progress.scss
```

- **Path**: `src/assets/scss/components/_linear-progress.scss`
- **Description**: Linear progress component styles

**Note:** This component uses SCSS variables and functions from the abstracts directory. The component imports abstracts via `@use '../abstracts' as *;`

```scss
// =============================================================================
// LINEAR PROGRESS COMPONENT STYLES
// =============================================================================
@use '../abstracts' as *;

.linear-progress-container {
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #e9ecef;

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

  // Absolute positioning variant
  &.absolute {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }

  // Rounded variant
  &.rounded {
    border-radius: 6.25rem;

    .linear-progress-bar {
      border-radius: 6.25rem;
    }
  }

  // Indeterminate state
  &.indeterminate {
    .linear-progress-bar {
      transition: none;
    }
  }

  // =============================================================================
  // VARIANT STYLES
  // =============================================================================

  // Default Variant
  &.default {
    background-color: #e9ecef;

    .linear-progress-bar {
      background-color: #007bff;
    }
  }

  // Primary Variant
  &.primary {
    background-color: #e9ecef;

    .linear-progress-bar {
      background-color: #007bff;
    }
  }

  // Success Variant
  &.success {
    background-color: #e9ecef;

    .linear-progress-bar {
      background-color: #28a745;
    }
  }

  // Warning Variant
  &.warning {
    background-color: #e9ecef;

    .linear-progress-bar {
      background-color: #ffc107;
    }
  }

  // Danger Variant
  &.danger {
    background-color: #e9ecef;

    .linear-progress-bar {
      background-color: #dc3545;
    }
  }

  // Info Variant
  &.info {
    background-color: #e9ecef;

    .linear-progress-bar {
      background-color: #17a2b8;
    }
  }
}

// =============================================================================
// PROGRESS BAR STYLES
// =============================================================================

.linear-progress-bar {
  height: 100%;
  transition: width 0.3s ease;
  position: relative;

  // Indeterminate animation
  &.indeterminate-bar {
    position: absolute;
    left: -40%;
    animation: linear-indeterminate 1.2s infinite ease-in-out;
  }
}

// =============================================================================
// ANIMATIONS
// =============================================================================

@keyframes linear-indeterminate {
  0% {
    left: -40%;
    width: 40%;
  }

  50% {
    left: 20%;
    width: 60%;
  }

  100% {
    left: 100%;
    width: 80%;
  }
}
```
