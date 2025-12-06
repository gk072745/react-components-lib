# API

## BasicPagination Component

The main pagination component that provides customizable pagination functionality with smart ellipsis handling and flexible navigation controls.

### Props

| Prop            | Type                              | Default     | Required | Description                                    |
| --------------- | --------------------------------- | ----------- | -------- | ---------------------------------------------- |
| `currentPage`   | `number`                          | `1`         | No       | Current active page number                     |
| `totalPages`    | `number`                          | -           | Yes      | Total number of pages                          |
| `totalVisible`  | `number`                          | `7`         | No       | Maximum number of visible page buttons         |
| `showFirstLast` | `boolean`                         | `true`      | No       | Whether to show first and last page buttons    |
| `showPrevNext`  | `boolean`                         | `true`      | No       | Whether to show previous and next page buttons |
| `disabled`      | `boolean`                         | `false`     | No       | Whether the pagination is disabled             |
| `size`          | `'small' \| 'default' \| 'large'` | `'default'` | No       | Size variant of the pagination                 |
| `rounded`       | `boolean`                         | `false`     | No       | Whether to use rounded button style            |
| `color`         | `'primary' \| 'secondary'`        | `'primary'` | No       | Color theme for active state                   |
| `className`     | `string`                          | `''`        | No       | Additional CSS classes                         |
| `onPageChange`  | `function`                        | -           | No       | Callback when page changes                     |
| `onFirst`       | `function`                        | -           | No       | Callback when first page button is clicked     |
| `onPrev`        | `function`                        | -           | No       | Callback when previous page button is clicked  |
| `onNext`        | `function`                        | -           | No       | Callback when next page button is clicked      |
| `onLast`        | `function`                        | -           | No       | Callback when last page button is clicked      |

### Event Handlers

#### onPageChange

Callback function that is called whenever the page changes.

**Signature:**

```js
onPageChange: (page) => void
```

**Parameters:**

- `page` (`number`): The new page number

#### onFirst

Callback function that is called when the first page button is clicked.

**Signature:**

```js
onFirst: (page) => void
```

**Parameters:**

- `page` (`number`): The page number (always 1)

#### onPrev

Callback function that is called when the previous page button is clicked.

**Signature:**

```js
onPrev: (page) => void
```

**Parameters:**

- `page` (`number`): The previous page number

#### onNext

Callback function that is called when the next page button is clicked.

**Signature:**

```js
onNext: (page) => void
```

**Parameters:**

- `page` (`number`): The next page number

#### onLast

Callback function that is called when the last page button is clicked.

**Signature:**

```js
onLast: (page) => void
```

**Parameters:**

- `page` (`number`): The last page number (equals totalPages)

### Size Variants

The pagination supports three size variants:

- `small`: Small size (2rem button height, 0.75rem font)
- `default`: Default size (2.5rem button height, 0.875rem font)
- `large`: Large size (3rem button height, 1rem font)

### Color Variants

The pagination supports two color variants:

- `primary`: Primary color theme (#1976d2) for active state
- `secondary`: Secondary color theme (#424242) for active state

### Smart Ellipsis

The component automatically handles ellipsis display when the number of pages exceeds `totalVisible`:

- Shows ellipsis (`...`) when there are gaps in the page range
- Always displays first and last page numbers when applicable
- Centers the current page in the visible range when possible

### Button States

The pagination buttons have the following states:

- **Active**: The current page button is highlighted with the selected color
- **Disabled**: First/prev buttons are disabled on page 1, next/last buttons are disabled on the last page
- **Hover**: Buttons show hover effects when not disabled
- **Focus**: Buttons have focus indicators for keyboard navigation

### Accessibility

The component provides:

- ARIA labels for all navigation buttons (`aria-label`)
- ARIA current state for the active page (`aria-current="page"`)
- ARIA disabled state for disabled buttons (`aria-disabled`)
- Keyboard navigation support (Tab, Enter, Space)
- Semantic HTML structure using `<nav>` element
- Screen reader compatible structure
