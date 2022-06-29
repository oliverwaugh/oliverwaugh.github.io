import React from "react";
import './SideNav.css';

class SideNav extends React.Component {
    closeNav = () => {
        document.querySelector(".sidenav").style.width = "0";
    }

    render() {
        return (
            <div className="sidenav">
                <a href="#" className="closebtn" onClick={this.closeNav}>&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
        );
    }
}
export default SideNav;