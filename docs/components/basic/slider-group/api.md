# API

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `arrowsPosition` | one of `top`, `bottom`, `center`, `center-outside` | `bottom` | Where to place navigation arrows |
| `showArrowsAlways` | boolean | `true` | Keep arrows visible (otherwise show on hover/focus) |
| `showDots` | boolean | `true` | Show dot navigation below/above |
| `items` | array | `[1..10]` | Data array for cards |
| `canSelectCard` | boolean | `true` | Toggle whether clicking a card marks it selected |
| `selectedCard` | number | `-1` | Initially selected card index (1-based), `-1` for none |
| `cardWidth` | number | `20` | Card width in rem units |
| `className` | string | `''` | Additional CSS classes |
| `style` | object | `{}` | Inline styles |
| `onCardClick` | function `(item) => void` | - | Invoked with clicked item |
| `children` | function `({ item, index, isSelected }) => ReactNode` | - | Custom render for each card |

## Notes

- Dots are auto-calculated based on content width and container width.
- Selection applies a `selected` class to the card for styling.
- `center-outside` renders arrows outside the scrolling area.

## Usage Example

```jsx
<SliderGroup
  items={[1,2,3,4,5]}
  arrowsPosition="bottom"
  showArrowsAlways
  showDots
  canSelectCard
  cardWidth={15}
/>
```
