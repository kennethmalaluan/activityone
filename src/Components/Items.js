import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import ItemList from './ItemList';

class Items extends Component {


  render() {
  	let itemLists;
  	if(this.props.items){
  		itemLists = this.props.items.map(item => {
  			return (
  				<ItemList key={item.txHash} item={item} />
  				);
  		});
  	}
    return (
      <div className="Items">
        <MuiThemeProvider>
          <Paper zDepth={2}>
            <Table>
              <TableHeader displaySelectAll={ false }>
                <TableHeaderColumn width={'400px'}>Date</TableHeaderColumn>
	    	        <TableHeaderColumn>txHash</TableHeaderColumn>
                <TableHeaderColumn>Amount</TableHeaderColumn>
                <TableHeaderColumn>Confirmed</TableHeaderColumn>
              </TableHeader>

              <TableBody>     
        		    {itemLists}
              </TableBody>
            </Table>
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Items;
