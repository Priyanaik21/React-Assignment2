import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Pagination>
      {[...Array(totalPages).keys()].map((number) => (
        <Pagination.Item
          key={number + 1}
          active={number + 1 === currentPage}
          onClick={() => onPageChange(number + 1)}
        >
          {number + 1}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default PaginationComponent;
