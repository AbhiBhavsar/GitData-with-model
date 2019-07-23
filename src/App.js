import React, { PureComponent } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// random comments
import { TestComponent } from './views/TestComponent/TestComponent';

export class App extends PureComponent {
    render() {
        return (
            <Router>
                <Route exact path="/" component={TestComponent} />
            </Router>
        );
    }
}
