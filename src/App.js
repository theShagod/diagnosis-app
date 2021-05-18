import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//components
import Navbar from './components/Navbar';
import Results from './components/Results';

//data
import data from './data.json';

class App extends Component {
  constructor(props) {
    super(props)
    this.filterData = this.filterData.bind(this);
    this.state = {
      filteredData: data,
      query: "",
      diagnosis: ""
    }
  }

  filterData(query, diagnosis) {
    this.setState({query, diagnosis})
    let filteredData = data;
    if (query != "") {
      let q = query.toLowerCase();
      function doesItemHaveQuery(item, category) {
        
        if (data[0][category] == null) {
          return false;
        }

        let regex = new RegExp(q, "g")
        if (category == "dx") { //if at the category == dx which is an array
          for (let i = 0; i < item[category].length; i++) {
            let text = item[category][i].toLowerCase();
            if (text.search(regex) != -1) {
              return true;
            }
          }
          return false;
        }
        let text = item[category].toLowerCase();
        return text.search(regex) != -1;
      }

      let dataKeys = Object.keys(data[0]);
      filteredData = data.filter(item => {
        for (let i = 0; i < dataKeys.length; i++) {
          if (doesItemHaveQuery(item, dataKeys[i])) {
            return true;
          }
        }
        return false;
      })
    }
    
    if (diagnosis) {
      filteredData = filteredData.filter(item => item.type == diagnosis)
    }

    this.setState({filteredData})
  }

  render () {
    return (
      <div>
        <Navbar onChange={this.filterData} diagnosis={this.state.diagnosis} query = {this.state.query}/>
        <Results data = {this.state.filteredData}/>
      </div>
      
    );
  }
  
}

export default App;
