# API

## Props

| Prop            | Type                                                                  | Default     | Required | Description                                    |
| --------------- | --------------------------------------------------------------------- | ----------- | -------- | ---------------------------------------------- |
| `size`          | `number`                                                              | `40`        | No       | Loader diameter in pixels                      |
| `width`         | `number`                                                              | `4`         | No       | Stroke width of the SVG spinner                |
| `variant`       | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'default'` | No       | Color variant of the loader                    |
| `isLocalLoader` | `boolean`                                                             | `true`      | No       | Relative (true) or fixed full-screen (false)   |
| `src`           | `string`                                                              | `''`        | No       | Optional custom image source                    |
| `className`     | `string`                                                              | `''`        | No       | Additional CSS classes                         |
| `style`         | `object`                                                              | `{}`        | No       | Inline styles for container                    |
| `children`      | `node`                                                                | `null`      | No       | Custom loader content (overrides default SVG/img) |

## Component Structure

The component consists of:

- **Wrapper**: Container element with positioning and background
- **SVG Loader**: Default animated circular spinner (when `src` is not provided)
- **Image Loader**: Custom image loader (when `src` is provided)
- **Custom Children**: Completely custom content (when `children` is provided)

## Variant Types

| Variant   | Description                    |
| --------- | ------------------------------ |
| `default` | Default black color (default)  |
| `primary` | Primary blue color             |
| `success` | Green color for success states |
| `warning` | Yellow color for warnings      |
| `danger`  | Red color for errors            |
| `info`    | Cyan color for information      |

## Positioning Modes

| Mode              | Description                                    |
| ----------------- | ---------------------------------------------- |
| `isLocalLoader={true}`  | Relative positioning within parent container   |
| `isLocalLoader={false}` | Fixed positioning covering entire viewport     |

## Usage Examples

### Basic Local Loader

```jsx
import Loader from "../components/sharedComponents/Loader";

<div style={{ position: "relative", height: 150 }}>
  <Loader />
</div>
```

### With Variant

```jsx
<Loader variant="success" size={50} />
```

### Full-screen Overlay

```jsx
<Loader isLocalLoader={false} variant="primary" size={60} />
```

### Custom Image Loader

```jsx
<Loader
  src="/path/to/loader.gif"
  size={60}
  isLocalLoader={true}
/>
```

### Custom Size and Width

```jsx
<Loader size={50} width={6} variant="primary" />
```

### Custom Children

```jsx
<Loader isLocalLoader={true}>
  <div>Custom loading content</div>
</Loader>
```

## Styling

The component uses:

- **Background**: Semi-transparent white overlay (`rgba(255, 255, 255, 0.75)`) for full-screen mode
- **Positioning**: Fixed for full-screen, relative for local
- **Z-index**: 9999 for full-screen overlay
- **Animations**: Rotating and dashing animations for SVG spinner
- **Colors**: Variant-specific colors for the spinner arc

## Accessibility

The component includes several accessibility features:

- **Reduced Motion**: Respects `prefers-reduced-motion` by disabling animations
- **Focus Styles**: Visible focus outline for keyboard navigation
- **User Select**: Prevents text selection during loading
- **Pointer Events**: Captures all pointer events in full-screen mode
