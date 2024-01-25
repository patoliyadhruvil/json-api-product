import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Table } from 'react-bootstrap';
import { DeleteData, DataGet } from '../../services/action/student.action'; 
import { useNavigate } from 'react-router';

const ViewAll = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { admins } = useSelector((state) => state.admin);

  const [update, setUpdate] = useState(false);
  const [DataSelectAdmin, setDataSelectAdmin] = useState(null);

  useEffect(() => {
    dispatch(DataGet());
  }, [dispatch]);

  const handleDelete = (adminId) => {
    dispatch(DeleteData(adminId));
  };

  const handleUpdate = (admin , id) => {
    setDataSelectAdmin(admin);
    console.log("admins" , admins);
    setTimeout(()=>{
      navigate('/Edit')
    } ,100)
  };


  return (
    <Container className="mt-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {admins.length > 0 ? (
            admins.map((dda, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{dda.name}</td>
                <td>{dda.email}</td>
                <td>{dda.password}</td>
                <td>{dda.number}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(dda.id)}>
                    Delete
                  </Button>
                  |||||
                  <Button variant="info" onClick={() => handleUpdate(dda)}>
                    Update
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">data not a avilabe</td>
            </tr>
          )}
        </tbody>
      </Table>

      
    </Container>
  );
};
export default ViewAll;