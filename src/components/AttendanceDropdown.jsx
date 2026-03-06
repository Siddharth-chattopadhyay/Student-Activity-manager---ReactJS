import Dropdown from 'react-bootstrap/Dropdown';

function AttendanceDropdown({onSelect}) {
  return (
    <Dropdown onSelect={onSelect}>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Change Attendance
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="Present">Present</Dropdown.Item>
        <Dropdown.Item eventKey="Absent">Absent</Dropdown.Item>
        <Dropdown.Item eventKey="Leave">Leave</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default AttendanceDropdown;