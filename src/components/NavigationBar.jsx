import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';


function NavigationBar() {
    const navigate = useNavigate();
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => {
        navigate(selectedKey);
    }}
      style={{justifyContent: "center"}}
    >
      <Nav.Item>
        <Nav.Link eventKey="/" className='text-white'>
            <div className='btn btn-primary'>
                Show Student Records
            </div>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="addrecord" className='text-white'>
            <div className='btn btn-primary'>
                Add Student Record
            </div>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavigationBar;