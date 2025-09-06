# API

## Props

| Prop            | Type      | Default                       | Description                                      |
| --------------- | --------- | ----------------------------- | ------------------------------------------------ |
| `size`          | `number`  | `40`                          | Loader diameter in pixels                        |
| `width`         | `number`  | `4`                           | Stroke width of the SVG spinner                  |
| `bgColor`       | `string`  | `rgba(255, 255, 255, 0.75)`   | Overlay background color                         |
| `fillColor`     | `string`  | `#000000`                     | Spinner active stroke color                      |
| `emptyColor`    | `string`  | `#e0e0e0`                     | Spinner track stroke color                       |
| `isLocalLoader` | `boolean` | `true`                        | Relative (true) or fixed full-screen (false)     |
| `src`           | `string`  | `''`                          | Optional custom image source                      |
| `className`     | `string`  | `''`                          | Additional CSS classes                           |
| `style`         | `object`  | `{}`                          | Inline styles for container                       |
| `children`      | `node`    | `null`                        | Custom loader content (overrides default SVG/img) |

## Notes

- When `src` is provided, the image is shown instead of the SVG spinner.
- When `isLocalLoader` is `false`, the loader is positioned fixed and covers the viewport.
- Respects prefers-reduced-motion by disabling spinner animations.

## Usage Examples

### Local Loader (default)

```jsx
<div style={{ position: 'relative', height: 150 }}>
  <Loader />
</div>
```

### Full-screen Overlay

```jsx
<Loader isLocalLoader={false} bgColor="rgba(0,0,0,0.7)" fillColor="#fff" />
```

### Custom Image Loader

```jsx
<Loader src="/src/assets/loader.gif" size={60} />
```

### Custom Colors and Width

```jsx
<Loader size={50} width={6} fillColor="#007bff" emptyColor="#e3f2fd" />
```
