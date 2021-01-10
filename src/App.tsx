import React, {useCallback, useEffect, useState} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import TopBar from './components/TopBar'

import Web3Provider from './contexts/Web3Provider';


function App() {
  return (
    <Providers>
      <BrowserRouter>
        <TopBar />
        <Switch>
          <Route path="/" exact>
              
          </Route>
          <Route path="/lottery" exact>
    
          </Route>
          <Route path="/wallet" exact>
    
          </Route>
          <Route path="/law" exact>
    
          </Route>

        </Switch>

      </BrowserRouter>
    </Providers>
  );
}

const Providers: React.FC = ({children}) => {
  return (
    <Web3Provider>
      {children}
    </Web3Provider>
  )
}

export default App;
