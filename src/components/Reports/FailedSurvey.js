import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export default class FailedSurvey extends Component {
  render() {
    const { data } = this.props;
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>City</th>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Decision</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row[2]}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
              <td>{row[2]}</td>
              <td>{row[3]}</td>
              <td>{row[4]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
