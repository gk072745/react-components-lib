import {
  BasicTableDemo,
  AlternateRowTableDemo,
  CustomCellsTableDemo,
  SortableTableDemo,
  PaginatedTableDemo,
  CustomPageSizeTableDemo,
  SortablePaginatedTableDemo
} from "@site/src/demoPages/TableDemo.jsx";

# Demo

This page demonstrates the BasicTable component with various configurations and examples.

## Demo 1: Basic Table

### Code Example

```jsx
import React from "react";
import BasicTable from "../components/sharedComponents/BasicTable";

const BasicTableExample = () => {
  const basicHeaders = [
    { text: 'Name', key: 'name', enableCopy: true },
    { text: 'Age', key: 'age', classes: 'right-align', headerClasses: 'right-align', sortable: true },
    { text: 'City', key: 'city' },
    { text: 'Country', key: 'country' }
  ];

  const basicData = [
    { name: 'John Doe', age: 30, city: 'New York', country: 'United States' },
    { name: 'Jane Smith', age: 25, city: 'Los Angeles', country: 'United States' },
    { name: 'Bob Johnson', age: 35, city: 'Chicago', country: 'United States' }
  ];

  const handleCellClick = (rowData, cell) => {
    console.log('Cell clicked:', { rowData, cell });
  };

  return (
    <BasicTable
      headers={basicHeaders}
      tableData={basicData}
      enableHover={true}
      enableInfiniteScroll={false}
      isAlternateColumnColored={true}
      defaultCellWidth="10rem"
      onCellClicked={handleCellClick}
    />
  );
};
```

### Interactive Demo

<BasicTableDemo />

## Demo 2: Alternate Row Colored

### Code Example

```jsx
import React from "react";
import BasicTable from "../components/sharedComponents/BasicTable";

const AlternateRowTableExample = () => {
  const basicHeaders = [
    { text: 'Name', key: 'name', enableCopy: true },
    { text: 'Age', key: 'age' },
    { text: 'City', key: 'city' }
  ];

  const basicData = [
    { name: 'John Doe', age: 30, city: 'New York' },
    { name: 'Jane Smith', age: 25, city: 'Los Angeles' },
    { name: 'Bob Johnson', age: 35, city: 'Chicago' }
  ];

  const handleCellClick = (rowData, cell) => {
    console.log('Cell clicked:', { rowData, cell });
  };

  return (
    <BasicTable
      headers={basicHeaders}
      tableData={basicData}
      enableHover={true}
      isAlternateRowColored={true}
      defaultCellWidth="10rem"
      onCellClicked={handleCellClick}
    />
  );
};
```

### Interactive Demo

<AlternateRowTableDemo />

## Demo 3: Custom Cells

### Code Example

```jsx
import React from "react";
import BasicTable from "../components/sharedComponents/BasicTable";

const CustomCellsTableExample = () => {
  const customHeaders = [
    { text: 'Name', key: 'name' },
    { text: 'Email', key: 'email' },
    { text: 'Status', key: 'status' }
  ];

  const userData = [
    { name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
    { name: 'Bob Johnson', email: 'bob@example.com', status: 'Pending' }
  ];

  const handleCellClick = (rowData, cell) => {
    console.log('Cell clicked:', { rowData, cell });
  };

  return (
    <BasicTable
      headers={customHeaders}
      tableData={userData}
      enableHover={true}
      onCellClicked={handleCellClick}
    />
  );
};
```

### Interactive Demo

<CustomCellsTableDemo />

## Demo 4: Sortable Table

### Code Example

```jsx
import React, { useState } from "react";
import BasicTable from "../components/sharedComponents/BasicTable";

const SortableTableExample = () => {
  const [sortableData, setSortableData] = useState([
    { name: 'Alice', score: 95, category: 'A' },
    { name: 'Bob', score: 87, category: 'B' },
    { name: 'Charlie', score: 92, category: 'A' }
  ]);

  const sortableHeaders = [
    { text: 'Name', key: 'name', sortable: true },
    { text: 'Score', key: 'score', sortable: true },
    { text: 'Category', key: 'category', sortable: true }
  ];

  const handleSort = (sortData) => {
    setSortableData(prev => [...prev].sort((a, b) => {
      const aVal = a[sortData.key];
      const bVal = b[sortData.key];
      if (sortData.direction === 'asc') {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    }));
  };

  const handleCellClick = (rowData, cell) => {
    console.log('Cell clicked:', { rowData, cell });
  };

  return (
    <BasicTable
      headers={sortableHeaders}
      tableData={sortableData}
      onSort={handleSort}
      onCellClicked={handleCellClick}
    />
  );
};
```

### Interactive Demo

<SortableTableDemo />

## Demo 5: Paginated Table - Basic

### Code Example

