// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// React Bootstrap
import { Modal } from 'react-bootstrap';

export default function Decision(props) {
  const decision = useSelector((state) => state.survey.decision);
  const date = new Date(decision.timestamp);
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className='text-center'>
          Decision: {decision.person}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>
          {decision.decision === 'Y' ? 'SCREENING PASSED' : 'SCREENING FAILED'}
        </h1>
        <h4>{date.toLocaleString()}</h4>
      </Modal.Body>
    </Modal>
  );
}
