# Switch

A flexible on/off toggle with sizes, colors, optional inset style, labels, and accessibility support.

## Features

- **Controlled**: `value` and `onChange`
- **Sizes**: `xs`, `sm`, `md`, `lg`, `xl`
- **Colors**: via classes `color-<variant>` or custom colors
- **Inset variant**: compact slider style with dot shadow
- **Labels**: left/right label and optional dot labels with colors
- **Accessibility**: keyboard/touch/mouse interaction, focus-visible

## Basic Usage

```jsx
import React, { useState } from 'react';
import BasicSwitch from '../components/sharedComponents/BasicSwitch';

export default function Example() {
  const [isOn, setIsOn] = useState(false);
  return <BasicSwitch value={isOn} onChange={setIsOn} label="Notifications" />;
}
```

[API Reference →](./api)

[View Code →](./code)
