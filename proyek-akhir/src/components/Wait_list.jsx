import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../style/Waiting-list.css"
import { CardBody, Container } from 'react-bootstrap';

function Waitlist() {
  return (
    <Container>
          <Row className=' mb-2 mt-2'>
            <Col>
              <h3>Waiting List</h3>
            </Col>
          </Row>
    <card>
      <CardBody>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Order Id</th>
              <th>Name</th>
              <th>Date</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Delivery time</th>
            </tr>
          </thead>
        </Table>
      </CardBody>
    </card>
    </Container>
  );
}

export default Waitlist;