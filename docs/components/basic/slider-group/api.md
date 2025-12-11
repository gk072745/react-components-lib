# API

## Props

| Prop             | Type                                                                  | Default                    | Required | Description                                    |
| ---------------- | --------------------------------------------------------------------- | -------------------------- | -------- | ---------------------------------------------- |
| `arrowsPosition` | `'top' \| 'bottom' \| 'center' \| 'center-outside'`                    | `'bottom'`                 | No       | Position of navigation arrows                  |
| `showArrowsAlways` | `boolean`                                                             | `true`                     | No       | Keep arrows always visible                     |
| `showDots`       | `boolean`                                                             | `true`                     | No       | Show dot navigation indicators                 |
| `items`          | `array`                                                               | `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]` | No       | Data array for cards                            |
| `canSelectCard`  | `boolean`                                                             | `true`                     | No       | Enable card selection on click                 |
| `selectedCard`   | `number`                                                              | `-1`                       | No       | Initially selected card index (1-based)         |
| `cardWidth`      | `number`                                                              | `20`                       | No       | Card width in rem units                         |
| `className`      | `string`                                                              | `''`                       | No       | Additional CSS classes                          |
| `style`          | `object`                                                              | `{}`                       | No       | Inline styles for container                     |
| `onCardClick`    | `function`                                                            | -                          | No       | Callback invoked when a card is clicked         |
| `children`       | `function`                                                            | -                          | No       | Render function for custom card content         |

## Event Handlers

### onCardClick

Called when a card is clicked.

**Signature:**
```typescript
onCardClick: (item: any) => void
```

**Parameters:**
- `item`: The item from the `items` array that was clicked

**Usage:**
```jsx
<SliderGroup
  items={items}
  onCardClick={(item) => {
    console.log('Card clicked:', item);
  }}
/>
```

## Children Render Function

The `children` prop accepts a render function that receives an object with:

- `item`: The current item from the `items` array
- `index`: The zero-based index of the item
- `isSelected`: Boolean indicating if the card is currently selected

**Signature:**
```typescript
children: ({ item, index, isSelected }: { item: any, index: number, isSelected: boolean }) => ReactNode
```

**Usage:**
```jsx
<SliderGroup items={items}>
  {({ item, index, isSelected }) => (
    <div>
      <h3>{item.title}</h3>
      {isSelected && <span>Selected</span>}
    </div>
  )}
</SliderGroup>
```

## Arrow Positions

| Position          | Description                                    |
| ----------------- | ---------------------------------------------- |
| `top`             | Arrows and dots at the top of the slider       |
| `bottom`          | Arrows and dots at the bottom (default)        |
| `center`          | Arrows centered over the cards (no dots)       |
| `center-outside`  | Arrows outside the cards area on left/right    |

## Component Structure

The component consists of:

- **Container**: Main wrapper with grid layout
- **Arrows**: Navigation buttons (prev/next)
- **Dots**: Navigation indicators (when enabled)
- **Items Container**: Scrollable container for cards
- **Cards**: Individual card elements

## Usage Examples

### Basic Usage

```jsx
import SliderGroup from "../components/sharedComponents/SliderGroup";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

<SliderGroup
  items={items}
  arrowsPosition="bottom"
  showArrowsAlways={true}
  showDots={true}
/>
```

### With Custom Content

```jsx
<SliderGroup
  items={items}
  cardWidth={18}
  onCardClick={(item) => console.log(item)}
>
  {({ item, index, isSelected }) => (
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      {isSelected && <span>Selected</span>}
    </div>
  )}
</SliderGroup>
```

### Center Arrows

```jsx
<SliderGroup
  items={items}
  arrowsPosition="center"
  showArrowsAlways={false}
  showDots={false}
/>
```

### Non-Selectable Cards

```jsx
<SliderGroup
  items={items}
  canSelectCard={false}
  onCardClick={(item) => console.log('Read-only click:', item)}
/>
```

## Styling

The component uses:

- **Grid Layout**: CSS Grid for flexible positioning
- **Smooth Scrolling**: `scroll-behavior: smooth` for card navigation
- **Transitions**: 0.3s ease transitions for animations
- **Card Styling**: Default white background with shadow
- **Selected State**: Border and background color change
- **Hover Effects**: Scale and shadow changes on hover

## Accessibility

The component includes several accessibility features:

- **Keyboard Navigation**: Arrow buttons are keyboard accessible
- **Focus Management**: Proper focus handling for navigation
- **Disabled States**: Visual feedback for disabled buttons
- **ARIA Support**: Can be enhanced with ARIA attributes
- **Smooth Scrolling**: Respects user preferences for animations
