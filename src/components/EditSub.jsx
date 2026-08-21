import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button, Row, Nav, Navbar } from "react-bootstrap";

const BASE_URL = "http://localhost:9999";

const EditSub = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [curriculums, setCurriculums] = useState("");
  const [semester, setSemester] = useState("");
  const [credits, setCredits] = useState("");
  const [preRequisites, setPreRequisites] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (id) {
      axios
        .get(`${BASE_URL}/subjects/${id}`)
        .then((res) => {
          const data = res.data;
          setCode(data.code || "");
          setName(data.name || "");
          setCurriculums(data.curriculum || "");
          setSemester(data.semester ?? "");
          setCredits(data.credits ?? "");
          setPreRequisites(
            Array.isArray(data.preRequisites)
              ? data.preRequisites.join(", ")
              : data.preRequisites || "",
          );
          setDescription(data.description || "");
        })
        .catch((err) => console.error(err));
    }
  }, [id]);

  const handleBack = () => {
    navigate("/syllabus");
  };

  return (
    <div>
      <Navbar
        style={{ backgroundColor: "#ff9c0899" }}
        variant="dark"
        className="mb-4 px-3">
        <Navbar.Brand>Subject Detail Management</Navbar.Brand>
        <Nav className="ms-auto d-flex align-items-center">
          <Button variant="outline-light" size="sm" onClick={handleBack}>
            Back To List
          </Button>
        </Nav>
      </Navbar>
      <Row>
        <Form className="w-50 m-auto">
          <Form.Group className="mb-3">
            <Form.Label>Code</Form.Label>
            <Form.Control
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Curriculum</Form.Label>
            <Form.Control
              type="text"
              value={curriculums}
              onChange={(e) => setCurriculums(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Semester</Form.Label>
            <Form.Control
              type="text"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Credits</Form.Label>
            <Form.Control
              type="text"
              value={credits}
              onChange={(e) => setCredits(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Pre-requisites</Form.Label>
            <Form.Control
              type="text"
              value={preRequisites}
              onChange={(e) => setPreRequisites(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <div className="d-flex gap-2 mb-4">
            <Button variant="primary">Edit</Button>
            <Button variant="secondary">Cancel</Button>
          </div>
        </Form>
      </Row>
    </div>
  );
};

export default EditSub;
