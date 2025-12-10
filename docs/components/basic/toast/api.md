## useToast Hook

The main hook for managing toast notifications. This hook uses React 18's `useSyncExternalStore` for efficient global state management and supports multiple independent toast notifications at different positions.

### Returns

| Property              | Type       | Description                                    |
| --------------------- | ---------- | ---------------------------------------------- | --- |
| `notifications`       | `array`    | Array of current notifications                 |
| `defaultConfig`       | `object`   | Current default configuration                  |
| `hasNotifications`    | `boolean`  | Whether there are any active notifications     |
| `notificationCount`   | `number`   | Total number of active notifications           |
| `showToast`           | `function` | Function to show a toast                       |
| `removeNotification`  | `function` | Function to remove a specific notification     |
| `clearAll`            | `function` | Function to clear all notifications            |
| `success`             | `function` | Function to show success toast                 |
| `error`               | `function` | Function to show error toast                   |
| `warning`             | `function` | Function to show warning toast                 |
| `info`                | `function` | Function to show info toast                    |
| `setPosition`         | `function` | Function to set default position               |
| `setOffset`           | `function` | Function to set default offset                 |
| `setDefaultTimeout`   | `function` | Function to set default timeout                |
| `setMaxNotifications` | `function` | Function to set max notifications per position |     |
| `info`                | `function` | Function to show info toast                    |
| `setPosition`         | `function` | Function to set default position               |
| `setOffset`           | `function` | Function to set default offset                 |
| `setDefaultTimeout`   | `function` | Function to set default timeout                |
| `setMaxNotifications` | `function` | Function to set max notifications per position |

### showToast(options)

Shows a toast notification with the specified options.

#### Parameters

| Parameter          | Type                                                                                | Default          | Description                                        |
| ------------------ | ----------------------------------------------------------------------------------- | ---------------- | -------------------------------------------------- |
| `type`             | `'success' \| 'error' \| 'warning' \| 'info'`                                       | `'info'`         | Type of toast notification                         |
| `primaryMessage`   | `string`                                                                            | -                | Main message to display (required)                 |
| `secondaryMessage` | `string`                                                                            | `null`           | Optional secondary message                         |
| `timeout`          | `number`                                                                            | `5000`           | Auto-dismiss timeout in milliseconds               |
| `isPersistent`     | `boolean`                                                                           | `false`          | Whether toast should persist until manually closed |
| `showCloseButton`  | `boolean`                                                                           | `true`           | Whether to show close button                       |
| `icon`             | `string`                                                                            | `null`           | Custom icon (inline SVG or emoji)                  |
| `position`         | `'top-left' \| 'top' \| 'top-right' \| 'bottom-left' \| 'bottom' \| 'bottom-right'` | `'bottom-right'` | Position of the toast                              |
| `offset`           | `object`                                                                            | `{ x: 1, y: 1 }` | Offset from position in rem units                  |

### Convenience Methods

#### success(primaryMessage, options?)

Shows a success toast notification.

```jsx
const { success } = useToast();
success('Operation completed successfully!');
```

#### error(primaryMessage, options?)

Shows an error toast notification. Errors are persistent by default.

```jsx
const { error } = useToast();
error('Something went wrong', { secondaryMessage: 'Please try again' });
```

#### warning(primaryMessage, options?)

Shows a warning toast notification.

```jsx
const { warning } = useToast();
warning('Be careful...', { timeout: 3000 });
```

#### info(primaryMessage, options?)

Shows an info toast notification.

```jsx
const { info } = useToast();
info('Just FYI');
```

### Configuration Methods

#### setPosition(position)

Sets the default position for new toasts.

**Parameters:**

- `position` (`string`): One of `'top-left'`, `'top'`, `'top-right'`, `'bottom-left'`, `'bottom'`, `'bottom-right'`

```jsx
const { setPosition } = useToast();
setPosition('top-right');
```

#### setOffset(x, y)

Sets the default offset for new toasts.

**Parameters:**

- `x` (`number`): Horizontal offset in rem units
- `y` (`number`): Vertical offset in rem units

```jsx
const { setOffset } = useToast();
setOffset(2, 1); // 2rem from top/bottom, 1rem from left/right
```

#### setDefaultTimeout(timeout)

Sets the default timeout for new toasts.

**Parameters:**

- `timeout` (`number`): Timeout in milliseconds

```jsx
const { setDefaultTimeout } = useToast();
setDefaultTimeout(3000); // 3 seconds
```

### Default Configuration

| Property         | Default          | Description                     |
| ---------------- | ---------------- | ------------------------------- |
| `position`       | `'bottom-right'` | Default position for new toasts |
| `offset`         | `{ x: 1, y: 1 }` | Default offset in rem units     |
| `defaultTimeout` | `5000`           | Default timeout in milliseconds |

## useRemToPixels Hook

A utility hook for converting rem values to pixels with reactive updates when the root font size changes.

### Returns

| Property                     | Type       | Description                              |
| ---------------------------- | ---------- | ---------------------------------------- |
| `rootFontSize`               | `number`   | Current root font size in pixels         |
| `convertRemToPixels`         | `function` | Convert a single rem value to pixels     |
| `convertMultipleRemToPixels` | `function` | Convert an array of rem values to pixels |
| `convertOffsetToPixels`      | `function` | Convert an offset array [x, y] to pixels |
| `updateRootFontSize`         | `function` | Manually update the root font size       |
| `setupMonitoring`            | `function` | Setup monitoring for font size changes   |
| `cleanupMonitoring`          | `function` | Cleanup monitoring listeners             |

### convertRemToPixels(rem)

Converts a rem value to pixels.

**Parameters:**

- `rem` (`number`): Rem value to convert

**Returns:** `number` - Pixel value

```jsx
const { convertRemToPixels } = useRemToPixels();
const pixels = convertRemToPixels(1.5); // Returns pixel value for 1.5rem
```

## Position Types

| Position       | Description                   |
| -------------- | ----------------------------- |
| `top-left`     | Top-left corner               |
| `top`          | Top center                    |
| `top-right`    | Top-right corner              |
| `bottom-left`  | Bottom-left corner            |
| `bottom`       | Bottom center                 |
| `bottom-right` | Bottom-right corner (default) |

## Accessibility

The component includes several accessibility features:

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Close button is keyboard accessible
- **Focus Management**: Proper focus handling
- **Screen Reader Support**: Descriptive messages and hints
