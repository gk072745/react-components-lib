---
sidebar_position: 1
sidebar_label: 'Navbar'
title: 'Navbar Component'
description: 'Responsive navigation bar component'
---

# Navbar Component

A responsive navigation bar component built with React and CSS.

## Basic Usage

```jsx
import { Navbar } from '@your-org/react-ui-components';

function App() {
  return (
    <Navbar 
      brand="My App"
      items={[
        { label: 'Home', to: '/' },
        { label: 'About', to: '/about' },
        { label: 'Contact', to: '/contact' }
      ]}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `brand` | `string` | - | Brand/logo text |
| `items` | `array` | `[]` | Navigation items |
| `actions` | `array` | `[]` | Action buttons |
| `sticky` | `boolean` | `true` | Whether navbar is sticky |
| `theme` | `'light' \| 'dark'` | `'light'` | Navbar theme |

## Examples

### Basic Navigation

```jsx
const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Docs', to: '/docs' },
  { label: 'Blog', to: '/blog' },
  { label: 'GitHub', href: 'https://github.com' }
];

<Navbar brand="My App" items={navItems} />
```

### With Actions

```jsx
const actions = [
  { label: 'Login', variant: 'outline' },
  { label: 'Sign Up', variant: 'primary' }
];

<Navbar 
  brand="My App" 
  items={navItems} 
  actions={actions} 
/>
```

### Dark Theme

```jsx
<Navbar 
  brand="My App" 
  items={navItems} 
  theme="dark" 
/>
```

## Navigation Items

Each navigation item can have the following properties:

```jsx
{
  label: 'Home',           // Display text
  to: '/',                // Internal route
  href: 'https://...',    // External link
  icon: 'home',           // Icon name
  children: [...],        // Dropdown items
  active: true            // Active state
}
```

## Responsive Behavior

The navbar automatically adapts to different screen sizes:

- **Desktop**: Full horizontal navigation
- **Tablet**: Collapsible menu with hamburger button
- **Mobile**: Full-width mobile menu
