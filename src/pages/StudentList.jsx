import { useState } from "react";
import StudentCard from "../components/StudentCard";
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";

function StudentList({functions, records}){
    const [version, update] = useState(0);
    const ids = functions.getAllStudentIds();
    if (ids.length === 0)
        return (<div className="fw-bolder py-5 text-center">No Student Records found. You might need to create a new record.</div>);
    return (
        <div className="p-5">
            <p>Total Students: {ids.length}</p>
            {ids.map(id => <StudentCard records={records} id={id} key={id} deleteFunc={function(id){functions.deleteStudent(id); update(version + 1);}} markAttendance={functions.markAttendance}/>)}
        </div>
    );
}

export default StudentList;
