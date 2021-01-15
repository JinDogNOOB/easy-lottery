import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      
    },
    menuButton: {
      marginRight:"10%",
    },
    text: {
        background: "#1976d2",
      color: "white",
      fontSize: "1.2rem",
    },

  }),
);


const Nav: React.FC = () => {
    const history = useHistory();
    const classes = useStyles();

    return (

        <ButtonGroup  size="large" aria-label="small outlined button group">
            <Button className={classes.text} onClick={() => { history.push('/') }}>Home</Button>
            <Button className={classes.text} onClick={() => { history.push('/lottery') }}>Lottery</Button>
            <Button className={classes.text} onClick={() => { history.push('/wallet') }}>Wallet</Button>
            <Button className={classes.text} onClick={() => { history.push('/law') }}>Law</Button>
        </ButtonGroup>
    )
}



export default Nav;
