// React
import React from 'react';

// React Bootstrap
import { Card, InputGroup, Form, Col } from 'react-bootstrap';

export default function TextWithoutParent({ question }) {
  const { id, question_text } = question;
  return (
    <Card key={id}>
      <Card.Header>
        <Card.Title>{question_text}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Col md={{ span: 4, offset: 4 }}>
          <InputGroup>
            <Form.Control type='text' placeholder='100.0' />
            <InputGroup.Append>
              <InputGroup.Text>°F</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
          <InputGroup>
            <Form.Control as='select' custom size='lg' defaultValue='100'>
              <option value='95'>95</option>
              <option value='96'>96</option>
              <option value='97'>97</option>
              <option value='98'>98</option>
              <option value='99'>99</option>
              <option value='100'>100</option>
              <option value='101'>101</option>
              <option value='102'>102</option>
              <option value='103'>103</option>
              <option value='104'>104</option>
            </Form.Control>
            <Form.Control as='select' size='lg' defaultValue='.0'>
              <option value='.0'>.0</option>
              <option value='.1'>.1</option>
              <option value='.2'>.2</option>
              <option value='.3'>.3</option>
              <option value='.4'>.4</option>
              <option value='.5'>.5</option>
              <option value='.6'>.6</option>
              <option value='.7'>.7</option>
              <option value='.8'>.8</option>
              <option value='.9'>.9</option>
            </Form.Control>
            <InputGroup.Append>
              <InputGroup.Text>°F</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Card.Body>
    </Card>
  );
}
