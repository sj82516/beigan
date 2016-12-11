import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory,browserHistory} from "react-router";

import {Container} from "./container/container";
import {Index} from "./index/index";
import {Service} from "./service/service";
import {Scenary} from "./scenary/scenary";
import {Trans} from "./trans/trans";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main style={{"backgroundImage": "linear-gradient(-180deg, #31C5FF 4%, #00329B 95%)",
                            "height":"100%",
                            "width":"100%",
                            "overflow":"auto"
            }}>
                <Router history={browserHistory}>
                    <Route path="/" component={Container}>
                        <IndexRoute component={Index}/>
                        <Route path="scenary" component={Scenary}/>
                        <Route path="trans" component={Trans}/>
                        <Route path="service" component={Service}/>
                        <Route path="*" component={Index}/>
                    </Route>
                </Router>
            </main>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));