```jsx
import React, { useState, useMemo } from "react";
import BasicTable from "../components/sharedComponents/BasicTable";
import BasicPagination from "../components/sharedComponents/BasicPagination";

const PaginatedTableExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const paginatedHeaders = [
    { text: 'ID', key: 'id' },
    { text: 'Name', key: 'name' },
    { text: 'Email', key: 'email' },
    { text: 'City', key: 'city' }
  ];

  const paginatedData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', city: 'New York' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', city: 'Los Angeles' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', city: 'Chicago' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', city: 'Houston' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', city: 'Phoenix' }
  ];

  const itemsPerPage = 5;
  const totalItems = paginatedData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentPageData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return paginatedData.slice(start, end);
  }, [currentPage, paginatedData, itemsPerPage]);

  const handleCellClick = (rowData, cell) => {
    console.log('Cell clicked:', { rowData, cell });
  };

  return (
    <>
      <BasicTable
        headers={paginatedHeaders}
        tableData={currentPageData}
        enableHover={true}
        onCellClicked={handleCellClick}
      />
      <BasicPagination
        currentPage={currentPage}
        totalPages={totalPages}
        showFirstLast={true}
        showPrevNext={true}
        onPageChange={setCurrentPage}
      />
    </>
  );
};
```

### Interactive Demo

<PaginatedTableDemo />

## Demo 6: Paginated Table - Custom Page Size

### Code Example

```jsx
import React, { useState, useMemo } from "react";
import BasicTable from "../components/sharedComponents/BasicTable";
import BasicPagination from "../components/sharedComponents/BasicPagination";

const CustomPageSizeTableExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const paginatedHeaders = [
    { text: 'ID', key: 'id' },
    { text: 'Employee', key: 'name' },
    { text: 'Department', key: 'department' },
    { text: 'Salary', key: 'salary' },
    { text: 'Experience', key: 'experience' }
  ];

  const employeeData = [
    { id: 1, name: 'John Doe', department: 'Engineering', salary: 95000, experience: '5 years' },
    { id: 2, name: 'Jane Smith', department: 'Marketing', salary: 72000, experience: '3 years' },
    // ... more data
  ];

  const totalItems = employeeData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentPageData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return employeeData.slice(start, end);
  }, [currentPage, employeeData, itemsPerPage]);

  const handleCellClick = (rowData, cell) => {
    console.log('Cell clicked:', { rowData, cell });
  };

  return (
    <>
      <div className="page-size-controls">
        <label>Items per page:</label>
        <select value={itemsPerPage} onChange={(e) => {
          setItemsPerPage(parseInt(e.target.value));
          setCurrentPage(1);
        }}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>
      <BasicTable
        headers={paginatedHeaders}
        tableData={currentPageData}
        enableHover={true}
        onCellClicked={handleCellClick}
      />
      <BasicPagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalVisible={5}
        onPageChange={setCurrentPage}
      />
    </>
  );
};
```

### Interactive Demo

<CustomPageSizeTableDemo />

## Demo 7: Sortable & Paginated Table

### Code Example

```jsx
import React, { useState, useMemo } from "react";
import BasicTable from "../components/sharedComponents/BasicTable";
import BasicPagination from "../components/sharedComponents/BasicPagination";

const SortablePaginatedTableExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSort, setCurrentSort] = useState({ key: '', direction: '' });

  const sortablePaginatedHeaders = [
    { text: 'ID', key: 'id', sortable: true },
    { text: 'Student', key: 'name', sortable: true },
    { text: 'Subject', key: 'subject', sortable: true },
    { text: 'Score', key: 'score', sortable: true },
    { text: 'Status', key: 'status', sortable: true }
  ];

  const studentData = [
    { id: 1, name: 'John Doe', subject: 'Math', score: 85, status: 'Active' },
    { id: 2, name: 'Jane Smith', subject: 'Science', score: 92, status: 'Active' },
    // ... more data
  ];

  const sortedStudentData = useMemo(() => {
    if (!currentSort.key) return studentData;
    return [...studentData].sort((a, b) => {
      const aVal = a[currentSort.key];
      const bVal = b[currentSort.key];
      if (currentSort.direction === 'asc') {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });
  }, [studentData, currentSort]);

  const itemsPerPage = 6;
  const totalItems = sortedStudentData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentSortedPageData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return sortedStudentData.slice(start, end);
  }, [currentPage, sortedStudentData, itemsPerPage]);

  const handleSortPaginated = (sortData) => {
    setCurrentSort({ key: sortData.key, direction: sortData.direction });
    setCurrentPage(1);
  };

  const handleCellClick = (rowData, cell) => {
    console.log('Cell clicked:', { rowData, cell });
  };

  return (
    <>
      <BasicTable
        headers={sortablePaginatedHeaders}
        tableData={currentSortedPageData}
        enableHover={true}
        onSort={handleSortPaginated}
        onCellClicked={handleCellClick}
      />
      <BasicPagination
        currentPage={currentPage}
        totalPages={totalPages}
        size="large"
        onPageChange={setCurrentPage}
      />
    </>
  );
};
```

### Interactive Demo

<SortablePaginatedTableDemo />
