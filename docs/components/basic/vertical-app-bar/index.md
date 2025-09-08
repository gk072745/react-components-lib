# Vertical App Bar

A configurable vertical application bar with logo/title area, navigation items, nested menus, left/right positioning, overlays, and smart expand behavior.

## Features

- **Layout**: Left or right, overlay or inline, sticky and floating options
- **Branding**: Logo (inline SVG or image), rounded option, title with custom color
- **Navigation**: Flat or nested items, chevrons, active state, multi-expand modes
- **Behavior**: Expand on hover/click, persist icons when collapsed
- **Styling**: Width, background, elevation, transitions

## Basic Usage

```jsx
import VerticalAppBar from '../components/sharedComponents/VerticalAppBar';

export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <VerticalAppBar modelValue={open} onModelValueChange={setOpen} title="Navigation" />
      <button onClick={() => setOpen(!open)}>{open ? 'Close' : 'Open'} App Bar</button>
    </>
  );
}
```

[API Reference →](./api)

[View Code →](./code)
