# API

## Props

| Prop                 | Type                                                                  | Default     | Required | Description                                    |
| -------------------- | --------------------------------------------------------------------- | ----------- | -------- | ---------------------------------------------- |
| `width`              | `string`                                                              | `'20rem'`   | No       | App bar width                                   |
| `height`             | `string`                                                              | `'100%'`    | No       | App bar height                                  |
| `elevation`          | `boolean`                                                             | `true`      | No       | Shadow/elevation effect                         |
| `floating`           | `boolean`                                                             | `true`      | No       | Absolute positioning                            |
| `sticky`             | `boolean`                                                             | `true`      | No       | Fixed position at top                           |
| `logo`                | `string`                                                              | `''`        | No       | Logo URL or inline SVG string                   |
| `roundedLogo`        | `boolean`                                                             | `false`     | No       | Circular logo wrapper                           |
| `title`               | `string`                                                              | `''`        | No       | Title text                                      |
| `showCloseButton`     | `boolean`                                                             | `true`      | No       | Show close button                               |
| `modelValue`          | `boolean`                                                             | `false`     | No       | Visibility state (controlled)                  |
| `persistIconsOnHide`  | `boolean`                                                             | `true`      | No       | Keep icons visible when collapsed               |
| `expandOnHover`       | `boolean`                                                             | `false`     | No       | Expand on hover (when collapsed)                |
| `expandOnClick`       | `boolean`                                                             | `true`      | No       | Expand on click on container                    |
| `overlay`             | `boolean`                                                             | `true`      | No       | Show overlay backdrop when open                 |
| `position`            | `'left' \| 'right'`                                                    | `'left'`    | No       | Left or right position                          |
| `items`               | `array`                                                               | `[]`        | No       | Navigation items (supports nesting)             |
| `activeItem`          | `string`                                                              | `''`        | No       | Currently active item value                     |
| `showChevron`         | `boolean`                                                             | `true`      | No       | Show chevron for expandable items               |
| `multiExpand`         | `boolean`                                                             | `true`      | No       | Allow multiple expanded branches                |
| `prepend`             | `function`                                                            | -           | No       | Render prop for header area                     |
| `content`             | `function`                                                            | -           | No       | Render prop for content list                    |
| `append`              | `function`                                                            | -           | No       | Render prop for footer area                     |
| `className`            | `string`                                                              | `''`        | No       | Additional CSS classes                          |
| `style`               | `object`                                                              | `{}`        | No       | Inline styles for container                     |

## Event Handlers

### onLogoClick

Called when the logo is clicked.

**Signature:**
```typescript
onLogoClick: () => void
```

### onCloseClick

Called when the close button is clicked.

**Signature:**
```typescript
onCloseClick: () => void
```

### onTitleClick

Called when the title is clicked.

**Signature:**
```typescript
onTitleClick: () => void
```

### onModelValueChange

Called when the visibility state changes.

**Signature:**
```typescript
onModelValueChange: (visible: boolean) => void
```

**Parameters:**
- `visible`: The new visibility state

### onActiveItemChange

Called when the active item changes.

**Signature:**
```typescript
onActiveItemChange: (value: string) => void
```

**Parameters:**
- `value`: The value of the newly active item

## Render Props

### prepend

Render function for the header area (logo, title, close button).

**Signature:**
```typescript
prepend: ({ handleLogoClick, handleTitleClick, handleCloseClick }: { 
  handleLogoClick: () => void,
  handleTitleClick: () => void,
  handleCloseClick: () => void
}) => ReactNode
```

### content

Render function for the navigation items list.

**Signature:**
```typescript
content: ({ iterateItems, handleItemClick }: {
  iterateItems: Item[],
  handleItemClick: (item: Item) => void
}) => ReactNode
```

### append

Render function for the footer area.

**Signature:**
```typescript
append: () => ReactNode
```

## Item Shape

Navigation items can be flat or nested to any depth:

```typescript
interface Item {
  label: string;        // Required: Display text
  value?: string;       // Optional: Unique identifier
  icon?: string;       // Optional: Icon URL or inline SVG string
  children?: Item[];    // Optional: Nested items
}
```

## Position Types

| Position | Description                    |
| -------- | ------------------------------ |
| `left`   | Positioned on the left (default) |
| `right`  | Positioned on the right        |

## Component Structure

The component consists of:

- **Overlay**: Semi-transparent backdrop (when `overlay` is true)
- **Container**: Main app bar wrapper
- **Prepend**: Header area with logo, title, and close button
- **Content**: Scrollable navigation items list
- **Append**: Footer area (when provided)

## Usage Examples

### Basic Usage

```jsx
import VerticalAppBar from "../components/sharedComponents/VerticalAppBar";

const [open, setOpen] = useState(false);

<VerticalAppBar
  modelValue={open}
  onModelValueChange={setOpen}
  title="Navigation"
/>
```

### With Logo and Items

```jsx
const logoSvg = '<svg>...</svg>';

<VerticalAppBar
  modelValue={open}
  onModelValueChange={setOpen}
  title="My App"
  logo={logoSvg}
  roundedLogo={true}
  items={navigationItems}
  activeItem={active}
  onActiveItemChange={setActive}
/>
```

### With Nested Items

```jsx
const nestedItems = [
  {
    label: "Content",
    value: "content",
    children: [
      { label: "Posts", value: "posts" },
      { label: "Pages", value: "pages" },
    ],
  },
];

<VerticalAppBar
  modelValue={open}
  onModelValueChange={setOpen}
  items={nestedItems}
  multiExpand={true}
/>
```

### Right Position

```jsx
<VerticalAppBar
  modelValue={open}
  onModelValueChange={setOpen}
  position="right"
  width="22rem"
/>
```

### With Custom Styling

```jsx
<VerticalAppBar
  modelValue={open}
  onModelValueChange={setOpen}
  style={{
    backgroundColor: "#34495e",
  }}
  width="250px"
/>
```

## Styling

The component uses:

- **Grid Layout**: CSS Grid for flexible layout (header, content, footer)
- **Transitions**: 0.3s ease transitions for smooth animations
- **Background**: Light gray (`#f2f2f2`) by default
- **Elevation**: Box shadow when `elevation` is true
- **Positioning**: Fixed or absolute based on `sticky` and `floating` props
- **Width**: Controlled via `width` prop (default: `20rem`)

## Accessibility

The component includes several accessibility features:

- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Focus Management**: Proper focus handling within the app bar
- **ARIA Support**: Can be enhanced with ARIA attributes
- **Click Outside**: Overlay click closes app bar for better UX
- **Smooth Transitions**: Hardware-accelerated animations
