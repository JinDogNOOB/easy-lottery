import React from 'react';
import styled from 'styled-components';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        background: "#90caf9",
        padding: "0.7rem",
        marginTop: "0.5rem",
    },
    paper: {
      minHeight: "45rem"
        
    },
  }),
);


const Page: React.FC = ({children}) => {
    const classes = useStyles();
    return (
        <Container className={classes.root} maxWidth="xl">
            <Paper className={classes.paper} elevation={0}>
            <StyledMain>
                {children}
            </StyledMain>
            </Paper>
        </Container>
    );
}


const StyledPage = styled.div``

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: auto;
`

export default Page;