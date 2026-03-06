import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

// Name, Age, ID, AYR (admission Year), Course

function StudentForm({records, setRecord}){
    const {id} = useParams();

    const formData = useRef(records[id] || {"name": "", "age": "", "year": "", "course": "", "attendance": "Present"});
    const Name = useRef();
    const Age = useRef();
    const AYR = useRef();
    const Course = useRef();
    
    function handleSubmit(e){
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            if (!Name.current.checkValidity())
                Name.current.focus();
            
            else if (!Age.current.checkValidity())
                Age.current.focus();
            
            else if (!AYR.current.checkValidity())
                AYR.current.focus();
            
            else if (!Course.current.checkValidity())
                Course.current.focus();
            
            e.preventDefault();
            e.stopPropagation();
        }
        else {
            console.log(formData.current)
            setRecord(id ?? Date.now().toString(), formData.current.name, formData.current.age, formData.current.year, formData.current.course, formData.current.attendance);
        }
    }
    const render = (
        <>
            <div className="p-5">
                <Form noValidate validated={true} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Student Name</Form.Label>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Student Name"
                                className="mb-3">

                                <Form.Control
                                    required
                                    pattern=".{5,}"
                                    ref={Name}
                                    type="text"
                                    placeholder="Student Name"
                                    onChange={function(e){formData.current.name = e.target.value;}}
                                    defaultValue={formData.current.name}
                                    />
                            <Form.Control.Feedback type="invalid">Must be atleast 5 character long</Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">Good!</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Student Age</Form.Label>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Student Age"
                                className="mb-3">

                                <Form.Control
                                    required
                                    pattern="\d{1,}"
                                    ref={Age}
                                    type="text"
                                    placeholder="Student Age"
                                    onChange={function(e){formData.current.age = e.target.value;}}
                                    defaultValue={formData.current.age}
                                    />
                            <Form.Control.Feedback type="invalid">You must provide Age</Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">Good!</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Student Admission Year</Form.Label>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Student Admission Year"
                                className="mb-3">

                                <Form.Control
                                    required
                                    pattern="\d{4}"
                                    ref={AYR}
                                    type="text"
                                    placeholder="Student Admission Year"
                                    onChange={function(e){formData.current.year = e.target.value;}}
                                    defaultValue={formData.current.year}
                                    />
                            <Form.Control.Feedback type="invalid">You must provide Admission Year (e.g, 2025)</Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">Good!</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Student Age</Form.Label>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Student Course"
                                className="mb-3">

                                <Form.Control
                                    required
                                    pattern=".{3,}"
                                    ref={Course}
                                    type="text"
                                    placeholder="Student Course"
                                    onChange={function(e){formData.current.course = e.target.value;}}
                                    defaultValue={formData.current.course}
                                    />
                            <Form.Control.Feedback type="invalid">You must provide Course</Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">Good!</Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group>
                            <Form.Label>Student Attendance</Form.Label>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Student Attendance"
                                className="mb-3">

                                <Form.Select aria-label="" onChange={function(e) {formData.current.attendance = e.target.value;}}>
                                    <option value="Present">Present</option>
                                    <option value="Absent">Absent</option>
                                    <option value="Leave">Leave</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Button variant="primary" type="submit" className="my-5">Save</Button>
                </Form>
            </div>
        </>
    );
    return render;
}

export default StudentForm;