import React, {useEffect} from 'react';
import useWeb3 from '../../hooks/useWeb3';
import useOnSetWeb3 from '../../hooks/useOnSetWeb3';

import Button from '@material-ui/core/Button';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      
    },
    menuButton: {
      marginRight:"10%",
    },
    text: {
        background: "#ffb74d",
      color: "white",
      fontSize: "1.0rem",
    },

  }),
);

const WalletSelector: React.FC = () => {
    const web3 = useWeb3();
    const onConnectWeb3 = useOnSetWeb3();
    const classes = useStyles();
    
    return (
        <div>
            {web3?(
                <Button className={classes.text}>Connected</Button>
            ):(
                <Button className={classes.text} onClick={onConnectWeb3}>Connect Wallet</Button>
            )}
        </div>
        
    )
    
}

export default WalletSelector;