import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../style/Footer.css';
import Logo from "../../public/NewLogo2.png";
import d2vs from "../../public/D2Vs.png";

function Footer() {
  return (
    <Card className="Footer shadow-lg" style={{ border: '2px solid #yourColor' }}>
      <Card.Body>
        <img src={d2vs} alt="Logo Proyek" className="d2vs" />
        <Card.Title className="text-center mt-0">Our Social Media</Card.Title>
        
        <div className="d-flex justify-content-around sosial-media flex-wrap mb-3">
          <Card.Text className="mb-0">Facebook</Card.Text>
          <Card.Text className="mb-0">Twitter</Card.Text>
          <Card.Text className="mb-0">Instagram</Card.Text>
          <Card.Text className="mb-0">LinkedIn</Card.Text>
          <Card.Text className="mb-0">Email</Card.Text>
        </div>
      </Card.Body>
      
      <Card.Footer className="text-center">
        <small className="text-muted">© 2024 Your Company. All rights reserved.</small>
      </Card.Footer>
    </Card>
  );
}

export default Footer;
