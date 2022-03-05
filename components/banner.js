import { Component } from "react";

export class Banner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<nav>
            <h1>{this.props.title}</h1>
        </nav>)
    }
}