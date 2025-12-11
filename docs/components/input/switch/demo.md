import {
  BasicSwitchDemo,
  VariantColorsDemo,
  SizesDemo,
  LabelPositionsDemo,
  StatesDemo,
  InsetDemo,
  DotLabelsDemo,
  InsetWithDotLabelsDemo
} from "@site/src/demoPages/SwitchDemo.jsx";

# Demo

This page demonstrates the Switch component with various configurations and examples.

## Demo 1: Basic Switch

### Code Example

```jsx
import React, { useState } from "react";
import BasicSwitch from "../components/sharedComponents/BasicSwitch";

const BasicSwitchExample = () => {
  const [checked, setChecked] = useState(false);

  return (
    <BasicSwitch
      value={checked}
      onChange={setChecked}
      label="Notifications"
    />
  );
};
```

### Interactive Demo

<BasicSwitchDemo />

## Demo 2: Variant Colors

### Code Example

```jsx
import React, { useState } from "react";
import BasicSwitch from "../components/sharedComponents/BasicSwitch";

const VariantColorsExample = () => {
  const [defaultChecked, setDefaultChecked] = useState(true);
  const [primaryChecked, setPrimaryChecked] = useState(true);
  const [successChecked, setSuccessChecked] = useState(true);
  const [warningChecked, setWarningChecked] = useState(true);
  const [dangerChecked, setDangerChecked] = useState(true);
  const [infoChecked, setInfoChecked] = useState(true);

  return (
    <div>
      <BasicSwitch
        value={defaultChecked}
        onChange={setDefaultChecked}
        label="Default"
        variant="default"
      />
      <BasicSwitch
        value={primaryChecked}
        onChange={setPrimaryChecked}
        label="Primary"
        variant="primary"
      />
      <BasicSwitch
        value={successChecked}
        onChange={setSuccessChecked}
        label="Success"
        variant="success"
      />
      <BasicSwitch
        value={warningChecked}
        onChange={setWarningChecked}
        label="Warning"
        variant="warning"
      />
      <BasicSwitch
        value={dangerChecked}
        onChange={setDangerChecked}
        label="Danger"
        variant="danger"
      />
      <BasicSwitch
        value={infoChecked}
        onChange={setInfoChecked}
        label="Info"
        variant="info"
      />
    </div>
  );
};
```

### Interactive Demo

<VariantColorsDemo />

## Demo 3: Size Variants

### Code Example

```jsx
import React, { useState } from "react";
import BasicSwitch from "../components/sharedComponents/BasicSwitch";

const SizesExample = () => {
  const [xsChecked, setXsChecked] = useState(false);
  const [smChecked, setSmChecked] = useState(true);
  const [mdChecked, setMdChecked] = useState(false);
  const [lgChecked, setLgChecked] = useState(true);
  const [xlChecked, setXlChecked] = useState(false);

  return (
    <div>
      <BasicSwitch
        value={xsChecked}
        onChange={setXsChecked}
        label="Extra Small (xs)"
        size="xs"
        variant="info"
      />
      <BasicSwitch
        value={smChecked}
        onChange={setSmChecked}
        label="Small (sm)"
        size="sm"
        variant="warning"
      />
      <BasicSwitch
        value={mdChecked}
        onChange={setMdChecked}
        label="Medium (md)"
        size="md"
        variant="success"
      />
      <BasicSwitch
        value={lgChecked}
        onChange={setLgChecked}
        label="Large (lg)"
        size="lg"
        variant="danger"
      />
      <BasicSwitch
        value={xlChecked}
        onChange={setXlChecked}
        label="Extra Large (xl)"
        size="xl"
        variant="primary"
      />
    </div>
  );
};
```

### Interactive Demo

<SizesDemo />

## Demo 4: Label Positions

### Code Example

```jsx
import React, { useState } from "react";
import BasicSwitch from "../components/sharedComponents/BasicSwitch";

const LabelPositionsExample = () => {
  const [leftChecked, setLeftChecked] = useState(true);
  const [rightChecked, setRightChecked] = useState(false);

  return (
    <div>
      <BasicSwitch
        value={leftChecked}
        onChange={setLeftChecked}
        label="Left Label"
        labelPosition="left"
        variant="primary"
      />
      <BasicSwitch
        value={rightChecked}
        onChange={setRightChecked}
        label="Right Label"
        labelPosition="right"
        variant="success"
      />
    </div>
  );
};
```

### Interactive Demo

<LabelPositionsDemo />

## Demo 5: States

### Code Example

```jsx
import React from "react";
import BasicSwitch from "../components/sharedComponents/BasicSwitch";

const StatesExample = () => {
  return (
    <div>
      <BasicSwitch
        value={true}
        label="Disabled"
        disabled
        variant="primary"
      />
      <BasicSwitch
        value={false}
        label="Readonly"
        readonly
        variant="success"
      />
    </div>
  );
};
```

### Interactive Demo

<StatesDemo />

## Demo 6: Inset Variant

### Code Example

```jsx
import React, { useState } from "react";
import BasicSwitch from "../components/sharedComponents/BasicSwitch";

const InsetExample = () => {
  const [insetChecked, setInsetChecked] = useState(true);

  return (
    <BasicSwitch
      value={insetChecked}
      onChange={setInsetChecked}
      label="Inset Switch"
      inset={true}
      variant="primary"
    />
  );
};
```

### Interactive Demo

<InsetDemo />

## Demo 7: Dot Labels

### Code Example

```jsx
import React, { useState } from "react";
import BasicSwitch from "../components/sharedComponents/BasicSwitch";

const DotLabelsExample = () => {
  const [dotLabelChecked, setDotLabelChecked] = useState(true);

  return (
    <BasicSwitch
      value={dotLabelChecked}
      onChange={setDotLabelChecked}
      label="With Dot Labels"
      dotLabels={{ true: "ON", false: "OFF" }}
      variant="success"
    />
  );
};
```

### Interactive Demo

<DotLabelsDemo />

## Demo 8: Inset with Dot Labels

### Code Example

```jsx
import React, { useState } from "react";
import BasicSwitch from "../components/sharedComponents/BasicSwitch";

const InsetWithDotLabelsExample = () => {
  const [insetDotChecked, setInsetDotChecked] = useState(true);

  return (
    <BasicSwitch
      value={insetDotChecked}
      onChange={setInsetDotChecked}
      label="Inset with Labels"
      inset={true}
      dotLabels={{ true: "ON", false: "OFF" }}
      variant="primary"
    />
  );
};
```

### Interactive Demo

<InsetWithDotLabelsDemo />
