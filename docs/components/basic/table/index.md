# BasicTable

A powerful and flexible table component for displaying structured data with advanced features like sorting, pagination, and interactive functionality.

## Overview

The `BasicTable` component provides a comprehensive solution for displaying tabular data with built-in features for sorting, pagination, hover effects, and cell interactions. It's designed to handle large datasets efficiently while maintaining excellent user experience.

## Key Features

- **Sortable Columns**: Click column headers to sort data in ascending or descending order
- **Pagination Support**: Built-in pagination with customizable page sizes
- **Interactive Cells**: Click handlers for individual cells with data access
- **Copy Functionality**: One-click copying of cell values to clipboard
- **Visual Enhancements**: Hover effects, alternate row/column colors
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Full keyboard navigation and ARIA support
- **Custom Rendering**: Support for custom cell content via `domFunc`
- **Flexible Layout**: Customizable column widths and alignment

## When to Use

- Displaying large datasets that need pagination
- Tables requiring sorting functionality
- Data tables with interactive cell content
- Reports and dashboards with tabular data
- Any application needing a robust table solution

## Component Architecture

The `BasicTable` component consists of:

- **Header Row**: Sortable column headers with visual indicators
- **Data Rows**: Individual cells with hover effects and interactions
- **Pagination**: Optional built-in pagination controls
- **Event Handlers**: Comprehensive callback system for user interactions

## Basic Usage

```jsx
import BasicTable from '../components/sharedComponents/BasicTable';

const headers = [
  { text: 'Name', key: 'name', sortable: true },
  { text: 'Age', key: 'age', sortable: true },
  { text: 'Email', key: 'email' }
];

const tableData = [
  { name: 'John Doe', age: 30, email: 'john@example.com' },
  { name: 'Jane Smith', age: 25, email: 'jane@example.com' }
];

<BasicTable
  headers={headers}
  tableData={tableData}
  enableHover={true}
  onCellClicked={(rowData, cell) => console.log('Cell clicked:', rowData, cell)}
/>
```

## Advanced Configuration

```jsx
<BasicTable
  headers={headers}
  tableData={tableData}
  enablePagination={true}
  itemsPerPage={10}
  currentPage={1}
  totalItems={100}
  isAlternateRowColored={true}
  enableHover={true}
  onSort={(sortData) => console.log('Sort:', sortData)}
  onPageChange={(page) => console.log('Page:', page)}
  onCellClicked={(rowData, cell) => console.log('Cell:', rowData, cell)}
/>
```
