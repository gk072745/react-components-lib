# API

## Props

| Prop                  | Type        | Default | Description                              |
| --------------------- | ----------- | ------- | ---------------------------------------- |
| `children`            | `ReactNode` | -       | Content to display inside the popup      |
| `height`              | `number`    | `27.75` | Height of the popup in rem units         |
| `width`               | `number`    | `27.75` | Width of the popup in rem units          |
| `onPopupOutsideClick` | `function`  | -       | Callback when clicking outside the popup |

## Events

| Event                 | Parameters | Description                              |
| --------------------- | ---------- | ---------------------------------------- |
| `onPopupOutsideClick` | -          | Fired when user clicks outside the popup |

## Styling

The popup component uses CSS classes for styling:

- `.popup-component-wrapper` - Outer wrapper that handles outside clicks
- `.popup-component-container` - Inner container with the specified dimensions

## Usage Examples

### Basic Popup

```jsx
<BasicPopup>
  <div>Your content here</div>
</BasicPopup>
```

### Custom Size Popup

```jsx
<BasicPopup height={20} width={30}>
  <div>Larger popup content</div>
</BasicPopup>
```

### Popup with Outside Click Handler

```jsx
<BasicPopup onPopupOutsideClick={() => console.log("Outside clicked")}>
  <div>Click outside to close</div>
</BasicPopup>
```
