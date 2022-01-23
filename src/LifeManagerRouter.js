import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './components/App';
import AssessmentTypes from './components/AssessmentTypes';
import Promis from './components/Promis';
import PraPlus from './components/PraPlus';
import HealthHistory from './components/HealthHistory';

const LifeManagerRouter = () => {
    const { store, history } = configureStore();

    return (
        <Provider store={store}>
            <ConnectedRouter history ={history}>
                <Switch>
                    <Route exact path="/healthHistory" component={HealthHistory} />
                    <Route exact path="/praPlus" component={PraPlus} />
                    <Route exact path="/promis" component={Promis} />
                    <Route exact path="/assessmentTypes" component={AssessmentTypes} />
                    <Route exact path="/" component={App} />
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
};

export default LifeManagerRouter;