# Code

## Dependencies

- React 19+ (for modern features)
- PropTypes (for prop validation)
- SCSS (for styling)

## File Structure

```
src/
├── components/
│   └── sharedComponents/
│       └── BasicSnackbar.jsx
├── customHooks/
│   └── useSnackbar.js
└── assets/
    └── scss/
        ├── components/
        │   └── _basic-snackbar.scss
        └── abstracts/
            ├── index.scss
            ├── variables/
            │   └── _snackbar-variables.scss
            └── mixins/
                └── _snackbar-mixins.scss
```

### React Component

**File:** `./sharedComponents/BasicSnackbar.jsx`

```
src/
├── components/
│   └── sharedComponents/
│       └── BasicSnackbar.jsx
```

```jsx
import React, { useMemo } from 'react';
import { useSnackbar } from '@site/src/customHooks/useSnackbar';
import '@site/src/assets/scss/components/_basic-snackbar.scss'; 

const BasicSnackbar = () => {
  const { notification, config, hasNotification, removeNotification, convertRemToPixels } = useSnackbar();

  // Handle close notification
  const closeNotification = () => {
    // You can add any additional logic here before removing
    // For example: analytics, logging, etc.
    removeNotification();
  };

  // Use individual notification position or fall back to global config
  const notificationPosition = useMemo(() => {
    return notification?.position || config.position;
  }, [notification?.position, config.position]);

  const containerStyle = useMemo(() => {
    let { x, y } = config.offset;

    // Convert rem to pixels
    x = convertRemToPixels ? convertRemToPixels(x) : x * parseInt(getComputedStyle(document.documentElement).fontSize);
    y = convertRemToPixels ? convertRemToPixels(y) : y * parseInt(getComputedStyle(document.documentElement).fontSize);

    // Use individual notification position or fall back to global config
    const position = notification?.position || config.position;
    const styles = {};

    // Apply positioning based on notification position
    switch (position) {
      case 'top-right':
        styles.top = `${y}px`;
        styles.right = `${x}px`;
        break;
      case 'top-left':
        styles.top = `${y}px`;
        styles.left = `${x}px`;
        break;
      case 'top':
        styles.top = `${y}px`;
        styles.left = '50%';
        styles.transform = 'translateX(-50%)';
        break;
      case 'bottom-right':
        styles.bottom = `${y}px`;
        styles.right = `${x}px`;
        break;
      case 'bottom-left':
        styles.bottom = `${y}px`;
        styles.left = `${x}px`;
        break;
      case 'bottom':
        styles.bottom = `${y}px`;
        styles.left = '50%';
        styles.transform = 'translateX(-50%)';
        break;
    }

    return styles;
  }, [config.offset, notification?.position, config.position, convertRemToPixels]);

  // Don't render if no notification
  if (!hasNotification || !notification) {
    return null;
  }

  return (
    <div 
      className={`snackbar-container position-${notificationPosition}`}
      style={containerStyle}
    >
      <div
        className={`snackbar-notification ${notification.notificationClass.join(' ')}`}
      >
        <div className="snackbar-content">
          {notification.iconRef && (
            <div 
              className="snackbar-icon" 
              dangerouslySetInnerHTML={{ __html: notification.iconRef }}
            />
          )}
          <div className="snackbar-messages">
            <div className="snackbar-primary-message">{notification.primaryMessage}</div>
            {notification.secondaryMessage && (
              <div className="snackbar-secondary-message">
                {notification.secondaryMessage}
              </div>
            )}
          </div>
          {notification.showCloseButton && (
            <button
              onClick={closeNotification}
              className="snackbar-close-button"
              aria-label="Close notification"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasicSnackbar;
```

### Custom Hook

**File:** `./customHooks/useSnackbar.js`

```
src/
├── customHooks/
│   └── useSnackbar.js
```

