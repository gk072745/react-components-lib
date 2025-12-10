import {
ToastMount,
BasicToastTypesDemo,
PositionDemo,
OffsetExamplesDemo,
TimeoutExamplesDemo,
IndependentToastsDemo,
ActionsDemo,
} from "@site/src/demoPages/ToastDemo.jsx";

# Demo

This page demonstrates the Toast component with various configurations and examples.

**Note:** The `<ToastMount />` component must be included once in your app to render toast notifications. The hook uses React 18's `useSyncExternalStore` for efficient state management and supports multiple independent toasts at different positions.

## Demo 1: Basic Toast Types

### Code Example

```jsx
import React from 'react';
import { useToast } from '../customHooks/useToast';
import OToast from '../components/sharedComponents/BasicToast';

const BasicToastExample = () => {
  const { success, error, warning, info } = useToast();

  return (
    <>
      <OToast />
      <div>
        <button onClick={() => success('Saved successfully!')}>Success</button>
        <button
          onClick={() =>
            error('Something went wrong', {
              secondaryMessage: 'Please try again',
            })
          }
        >
          Error
        </button>
        <button onClick={() => warning('Be careful...', { timeout: 3000 })}>Warning</button>
        <button onClick={() => info('Just FYI')}>Info</button>
      </div>
    </>
  );
};
```

### Interactive Demo

<ToastMount />
<BasicToastTypesDemo />

## Demo 2: Different Positions

### Code Example

```jsx
import React from 'react';
import { useToast } from '../customHooks/useToast';
import OToast from '../components/sharedComponents/BasicToast';

const PositionExample = () => {
  const { info, setPosition } = useToast();

  return (
    <>
      <OToast />
      <div>
        <button
          onClick={() => {
            setPosition('top-left');
            info('Position set to top-left');
          }}
        >
          Top-Left
        </button>
        <button
          onClick={() => {
            setPosition('top');
            info('Position set to top');
          }}
        >
          Top
        </button>
        <button
          onClick={() => {
            setPosition('top-right');
            info('Position set to top-right');
          }}
        >
          Top-Right
        </button>
        <button
          onClick={() => {
            setPosition('bottom-left');
            info('Position set to bottom-left');
          }}
        >
          Bottom-Left
        </button>
        <button
          onClick={() => {
            setPosition('bottom');
            info('Position set to bottom');
          }}
        >
          Bottom
        </button>
        <button
          onClick={() => {
            setPosition('bottom-right');
            info('Position set to bottom-right');
          }}
        >
          Bottom-Right
        </button>
      </div>
    </>
  );
};
```

### Interactive Demo

<PositionDemo />

## Demo 3: Offset Examples

### Code Example

```jsx
import React from 'react';
import { useToast } from '../customHooks/useToast';
import OToast from '../components/sharedComponents/BasicToast';

const OffsetExample = () => {
  const { info, setPosition, setOffset } = useToast();

  return (
    <>
      <OToast />
      <div>
        <button
          onClick={() => {
            setPosition('top-left');
            setOffset(1, 1);
            info('Top-Left: 1rem from top, 1rem from left', {
              timeout: 3000,
              position: 'top-left',
            });
          }}
        >
          Top-Left (1,1)
        </button>
        <button
          onClick={() => {
            setPosition('top');
            setOffset(2, 0);
            info('Top: 2rem from top, centered', {
              timeout: 3000,
              position: 'top',
            });
          }}
        >
          Top (2,0)
        </button>
        <button
          onClick={() => {
            setPosition('bottom-right');
            setOffset(3, 2);
            info('Bottom-Right: 3rem from bottom, 2rem from right', {
              timeout: 3000,
              position: 'bottom-right',
            });
          }}
        >
          Bottom-Right (3,2)
        </button>
      </div>
    </>
  );
};
```

### Interactive Demo

<OffsetExamplesDemo />

## Demo 4: Timeout Examples

### Code Example

```jsx
import React from 'react';
import { useToast } from '../customHooks/useToast';
import OToast from '../components/sharedComponents/BasicToast';

const TimeoutExample = () => {
  const { info, setDefaultTimeout, defaultConfig } = useToast();

  return (
    <>
      <OToast />
      <div>
        <button
          onClick={() => {
            setDefaultTimeout(1000);
            info('This toast will hide in 1 second', {
              timeout: 1000,
              position: defaultConfig.position,
            });
          }}
        >
          Timeout 1s
        </button>
        <button
          onClick={() => {
            setDefaultTimeout(5000);
            info('This toast will hide in 5 seconds', {
              timeout: 5000,
              position: defaultConfig.position,
            });
          }}
        >
          Timeout 5s
        </button>
        <button
          onClick={() => {
            setDefaultTimeout(10000);
            info('This toast will hide in 10 seconds', {
              timeout: 10000,
              position: defaultConfig.position,
            });
          }}
        >
          Timeout 10s
        </button>
      </div>
    </>
  );
};
```

### Interactive Demo

<TimeoutExamplesDemo />

## Demo 5: Independent Toasts

### Code Example

```jsx
import React from 'react';
import { useToast } from '../customHooks/useToast';
import OToast from '../components/sharedComponents/BasicToast';

const IndependentToastsExample = () => {
  const { success, error, warning, info } = useToast();

  const showAll = () => {
    success('Success in top-left', {
      position: 'top-left',
      timeout: 4000,
    });
    error('Error in top-right', {
      position: 'top-right',
      timeout: 6000,
    });
    warning('Warning in bottom-left', {
      position: 'bottom-left',
      timeout: 3000,
    });
    info('Info in bottom-right', {
      position: 'bottom-right',
      timeout: 5000,
    });
  };

  return (
    <>
      <OToast />
      <div>
        <button onClick={showAll}>Show All Positions</button>
        <button
          onClick={() => {
            success('Quick success (2s)', { timeout: 2000 });
            warning('Slow warning (8s)', { timeout: 8000 });
          }}
        >
          Different Timeouts
        </button>
      </div>
    </>
  );
};
```

### Interactive Demo

<IndependentToastsDemo />

## Demo 6: Actions

### Code Example

```jsx
import React from 'react';
import { useToast } from '../customHooks/useToast';
import OToast from '../components/sharedComponents/BasicToast';

const ActionsExample = () => {
  const { clearAll } = useToast();

  return (
    <>
      <OToast />
      <div>
        <button onClick={clearAll}>Clear All</button>
      </div>
    </>
  );
};
```

### Interactive Demo

<ActionsDemo />
