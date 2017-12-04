import React, { Component } from 'react';
import { TableRow, TableRowColumn } from 'material-ui';


class ItemList extends Component {

	render() {
		let d = new Date(this.props.item.date * 1000);
		let nlink = "https://etherscan.io/tx/" + this.props.item.txHash.toString();
		console.log(nlink);
	//console.log(d);
  	//console.log(this.props);
	    return (
	      <TableRow className="Item">
	        <TableRowColumn width={'400px'}>{d.toString()}</TableRowColumn>
	        <TableRowColumn><a href={nlink} target="_blank">{this.props.item.txHash}</a></TableRowColumn>
	        <TableRowColumn>{this.props.item.amount}</TableRowColumn>
	        <TableRowColumn>{this.props.item.confirmed.toString()}</TableRowColumn>
	        </TableRow>
	    );
	  }
}

export default ItemList;
