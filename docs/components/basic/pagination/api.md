# api

Complete API documentation for the BasicPagination component.

# Props

Required Props

| Prop | Type | Description |
|------|------|-------------|
| `totalPages` | `number` | Total number of pages |

Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `currentPage` | `number` | `1` | Current active page number |
| `totalVisible` | `number` | `7` | Maximum number of visible page buttons |
| `showFirstLast` | `boolean` | `true` | Show first and last page buttons |
| `showPrevNext` | `boolean` | `true` | Show previous and next page buttons |
| `disabled` | `boolean` | `false` | Disable all pagination controls |
| `size` | `'small' \| 'default' \| 'large'` | `'default'` | Size variant of the pagination |
| `rounded` | `boolean` | `false` | Use rounded button style |
| `color` | `'primary' \| 'secondary'` | `'primary'` | Color theme for active state |
| `className` | `string` | `''` | Additional CSS class name |

# Event Handlers

Required Event Handlers

| Handler | Type | Description |
|---------|------|-------------|
| `onPageChange` | `(page: number) => void` | Called when page changes |

Optional Event Handlers

| Handler | Type | Description |
|---------|------|-------------|
| `onFirst` | `(page: number) => void` | Called when first page button is clicked |
| `onPrev` | `(page: number) => void` | Called when previous page button is clicked |
| `onNext` | `(page: number) => void` | Called when next page button is clicked |
| `onLast` | `(page: number) => void` | Called when last page button is clicked |

# Examples

Basic Usage

```jsx
import BasicPagination from '@/components/sharedComponents/BasicPagination';
import { useState } from 'react';

const MyComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log('Page changed to:', page);
  };

  return (
    <BasicPagination
      currentPage={currentPage}
      totalPages={20}
      onPageChange={handlePageChange}
    />
  );
};
```

With All Event Handlers

```jsx
const handlePageChange = (page) => {
  console.log('Page changed to:', page);
};

const handleFirst = (page) => {
  console.log('First page clicked:', page);
};

const handlePrev = (page) => {
  console.log('Previous page clicked:', page);
};

const handleNext = (page) => {
  console.log('Next page clicked:', page);
};

const handleLast = (page) => {
  console.log('Last page clicked:', page);
};

<BasicPagination
  currentPage={currentPage}
  totalPages={20}
  onPageChange={handlePageChange}
  onFirst={handleFirst}
  onPrev={handlePrev}
  onNext={handleNext}
  onLast={handleLast}
/>
```

Size Variants

```jsx
// Small size
<BasicPagination
  currentPage={currentPage}
  totalPages={10}
  size="small"
  onPageChange={handlePageChange}
/>

// Default size
<BasicPagination
  currentPage={currentPage}
  totalPages={10}
  onPageChange={handlePageChange}
/>

// Large size
<BasicPagination
  currentPage={currentPage}
  totalPages={10}
  size="large"
  onPageChange={handlePageChange}
/>
```

Limited Visible Pages

```jsx
<BasicPagination
  currentPage={currentPage}
  totalPages={100}
  totalVisible={5}
  onPageChange={handlePageChange}
/>
```

Configuration Options

```jsx
// No first/last buttons
<BasicPagination
  currentPage={currentPage}
  totalPages={20}
  showFirstLast={false}
  onPageChange={handlePageChange}
/>

// No prev/next buttons
<BasicPagination
  currentPage={currentPage}
  totalPages={20}
  showPrevNext={false}
  onPageChange={handlePageChange}
/>

// Only page numbers
<BasicPagination
  currentPage={currentPage}
  totalPages={20}
  showFirstLast={false}
  showPrevNext={false}
  onPageChange={handlePageChange}
/>
```

Styling Options

```jsx
// Rounded buttons
<BasicPagination
  currentPage={currentPage}
  totalPages={15}
  rounded={true}
  onPageChange={handlePageChange}
/>

// Secondary color
<BasicPagination
  currentPage={currentPage}
  totalPages={15}
  color="secondary"
  onPageChange={handlePageChange}
/>
```

Disabled State

```jsx
<BasicPagination
  currentPage={currentPage}
  totalPages={20}
  disabled={true}
  onPageChange={handlePageChange}
/>
```

# Accessibility

The BasicPagination component includes comprehensive accessibility features:

- **ARIA Labels**: All buttons have descriptive `aria-label` attributes
- **ARIA Current**: The current page button has `aria-current="page"`
- **ARIA Disabled**: Disabled buttons have `aria-disabled` attributes
- **Keyboard Navigation**: Full keyboard support for all controls
- **Focus Management**: Proper focus handling and visual indicators
- **Screen Reader Support**: Semantic HTML structure for screen readers

# Styling

CSS Classes

| Class | Description |
|-------|-------------|
| `.pagination` | Main pagination container |
| `.pagination-button` | Individual button styling |
| `.pagination-button--icon` | Icon button styling |
| `.pagination-button--page` | Page number button styling |
| `.pagination-button--active` | Active page button styling |
| `.pagination-button--disabled` | Disabled button styling |
| `.pagination-button--rounded` | Rounded button styling |
| `.pagination-ellipsis` | Ellipsis indicator styling |

Size Modifiers

| Class | Description |
|-------|-------------|
| `.pagination--small` | Small size variant |
| `.pagination--large` | Large size variant |
| `.pagination-button--small` | Small button size |
| `.pagination-button--large` | Large button size |

Color Modifiers

| Class | Description |
|-------|-------------|
| `.pagination-button--primary` | Primary color theme |
| `.pagination-button--secondary` | Secondary color theme |

# Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

# Performance

The component is optimized for performance with:

- **Memoized Calculations**: Smart ellipsis logic is memoized
- **Callback Optimization**: Event handlers are properly memoized
- **Efficient Rendering**: Minimal re-renders with React 19 features
- **Memory Management**: Proper cleanup of event listeners

# TypeScript Support

The component includes full TypeScript support with proper type definitions for all props and event handlers.
