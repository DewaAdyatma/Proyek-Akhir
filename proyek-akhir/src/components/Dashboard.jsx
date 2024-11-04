
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import { CardHeader, Toast } from 'react-bootstrap';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Catas from '../../public/C5.png';
import Cbawah from '../../public/C6.png';
import Logo from "../../public/NewLogo2.png";
import Pc from "../../public/Card.png";
import PC from "../../public/Card-1.png";
import pC from "../../public/Card-2.png";
import '../style/Dashboard.css';
import { Container } from 'react-bootstrap';

function Dashboard() {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  console.log("Dashboard component rendered");
  return (
    <>
  <Container>
          <div className='shadow mb-5'>
            <Card>
              <Card.Body>
                <Card.Text>
                  {/* Kmai mementingkan kualitas di untuk pembeli,tentu product kami premium */}
                </Card.Text>
              </Card.Body>
              <Card.Img variant="top" src={Catas} />
            </Card>
          </div>

        <div>
          <Container>
              <div className='C-text'>
              <Card className='C-text2 shadow'>
                <Card.Body>
                  <h1>Hallo</h1>
                    <p>Kami menjuan berbagai macam hal yang bersangkutan dengan Vape ,<br/>
                    dibawah ini ada owner dari pemilik marchan ini D2Vs.</p>
                </Card.Body>
              </Card>
              </div>
            <Row className='C-text mb-5 mt-5'>
              <Col>
              <Card className='shadow' style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>M.Faiz farelza</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Owner</Card.Subtitle>
                  <Card.Text>
                    Hallo, Saya salah satu owner pemilik D2Vs Saya yang bertanggung jawab atas visual Design Product Kami.
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>

              <Col>
              <Card className='shadow' style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Dewa adiyatma</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Owner</Card.Subtitle>
                  <Card.Text>
                    Hallo, Saya salah satu Owner D2Vs Saya bertangung jawaba tas KOmposisi dari Product.
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
              <Col>
              <Card className='shadow' style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Putra sudrajat</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"> Owner</Card.Subtitle>
                  <Card.Text>
                    Hallo, Saya salah satu Owner dari D2Vs say bertugas yang mengawasi stock dan vendor serta Hr.
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
            </Row>

            <Row className='C-text mb-5 mt-5'>
              <Col>             
                  <img src={Pc} alt="" style={{ width: '18rem' }}/>
              </Col>
           
              <Col>             
                  <img src={PC} alt="" style={{ width: '18rem' }}/>
              </Col>

              <Col>             
                  <img src={pC} alt="" style={{ width: '18rem' }}/>
              </Col>

            </Row>
          </Container>
        </div>

        <div className='shadow mb-5'>
            <Card>
              <Card.Img variant="top" src={Cbawah} />
              <Card.Body>
                <Card.Text>
                  
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
  </Container>
  
    </>
  );
}

export default Dashboard;
