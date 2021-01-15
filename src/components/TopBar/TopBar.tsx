import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import Logo from './components/Logo';
import Nav from './components/Nav'
import WalletSelector from '../WalletSelector';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      
    },
    menuButton: {
      marginRight:"10%",
    },
    title: {
      flexGrow: 1,
    },
    test: {
        background: "red",
    }
  }),
);

const TopBar: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();


    return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container maxWidth="lg">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Logo title="Easy Lottery" onClick={()=>{history.push('/')}}/>
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            <Nav />
          </Typography>

          {/* <Button color="inherit" className={classes.title} >Login</Button> */}
          <WalletSelector />
        </Toolbar>
        </Container>
      </AppBar>
    </div>

    );
}

const TopBarContainer = styled.div`
display: flex;
justify-content: space-between;

margin: 0 auto;
max-width: 1200px;
width : 100%;
`




export default TopBar;