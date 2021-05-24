import { NavLink,NavDropdown, Nav, Navbar} from 'react-bootstrap';
import { IoPeople } from "react-icons/io5";
import './Navbar.css';


function NavbarCustom(props){
    return(
        <div>
            <Navbar collapseOnSelect expand="md" sticky="top" className="navbar">
            <Navbar.Brand href="./DashboardAdmin.js" style={{color:"white"}}>SMAART ADMIN PANEL</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav class="offset-md-4">
                <NavDropdown title={props.title} id="collasible-nav-dropdown">
                    <NavDropdown.Item className="navdd">{props.dd1}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="navdd">{props.dd2}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="navdd">{props.dd3}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="navdd">{props.dd4}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="navdd">{props.dd5}</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav class="ml-auto">
                <NavLink>
                    <span>AdminName</span>
                    <IoPeople  style={{color: 'white', marginLeft:'4px'}} size={32}/>
                </NavLink>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            <br/>
        </div>
    );
}

export default NavbarCustom;