import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../style/Login.css";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username && password) {
      console.log('Username:', username);
      console.log('Password:', password);
      navigate('/main');
    } else {
      alert("Silakan isi username dan password.");
    }
  };

  return (
    <div className="background d-flex justify-content-center align-items-center shadow" style={{ height: '100vh' }}>
      <Card bg="danger" text="white" style={{ width: '18rem' }} className="mb-2">
        <Card.Body>
          <Card.Title className='judul'>Login</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <div className="konfirmasi d-flex justify-content-center">
              <Button type="submit" variant="light">Konfirmasi</Button>
            </div>
            <div className='sign-in'>
              <p>Sudah punya akun 
                <Link to="/signin" style={{ textDecoration: 'none', color: 'inherit' }}>
                  -Sign-in-
                </Link>
              </p>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginForm;
