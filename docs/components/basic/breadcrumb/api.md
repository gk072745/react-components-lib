# API

## Props

| Prop          | Type                                                    | Default     | Description                               |
| ------------- | ------------------------------------------------------- | ----------- | ----------------------------------------- |
| `items`       | `array`                                                 | `[]`        | Array of breadcrumb items                 |
| `separator`   | `string \| element \| function \| { render: function }` | `"/"`       | Separator between breadcrumb items        |
| `gap`         | `string`                                                | `"0.5rem"`  | Gap between breadcrumb items              |
| `className`   | `string`                                                | `""`        | Additional CSS classes                    |
| `style`       | `object`                                                | `{}`        | Additional inline styles                  |
| `onItemClick` | `function`                                              | `undefined` | Custom click handler for breadcrumb items |

## Item Structure

Each item in the `items` array should have the following properties:

```jsx
{
  label: string,           // Required: Display text for the breadcrumb
  to: string | object,     // Optional: Navigation target (route or location)
  disabled: boolean        // Optional: Whether the item is clickable
}
```

## Events

| Event         | Parameters      | Description                             |
| ------------- | --------------- | --------------------------------------- |
| `onItemClick` | `(item, event)` | Fired when a breadcrumb item is clicked |

## Usage Examples

### Basic Usage

```jsx
import React from "react";
import BasicBreadCrumb from "../components/sharedComponents/BasicBreadCrumb";

const BasicBreadcrumbExample = () => {
  const breadcrumbItems = [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "Electronics", to: "/products/electronics" },
    { label: "Smartphones", to: "/products/electronics/smartphones" },
  ];

  return <BasicBreadCrumb items={breadcrumbItems} separator="/" />;
};
```

### Custom Separator

```jsx
import React from "react";
import BasicBreadCrumb from "../components/sharedComponents/BasicBreadCrumb";

const CustomSeparatorExample = () => {
  const items = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  // Custom separator as string
  const stringSeparator = " > ";

  // Custom separator as element
  const elementSeparator = <span style={{ color: "#666" }}>→</span>;

  // Custom separator as function
  const functionSeparator = () => <span style={{ color: "#999" }}>•</span>;

  // Custom separator with render method
  const objectSeparator = {
    render: () => <span style={{ color: "#ccc" }}>|</span>,
  };

  return (
    <div>
      <BasicBreadCrumb items={items} separator={stringSeparator} />
      <BasicBreadCrumb items={items} separator={elementSeparator} />
      <BasicBreadCrumb items={items} separator={functionSeparator} />
      <BasicBreadCrumb items={items} separator={objectSeparator} />
    </div>
  );
};
```

### Custom Click Handler

```jsx
import React from "react";
import BasicBreadCrumb from "../components/sharedComponents/BasicBreadCrumb";

const CustomClickExample = () => {
  const items = [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "Electronics", to: "/products/electronics" },
  ];

  const handleItemClick = (item, event) => {
    event.preventDefault();

    // Custom navigation logic
    if (item.to === "/") {
      console.log("Navigating to home");
    } else if (item.to === "/products") {
      console.log("Navigating to products");
    } else {
      console.log("Navigating to:", item.to);
    }

    // You could also use a custom router here
    // customRouter.push(item.to);
  };

  return (
    <BasicBreadCrumb
      items={items}
      onItemClick={handleItemClick}
      separator=" > "
    />
  );
};
```

### Disabled Items

```jsx
import React from "react";
import BasicBreadCrumb from "../components/sharedComponents/BasicBreadCrumb";

const DisabledItemsExample = () => {
  const items = [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "Electronics", to: "/products/electronics", disabled: true },
    { label: "Smartphones", to: "/products/electronics/smartphones" },
  ];

  return <BasicBreadCrumb items={items} separator=" > " gap="1rem" />;
};
```

### Custom Styling

```jsx
import React from "react";
import BasicBreadCrumb from "../components/sharedComponents/BasicBreadCrumb";

const CustomStylingExample = () => {
  const items = [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "Electronics", to: "/products/electronics" },
  ];

  const customStyle = {
    backgroundColor: "#f8f9fa",
    padding: "1rem",
    borderRadius: "8px",
    border: "1px solid #e9ecef",
  };

  return (
    <BasicBreadCrumb
      items={items}
      separator=" > "
      style={customStyle}
      className="custom-breadcrumb"
    />
  );
};
```
