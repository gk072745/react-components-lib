import {
  BasicTypesDemo,
  PositionOverrideDemo,
  SecondaryMessagesDemo,
  PositionConfigDemo,
  OffsetConfigDemo,
  TimeoutConfigDemo,
  CustomMessagesDemo,
  PersistentDemo,
} from "@site/src/demoPages/SnackbarDemo.jsx";
import SnackbarDemo from "@site/src/demoPages/SnackbarDemo.jsx";

# Demo

This page demonstrates the BasicSnackbar component with various configurations and examples.

## Demo 1: Basic Snackbar Types

### Code Example

```jsx
import { useSnackbar } from '@/customHooks/useSnackbar';
import BasicSnackbar from '@/components/sharedComponents/BasicSnackbar';

const BasicTypesDemo = () => {
  const { success, error, warning, info } = useSnackbar();

  const showSuccess = () => {
    success("Operation completed successfully!");
  };

  const showError = () => {
    error("Something went wrong", {
      secondaryMessage: "Please try again later"
    });
  };

  const showWarning = () => {
    warning("This action cannot be undone", {
      secondaryMessage: "Please proceed with caution"
    });
  };

  const showInfo = () => {
    info("New update available", {
      secondaryMessage: "Click here to learn more"
    });
  };

  return (
    <div>
      <button onClick={showSuccess}>Show Success</button>
      <button onClick={showError}>Show Error</button>
      <button onClick={showWarning}>Show Warning</button>
      <button onClick={showInfo}>Show Info</button>
      <BasicSnackbar />
    </div>
  );
};
```

### Interactive Demo

<BasicTypesDemo />

## Demo 2: Position Override Examples

### Code Example

```jsx
const PositionOverrideDemo = () => {
  const { success, error, warning, info } = useSnackbar();

  const showTopRightSuccess = () => {
    success("Success message with top-right position!", {
      position: "top-right"
    });
  };

  const showTopLeftError = () => {
    error("Error message with top-left position!", {
      position: "top-left",
      secondaryMessage: "This error appears in top-left"
    });
  };

  return (
    <div>
      <button onClick={showTopRightSuccess}>Success (Top Right)</button>
      <button onClick={showTopLeftError}>Error (Top Left)</button>
      <BasicSnackbar />
    </div>
  );
};
```

### Interactive Demo

<PositionOverrideDemo />

## Demo 3: Secondary Messages

### Code Example

```jsx
const SecondaryMessagesDemo = () => {
  const { success, error, warning, info } = useSnackbar();

  return (
    <div>
      <button 
        onClick={() => success("File uploaded successfully!", { 
          secondaryMessage: "Your document has been processed and is ready for review." 
        })}
      >
        Success with Details
      </button>
      <button 
        onClick={() => error("Upload failed!", { 
          secondaryMessage: "Please check your internet connection and try again." 
        })}
      >
        Error with Details
      </button>
      <BasicSnackbar />
    </div>
  );
};
```

### Interactive Demo

<SecondaryMessagesDemo />

## Demo 4: Position Configuration

### Code Example

```jsx
const PositionConfigDemo = () => {
  const { success, setPosition } = useSnackbar();
  const [selectedPosition, setSelectedPosition] = useState("bottom");

  const positions = [
    { value: "top-left", label: "Top Left" },
    { value: "top", label: "Top Center" },
    { value: "top-right", label: "Top Right" },
    { value: "bottom-left", label: "Bottom Left" },
    { value: "bottom", label: "Bottom Center" },
    { value: "bottom-right", label: "Bottom Right" }
  ];

  const handlePositionChange = (position) => {
    setSelectedPosition(position);
    setPosition(position);
  };

  const showTestMessage = () => {
    success(`Test message in ${selectedPosition} position!`);
  };

  return (
    <div>
      <div>
        {positions.map((pos) => (
          <button
            key={pos.value}
            onClick={() => handlePositionChange(pos.value)}
          >
            {pos.label}
          </button>
        ))}
      </div>
      <button onClick={showTestMessage}>Test Current Position</button>
      <BasicSnackbar />
    </div>
  );
};
```

### Interactive Demo

<PositionConfigDemo />

## Demo 5: Offset Configuration

### Code Example

