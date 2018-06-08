import React, { Component } from 'react';
import {csvParse} from 'd3-dsv'
import $ from 'jquery';
import Element from './Element.js';
import './App.css';

let objectKeys;

class App extends React.Component {
  //*************** Intializing ***************
  constructor(props){
    super(props)
    this.state = {
      content: [],
    }
  }

  //*************** CSV rows are stored as array of Objects ******************
  uploadFile = (event) => {
    event.preventDefault()
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.readAsText(file);
      reader.onload = (event) => {
        let csvData = event.target.result;
        let lines = csvData.split("\n").length;
        let data =  csvParse(csvData);
        console.log(data)
        objectKeys = $.map(data[0], function(value, key) {             //Headings of CSV file
				  return key;
			  });

        console.log(objectKeys)
        this.setState({
          content: data
        })
    }
  }

  render() {
    return (
    <div>
        <div className = 'header'>
          <span>CSV Parsing</span>
        </div>
        <div>
          <input type="file" name="myFile" className = 'inputFile' onChange={this.uploadFile} placeholder = 'Load File..'/>
        </div>
        <div>
          <table className = 'container'>
            <tbody>{
              this.state.content.map(function(element,i){
                return <Element key = {i} u = {element[objectKeys[0]]} v = {element[objectKeys[1]]} w = {element[objectKeys[2]]} />
              })
            }</tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default App;