```jsx
import { useState, useCallback, useRef, useEffect } from 'react';

// Global state for snackbar notification
let globalNotification = null;
let globalConfig = {
  position: 'bottom', // Default to bottom center for snackbars
  offset: { x: 1, y: 1 }, // in rem
  defaultTimeout: 4000 // Slightly shorter than toast default
};

// Global listeners for state changes
const listeners = new Set();

// Notify all listeners of state changes
const notifyListeners = () => {
  listeners.forEach(listener => listener());
};

// Generate unique ID for each notification
const generateId = () => {
  // Use browser's built-in crypto.randomUUID() if available, fallback to Date.now() + Math.random()
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // Fallback for older browsers
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Default icons for different types
const defaultIcons = {
  success: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.4735 4.80667C12.4115 4.74418 12.3378 4.69458 12.2565 4.66074C12.1753 4.62689 12.0881 4.60947 12.0001 4.60947C11.9121 4.60947 11.825 4.62689 11.7437 4.66074C11.6625 4.69458 11.5888 4.74418 11.5268 4.80667L6.56013 9.78L4.47346 7.68667C4.40911 7.62451 4.33315 7.57563 4.24992 7.54283C4.16668 7.51003 4.0778 7.49394 3.98834 7.49549C3.89889 7.49703 3.81062 7.51619 3.72857 7.55185C3.64651 7.58751 3.57229 7.63898 3.51013 7.70333C3.44797 7.76768 3.39909 7.84364 3.36629 7.92688C3.33349 8.01011 3.3174 8.099 3.31895 8.18845C3.3205 8.2779 3.33965 8.36618 3.37531 8.44823C3.41097 8.53028 3.46245 8.60451 3.5268 8.66667L6.0868 11.2267C6.14877 11.2892 6.22251 11.3387 6.30375 11.3726C6.38498 11.4064 6.47212 11.4239 6.56013 11.4239C6.64814 11.4239 6.73527 11.4064 6.81651 11.3726C6.89775 11.3387 6.97149 11.2892 7.03346 11.2267L12.4735 5.78667C12.5411 5.72424 12.5951 5.64847 12.6321 5.56414C12.669 5.4798 12.6881 5.38873 12.6881 5.29667C12.6881 5.2046 12.669 5.11353 12.6321 5.02919C12.5951 4.94486 12.5411 4.86909 12.4735 4.80667Z" fill="#10b981"/>
  </svg>`,
  error: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1.33334C4.32 1.33334 1.33333 4.32001 1.33333 8.00001C1.33333 11.68 4.32 14.6667 8 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00001C14.6667 4.32001 11.68 1.33334 8 1.33334ZM10.6667 9.78001L9.78 10.6667L8 8.88668L6.22 10.6667L5.33333 9.78001L7.11333 8.00001L5.33333 6.22001L6.22 5.33334L8 7.11334L9.78 5.33334L10.6667 6.22001L8.88667 8.00001L10.6667 9.78001Z" fill="#ef4444"/>
  </svg>`,
  warning: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.86602 2.5C8.62877 2.06698 8.33021 1.83333 8 1.83333C7.66979 1.83333 7.37123 2.06698 7.13398 2.5L1.20096 12.5C0.963708 12.933 0.963708 13.4003 1.20096 13.8333C1.43821 14.2664 1.73677 14.5 2.06699 14.5H13.933C14.2632 14.5 14.5618 14.2664 14.799 13.8333C15.0363 13.4003 15.0363 12.933 14.799 12.5L8.86602 2.5ZM8 6.16667C8.2301 6.16667 8.41667 6.35324 8.41667 6.58333V9.25C8.41667 9.4801 8.2301 9.66667 8 9.66667C7.7699 9.66667 7.58333 9.4801 7.58333 9.25V6.58333C7.58333 6.35324 7.7699 6.16667 8 6.16667ZM8 12.1667C7.5398 12.1667 7.16667 11.7936 7.16667 11.3333C7.16667 10.8731 7.5398 10.5 8 10.5C8.4602 10.5 8.83333 10.8731 8.83333 11.3333C8.83333 11.7936 8.4602 12.1667 8 12.1667Z" fill="#f59e0b"/>
  </svg>`,
  info: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1.33334C4.32 1.33334 1.33333 4.32001 1.33333 8.00001C1.33333 11.68 4.32 14.6667 8 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00001C14.6667 4.32001 11.68 1.33334 8 1.33334ZM8.66667 11.3333H7.33333V7.33334H8.66667V11.3333ZM8.66667 6.00001H7.33333V4.66668H8.66667V6.00001Z" fill="#3b82f6"/>
  </svg>`
};

// Convert rem to pixels
const convertRemToPixels = (rem) => {
  return rem * parseInt(getComputedStyle(document.documentElement).fontSize);
};

export const useSnackbar = () => {
  const [notification, setNotification] = useState(globalNotification);
  const [config, setConfig] = useState(globalConfig);
  const timeoutRef = useRef(null);

  // Subscribe to global state changes
  useEffect(() => {
    const listener = () => {
      setNotification(globalNotification);
      setConfig(globalConfig);
    };

    listeners.add(listener);
    return () => listeners.delete(listener);
  }, []);

  // Add/replace the current snackbar notification
  const showSnackbar = useCallback((options) => {
    const {
      type = 'info',
      primaryMessage,
      secondaryMessage = null,
      timeout = globalConfig.defaultTimeout,
      isPersistent = false,
      showCloseButton = true,
      icon = null,
      position = globalConfig.position // Allow overriding position
    } = options;

    // Validate required fields
    if (!primaryMessage) {
      console.warn('Snackbar notification requires a primaryMessage');
      return null;
    }

    // Clear existing notification and any pending timeouts
    if (globalNotification?.timeoutId) {
      clearTimeout(globalNotification.timeoutId);
    }

    // Create notification object
    const newNotification = {
      id: generateId(),
      type,
      primaryMessage,
      secondaryMessage,
      iconRef: icon || defaultIcons[type] || defaultIcons.info,
      showCloseButton,
      timeout,
      isPersistent,
      notificationClass: [type],
      createdAt: Date.now(),
      timeoutId: null,
      position // Store the position
    };

    // Replace current notification
    globalNotification = newNotification;
    setNotification(newNotification);
    notifyListeners();

    // Auto-remove after timeout (unless persistent)
    if (!isPersistent && timeout > 0) {
      newNotification.timeoutId = setTimeout(() => {
        removeNotification();
      }, timeout);
    }

    return newNotification;
  }, []);

  // Remove the current notification
  const removeNotification = useCallback(() => {
    if (globalNotification?.timeoutId) {
      clearTimeout(globalNotification.timeoutId);
    }
    globalNotification = null;
    setNotification(null);
    notifyListeners();
  }, []);

  // Clear notification (alias for removeNotification)
  const clearAll = useCallback(() => {
    removeNotification();
  }, [removeNotification]);

  // Convenience methods for different types with position override support
  const success = useCallback((primaryMessage, options = {}) => {
    return showSnackbar({
      type: 'success',
      primaryMessage,
      ...options
    });
  }, [showSnackbar]);

  const error = useCallback((primaryMessage, options = {}) => {
    return showSnackbar({
      type: 'error',
      primaryMessage,
      isPersistent: true, // Errors should be persistent by default
      ...options
    });
  }, [showSnackbar]);

  const warning = useCallback((primaryMessage, options = {}) => {
    return showSnackbar({
      type: 'warning',
      primaryMessage,
      ...options
    });
  }, [showSnackbar]);

  const info = useCallback((primaryMessage, options = {}) => {
    return showSnackbar({
      type: 'info',
      primaryMessage,
      ...options
    });
  }, [showSnackbar]);

  // Configuration methods
  const setPosition = useCallback((position) => {
    const validPositions = [
      'top-left', 'top', 'top-right',
      'bottom-left', 'bottom', 'bottom-right'
    ];

    if (validPositions.includes(position)) {
      globalConfig.position = position;
      setConfig({ ...globalConfig });
      notifyListeners();
    } else {
      console.warn('Invalid snackbar position:', position);
    }
  }, []);

  const setOffset = useCallback((x, y) => {
    globalConfig.offset = { x, y };
    setConfig({ ...globalConfig });
    notifyListeners();
  }, []);

  const setDefaultTimeout = useCallback((timeout) => {
    globalConfig.defaultTimeout = timeout;
    setConfig({ ...globalConfig });
    notifyListeners();
  }, []);

  // Computed properties
  const hasNotification = notification !== null;
  const notificationPosition = notification?.position || config.position;

  return {
    // State
    notification,
    config,

    // Computed
    hasNotification,
    notificationPosition,

    // Methods
    showSnackbar,
    removeNotification,
    clearAll,

    // Convenience methods
    success,
    error,
    warning,
    info,

    // Configuration
    setPosition,
    setOffset,
    setDefaultTimeout,

    // Utility
    convertRemToPixels
  };
};
```