```jsx
const OffsetConfigDemo = () => {
  const { success, setOffset } = useSnackbar();
  const [xOffset, setXOffset] = useState(1);
  const [yOffset, setYOffset] = useState(1);

  const changeOffset = (x, y) => {
    setXOffset(x);
    setYOffset(y);
    setOffset(x, y);
  };

  const showTestMessage = () => {
    success(`Test message with offset (${xOffset}, ${yOffset})`);
  };

  return (
    <div>
      <div>
        <button onClick={() => changeOffset(1, 1)}>(1,1)</button>
        <button onClick={() => changeOffset(2, 2)}>(2,2)</button>
        <button onClick={() => changeOffset(3, 3)}>(3,3)</button>
      </div>
      <button onClick={showTestMessage}>Test Current Offset</button>
      <BasicSnackbar />
    </div>
  );
};
```

### Interactive Demo

<OffsetConfigDemo />

## Demo 6: Timeout Configuration

### Code Example

```jsx
const TimeoutConfigDemo = () => {
  const { success, setDefaultTimeout } = useSnackbar();
  const [timeoutValue, setTimeoutValue] = useState(4000);

  const changeTimeout = (timeout) => {
    setTimeoutValue(timeout);
    setDefaultTimeout(timeout);
  };

  const showTestMessage = () => {
    success(`Test message with ${timeoutValue}ms timeout`);
  };

  return (
    <div>
      <div>
        <button onClick={() => changeTimeout(2000)}>2s</button>
        <button onClick={() => changeTimeout(4000)}>4s</button>
        <button onClick={() => changeTimeout(6000)}>6s</button>
        <button onClick={() => changeTimeout(8000)}>8s</button>
      </div>
      <button onClick={showTestMessage}>Test Current Timeout</button>
      <BasicSnackbar />
    </div>
  );
};
```

### Interactive Demo

<TimeoutConfigDemo />

## Demo 7: Custom Messages

### Code Example

```jsx
const CustomMessagesDemo = () => {
  const { success, error, warning, info } = useSnackbar();
  const [customMessage, setCustomMessage] = useState("");
  const [customSecondaryMessage, setCustomSecondaryMessage] = useState("");
  const [customTimeout, setCustomTimeout] = useState(4000);

  const handleShowCustom = (type) => {
    const message = customMessage || `Custom ${type} message`;
    const secondaryMessage = customSecondaryMessage || null;
    
    switch (type) {
      case "success":
        success(message, { secondaryMessage, timeout: customTimeout });
        break;
      case "error":
        error(message, { secondaryMessage, timeout: customTimeout });
        break;
      // ... other cases
    }
  };

  return (
    <div>
      <input
        type="text"
        value={customMessage}
        onChange={(e) => setCustomMessage(e.target.value)}
        placeholder="Enter custom message..."
      />
      <input
        type="text"
        value={customSecondaryMessage}
        onChange={(e) => setCustomSecondaryMessage(e.target.value)}
        placeholder="Enter secondary message..."
      />
      <input
        type="number"
        value={customTimeout}
        onChange={(e) => setCustomTimeout(parseInt(e.target.value) || 4000)}
        min="1000"
        max="10000"
      />
      <div>
        <button onClick={() => handleShowCustom("success")}>Custom Success</button>
        <button onClick={() => handleShowCustom("error")}>Custom Error</button>
        <button onClick={() => handleShowCustom("warning")}>Custom Warning</button>
        <button onClick={() => handleShowCustom("info")}>Custom Info</button>
      </div>
      <BasicSnackbar />
    </div>
  );
};
```

### Interactive Demo

<CustomMessagesDemo />

## Demo 8: Persistent Snackbars

### Code Example

```jsx
const PersistentDemo = () => {
  const { error, warning } = useSnackbar();

  return (
    <div>
      <button 
        onClick={() => error("Critical error occurred!", { 
          isPersistent: true,
          secondaryMessage: "This error requires immediate attention and will not auto-dismiss." 
        })}
      >
        Persistent Error
      </button>
      <button 
        onClick={() => warning("Important notice!", { 
          isPersistent: true,
          secondaryMessage: "Please read this important information before proceeding." 
        })}
      >
        Persistent Warning
      </button>
      <BasicSnackbar />
    </div>
  );
};
```

### Interactive Demo

<PersistentDemo />

## Complete Demo

<SnackbarDemo />
