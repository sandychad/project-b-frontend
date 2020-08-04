// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// React Bootstrap
import { Modal, Button } from 'react-bootstrap';

// Local Components
import { Loading } from '../../../common/Loading';

export default function Decision(props) {
  const decision = useSelector((state) => state.survey.decision);
  const isLoading = useSelector((state) => state.survey.isLoading);
  const date = new Date(decision.timestamp);
  if (isLoading) {
    return (
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header style={{ backgroundColor: '#0a6cf5', color: 'white' }}>
          <Modal.Title className='text-center'>Decision Pending</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Loading />
        </Modal.Body>
      </Modal>
    );
  } else {
    return (
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header style={{ backgroundColor: '#0a6cf5', color: 'white' }}>
          <Modal.Title className='text-center'>
            Decision: {decision.person}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h1>
            {decision.decision === 'Y'
              ? 'SCREENING PASSED'
              : 'SCREENING FAILED'}
          </h1>
          <h4>{date.toLocaleString()}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={() => props.onHide()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
