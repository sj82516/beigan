import React from "react";

import {Nav} from "../nav/nav";

require("./container.scss");

export class Container extends React.Component {
    render() {
        return (
            <div>
                <Nav/>
                <section className="container">
                    {this.props.children}
                </section>
            </div>
        )
    }
}