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

## Demo 1: Basic Toast Types

### Code Example

```jsx
import { useToast } from '@/customHooks/useToast';

const BasicToastDemo = () => {
  const { success, error, warning, info } = useToast();
  
  return (
    <div className="toast-demo">
      <button onClick={() => success('Operation successful!')}>Success</button>
      <button onClick={() => error('Something went wrong')}>Error</button>
      <button onClick={() => warning('Please be careful')}>Warning</button>
      <button onClick={() => info('Just so you know')}>Info</button>
    </div>
  );
};
```

### Interactive Demo

<ToastMount />
<BasicToastTypesDemo />

## Demo 2: Different Positions

### Code Example

```jsx
import { useToast } from '@/customHooks/useToast';

const PositionDemo = () => {
  const { info, setPosition } = useToast();
  
  return (
    <div className="toast-demo">
      <button onClick={() => { setPosition('top-left'); info('Top Left'); }}>Top Left</button>
      <button onClick={() => { setPosition('top'); info('Top Center'); }}>Top Center</button>
      <button onClick={() => { setPosition('top-right'); info('Top Right'); }}>Top Right</button>
      <button onClick={() => { setPosition('bottom-left'); info('Bottom Left'); }}>Bottom Left</button>
      <button onClick={() => { setPosition('bottom'); info('Bottom Center'); }}>Bottom Center</button>
      <button onClick={() => { setPosition('bottom-right'); info('Bottom Right'); }}>Bottom Right</button>
    </div>
  );
};
```

### Interactive Demo

<PositionDemo />

## Demo 3: Offset Examples

### Code Example

```jsx
import { useToast } from '@/customHooks/useToast';

const OffsetDemo = () => {
  const { info, setPosition, setOffset } = useToast();
  
  return (
    <div className="toast-demo">
      <button onClick={() => { setPosition('top-left'); setOffset(1, 1); info('Top-Left: 1rem from top, 1rem from left'); }}>Top-Left (1,1)</button>
      <button onClick={() => { setPosition('top'); setOffset(2, 0); info('Top: 2rem from top, centered'); }}>Top (2,0)</button>
      <button onClick={() => { setPosition('bottom-right'); setOffset(3, 2); info('Bottom-Right: 3rem from bottom, 2rem from right'); }}>Bottom-Right (3,2)</button>
    </div>
  );
};
```

### Interactive Demo

<OffsetExamplesDemo />

## Demo 4: Timeout Examples

### Code Example

```jsx
import { useToast } from '@/customHooks/useToast';

const TimeoutDemo = () => {
  const { success, warning, info } = useToast();
  
  return (
    <div className="toast-demo">
      <button onClick={() => success('Quick success (2s)', { timeout: 2000 })}>2 Second</button>
      <button onClick={() => warning('Medium warning (5s)', { timeout: 5000 })}>5 Second</button>
      <button onClick={() => info('Long info (10s)', { timeout: 10000 })}>10 Second</button>
    </div>
  );
};
```

### Interactive Demo

<TimeoutExamplesDemo />

## Demo 5: Independent Toasts

### Code Example

```jsx
import { useToast } from '@/customHooks/useToast';

const MultipleToastsDemo = () => {
  const { success, error, warning, info } = useToast();
  
  const showAll = () => {
    success('Success in top-left', { position: 'top-left' });
    error('Error in top-right', { position: 'top-right' });
    warning('Warning in bottom-left', { position: 'bottom-left' });
    info('Info in bottom-right', { position: 'bottom-right' });
  };
  
  return (
    <div className="toast-demo">
      <button onClick={showAll}>Show All Positions</button>
    </div>
  );
};
```

### Interactive Demo

<IndependentToastsDemo />

## Demo 6: Actions

### Code Example

```jsx
import { useToast } from '@/customHooks/useToast';

const ActionsDemo = () => {
  const { clearAll } = useToast();
  
  return (
    <div className="toast-demo">
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
};
```

### Interactive Demo

<ActionsDemo />
