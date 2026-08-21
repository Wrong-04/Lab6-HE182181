import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Form,
  Button,
  Alert,
  Row,
} from "react-bootstrap";

const BASE_URL = "http://localhost:9999";

const LoginPage = () => {
  const [emails, setEmails] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    try {
      // Fetch accounts rồi find() trong JS
      axios
        .get(`${BASE_URL}/accounts`)
        .then((res) => {
          const user = res.data.find(
            (s) =>
              (s.email?.trim().toLowerCase() === emails.trim().toLowerCase()) &&
              s.password === password
          );
          if (user) {
            // [CHỨC NĂNG] Lưu toàn bộ object user vào localStorage dưới dạng JSON string
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/syllabus");
          } else {
            setError("Invalid email or password");
          }
        })
        .catch(() => {
          setError("Error connecting to server");
        });
    } catch {
      setError("Error connecting to server");
    }
  };

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Sign in</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Row>
        <Form className="w-50 m-auto" onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Email </Form.Label>
            <Form.Control
              required
              type="text"
              value={emails}
              placeholder="email of student or lecture"
              onChange={(e) => setEmails(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" size="sm">
            Login
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default LoginPage;
