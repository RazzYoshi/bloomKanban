import React, {Component} from 'react';
import './Board.css';
import Lane from './Lane';

class Board extends Component {
  /**
   * [ {id:0, title:"", issues:[{issue}]}
   * ]
   */
    
    previousLane = (issue) => {
        const {lanes} = this.props;
        const {lane:currLane} = issue;
        console.log("Lanes: ", lanes, currLane);
        console.log("Previous: ", currLane, " New: ", currLane -1);
        if (currLane.id === 0) {
            return false;
        }
        const newIssue = {...issue, lane:currLane - 1};
        lanes[currLane] = lanes[currLane].filter((is)=>is.id !== issue.id);
        lanes[currLane - 1] = lanes[currLane - 1].push(newIssue);
        return true;  
    }
    
    nextLane = (issue) => {
        const {lanes} = this.props;
        const {lane:currLane} = issue;
        if (currLane.id === lanes.length) {
            return false;
        }
        const newIssue = {...issue, lane:currLane + 1};
        lanes[currLane] = lanes[currLane].filter((is)=>is.id !== issue.id);
        lanes[currLane + 1] = lanes[currLane + 1].push(newIssue);
        return true;  
    }
    
    render() {
        const {lanes} = this.props;
        return (
        <div className="Board">
        {
            lanes.map((lane, i) => {
                return <Lane key={lane.id} id={lane.id} previousLane={this.previousLane} nextLane={this.nextLane} issues={lane.issues} />
            })
        }
        </div>
    );
  }
  
}

export default Board;