### SCSS Component Styles

**File:** `./components/_basic-snackbar.scss`

```
src/
├── assets/
│   └── scss/
│       └── components/
│           └── _basic-snackbar.scss
```

```scss
// =============================================================================
// BASIC SNACKBAR COMPONENT STYLES
// =============================================================================
@use '../abstracts' as *;

.snackbar-container {
  position: fixed;
  z-index: 9999;
  background: transparent;
}

.snackbar-notification {
  min-width: 18.75rem;
  max-width: 25rem;
  background: white;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  .snackbar-content {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    gap: 0.75rem;
  }
  
  .snackbar-icon {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.125rem;
  }
  
  .snackbar-messages {
    flex: 1;
    min-width: 0;
  }
  
  .snackbar-primary-message {
    font-size: 0.875rem;
    font-weight: 500;
    color: #111827;
    margin: 0;
    line-height: 1.4;
  }
  
  .snackbar-secondary-message {
    font-size: 0.8125rem;
    color: #6b7280;
    margin: 0.25rem 0 0 0;
    line-height: 1.4;
  }
  
  .snackbar-close-button {
    flex-shrink: 0;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 0.25rem;
    color: #9ca3af;
    transition: all 0.2s ease;
  
    &:hover {
      color: #6b7280;
      background-color: #f3f4f6;
    }
  }

  // Type-specific styling - only repeating part uses mixin
  &.success {
    @include snackbar-variant('success');
  }

  &.error {
    @include snackbar-variant('error');
  }

  &.warning {
    @include snackbar-variant('warning');
  }

  &.info {
    @include snackbar-variant('info');
  }
}

// Animation classes for different positions
.snackbar-container {
  &.position-top,
  &.position-top-left,
  &.position-top-right {
    .snackbar-notification {
      animation: slideDown 0.3s ease-out;
    }
  }

  &.position-bottom,
  &.position-bottom-left,
  &.position-bottom-right {
    .snackbar-notification {
      animation: slideUp 0.3s ease-out;
    }
  }
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

### SCSS Variables

**File:** `./variables/_snackbar-variables.scss`

```
src/
├── assets/
│   └── scss/
│       └── abstracts/
│           └── variables/
│               └── _snackbar-variables.scss
```

```scss
// =============================================================================
// SNACKBAR COMPONENT VARIABLES
// =============================================================================
@use '../variables' as *;

