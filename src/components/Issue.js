import React, {Component} from 'react';
import './Issue.css';

class Issue extends Component {
  state = {
    lane: 0
  };

  render() {
    const {previousLane, label, nextLane, issue} = this.props;
    return (
     <div className="Issue">
         <span className="issue-back" onClick={previousLane(issue)}/>
         <span className="issue-label">{label}</span>
         <span className="issue-forward" onClick={nextLane}/>
     </div>
    );
  }
  
}

export default Issue;
