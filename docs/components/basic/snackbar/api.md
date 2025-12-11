# API

## BasicSnackbar Component

The BasicSnackbar component is a renderless component that displays snackbar notifications. It doesn't accept props directly - instead, it uses the `useSnackbar` hook to manage notifications.

### Usage

```jsx
import BasicSnackbar from '@/components/sharedComponents/BasicSnackbar';

// Simply include the component in your app
<BasicSnackbar />
```

### How it Works

The BasicSnackbar component:
- Automatically renders notifications from the global snackbar state
- Uses the `useSnackbar` hook to access notification data
- Handles positioning, animations, and styling
- Provides close functionality
- Manages notification lifecycle

## useSnackbar Hook

The `useSnackbar` hook manages snackbar notifications with global state. It provides methods to show, configure, and remove notifications.

### Return Values

| Property | Type | Description |
|----------|------|-------------|
| `success` | `(message: string, options?: SnackbarOptions) => void` | Show success notification |
| `error` | `(message: string, options?: SnackbarOptions) => void` | Show error notification |
| `warning` | `(message: string, options?: SnackbarOptions) => void` | Show warning notification |
| `info` | `(message: string, options?: SnackbarOptions) => void` | Show info notification |
| `showSnackbar` | `(config: SnackbarConfig) => void` | Show custom snackbar |
| `removeNotification` | `() => void` | Remove current notification |
| `clearAll` | `() => void` | Clear all active snackbars (alias for removeNotification) |
| `setPosition` | `(position: Position) => void` | Set global position |
| `setOffset` | `(x: number, y: number) => void` | Set global offset (in rem) |
| `setDefaultTimeout` | `(timeout: number) => void` | Set default timeout (in ms) |
| `notification` | `object \| null` | Current notification object |
| `config` | `object` | Global configuration object |
| `hasNotification` | `boolean` | Whether a notification is currently active |
| `notificationPosition` | `string` | Current notification position |
| `convertRemToPixels` | `(rem: number) => number` | Utility to convert rem to pixels |

### SnackbarOptions

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `secondaryMessage` | `string \| null` | `null` | Additional details message |
| `position` | `Position` | `undefined` | Override global position for this notification |
| `timeout` | `number` | `undefined` | Override global timeout for this notification (in ms) |
| `isPersistent` | `boolean` | `false` | Whether to require manual dismissal (no auto-dismiss) |
| `showCloseButton` | `boolean` | `true` | Whether to show close button |
| `icon` | `string \| null` | `null` | Custom icon (HTML string) |

### SnackbarConfig

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `type` | `'success' \| 'error' \| 'warning' \| 'info'` | ✅ | Notification type |
| `primaryMessage` | `string` | ✅ | Main message text |
| `secondaryMessage` | `string \| null` | ❌ | Additional details |
| `position` | `Position` | ❌ | Position override |
| `timeout` | `number` | ❌ | Timeout override (in ms) |
| `isPersistent` | `boolean` | ❌ | Persistent mode |
| `showCloseButton` | `boolean` | ❌ | Show close button |
| `icon` | `string \| null` | ❌ | Custom icon (HTML string) |

### Position Type

```typescript
type Position = 
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'bottom-left'
  | 'bottom'
  | 'bottom-right';
```

### Notification Types

| Type | Description | Default Behavior |
|------|-------------|------------------|
| `success` | Success notification | Auto-dismisses after timeout |
| `error` | Error notification | Persistent by default (requires manual dismissal) |
| `warning` | Warning notification | Auto-dismisses after timeout |
| `info` | Info notification | Auto-dismisses after timeout |

### Default Configuration

- **Position**: `'bottom'` (bottom center)
- **Offset**: `{ x: 1, y: 1 }` (in rem units)
- **Default Timeout**: `4000` (4 seconds)

### Accessibility

The component provides:
- Proper ARIA labels for close button
- Screen reader support
- Keyboard navigation support
- Focus management
