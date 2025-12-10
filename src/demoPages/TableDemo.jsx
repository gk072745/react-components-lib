import React, { useState, useMemo } from 'react';
import BasicTable from '../components/sharedComponents/BasicTable';
import BasicPagination from '../components/sharedComponents/BasicPagination';
import './tableDemo.scss';

// Demo 1: Basic Table
export const BasicTableDemo = () => {
  const handleCellClick = (rowData, cell) => {
    console.log('Cell clicked:', { rowData, cell });
  };

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

  return (
    <div className="table-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Basic Table</h3>
        <div className="demo-content">
          <div className="demo-card">
            <BasicTable
              headers={basicHeaders}
              tableData={basicData}
              enableHover={true}
              enableInfiniteScroll={false}
              isAlternateColumnColored={true}
              defaultCellWidth="10rem"
              onCellClicked={handleCellClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 2: Alternate Row Colored
export const AlternateRowTableDemo = () => {
  const handleCellClick = (rowData, cell) => {
    console.log('Cell clicked:', { rowData, cell });
  };

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

  return (
    <div className="table-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Alternate Row Colored</h3>
        <div className="demo-content">
          <div className="demo-card">
            <BasicTable
              headers={basicHeaders}
              tableData={basicData}
              enableHover={true}
              enableInfiniteScroll={false}
              isAlternateRowColored={true}
              defaultCellWidth="10rem"
              onCellClicked={handleCellClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 3: Custom Cells
export const CustomCellsTableDemo = () => {
  const handleCellClick = (rowData, cell) => {
    console.log('Cell clicked:', { rowData, cell });
  };

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

  return (
    <div className="table-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Custom Cells</h3>
        <div className="demo-content">
          <div className="demo-card">
            <BasicTable
              headers={customHeaders}
              tableData={userData}
              enableHover={true}
              onCellClicked={handleCellClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 4: Sortable Table
export const SortableTableDemo = () => {
  const [sortableData, setSortableData] = useState([
    { name: 'Alice', score: 95, category: 'A' },
    { name: 'Bob', score: 87, category: 'B' },
    { name: 'Charlie', score: 92, category: 'A' }
  ]);

  const [currentSort, setCurrentSort] = useState({ key: '', direction: '' });

  const handleCellClick = (rowData, cell) => {
    console.log('Cell clicked:', { rowData, cell });
  };

  const handleSort = (sortData) => {
    setCurrentSort({ key: sortData.key, direction: sortData.direction });
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

  const sortableHeaders = [
    { text: 'Name', key: 'name', sortable: true },
    { text: 'Score', key: 'score', sortable: true },
    { text: 'Category', key: 'category', sortable: true }
  ];

  return (
    <div className="table-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Sortable Table</h3>
        <div className="demo-content">
          <div className="demo-card">
            <BasicTable
              headers={sortableHeaders}
              tableData={sortableData}
              onSort={handleSort}
              onCellClicked={handleCellClick}
            />
          </div>
          <div className="demo-state">
            <p><strong>Current Sort:</strong> {currentSort.key || 'None'} {currentSort.direction || ''}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 5: Paginated Table - Basic
export const PaginatedTableDemo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const handleCellClick = (rowData, cell) => {
    console.log('Cell clicked:', { rowData, cell });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log('Page changed to:', page);
  };

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
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const currentPageData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return paginatedData.slice(start, end);
  }, [currentPage, paginatedData, itemsPerPage]);

  return (
    <div className="table-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Paginated Table - Basic</h3>
        <div className="demo-content">
          <div className="demo-card">
            <BasicTable
              headers={paginatedHeaders}
              tableData={currentPageData}
              enableHover={true}
              onCellClicked={handleCellClick}
            />
          </div>
          <div className="pagination-container">
            <BasicPagination
              currentPage={currentPage}
              totalPages={totalPages}
              showFirstLast={true}
              showPrevNext={true}
              onPageChange={handlePageChange}
            />
            <div className="pagination-info">
              <p>Showing {startItem}-{endItem} of {totalItems} items</p>
              <p>Page {currentPage} of {totalPages}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 6: Paginated Table - Custom Page Size
export const CustomPageSizeTableDemo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleCellClick = (rowData, cell) => {
    console.log('Cell clicked:', { rowData, cell });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = () => {
    setCurrentPage(1);
  };

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
    { id: 3, name: 'Bob Johnson', department: 'Sales', salary: 68000, experience: '7 years' },
    { id: 4, name: 'Alice Brown', department: 'Engineering', salary: 110000, experience: '8 years' },
    { id: 5, name: 'Charlie Wilson', department: 'HR', salary: 65000, experience: '4 years' },
    { id: 6, name: 'Diana Davis', department: 'Finance', salary: 78000, experience: '6 years' },
    { id: 7, name: 'Eve Anderson', department: 'Engineering', salary: 102000, experience: '5 years' },
    { id: 8, name: 'Frank Miller', department: 'Marketing', salary: 69000, experience: '2 years' },
    { id: 9, name: 'Grace Taylor', department: 'Sales', salary: 71000, experience: '4 years' },
    { id: 10, name: 'Henry Moore', department: 'Engineering', salary: 88000, experience: '3 years' }
  ];

  const totalItems = employeeData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const currentPageData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return employeeData.slice(start, end);
  }, [currentPage, employeeData, itemsPerPage]);

  return (
    <div className="table-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Paginated Table - Custom Page Size</h3>
        <div className="demo-content">
          <div className="table-content-wrapper">
            <div className="page-size-controls">
              <label>Items per page:</label>
              <select value={itemsPerPage} onChange={(e) => {
                setItemsPerPage(parseInt(e.target.value));
                handlePageSizeChange();
              }}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
            </div>
            <div className="demo-card">
              <BasicTable
                headers={paginatedHeaders}
                tableData={currentPageData}
                enableHover={true}
                onCellClicked={handleCellClick}
              />
            </div>
          </div>
          <div className="pagination-container">
            <BasicPagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalVisible={5}
              onPageChange={handlePageChange}
            />
            <div className="pagination-info">
              <p>Showing {startItem}-{endItem} of {totalItems} items ({itemsPerPage} per page)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 7: Sortable & Paginated Table
export const SortablePaginatedTableDemo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSort, setCurrentSort] = useState({ key: '', direction: '' });

  const handleCellClick = (rowData, cell) => {
    console.log('Cell clicked:', { rowData, cell });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSortPaginated = (sortData) => {
    setCurrentSort({ key: sortData.key, direction: sortData.direction });
    setCurrentPage(1);
  };

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
    { id: 3, name: 'Bob Johnson', subject: 'English', score: 78, status: 'Inactive' },
    { id: 4, name: 'Alice Brown', subject: 'Math', score: 95, status: 'Active' },
    { id: 5, name: 'Charlie Wilson', subject: 'Science', score: 89, status: 'Active' },
    { id: 6, name: 'Diana Davis', subject: 'English', score: 87, status: 'Pending' }
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
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const currentSortedPageData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return sortedStudentData.slice(start, end);
  }, [currentPage, sortedStudentData, itemsPerPage]);

  return (
    <div className="table-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Sortable & Paginated Table</h3>
        <div className="demo-content">
          <div className="demo-card">
            <BasicTable
              headers={sortablePaginatedHeaders}
              tableData={currentSortedPageData}
              enableHover={true}
              onSort={handleSortPaginated}
              onCellClicked={handleCellClick}
            />
          </div>
          <div className="pagination-container">
            <BasicPagination
              currentPage={currentPage}
              totalPages={totalPages}
              size="large"
              onPageChange={handlePageChange}
            />
            <div className="pagination-info">
              <p>Showing {startItem}-{endItem} of {totalItems} items</p>
              {currentSort.key && (
                <p>Sorted by: {currentSort.key} ({currentSort.direction})</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
