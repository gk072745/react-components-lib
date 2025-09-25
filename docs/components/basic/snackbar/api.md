# API Reference

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

### Return Values

| Property | Type | Description |
|----------|------|-------------|
| `success` | `(message: string, options?: SnackbarOptions) => void` | Show success notification |
| `error` | `(message: string, options?: SnackbarOptions) => void` | Show error notification |
| `warning` | `(message: string, options?: SnackbarOptions) => void` | Show warning notification |
| `info` | `(message: string, options?: SnackbarOptions) => void` | Show info notification |
| `showSnackbar` | `(config: SnackbarConfig) => void` | Show custom snackbar |
| `clearAll` | `() => void` | Clear all active snackbars |
| `setPosition` | `(position: Position) => void` | Set global position |
| `setOffset` | `(x: number, y: number) => void` | Set global offset |
| `setDefaultTimeout` | `(timeout: number) => void` | Set default timeout |

### SnackbarOptions

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `secondaryMessage` | `string \| null` | `null` | Additional details message |
| `position` | `Position` | `undefined` | Override global position |
| `timeout` | `number` | `undefined` | Override global timeout |
| `isPersistent` | `boolean` | `false` | Whether to require manual dismissal |
| `showCloseButton` | `boolean` | `true` | Whether to show close button |
| `icon` | `string \| null` | `null` | Custom icon |
| `onClose` | `() => void` | `undefined` | Close callback |
| `onTimeout` | `() => void` | `undefined` | Timeout callback |

### SnackbarConfig

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `type` | `'success' \| 'error' \| 'warning' \| 'info'` | ✅ | Notification type |
| `primaryMessage` | `string` | ✅ | Main message text |
| `secondaryMessage` | `string \| null` | ❌ | Additional details |
| `position` | `Position` | ❌ | Position override |
| `timeout` | `number` | ❌ | Timeout override |
| `isPersistent` | `boolean` | ❌ | Persistent mode |
| `showCloseButton` | `boolean` | ❌ | Show close button |
| `icon` | `string \| null` | ❌ | Custom icon |
| `onClose` | `() => void` | ❌ | Close callback |
| `onTimeout` | `() => void` | ❌ | Timeout callback |

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

## Usage Examples

### Basic Usage

```jsx
import { useSnackbar } from '@/customHooks/useSnackbar';
import BasicSnackbar from '@/components/sharedComponents/BasicSnackbar';

const MyComponent = () => {
  const { success, error, warning, info } = useSnackbar();

  const handleSuccess = () => {
    success('Operation completed successfully!');
  };

  const handleError = () => {
    error('Something went wrong', {
      secondaryMessage: 'Please try again later'
    });
  };

  return (
    <div>
      <button onClick={handleSuccess}>Success</button>
      <button onClick={handleError}>Error</button>
      <BasicSnackbar />
    </div>
  );
};
```

### Advanced Configuration

```jsx
const { showSnackbar, setPosition, setOffset, setDefaultTimeout } = useSnackbar();

// Set global configuration
setPosition('top-right');
setOffset(2, 1); // x: 2rem, y: 1rem
setDefaultTimeout(6000);

// Show custom snackbar
showSnackbar({
  type: 'info',
  primaryMessage: 'Custom notification',
  secondaryMessage: 'With custom settings',
  timeout: 10000,
  isPersistent: false,
  showCloseButton: true,
  icon: '🚀'
});
```

### Position Override

```jsx
const { success } = useSnackbar();

// Override position for specific notification
success('Success message!', {
  position: 'top-left',
  secondaryMessage: 'This appears in top-left corner'
});
```

### Persistent Notifications

```jsx
const { error, warning } = useSnackbar();

// Critical error that requires attention
error('Critical system error!', {
  isPersistent: true,
  secondaryMessage: 'Please contact support immediately.'
});

// Important notice
warning('Important notice!', {
  isPersistent: true,
  secondaryMessage: 'Please read before proceeding.'
});
```

### Custom Icons

```jsx
const { info } = useSnackbar();

info('New feature available!', {
  icon: '🎉',
  secondaryMessage: 'Check out the latest updates.'
});
```

### Callbacks

```jsx
const { success } = useSnackbar();

success('Data saved!', {
  onClose: () => console.log('Snackbar closed'),
  onTimeout: () => console.log('Snackbar timed out')
});
```

## Styling

### CSS Custom Properties

```css
:root {
  --snackbar-success-bg: #28a745;
  --snackbar-success-color: #ffffff;
  --snackbar-error-bg: #dc3545;
  --snackbar-error-color: #ffffff;
  --snackbar-warning-bg: #ffc107;
  --snackbar-warning-color: #212529;
  --snackbar-info-bg: #17a2b8;
  --snackbar-info-color: #ffffff;
  --snackbar-border-radius: 6px;
  --snackbar-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  --snackbar-z-index: 1000;
}
```

### SCSS Variables

```scss
$snackbar-success-bg: #28a745;
$snackbar-success-color: #ffffff;
$snackbar-error-bg: #dc3545;
$snackbar-error-color: #ffffff;
$snackbar-warning-bg: #ffc107;
$snackbar-warning-color: #212529;
$snackbar-info-bg: #17a2b8;
$snackbar-info-color: #ffffff;
$snackbar-border-radius: 6px;
$snackbar-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
$snackbar-z-index: 1000;
```

## Accessibility

### ARIA Attributes

- `role="alert"` - For screen readers
- `aria-live="polite"` - For non-urgent messages
- `aria-live="assertive"` - For urgent messages
- `aria-label` - For close button
- `aria-describedby` - For secondary messages

### Keyboard Support

- `Escape` - Close snackbar
- `Tab` - Navigate to close button
- `Enter/Space` - Activate close button

### Screen Reader Support

- Automatic announcement of new messages
- Proper focus management
- Descriptive labels for all interactive elements

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Performance

- Lightweight implementation
- Efficient state management
- Minimal re-renders
- Optimized animations
- Memory leak prevention
