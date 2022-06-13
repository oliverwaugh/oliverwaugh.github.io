import React from "react";
import './SideNavOpener.css';

class SideNavOpener extends React.Component {
    openNav = () => {
        document.querySelector('.sidenav').style.width = "250px";
    }

    render() {
        return (
            <div id={this.props.id} className="sidenavopener"
                onClick={this.openNav}>
                &#9776;
            </div>
        );
    }
}
export default SideNavOpener;