# API

## BasicMenu Component

The main menu component that provides dropdown menu functionality with flexible positioning, trigger types, and portal rendering.

### Props

| Prop                  | Type                 | Default      | Required | Description                                      |
| --------------------- | -------------------- | ------------ | -------- | ------------------------------------------------ |
| `trigger`             | `ReactNode`          | -            | Yes      | The element that triggers the menu               |
| `children`            | `ReactNode`          | -            | Yes      | The menu content to display                      |
| `triggerType`         | `'click' \| 'hover'` | `'click'`    | No       | How the menu is triggered                        |
| `placement`           | `string`             | `'bottom'`   | No       | Placement of the menu relative to trigger        |
| `offset`              | `[number, number]`   | `[0, 0.125]` | No       | Offset in rem units [x, y] from trigger          |
| `closeOnOutsideClick` | `boolean`            | `true`       | No       | Whether to close menu when clicking outside      |
| `closeOnEsc`          | `boolean`            | `true`       | No       | Whether to close menu when pressing ESC key      |
| `width`               | `string \| number`   | `null`       | No       | Custom width for the menu (px or string)         |
| `matchTriggerWidth`   | `boolean`            | `true`       | No       | Whether to match the menu width to trigger width |
| `className`           | `string`             | `''`         | No       | Additional CSS classes                           |
| `onOpen`              | `function`           | -            | No       | Callback when menu opens                         |
| `onClose`             | `function`           | -            | No       | Callback when menu closes                        |
| `ref`                 | `function \| object` | -            | No       | Ref object to access menu methods                |

### Placement Options

The `placement` prop accepts the following values:

- `'top'`: Above trigger, centered
- `'bottom'`: Below trigger, centered (default)
- `'left'`: Left of trigger, centered
- `'right'`: Right of trigger, centered
- `'top-start'`: Above trigger, aligned to start
- `'top-end'`: Above trigger, aligned to end
- `'bottom-start'`: Below trigger, aligned to start
- `'bottom-end'`: Below trigger, aligned to end
- `'left-start'`: Left of trigger, aligned to start
- `'left-center'`: Left of trigger, centered
- `'left-end'`: Left of trigger, aligned to end
- `'right-start'`: Right of trigger, aligned to start
- `'right-center'`: Right of trigger, centered
- `'right-end'`: Right of trigger, aligned to end

### Trigger Types

#### Click Trigger (`triggerType="click"`)

- Menu opens/closes on click
- Toggles on repeated clicks
- Closes on outside click (if enabled)
- Closes on ESC key (if enabled)

#### Hover Trigger (`triggerType="hover"`)

- Menu opens on mouse enter
- Menu closes on mouse leave (with 100ms delay)
- Stays open when hovering over menu content
- Closes on outside click (if enabled)
- Closes on ESC key (if enabled)

### Event Handlers

#### onOpen

Callback function that is called when the menu opens.

**Signature:**

```js
onOpen: () => void
```

#### onClose

Callback function that is called when the menu closes.

**Signature:**

```js
onClose: () => void
```

### Ref API

The component exposes methods through the ref prop:

- `isOpen` (`boolean`): Current open state
- `openMenu()`: Open the menu programmatically
- `closeMenu()`: Close the menu programmatically
- `toggleMenu()`: Toggle the menu open/closed
- `actualPlacement` (`string`): The actual placement after collision detection

### Positioning Features

#### Automatic Collision Detection

The component automatically detects when the menu would overflow the viewport and flips the placement:

- `bottom` → `top` if bottom collision
- `top` → `bottom` if top collision
- `right` → `left` if right collision
- `left` → `right` if left collision

#### Viewport Boundary Adjustment

The menu position is automatically adjusted to stay within viewport bounds with an 8px margin.

#### Width Options

- **Custom Width**: Set `width` prop to a number (px) or string (e.g., `"300px"`, `"50%"`)
- **Match Trigger Width**: Set `matchTriggerWidth={true}` (default) to match trigger element width
- **Auto Width**: Set `matchTriggerWidth={false}` and `width={null}` for content-based width

### Offset

The `offset` prop accepts an array of two numbers `[x, y]` in rem units:

- First value: Horizontal offset (positive = right, negative = left)
- Second value: Vertical offset (positive = down, negative = up)

Default: `[0, 0.125]` (0.125rem = 2px vertical offset)

### Portal Rendering

The menu is rendered using React Portal to `document.body`, ensuring:

- Proper z-index stacking
- No overflow issues with parent containers
- Correct positioning relative to viewport

### Accessibility

The component provides:

- Keyboard support (ESC to close)
- Proper event handling
- Focus management
- Click outside detection
- Screen reader compatible structure
