import React from "react";
import GridItem from "./GridItem";
import './Grid.css';

class Grid extends React.Component {
    render() {
        var gridItems = []
        for (var i of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 25, 50, 75, 100]) {
            gridItems.push(<GridItem key={i} value={i} />);
        }
        return (
            <div className="grid">
                {gridItems}
            </div>
        );
    }
}
export default Grid;