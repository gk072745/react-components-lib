# Range

A flexible and customizable dual-thumb range slider component that allows users to select a range of values between a minimum and maximum.

## Features

- **Dual Thumb Control**: Two draggable thumbs for selecting min and max values
- **Customizable Styling**: Full control over colors, sizes, and appearance
- **Keyboard Navigation**: Accessible keyboard controls with arrow keys
- **Touch Support**: Mobile-friendly touch interactions
- **Step Control**: Configurable step increments for precise value selection
- **Label Support**: Optional labels and thumb labels for better UX
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: ARIA attributes and screen reader support

## Use Cases

- **Price Range Filters**: E-commerce product filtering
- **Date Range Selection**: Calendar and booking applications
- **Age Range Selection**: User profile and demographic forms
- **Rating Systems**: Multi-point rating scales
- **Data Visualization**: Interactive charts and graphs
- **Form Controls**: Any input requiring range selection

## Key Features

### Dual Thumb Range Selection

Select both minimum and maximum values with intuitive drag interactions.

### Customizable Appearance

- **Sizes**: xs, sm, md, lg, xl
- **Colors**: Custom track, thumb, and fill colors
- **Labels**: Optional labels and thumb labels
- **Styling**: Full CSS customization support

### Interactive Controls

- **Mouse/Touch**: Drag thumbs to adjust values
- **Keyboard**: Arrow keys for precise control
- **Click**: Click on track to jump to position
- **Step Control**: Configurable step increments

### Accessibility

- **ARIA Support**: Proper ARIA attributes for screen readers
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Clear focus indicators
- **Screen Reader**: Descriptive labels and values

## Basic Usage

```jsx
import BasicRange from "../components/sharedComponents/BasicRange";

const [rangeValues, setRangeValues] = useState([20, 80]);

<BasicRange
  value={rangeValues}
  onChange={setRangeValues}
  min={0}
  max={100}
  label="Select Range"
/>;
```

## Customization

The BasicRange component offers extensive customization options:

- **Visual**: Colors, sizes, and styling
- **Behavior**: Step increments, disabled states
- **Labels**: Text labels and thumb labels
- **Accessibility**: ARIA attributes and keyboard controls

## Browser Support

- Modern browsers with ES6+ support
- Touch devices with touch event support
- Screen readers with ARIA support
