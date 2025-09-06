import {
  BasicControlledExample,
  SizesExample,
  ColorsExample,
  LabelPositionsExample,
  DisabledReadonlyExample,
  InsetAndDotLabelsExample
} from "@site/src/demoPages/SwitchDemo.jsx";

# Demo

This page alternates code examples with their interactive demos.

## Basic Controlled

### Code Example

```jsx
import React, { useState } from 'react';
import BasicSwitch from '../components/sharedComponents/BasicSwitch';

export default function BasicControlledExample() {
  const [checked, setChecked] = useState(false);
  return <BasicSwitch value={checked} onChange={setChecked} label="Notifications" />;
}
```

### Interactive Demo

<BasicControlledExample />

## Sizes

### Code Example

```jsx
import BasicSwitch from '../components/sharedComponents/BasicSwitch';

export default function SizesExample() {
  return (
    <div>
      <BasicSwitch value={false} label="XS" size="xs" />
      <BasicSwitch value={true} label="SM" size="sm" />
      <BasicSwitch value={false} label="MD" size="md" />
      <BasicSwitch value={true} label="LG" size="lg" />
      <BasicSwitch value={false} label="XL" size="xl" />
    </div>
  );
}
```

### Interactive Demo

<SizesExample />

## Colors

### Code Example

```jsx
import BasicSwitch from '../components/sharedComponents/BasicSwitch';

export default function ColorsExample() {
  return (
    <div>
      <BasicSwitch value={true} label="Default" className="color-default" />
      <BasicSwitch value={true} label="Primary" className="color-primary" />
      <BasicSwitch value={true} label="Success" className="color-success" />
      <BasicSwitch value={true} label="Warning" className="color-warning" />
      <BasicSwitch value={true} label="Danger" className="color-danger" />
      <BasicSwitch value={true} label="Info" className="color-info" />
    </div>
  );
}
```

### Interactive Demo

<ColorsExample />

## Label Positions

### Code Example

```jsx
import BasicSwitch from '../components/sharedComponents/BasicSwitch';

export default function LabelPositionsExample() {
  return (
    <div>
      <BasicSwitch value={true} label="Left" labelPosition="left" />
      <BasicSwitch value={false} label="Right" labelPosition="right" />
    </div>
  );
}
```

### Interactive Demo

<LabelPositionsExample />

## Disabled & Readonly

### Code Example

```jsx
import BasicSwitch from '../components/sharedComponents/BasicSwitch';

export default function DisabledReadonlyExample() {
  return (
    <div>
      <BasicSwitch value={true} label="Disabled" disabled />
      <BasicSwitch value={false} label="Readonly" readonly />
    </div>
  );
}
```

### Interactive Demo

<DisabledReadonlyExample />

## Inset & Dot Labels

### Code Example

```jsx
import BasicSwitch from '../components/sharedComponents/BasicSwitch';

export default function InsetAndDotLabelsExample() {
  return (
    <div>
      <BasicSwitch value={true} label="Inset" inset dotLabels={{ true: 'ON', false: 'OFF' }} />
      <BasicSwitch value={false} label="Dot Labels" dotLabels={{ true: 'Y', false: 'N' }} dotLabelColors={{ true: '#0d6efd', false: '#dc3545' }} />
    </div>
  );
}
```

### Interactive Demo

<InsetAndDotLabelsExample />


