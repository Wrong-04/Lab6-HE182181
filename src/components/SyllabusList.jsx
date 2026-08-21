import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Form,
  Table,
  Button,
  Row,
  Col,
  Nav,
  Navbar,
} from "react-bootstrap";

const BASE_URL = "http://localhost:9999";

const SyllabusList = () => {
  const [subjects, setSubjects] = useState([]);
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
      return;
    }
    axios
      .get(`${BASE_URL}/subjects`)
      .then((res) => setSubjects(res.data))
      .catch((err) => console.error(err));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const codes = useMemo(() => {
    return [...new Set(subjects.map((cls) => cls.code).filter(Boolean))];
  }, [subjects]);

  const filteredSubjects = useMemo(() => {
    return subjects.filter((s) => {
      const matchCode =
        !filter ||
        filter === "All" ||
        filter === "Code" ||
        filter === "" ||
        s.code === filter;
      const matchKeyword =
        !search ||
        (s.name && s.name.toLowerCase().includes(search.toLowerCase())) ||
        (s.code && s.code.toLowerCase().includes(search.toLowerCase())) ||
        (s.description && s.description.toLowerCase().includes(search.toLowerCase()));
      return matchCode && matchKeyword;
    });
  }, [subjects, filter, search]);

  return (
    <div>
      <Navbar bg="dark" variant="dark" className="mb-4 px-3">
        <Navbar.Brand>FPT Education Learning Materials Portal</Navbar.Brand>
        <Nav className="ms-auto d-flex align-items-center">
          <h3 className="text-white me-3 mb-0 fs-5">
            Hello, {user ? `${user.fullName} (${user.role})` : "Miss loan do (role)"}
          </h3>
          {/* thêm hiển thị người dùng đang đăng nhập */}
          <Button variant="outline-light" size="sm" onClick={handleLogout}>
            {/* nút log out chưa cần hoạt dộng cùng lắm thêm  cái link tra ve lại trang login  */}
            Logout
          </Button>
        </Nav>
      </Navbar>
      <Container>
        {" "}
        <Row>
          <h1>Syllabus Management</h1>
          <Row>
            <Col md={1}>
              {" "}
              <b>Search by:</b>
            </Col>
            <Col md={2}>
              <Form.Select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}>
                <option value="All">Code</option>
                {codes.map((s, index) => (
                  <option key={index} value={s}>
                    {s}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col md={4}>
              <Form.Control
                className="w-100"
                type="text"
                placeholder="Enter KeyWorld...."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {/* tìm bằng name */}
            </Col>

            <Col md={1}>
              <Button onClick={() => {}}>Search</Button>
            </Col>
          </Row>
        </Row>
        <Row className="mt-5">
          <h3>Subject List</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <td>Code</td>
                <td>Name</td>
                <td>Curriculum</td>
                <td>Semester</td>
                <td>Credits</td>
                <td>Pre-requisites</td>
                <td>Description</td>
              </tr>
            </thead>
            <tbody>
              {filteredSubjects.map((s, index) => (
                <tr key={s.id || index}>
                  <td>
                    <Link to={`/subject/${s.id}`} style={{ textDecoration: "none" }}>
                      {s.code}
                    </Link>
                  </td>
                  <td>{s.name}</td>
                  <td>{s.curriculum}</td>
                  <td>{s.semester}</td>
                  <td>{s.credits}</td>
                  <td>
                    {Array.isArray(s.preRequisites)
                      ? s.preRequisites.join(", ")
                      : s.preRequisites || ""}
                  </td>
                  <td>{s.description}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
};
export default SyllabusList;
