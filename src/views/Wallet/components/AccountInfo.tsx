import React from 'react';
import styeld from 'styled-components';

import useAccount from '../../../hooks/useAccount';
import useBalance from '../../../hooks/useBalance';


import TextField from '@material-ui/core/TextField';
import useWallet from '../../../hooks/useWallet';


import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  

const AccountInfo: React.FC = () => {
    const {address, balance} = useWallet();
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">


          <TableBody>
            <TableRow>
                <TableCell component="th" scope="row">
                  {"Address"}
                </TableCell>
                <TableCell align="right">{address}</TableCell>
            </TableRow>

            <TableRow>
                <TableCell component="th" scope="row">
                  {"Balance"}
                </TableCell>
                <TableCell align="right">{balance?.toString()}</TableCell>
            </TableRow>
          </TableBody>


        </Table>
      </TableContainer>
        
        
    );
}

{/* <StyledAccountInfo>
            <div>
                {address}
            </div>

           <div>
               {balance?.toString()}
           </div>



        </StyledAccountInfo> */}

const StyledAccountInfo = styeld.div`

`

export default AccountInfo;