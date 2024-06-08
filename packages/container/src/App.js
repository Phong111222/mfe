import React, { lazy, Suspense, useState } from 'react';

const AuthApp = lazy(() => import('./components/AuthApp'));
const MarketingApp = lazy(() => import('./components/MarketingApp'));

import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

const generatedClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generatedClassName={generatedClassName}>
        <div>
          <Header
            signedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          />
          <Suspense fallback={<div>Loading</div>}>
            <Switch>
              <Route path='/auth'>
                <AuthApp
                  onSignIn={() => setIsSignedIn(true)}
                  isSignedIn={isSignedIn}
                />
              </Route>
              <Route path='/'>
                <MarketingApp />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
