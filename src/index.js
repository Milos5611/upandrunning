import "./index.scss";
import * as ROUTES from "./common/routes";
import {Route, Router, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import React from "react";
import TagList from "./container/tagList";
import customHistory from "./common/history";
import {hot} from "react-hot-loader";
import {render} from "react-dom";
import store from "./common/store";

const App = () => {
    return (
        <Provider store={store}>
            <Router history={customHistory}>
                <div className="app-container">
                    <Switch>
                        <Route
                            exact
                            path={ROUTES.HOME}
                            component={TagList}
                        />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
};

export default hot(module)(App);
const rootEl = document.getElementById("app");
render(<App/>, rootEl);
