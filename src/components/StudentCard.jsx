import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import AttendanceDropdown from './AttendanceDropdown';


function StudentCard({id, records, deleteFunc, markAttendance}) {
    const { name, age, year, course, attendance } = records[id];
    const [Attendance, MarkAttendance] = useState(attendance);
    const [toggle, setToggle] = useState(false);
  return (
    <Card className="shadow-lg my-3">
        <Card.Body>
        {toggle?
        <Card.Text as="div">
            <p>
                Name: {name}
            </p>
            <p>
                Age: {age}
            </p>
            <p>
                Admission Year: {year}
            </p>
            <p>
                Course: {course}
            </p>
            <p>
                Attendance: {Attendance}
            </p>

        </Card.Text>: <></>}
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-5">
            <Button variant="danger" onClick={function(){deleteFunc(id);}}>Delete</Button>
            <Button variant="secondary" onClick={function(){setToggle(!toggle);}}>{toggle ? "Hide" : "Show"}</Button>
            <AttendanceDropdown onSelect={function(str) {MarkAttendance(str); markAttendance(id, str);}} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default StudentCard;
