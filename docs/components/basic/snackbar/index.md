# BasicSnackbar

A comprehensive, feature-rich snackbar notification system with multiple types, flexible positioning, and modern React 19 support.

## Overview

The BasicSnackbar component provides a flexible and powerful notification system with extensive customization options including multiple notification types, flexible positioning, secondary messages, and modern React 19 features.

## Key Features

- **Multiple Types**: Success, Error, Warning, and Info notifications
- **Flexible Positioning**: 6 different positions (top/bottom + left/center/right)
- **Secondary Messages**: Support for detailed descriptions and additional context
- **Auto-dismiss**: Configurable timeout with manual close option
- **Persistent Mode**: Notifications that require manual dismissal
- **Custom Icons**: Built-in icons for each notification type
- **Global State**: Single notification system across the app
- **React 19 Support**: Modern features and enhanced performance
- **Accessibility**: Full keyboard navigation and screen reader support
- **Customizable**: Extensive styling and behavior options

## Quick Start

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
      <button onClick={handleSuccess}>Show Success</button>
      <button onClick={handleError}>Show Error</button>
      <BasicSnackbar />
    </div>
  );
};
```

## When to Use

Use the BasicSnackbar component when you need to:

- Show success messages after user actions
- Display error notifications for failed operations
- Provide warning messages for important information
- Show informational updates or tips
- Give feedback on form submissions
- Display system notifications
- Show temporary status updates

## Component Architecture

The BasicSnackbar system consists of:

- **BasicSnackbar Component**: Renderless component that displays notifications
- **useSnackbar Hook**: Manages notification state and provides methods
- **Global State**: Single notification system across the app
- **SCSS Styling**: Modular styling with variables and mixins

## Basic Usage

### Simple Success Message
```jsx
const { success } = useSnackbar();

const handleSave = () => {
  // ... save logic
  success('Data saved successfully!');
};
```

### Error with Details
```jsx
const { error } = useSnackbar();

const handleError = () => {
  error('Upload failed!', {
    secondaryMessage: 'Please check your internet connection and try again.'
  });
};
```

### Position Override
```jsx
const { warning } = useSnackbar();

const handleWarning = () => {
  warning('Important notice!', {
    position: 'top-right',
    secondaryMessage: 'This requires your attention.'
  });
};
```

### Persistent Notification
```jsx
const { error } = useSnackbar();

const handleCriticalError = () => {
  error('Critical system error!', {
    isPersistent: true,
    secondaryMessage: 'Please contact support immediately.'
  });
};
```

## Advanced Configuration

### Global Position Setting
```jsx
const { setPosition } = useSnackbar();

// Set global position for all snackbars
setPosition('top-right');
```

### Custom Timeout
```jsx
const { setDefaultTimeout } = useSnackbar();

// Set default timeout for all snackbars
setDefaultTimeout(6000);
```

### Offset Configuration
```jsx
const { setOffset } = useSnackbar();

// Set offset from screen edges (in rem units)
setOffset(2, 1); // x: 2rem, y: 1rem
```

## Styling

The component uses SCSS for styling and supports:

- Custom color schemes
- Responsive design
- Smooth animations
- Dark mode support
- Custom positioning

## Accessibility

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- High contrast support

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Related Components

- [BasicToast](./toast) - For stackable notifications
- [BasicPopup](./popup) - For modal dialogs
- [BasicTooltip](./tooltip) - For contextual help
