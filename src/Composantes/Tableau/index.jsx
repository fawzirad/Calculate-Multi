import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const Tableau = (props) => {
const classes = useStyles();
const myData = [0,1,2,3,4,5,6,7,8,9,]

  return props.givnum? (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
            {myData.map (item=> <TableCell align="center">{item}</TableCell>)}
        </TableHead>

        <TableBody>
           {myData.map (item=> <TableCell align="center">{item*props.givnum}</TableCell>)}
        </TableBody>
      </Table>
    </TableContainer>
  ):null;

}

export default Tableau;