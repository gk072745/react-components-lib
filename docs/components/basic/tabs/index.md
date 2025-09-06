# Tabs

Configurable tabs with single or multiple selection, variants (single-packed, bottom-line), icons/slots, and i18n-friendly labels.

## Features

- **Selection**: single or multiple
- **Variants**: single-packed, bottom-line (with moving active line)
- **Slots**: prepend, tab-icon, append via render function
- **i18n labels**: control plain vs i18n via `isLabeli18String`
- **Custom classes**: `tabClasses` to apply style variants

## Basic Usage

```jsx
import React, { useState } from 'react';
import BasicTabs from '../components/sharedComponents/BasicTabs';

export default function Example() {
  const [selected, setSelected] = useState('home');
  const items = [
    { value: 'home', name: 'Home' },
    { value: 'profile', name: 'Profile' },
    { value: 'settings', name: 'Settings' }
  ];
  return (
    <BasicTabs tabItems={items} selected={selected} onItemClicked={(item) => setSelected(item.value)} />
  );
}
```

[API Reference →](./api)

[View Code →](./code)
