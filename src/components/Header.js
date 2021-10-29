import React from "react";
import logo from "../logo.png"
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/Header.css'

function Header() {

    const userName = localStorage.getItem('name')

    const userLogin = () => {
        if(!userName){
            return(
                <NavItem className="navitem" >

                    <NavLink href="/donor/find" className="navlink">Find A Donor</NavLink>                
                    
                    <NavLink href="/register" className="navlink">Register</NavLink>

                    <NavLink href="/login" className="navlink">Login</NavLink>
                    
                </NavItem>
            )
        } else {
            return(
                <NavItem className="navitem" >

                    <NavLink href="/donor/find" className="navlink">Find A Donor</NavLink>                
                    
                    <NavLink href="/update" className="navlink">Update Profile</NavLink>

                    <NavLink href="/" className="navlink" onClick={()=>localStorage.clear()}>Logout</NavLink>
                    
                </NavItem>
            )
        }
    }
    return(
        <header className="container-fluid">
            <Navbar>
                <Nav>
                <a href="/"><img src={logo} alt="LOGO" className="logo" /></a>
                <a href="/"><NavbarBrand style={{color:"white"}}>Blood Donor</NavbarBrand></a>
                
                
                {userLogin()}
                
                </Nav>

            </Navbar>
        </header>
    )
    
}

export default Header;