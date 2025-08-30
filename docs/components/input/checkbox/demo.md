import BasicCheckbox from "@site/src/components/sharedComponents/BasicCheckbox.jsx";

# Demo

This page demonstrates the Checkbox component with various configurations and examples.

## Basic Checkbox

A simple checkbox with a label.

```jsx
import BasicCheckbox from "@/src/components/sharedComponents/BasicCheckbox";
import { useState } from "react";

const BasicCheckboxDemo = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (updatedValue, checkboxValue, event) => {
    setSelectedOptions(updatedValue);
  };

  return (
    <BasicCheckbox
      label="Option 1"
      value="option1"
      selected={selectedOptions}
      onChange={handleSelect}
    />
  );
};
```

<BasicCheckbox
label="Option 1"
value="option1"
selected={['option1']}
/>
