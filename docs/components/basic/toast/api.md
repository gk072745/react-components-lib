# API

## OToast Component

The display component that renders toast notifications. Mount once near the root of your application.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `''` | Additional CSS classes |
| `style` | `object` | `{}` | Additional inline styles |

## useToast Hook

The main hook for managing toast notifications.

### Returns

| Property | Type | Description |
|----------|------|-------------|
| `notifications` | `array` | Array of current notifications |
| `defaultConfig` | `object` | Current default configuration |
| `showToast` | `function` | Function to show a toast |
| `removeNotification` | `function` | Function to remove a specific notification |
| `clearAll` | `function` | Function to clear all notifications |
| `success` | `function` | Function to show success toast |
| `error` | `function` | Function to show error toast |
| `warning` | `function` | Function to show warning toast |
| `info` | `function` | Function to show info toast |
| `setPosition` | `function` | Function to set default position |
| `setOffset` | `function` | Function to set default offset |
| `setDefaultTimeout` | `function` | Function to set default timeout |
| `setMaxNotifications` | `function` | Function to set max notifications per position |

### showToast(options)

Shows a toast notification with the specified options.

#### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `type` | `'success' \| 'error' \| 'warning' \| 'info'` | - | Type of toast notification |
| `primaryMessage` | `string` | - | Main message to display |
| `secondaryMessage` | `string` | - | Optional secondary message |
| `timeout` | `number` | `5000` | Auto-dismiss timeout in milliseconds |
| `isPersistent` | `boolean` | `false` | Whether toast should persist until manually closed |
| `showCloseButton` | `boolean` | `true` | Whether to show close button |
| `icon` | `string` | - | Custom icon (inline SVG or emoji) |
| `position` | `'top-left' \| 'top' \| 'top-right' \| 'bottom-left' \| 'bottom' \| 'bottom-right'` | `'bottom-right'` | Position of the toast |
| `offset` | `object` | `{ x: 1, y: 1 }` | Offset from position in rem units |

### Default Configuration

| Property | Default | Description |
|----------|---------|-------------|
| `position` | `'bottom-right'` | Default position for new toasts |
| `offset` | `{ x: 1, y: 1 }` | Default offset in rem units |
| `defaultTimeout` | `5000` | Default timeout in milliseconds |
| `maxNotifications` | `5` | Maximum notifications per position |

## Example Usage

### Basic Usage

```jsx
import React from 'react';
import { useToast } from '@/customHooks/useToast';
import OToast from '@/components/sharedComponents/OToast';

function App() {
  const { success, error } = useToast();
  
  const handleSuccess = () => {
    success('Operation completed successfully!');
  };
  
  const handleError = () => {
    error('Something went wrong. Please try again.');
  };
  
  return (
    <div>
      <button onClick={handleSuccess}>Show Success</button>
      <button onClick={handleError}>Show Error</button>
      <OToast />
    </div>
  );
}
```

### With Custom Configuration

```jsx
import React from 'react';
import { useToast } from '@/customHooks/useToast';

function CustomToastExample() {
  const { success, setPosition, setOffset, setDefaultTimeout } = useToast();
  
  const showCustomToast = () => {
    setPosition('top-center');
    setOffset(2, 0);
    setDefaultTimeout(3000);
    success('Custom positioned toast!');
  };
  
  return (
    <button onClick={showCustomToast}>
      Show Custom Toast
    </button>
  );
}
```

### Persistent Toast

```jsx
import React from 'react';
import { useToast } from '@/customHooks/useToast';

function PersistentToastExample() {
  const { warning, clearAll } = useToast();
  
  const showPersistentWarning = () => {
    warning('This is important information!', {
      isPersistent: true,
      secondaryMessage: 'Please read this carefully.'
    });
  };
  
  return (
    <div>
      <button onClick={showPersistentWarning}>
        Show Persistent Warning
      </button>
      <button onClick={clearAll}>
        Clear All Toasts
      </button>
    </div>
  );
}
```

### Multiple Independent Toasts

```jsx
import React from 'react';
import { useToast } from '@/customHooks/useToast';

function MultipleToastsExample() {
  const { success, error, warning, info } = useToast();
  
  const showAllToasts = () => {
    success('Success message', { position: 'top-left' });
    error('Error message', { position: 'top-right' });
    warning('Warning message', { position: 'bottom-left' });
    info('Info message', { position: 'bottom-right' });
  };
  
  return (
    <button onClick={showAllToasts}>
      Show All Toast Types
    </button>
  );
}
```
