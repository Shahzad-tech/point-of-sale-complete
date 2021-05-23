import { NavLink,NavDropdown, Nav, Navbar} from 'react-bootstrap';
import { IoPeople } from "react-icons/io5";


function NavbarCustom(){
    return(
        <div>
            <Navbar collapseOnSelect expand="md" sticky="top" className="navbar">
            <Navbar.Brand href="./DasboardAdmin.js" style={{color:"white"}}>SMAART ADMIN PANEL</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav class="offset-md-4">
                <NavDropdown title="Merchandise" id="collasible-nav-dropdown">
                    <NavDropdown.Item className="navdd">Dashboard</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="navdd">Shopkeeper Details</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="navdd">Customer</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="navdd">POS</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="navdd">Sales Analysis</NavDropdown.Item>
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