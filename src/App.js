import React , {Component} from 'react';
import './App.css';

const Row = ({ onDelete, text }) => (
  <tr className="row" key={Math.random()}>
    <td className="hi">{text}</td>
    <td>
    <button className="buttons minus" onClick={onDelete}>
      <span>-</span>
    </button>
   </td>
  </tr>
);

const MyTable = () => {
  const [rows, setRows] = React.useState([]);

  const addRow = text => addRow(text);
  const deleteRow = index => () => setRows(
    rows.filter((row, index) => index !== index) 
  );

  return (
    <table>
      <tbody>
        <tr>
          <td>
           <button
             className="plus buttons"
             onClick={this.addRow}
            >
              <span>+</span>
           </button>
         </td>
         </tr>
         <tr>
           {
             rows.map(
               (row, index) => (
                 <Row onDelete={deleteRow(index)} text={row} /> 
               )
             )
           }
         </tr>
      </tbody>
    </table>
  ); 
};

export default MyTable;
