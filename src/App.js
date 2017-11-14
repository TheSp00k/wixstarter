import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ResultTable from './ResultTable';
import ParserForm from './ParserForm';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dataResult: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (result) {
    this.setState({dataResult: result});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CSV parser</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <ParserForm handleSubmit={this.handleSubmit.bind(this)}/>
        </div>

        <div>
          <ResultTable dataResult={this.state.dataResult}/>
        </div>
      </div>
    );
  }
}

export default App;
