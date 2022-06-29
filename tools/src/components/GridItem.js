import React from "react";
import './GridItem.css';

class GridItem extends React.Component {
    printValue = () => {
        console.log(this.props.value);
    }

    render() {
        return (
            <a className="grid-item" onClick={this.printValue}>{this.props.value}</a>
        );
    }
}
export default GridItem