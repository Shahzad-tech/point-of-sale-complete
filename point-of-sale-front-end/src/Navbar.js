import { NavLink,NavDropdown, Nav, Navbar} from 'react-bootstrap';
import { IoPeople } from "react-icons/io5";
import './Navbar.css';
import { Link } from 'react-router-dom';


function NavbarCustom(props){
    return(
        <div>
            <Navbar collapseOnSelect expand="md" sticky="top" className="navbar">
            <Link to ="/admin/dashboard"><Navbar.Brand style={{color:"white"}}>SMAART ADMIN PANEL</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav class="offset-md-4">
                <NavDropdown title={props.title} id="collasible-nav-dropdown">
                    <Link to ={`/admin/${props.dd1Route}`}>
                        <NavDropdown.Item className="navdd">{props.dd1}</NavDropdown.Item>
                    </Link>
                    <NavDropdown.Divider />
                    <Link to ={`/admin/${props.dd2Route}`}>
                        <NavDropdown.Item className="navdd">{props.dd2}</NavDropdown.Item>
                    </Link>
                    <NavDropdown.Divider />
                    <Link to ={`/admin/${props.dd3Route}`}>
                        <NavDropdown.Item className="navdd">{props.dd3}</NavDropdown.Item>
                    </Link>
                    <NavDropdown.Divider />
                    <Link to ={`/admin/${props.dd4Route}`}>
                        <NavDropdown.Item className="navdd">{props.dd4}</NavDropdown.Item>
                    </Link>
                    <NavDropdown.Divider />
                    <Link to ={`/admin/${props.dd5Route}`}>
                        <NavDropdown.Item className="navdd">{props.dd5}</NavDropdown.Item>
                    </Link>
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