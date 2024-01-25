import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { UpdateData } from '../../services/action/student.action';

const EditForm = () => {
  const { admins } = useSelector((state) => state.admin);
  const [dataUpdateAll, setDataUpdateAll] = useState({
    name: '',
    number: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();


  const selectedAdmin = useSelector((state) => state.admin.selectedAdmin);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataUpdateAll((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();

  const handleUpSub = (e) => {
    e.preventDefault();
    dispatch(UpdateData(dataUpdateAll));
    navigate('/View');
  };

  return (
    <Container className='edit-form-container'>
      <Form onSubmit={handleUpSub}>
        <Row className="mb-3">
          <Col>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter The name" name="name" value={dataUpdateAll.name} onChange={handleChange}/>
          </Col>
          <Col>
            <Form.Label>Number</Form.Label>
            <Form.Control type="number" placeholder="Enter Your Mobile Number" name="number" value={dataUpdateAll.number} onChange={handleChange}/>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Your Email" name="email" value={dataUpdateAll.email} onChange={handleChange}/>
          </Col>
          <Col>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Your Password" name="password" value={dataUpdateAll.password} onChange={handleChange}/>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default EditForm;
