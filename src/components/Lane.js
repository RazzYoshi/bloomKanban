import React, {Component} from 'react';
import './Lane.css';
import Issue from './Issue';

class Lane extends Component {
    /**
     * [   {id:"", label:""}
     * ]
     */
    render() {
        const {issues, previousLane, nextLane} = this.props;
        return (
        <div className="Lane">
            {
                issues.map((issue)=>{
                    return <Issue key={issue.id} id={issue.id} {...issue} issue={issue} previousLane={previousLane} nextLane={nextLane} />
                })
            }
        </div>
        );
  }
  
}

export default Lane;
