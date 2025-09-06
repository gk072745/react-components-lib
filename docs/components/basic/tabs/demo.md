import {
  BasicSingleExample,
  MultipleSelectionExample,
  BottomLineStyleExample,
  SinglePackedVariantExample,
  DarkGoldBottomLineExample,
  IconSlotsExample
} from "@site/src/demoPages/TabsDemo.jsx";

# Demo

This page alternates code examples with matching interactive demos.

## Basic Single Selection

### Code Example

```jsx
import React, { useState, useMemo } from 'react';
import BasicTabs from '../components/sharedComponents/BasicTabs';

export default function BasicSingleExample() {
  const items = useMemo(() => ([
    { value: 'home', name: 'Home' },
    { value: 'profile', name: 'Profile' },
    { value: 'settings', name: 'Settings' },
  ]), []);
  const [selected, setSelected] = useState('home');
  return (
    <BasicTabs tabItems={items} selected={selected} onItemClicked={(item) => setSelected(item.value)} />
  );
}
```

### Interactive Demo

<BasicSingleExample />

## Multiple Selection

### Code Example

```jsx
import React, { useState, useMemo } from 'react';
import BasicTabs from '../components/sharedComponents/BasicTabs';

export default function MultipleSelectionExample() {
  const items = useMemo(() => ([
    { value: 'home', name: 'Home' },
    { value: 'profile', name: 'Profile' },
    { value: 'settings', name: 'Settings' },
  ]), []);
  const [selected, setSelected] = useState(['home']);
  return (
    <BasicTabs
      tabItems={items}
      multiple
      selected={selected}
      onItemClicked={(item) => setSelected((prev) => prev.includes(item.value) ? prev.filter(v => v !== item.value) : [...prev, item.value])}
    />
  );
}
```

### Interactive Demo

<MultipleSelectionExample />

## Bottom Line Style

### Code Example

```jsx
import React, { useState, useMemo } from 'react';
import BasicTabs from '../components/sharedComponents/BasicTabs';

export default function BottomLineStyleExample() {
  const items = useMemo(() => ([
    { value: 'home', name: 'Home' },
    { value: 'profile', name: 'Profile' },
    { value: 'settings', name: 'Settings' },
  ]), []);
  const [selected, setSelected] = useState('profile');
  return (
    <BasicTabs tabItems={items} selected={selected} bottomLineStyle onItemClicked={(item) => setSelected(item.value)} />
  );
}
```

### Interactive Demo

<BottomLineStyleExample />

## Single Packed Variant

### Code Example

```jsx
import React, { useState, useMemo } from 'react';
import BasicTabs from '../components/sharedComponents/BasicTabs';

export default function SinglePackedVariantExample() {
  const items = useMemo(() => ([
    { value: 'home', name: 'Home' },
    { value: 'profile', name: 'Profile' },
    { value: 'settings', name: 'Settings' },
  ]), []);
  const [selected, setSelected] = useState('settings');
  return (
    <BasicTabs tabItems={items} selected={selected} singlePacked onItemClicked={(item) => setSelected(item.value)} />
  );
}
```

### Interactive Demo

<SinglePackedVariantExample />

## Bottom Line Dark-Gold Variant

### Code Example

```jsx
import React, { useState, useMemo } from 'react';
import BasicTabs from '../components/sharedComponents/BasicTabs';

export default function DarkGoldBottomLineExample() {
  const items = useMemo(() => ([
    { value: 'home', name: 'Home' },
    { value: 'profile', name: 'Profile' },
    { value: 'settings', name: 'Settings' },
  ]), []);
  const [selected, setSelected] = useState('home');
  return (
    <BasicTabs tabItems={items} selected={selected} bottomLineStyle tabClasses={[ 'dark-gold-tab' ]} onItemClicked={(item) => setSelected(item.value)} />
  );
}
```

### Interactive Demo

<DarkGoldBottomLineExample />

## Icons & Slots

### Code Example

```jsx
import React, { useState, useMemo } from 'react';
import BasicTabs from '../components/sharedComponents/BasicTabs';

export default function IconSlotsExample() {
  const items = useMemo(() => ([
    { value: 'grid', name: 'Grid', prepend: '<svg width="16" height="16"><rect width="16" height="16" fill="#888"/></svg>' },
    { value: 'list', name: 'List', append: '<svg width="16" height="16"><circle cx="8" cy="8" r="8" fill="#888"/></svg>' },
    { value: 'table', name: 'Table', icon: '<svg width="16" height="16"><rect x="2" y="2" width="12" height="12" stroke="#888" fill="none"/></svg>' },
  ]), []);
  const [selected, setSelected] = useState('grid');
  return (
    <BasicTabs tabItems={items} selected={selected} onItemClicked={(item) => setSelected(item.value)}>
      {({ name, item }) => {
        if (name === 'prepend' && item.value === 'list') {
          return <span className="chip">NEW</span>;
        }
        return null;
      }}
    </BasicTabs>
  );
}
```

### Interactive Demo

<IconSlotsExample />


