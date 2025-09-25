import React, { useState, useMemo } from 'react';
import BasicPagination from '../components/sharedComponents/BasicPagination';
import './paginationDemo.scss';

// Demo 1: Basic Pagination
export const BasicPaginationDemo = () => {
  const [basicPage, setBasicPage] = useState(7);

  const handleBasicPageChange = (page) => {
    console.log('Basic page changed to:', page);
    setBasicPage(page);
  };

  return (
    <div className="pagination-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Basic Pagination</h3>
        <div className="demo-content">
          <div className="demo-group">
            <BasicPagination
              currentPage={basicPage}
              totalPages={15}
              onPageChange={handleBasicPageChange}
            />
          </div>
          <div className="demo-state">
            <strong>Current Page:</strong> {basicPage}
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 2: Size Variants
export const SizeVariantsDemo = () => {
  const [sizePage, setSizePage] = useState(3);

  return (
    <div className="pagination-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Size Variants</h3>
        <div className="demo-content">
          <div className="demo-group">
            <h4>Small</h4>
            <BasicPagination
              currentPage={sizePage}
              totalPages={10}
              size="small"
              onPageChange={setSizePage}
            />
          </div>
          <div className="demo-group">
            <h4>Default</h4>
            <BasicPagination
              currentPage={sizePage}
              totalPages={10}
              onPageChange={setSizePage}
            />
          </div>
          <div className="demo-group">
            <h4>Large</h4>
            <BasicPagination
              currentPage={sizePage}
              totalPages={10}
              size="large"
              onPageChange={setSizePage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 3: Limited Visible Pages
export const LimitedVisibleDemo = () => {
  const [limitedPage, setLimitedPage] = useState(25);

  return (
    <div className="pagination-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Limited Visible Pages</h3>
        <div className="demo-content">
          <div className="demo-group">
            <h4>5 Visible Pages (Total: 50)</h4>
            <BasicPagination
              currentPage={limitedPage}
              totalPages={50}
              totalVisible={5}
              onPageChange={setLimitedPage}
            />
          </div>
          <div className="demo-controls">
            <button onClick={() => setLimitedPage(1)} className="demo-button">
              Go to First
            </button>
            <button onClick={() => setLimitedPage(25)} className="demo-button">
              Go to Middle
            </button>
            <button onClick={() => setLimitedPage(50)} className="demo-button">
              Go to Last
            </button>
          </div>
          <div className="demo-state">
            <strong>Current Page:</strong> {limitedPage} / 50
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 4: Configuration Options
export const ConfigurationDemo = () => {
  const [configPage, setConfigPage] = useState(6);

  return (
    <div className="pagination-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Configuration Options</h3>
        <div className="demo-content">
          <div className="demo-group">
            <h4>No First/Last Buttons</h4>
            <BasicPagination
              currentPage={configPage}
              totalPages={12}
              showFirstLast={false}
              onPageChange={setConfigPage}
            />
          </div>
          <div className="demo-group">
            <h4>No Prev/Next Buttons</h4>
            <BasicPagination
              currentPage={configPage}
              totalPages={12}
              showPrevNext={false}
              onPageChange={setConfigPage}
            />
          </div>
          <div className="demo-group">
            <h4>Only Page Numbers</h4>
            <BasicPagination
              currentPage={configPage}
              totalPages={12}
              showFirstLast={false}
              showPrevNext={false}
              onPageChange={setConfigPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 5: Disabled State
export const DisabledStateDemo = () => {
  const [disabledPage, setDisabledPage] = useState(3);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="pagination-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Disabled State</h3>
        <div className="demo-content">
          <div className="demo-group">
            <BasicPagination
              currentPage={disabledPage}
              totalPages={10}
              disabled={isDisabled}
              onPageChange={setDisabledPage}
            />
          </div>
          <div className="demo-controls">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={isDisabled}
                onChange={(e) => setIsDisabled(e.target.checked)}
              />
              Disabled
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 6: Rounded Buttons
export const RoundedButtonsDemo = () => {
  const [roundedPage, setRoundedPage] = useState(5);

  return (
    <div className="pagination-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Rounded Buttons</h3>
        <div className="demo-content">
          <div className="demo-group">
            <BasicPagination
              currentPage={roundedPage}
              totalPages={15}
              rounded={true}
              onPageChange={setRoundedPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 7: Color Variants
export const ColorVariantsDemo = () => {
  const [primaryPage, setPrimaryPage] = useState(3);
  const [secondaryPage, setSecondaryPage] = useState(3);

  return (
    <div className="pagination-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Color Variants</h3>
        <div className="demo-content">
          <div className="demo-group">
            <h4>Primary Color</h4>
            <BasicPagination
              currentPage={primaryPage}
              totalPages={10}
              color="primary"
              onPageChange={setPrimaryPage}
            />
          </div>
          <div className="demo-group">
            <h4>Secondary Color</h4>
            <BasicPagination
              currentPage={secondaryPage}
              totalPages={10}
              color="secondary"
              onPageChange={setSecondaryPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo 8: Data Table Example
export const DataTableDemo = () => {
  const [tablePage, setTablePage] = useState(1);
  const itemsPerPage = 5;

  // Mock data for table
  const tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin' },
    { id: 6, name: 'Diana Davis', email: 'diana@example.com', role: 'User' },
    { id: 7, name: 'Eve Anderson', email: 'eve@example.com', role: 'Editor' },
    { id: 8, name: 'Frank Miller', email: 'frank@example.com', role: 'User' },
    { id: 9, name: 'Grace Taylor', email: 'grace@example.com', role: 'Admin' },
    { id: 10, name: 'Henry Moore', email: 'henry@example.com', role: 'User' },
    { id: 11, name: 'Ivy White', email: 'ivy@example.com', role: 'Editor' },
    { id: 12, name: 'Jack Harris', email: 'jack@example.com', role: 'User' },
    { id: 13, name: 'Kelly Martin', email: 'kelly@example.com', role: 'Admin' },
    { id: 14, name: 'Leo Thompson', email: 'leo@example.com', role: 'User' },
    { id: 15, name: 'Mia Garcia', email: 'mia@example.com', role: 'Editor' },
    { id: 16, name: 'Noah Rodriguez', email: 'noah@example.com', role: 'User' },
    { id: 17, name: 'Olivia Lewis', email: 'olivia@example.com', role: 'Admin' },
    { id: 18, name: 'Paul Walker', email: 'paul@example.com', role: 'User' },
    { id: 19, name: 'Quinn Hall', email: 'quinn@example.com', role: 'Editor' },
    { id: 20, name: 'Rachel Allen', email: 'rachel@example.com', role: 'User' }
  ];

  // Computed properties for table
  const totalItems = tableData.length;
  const totalTablePages = Math.ceil(totalItems / itemsPerPage);

  const paginatedData = useMemo(() => {
    const start = (tablePage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return tableData.slice(start, end);
  }, [tablePage, tableData, itemsPerPage]);

  const startItem = (tablePage - 1) * itemsPerPage + 1;
  const endItem = Math.min(tablePage * itemsPerPage, totalItems);

  const handleTablePageChange = (page) => {
    console.log('Table page changed to:', page);
    setTablePage(page);
  };

  return (
    <div className="pagination-demo-container">
      <div className="demo-section">
        <h3 className="demo-title">Data Table Example</h3>
        <div className="demo-content">
          <div className="table-container">
            <table className="demo-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-pagination">
            <BasicPagination
              currentPage={tablePage}
              totalPages={totalTablePages}
              onPageChange={handleTablePageChange}
            />
            <p className="table-info">
              Showing {startItem}-{endItem} of {totalItems} items
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Default export for backward compatibility
const PaginationDemo = () => {
  return (
    <div className="pagination-demo-container">
      <BasicPaginationDemo />
      <SizeVariantsDemo />
      <LimitedVisibleDemo />
      <ConfigurationDemo />
      <DisabledStateDemo />
      <RoundedButtonsDemo />
      <ColorVariantsDemo />
      <DataTableDemo />
    </div>
  );
};

export default PaginationDemo;
