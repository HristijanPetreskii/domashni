import { Component } from "react";
import "./navbar.css"

class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Booking</h1>
                <ul className="nav-menu">
                    <li>
                        <link><i class="fa-solid fa-bed"></i></link>
                    </li>

                </ul>
            </nav>
        )
    }
}

export default Navbar