import React , {Component} from 'react';
import './App.css';


class MyTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [], 
    }; 
  }
  addRow = () => {
    const {table} = this.state,
      tableLength = table.length;

    table.push(tableLength + 1);

    this.setState({
      table
    });
  }

  showRows = () => {
    const {table} = this.state,
      {deleteRow} = this;

    return table.map( (row) => (
      <tr className="row" key={row}>
        <td className="hi">{row}</td>
        <td>
        <button className="buttons minus" data-row-id={row} onClick={ (e) =>  deleteRow(e)}>
          <span>-</span>
        </button>
       </td>
      </tr>
     ));
  }


  deleteRow = (e) => {
    const {table} = this.state,
      btn = e.currentTarget,
      rowId = parseInt(btn.getAttribute('data-row-id')),
      changedTable = table.filter( (row) => row !== rowId);
      console.log(rowId)
    this.setState({table: changedTable});
  }

  render() {
    return (
     <table className="content">
       <tbody>
      <tr>
        <td>
        <button
        className="plus buttons"
        onClick={this.addRow}>
         <span>+</span>
        </button>
       </td>
       </tr>
       {this.showRows()}      
      </tbody>
     </table> 
    )
  }
}

export default MyTable;