// Snackbar color variants - only repeating part
$snackbar-colors: (
  success: #10b981,
  error: #ef4444,
  warning: #f59e0b,
  info: #3b82f6,
) !default;
```

### SCSS Mixins

**File:** `./mixins/_snackbar-mixins.scss`

```
src/
├── assets/
│   └── scss/
│       └── abstracts/
│           └── mixins/
│               └── _snackbar-mixins.scss
```

```scss
// =============================================================================
// SNACKBAR COMPONENT MIXINS
// =============================================================================
@use '../variables' as *;
@use '../functions' as *;
@use '../mixins' as *;

@use '../variables/snackbar-variables' as *;
@use "sass:map";

// =============================================================================
// VARIANT MIXINS - Only repeating part
// =============================================================================

@mixin snackbar-variant($name) {
  $color: map-get($snackbar-colors, $name);
  border-left: 0.25rem solid $color;
  
  .snackbar-content {
    .snackbar-primary-message {
      color: $color;
    }
  }
}
```

### SCSS Abstracts Index

**File:** `./abstracts/index.scss`

```
src/
├── assets/
│   └── scss/
│       └── abstracts/
│           └── index.scss
```

```scss
// =============================================================================
// ABSTRACTS INDEX - Forwards all abstract modules
// =============================================================================

// variables
@forward 'variables';
@forward 'variables/snackbar-variables';

// functions
@forward 'functions';

// mixins
@forward 'mixins';
@forward 'mixins/snackbar-mixins';

// breakpoints
@forward 'breakpoints';
```
