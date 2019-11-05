import React, {Component} from 'react';
import './App.css';
import Board from './components/Board';

class App extends Component {
  state = {
    lanes: [{
      id:0,
      title: "ToDo",
      issues:[
        {id:"issue1", label:"Make React Components"},
        {id:"issue2", label:"Add styling"}
      ],
      lane: 0
    },
    {
      id:1,
      title:"In Progress",
      issues: [],
      lane: 0
    },
    {
      id:2,
      title: "Review",
      issues: [],
      lane: 0
    }
  ]
  }

  render() {
    /**
   * [ {id:0, title:"", issues:[{issue}]}
   * ]
   */
    const {lanes} = this.state;
    return (
     <Board lanes={lanes}/>
    );
  }
  
}

export default App;
