import React from 'react';
import { Table, Button } from 'react-bootstrap';

const TableComponent = ({ data, onDelete, onSelect }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} onClick={() => onSelect(item)}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>
              <Button variant="danger" size="sm" onClick={(e) => { e.stopPropagation(); onDelete(item.id); }}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
