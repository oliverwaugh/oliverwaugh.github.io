import React from "react";
import Grid from "./components/Grid";
import SideNav from './components/SideNav';
import SideNavOpener from './components/SideNavOpener';

class MyApp extends React.Component {
    render() {
        return (
            <div>
                <SideNavOpener id="opener" />
                <SideNav />
                <Grid />
            </div>
        );
    }
}
export default MyApp;