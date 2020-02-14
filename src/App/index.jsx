import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from './styled';

const Homepage = lazy(() => import('../Pages/Homepage'));

function App() {
    return (
        <Router>
            <Suspense fallback={<Loading width='100%' height='100%' />}>
                <Switch>
                    <Route exact path='/' component={Homepage} />
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;
