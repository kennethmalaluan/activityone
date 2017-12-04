import React, { Component } from 'react';
import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Items from './Components/Items';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      items:[]
    }
  }

  getItems(){
    $.ajax({
      url: 'https://api.nanopool.org/v1/eth/payments/0x2bedd2529f550c2cc2146633c738cbb7945adaef',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({items: data}, function(){
          console.log(this.state)
        })
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    })
  }

  componentDidMount(){
   this.getItems();
  }

  componetWillMount(){
    this.getItems();
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBar title="Activity 1" />
          <Items items={this.state.items.data} />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
