import React from 'react';
import Button from '@mui/material/Button';

const UserPagination = ({ currentPage, setCurrentPage, performSearch }) => {
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    performSearch();
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      performSearch();
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        Предыдущая страница
      </Button>
      <Button variant="contained" color="primary" onClick={handleNextPage}>
        Следующая страница
      </Button>
    </div>
  );
};

export default UserPagination;
