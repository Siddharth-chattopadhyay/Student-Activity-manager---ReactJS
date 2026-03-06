// import './App.css';
import { Routes, Route } from 'react-router-dom';
import StudentList from './pages/StudentList';
import StudentForm from './pages/StudentForm';
import NavigationBar from './components/NavigationBar';
import AttendanceDropdown from './components/AttendanceDropdown';

const records = {};
// Name, DOB, ID, DOA (admission), Course
function setStudent(id, name, age, year, course, attendance){
  records[id] = { name, age, year, course, attendance };
}

function deleteStudent(eid){
  delete records[eid];
}

function markAttendance(id, attendance){
  records[id] = {...records[id], attendance};
}

function getAllStudentIds(){
  return Object.keys(records);
}

function App() {
  return (
    <>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<StudentList records={records} functions={{deleteStudent, markAttendance, getAllStudentIds}}/>}/>
        <Route path="/addrecord" element={<StudentForm records={records} setRecord={setStudent}/>} />
        {/* <Route path="/editrecord/:id" element={<StudentForm records={records} setRecord={setStudent}/>} /> */}
      </Routes>
    </>
  )
}

export default App
